import React, { useRef, useEffect, useCallback } from 'react';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const rng = (v: number, lo: number, hi: number) => clamp((v - lo) / (hi - lo), 0, 1);
const ease = (t: number): number => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
const easeOut = (t: number): number => 1 - (1 - t) * (1 - t);

const BG_DARK = '#0D0D0D';
const BG_CREAM = '#F7F4F0';

interface IconDef {
  emoji: string; bg: string; textColor: string;
  heroLeft: number; heroTop: number;
  mobileLeft: number; mobileTop: number;
  phase: number; floatAmp: number; floatDur: number; rotAmp: number;
  absStart: number;
}

const ICONS: IconDef[] = [
  {
    emoji: '📅', bg: '#E0EDFE', textColor: '#1A5CB8',
    heroLeft: 20, heroTop: 30, mobileLeft: 26, mobileTop: 26,
    phase: 0.00, floatAmp: 5, floatDur: 6.8, rotAmp: 2.5, absStart: 0.70
  },
  {
    emoji: '🔔', bg: '#FEF0DC', textColor: '#B45309',
    heroLeft: 12, heroTop: 52, mobileLeft: 9, mobileTop: 40,
    phase: 1.15, floatAmp: 5, floatDur: 5.8, rotAmp: 3.0, absStart: 0.72
  },
  {
    emoji: '💳', bg: '#DFFBEA', textColor: '#15803D',
    heroLeft: 22, heroTop: 68, mobileLeft: 9, mobileTop: 54,
    phase: 2.30, floatAmp: 5, floatDur: 7.4, rotAmp: 2.5, absStart: 0.74
  },
  {
    emoji: '👤', bg: '#F0E8FF', textColor: '#6B21A8',
    heroLeft: 36, heroTop: 78, mobileLeft: 26, mobileTop: 68,
    phase: 0.70, floatAmp: 5, floatDur: 6.2, rotAmp: 2.5, absStart: 0.76
  },

  {
    emoji: '📊', bg: '#DDFBF4', textColor: '#0F766E',
    heroLeft: 82, heroTop: 22, mobileLeft: 74, mobileTop: 26,
    phase: 1.90, floatAmp: 5, floatDur: 7.0, rotAmp: 2.5, absStart: 0.78
  },
  {
    emoji: '✉️', bg: '#FEFCE8', textColor: '#92400E',
    heroLeft: 86, heroTop: 44, mobileLeft: 91, mobileTop: 40,
    phase: 3.10, floatAmp: 5, floatDur: 5.4, rotAmp: 3.0, absStart: 0.80
  },
  {
    emoji: '⭐', bg: '#FEE8F4', textColor: '#9D174D',
    heroLeft: 80, heroTop: 63, mobileLeft: 91, mobileTop: 54,
    phase: 0.45, floatAmp: 5, floatDur: 6.4, rotAmp: 2.5, absStart: 0.82
  },
  {
    emoji: '🕐', bg: '#EBF0FF', textColor: '#4338CA',
    heroLeft: 64, heroTop: 78, mobileLeft: 74, mobileTop: 68,
    phase: 2.60, floatAmp: 5, floatDur: 7.0, rotAmp: 2.5, absStart: 0.84
  },
];


const N = ICONS.length;

const SideBtn: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div style={{
    position: 'absolute', width: '3px',
    background: 'linear-gradient(180deg,#D0D0D0 0%,#A8A8A8 50%,#C0C0C0 100%)',
    borderRadius: '2px',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.15)',
    ...style,
  }} />
);

export const ScrollNarrative: React.FC<{ onJoin?: () => void }> = ({ onJoin }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgDarkRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const s2LeftRef = useRef<HTMLDivElement>(null);
  const s2RightRef = useRef<HTMLDivElement>(null);
  const s2ToggleRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Array<HTMLDivElement | null>>(Array(N).fill(null));
  const hoverMul = useRef<number[]>(Array(N).fill(1.0));
  const hoverTarget = useRef<number[]>(Array(N).fill(1.0));

  const scrollToEnd = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const scrollH = container.offsetHeight - window.innerHeight;
    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    const target = containerTop + scrollH;
    const start = window.scrollY;
    const distance = target - start;
    const duration = 2200;
    let startTime: number | null = null;
    const easeInOut = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      window.scrollTo(0, start + distance * easeInOut(progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    let rafId: number;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      if (heroRef.current) heroRef.current.style.opacity = '1';
      ICONS.forEach((_, i) => { const el = iconRefs.current[i]; if (el) el.style.opacity = '0'; });
      return;
    }

    const frame = (ts: number) => {
      const container = containerRef.current;
      if (!container) { rafId = requestAnimationFrame(frame); return; }

      const rect = container.getBoundingClientRect();
      const scrollH = container.offsetHeight - window.innerHeight;
      const p = clamp(-rect.top / Math.max(scrollH, 1), 0, 1);
      const t = ts / 1000;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const isMobile = vw < 640;
      const isTablet = vw >= 640 && vw < 1024;

      // ── Phone ─────────────────────────────────────────────────────────────
      const heroOffY = isMobile
        ? vh * 0.56 + 100
        : isTablet ? vh * 0.38 + 140
          : vh * 0.42 + 200;
      const scaleP = ease(rng(p, 0.45, 0.82));
      const phoneOffY = lerp(heroOffY, 0, scaleP);
      const phoneScFrom = isMobile ? 1.0 : isTablet ? 1.1 : 1.3;
      const phoneSc = lerp(phoneScFrom, 1.0, scaleP);
      const phoneW_css = isMobile
        ? Math.min(vw * 0.80, 290)
        : isTablet ? Math.min(vw * 0.44, 270) : 280;
      const phoneTiltX = lerp(isMobile ? 0 : 7, 0, scaleP);

      if (phoneRef.current) {
        const phoneW = phoneRef.current.offsetWidth;
        const phoneH = phoneRef.current.offsetHeight;
        phoneRef.current.style.width = `${phoneW_css}px`;
        phoneRef.current.style.left = `${vw / 2 - phoneW / 2}px`;
        phoneRef.current.style.top = `${vh / 2 - phoneH / 2}px`;
        phoneRef.current.style.transform = `translateY(${phoneOffY}px) scale(${phoneSc}) perspective(900px) rotateX(${phoneTiltX.toFixed(2)}deg)`;
      }

      // ── BG dark ───────────────────────────────────────────────────────────
      if (bgDarkRef.current) {
        const r = lerp(0, 150, ease(rng(p, 0.26, 0.62)));
        bgDarkRef.current.style.clipPath = `circle(${r.toFixed(2)}% at 50% 50%)`;
      }

      // ── Glow (pulse lors des absorptions) ────────────────────────────────
      if (glowRef.current) {
        const gp = ease(rng(p, 0.45, 0.80));
        const absProgress = ICONS.reduce((s, icon) => s + easeOut(rng(p, icon.absStart, 0.97)), 0) / N;
        const glowVal = clamp(lerp(0.10, 0.50, gp) + absProgress * 0.12, 0, 0.62);
        const alpha = glowVal.toFixed(3);
        glowRef.current.style.opacity = String(glowVal);
        glowRef.current.style.background = `radial-gradient(circle, rgba(235,94,157,${alpha}) 0%, transparent 68%)`;
      }

      // ── Overlay / Bento ───────────────────────────────────────────────────
      if (overlayRef.current)
        overlayRef.current.style.opacity = String(1 - ease(rng(p, 0.70, 0.94)));
      if (bentoRef.current) {
        const bp = ease(rng(p, 0.74, 0.96));
        bentoRef.current.style.opacity = String(bp);
        bentoRef.current.style.transform = `scale(${lerp(0.96, 1.0, bp)})`;
      }

      // ── Hero (fade + translate + léger scale-down) ────────────────────────
      if (heroRef.current) {
        const hp = ease(rng(p, 0.12, 0.38));
        heroRef.current.style.opacity = String(1 - hp);
        heroRef.current.style.transform = `translateY(${lerp(0, -56, hp)}px) scale(${lerp(1, 0.94, hp)})`;
      }

      // ── S2 textes (slide X + léger slide Y) ──────────────────────────────
      if (s2LeftRef.current) {
        const lp = ease(rng(p, 0.38, 0.68));
        s2LeftRef.current.style.opacity = String(lp);
        s2LeftRef.current.style.transform = `translateY(calc(-50% + ${lerp(14, 0, lp)}px)) translateX(${lerp(-44, 0, lp)}px)`;
      }
      if (s2RightRef.current) {
        const rp = ease(rng(p, 0.52, 0.80));
        s2RightRef.current.style.opacity = String(rp);
        s2RightRef.current.style.transform = `translateY(calc(-50% + ${lerp(14, 0, rp)}px)) translateX(${lerp(44, 0, rp)}px)`;
      }
      if (s2ToggleRef.current)
        s2ToggleRef.current.style.opacity = String(ease(rng(p, 0.72, 0.90)));

      // ── Scroll cue : adapte sa couleur au fond ────────────────────────────
      if (scrollCueRef.current) {
        const bgDark = ease(rng(p, 0.26, 0.50));
        const cueFade = 1 - ease(rng(p, 0.50, 0.70));
        const r = Math.round(lerp(0, 235, bgDark));
        const g = Math.round(lerp(0, 94, bgDark));
        const b = Math.round(lerp(0, 157, bgDark));
        const clr = `rgb(${r},${g},${b})`;
        scrollCueRef.current.style.opacity = String(cueFade * 0.75);
        scrollCueRef.current.querySelectorAll<SVGPathElement>('path').forEach(el => el.setAttribute('stroke', clr));
        const span = scrollCueRef.current.querySelector<HTMLSpanElement>('span');
        if (span) span.style.color = clr;
      }

      // ── Icons ─────────────────────────────────────────────────────────────
      const floatDecay = ease(rng(p, 0.55, 0.78));
      const phoneCenterX = vw * 0.5;
      const phoneCenterY = vh * 0.5 + phoneOffY;
      const easeIn3 = (t: number) => t * t * t;

      ICONS.forEach((icon, i) => {
        const el = iconRefs.current[i];
        if (!el) return;

        const floatAmp = lerp(icon.floatAmp, 0, floatDecay);
        const freq = (2 * Math.PI) / icon.floatDur;
        const ap = easeOut(rng(p, icon.absStart, 0.97));
        hoverMul.current[i] = lerp(hoverMul.current[i], ap > 0.05 ? 1.0 : hoverTarget.current[i], 0.18);

        const alive = 1 - ap;
        const fY = Math.sin(t * freq + icon.phase) * floatAmp * alive;
        const fX = Math.cos(t * freq * 0.73 + icon.phase) * floatAmp * 0.32 * alive;

        const rawLeft = (isMobile ? icon.mobileLeft : icon.heroLeft) / 100;
        const rawTop = (isMobile ? icon.mobileTop : icon.heroTop) / 100;

        const prePull = ease(rng(p, 0.62, icon.absStart));
        const gravX = (phoneCenterX - rawLeft * vw) * 0.14 * prePull;
        const gravY = (phoneCenterY - rawTop * vh) * 0.14 * prePull;

        const floatRot = Math.sin(t * freq * 0.85 + icon.phase + 1.2) * icon.rotAmp * alive;

        const spinDir = i % 2 === 0 ? 1 : -1;
        const spinDeg = easeIn3(ap) * 500 * spinDir;
        const totalRot = floatRot + spinDeg;

        // ── Scale : gonfle à ap=0.20, puis s'effondre ────────────────────
        let sc: number;
        if (ap < 0.20) {
          sc = lerp(1.0, 1.12, ap / 0.20);
        } else {
          sc = lerp(1.12, 0, (ap - 0.20) / 0.80);
        }
        sc *= hoverMul.current[i];

        // ── Opacity : stable, puis disparition rapide avec ease ──────────
        const opacity = ap < 0.58 ? 1 : lerp(1, 0, ease((ap - 0.58) / 0.42));

        // ── Arc parabolique sur tous les écrans ──────────────────────────
        const arcAmp = isMobile ? -55 : -28;
        const arcOffY = Math.sin(ap * Math.PI) * arcAmp;

        // ── Motion blur sur tous les écrans ─────────────────────────────
        const blurMax = isMobile ? 8 : 3.5;
        const blurPx = (ease(rng(ap, 0.35, 1.0)) * blurMax).toFixed(1);

        el.style.left = `${lerp(rawLeft * vw + fX + gravX, phoneCenterX, ap)}px`;
        el.style.top = `${lerp(rawTop * vh + fY + gravY, phoneCenterY, ap) + arcOffY}px`;
        el.style.transform = `translate(-50%,-50%) scale(${sc.toFixed(4)}) rotate(${totalRot.toFixed(2)}deg)`;
        el.style.opacity = String(opacity.toFixed(4));
        el.style.filter = `blur(${blurPx}px)`;
        el.style.pointerEvents = ap > 0.05 ? 'none' : 'auto';
      });

      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '300vh', position: 'relative' }}>
      <div className="sticky top-0 overflow-hidden" style={{ height: '100dvh' }}>

        <div className="absolute inset-0" style={{ background: BG_CREAM }} />
        <div ref={bgDarkRef} className="absolute inset-0"
          style={{ background: BG_DARK, clipPath: 'circle(0% at 50% 50%)' }} />

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div
          ref={heroRef}
          className="absolute inset-x-0 top-0 z-20 flex flex-col items-center text-center px-6 hero-narrative"
          style={{ pointerEvents: 'none' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: '12px' }}>
            <span style={{ fontSize: '10px', color: '#eb5e9d' }}>✦</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#444', letterSpacing: '0.04em', fontFamily: "'Inter', sans-serif" }}>Rejoignez-nous</span>
          </div>

          <h1 className="font-serif-elegant italic"
            style={{ fontSize: 'clamp(3rem, 9.5vw, 5.2rem)', lineHeight: 1.07, letterSpacing: '-0.022em', color: '#111', marginBottom: 'clamp(6px, 1dvh, 10px)', maxWidth: '820px' }}>
            <span style={{ display: 'block' }}>Vos clientes.</span>
            <span style={{ display: 'block' }}>Votre planning.</span>
            <span style={{ display: 'block', color: '#eb5e9d' }}>Votre liberté.</span>
          </h1>

          <p style={{ fontSize: 'clamp(0.90rem, 2.2vw, 0.96rem)', color: 'rgba(0,0,0,0.42)', fontWeight: 400, lineHeight: 1.65, maxWidth: '360px', marginBottom: 'clamp(12px, 2dvh, 18px)', fontFamily: "'Inter', sans-serif" }}>
            La plateforme tout-en-un pensée pour les prothésistes ongulaires
          </p>

          <button
            onClick={onJoin}
            style={{ pointerEvents: 'auto', display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '13px 28px', borderRadius: '999px', background: '#eb5e9d', color: '#fff', fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.01em', fontFamily: "'Inter', sans-serif", border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(235,94,157,0.38)', transition: 'transform 200ms, box-shadow 200ms' }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 22px rgba(235,94,157,0.46)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 14px rgba(235,94,157,0.38)'; }}
          >
            Commencer gratuitement
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>

        {/* ── S2 Left ───────────────────────────────────────────────────────── */}
        <div ref={s2LeftRef} className="absolute z-20 hidden md:flex flex-col justify-center"
          style={{ top: '50%', right: 'calc(50% + 152px)', width: 'clamp(160px, 18vw, 272px)', opacity: 0, transform: 'translateY(-50%) translateX(-44px)' }}>
          <h2 className="font-serif-elegant italic"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 2.2rem)', fontWeight: 700, lineHeight: 1.14, letterSpacing: '-0.018em', color: '#fff' }}>
            Votre assistant<br />de gestion,<br /><span style={{ color: '#eb5e9d' }}>disponible 24h/24.</span>
          </h2>
          <div style={{ width: '32px', height: '2px', background: '#eb5e9d', borderRadius: '999px', marginTop: '18px', opacity: 0.7 }} />
        </div>

        {/* ── S2 Right ──────────────────────────────────────────────────────── */}
        <div ref={s2RightRef} className="absolute z-20 hidden md:flex flex-col justify-center"
          style={{ top: '50%', left: 'calc(50% + 152px)', width: 'clamp(140px, 17vw, 255px)', opacity: 0, transform: 'translateY(-50%) translateX(44px)' }}>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.52)', fontFamily: "'Inter', sans-serif" }}>
            Vos clientes réservent en ligne, vos rappels partent automatiquement, vos factures se génèrent seules.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'rgba(235,94,157,0.90)', fontWeight: 500, marginTop: '12px', fontFamily: "'Inter', sans-serif" }}>
            Vous, vous vous concentrez sur vos poses.
          </p>
        </div>

        {/* ── S2 Mobile ─────────────────────────────────────────────────────── */}
        <div ref={s2ToggleRef} className="absolute z-20 md:hidden inset-x-0 text-center px-10"
          style={{ bottom: 'calc(52px + env(safe-area-inset-bottom, 0px))', opacity: 0 }}>
          <h2 className="font-serif-elegant italic"
            style={{ fontSize: 'clamp(1.2rem, 5.5vw, 1.75rem)', fontWeight: 700, color: '#fff', lineHeight: 1.18, marginBottom: '6px' }}>
            Disponible <span style={{ color: '#eb5e9d' }}>24h/24.</span>
          </h2>
          <p style={{ fontSize: 'clamp(0.76rem, 3.2vw, 0.88rem)', color: 'rgba(255,255,255,0.48)', lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
            Réservations, rappels, factures — tout en automatique.
          </p>
        </div>

        {/* ── iPhone mockup ─────────────────────────────────────────────────── */}
        <div ref={phoneRef} className="absolute z-10 will-change-transform" style={{ width: 'min(280px, 48vw)' }}>

          <div ref={glowRef} style={{ position: 'absolute', inset: '-80px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(235,94,157,0.1) 0%, transparent 68%)', filter: 'blur(24px)', opacity: 0.10, zIndex: -1, pointerEvents: 'none' }} />

          <div style={{
            position: 'relative', width: '100%', aspectRatio: '393 / 852',
            borderRadius: 'clamp(34px, 12.5vw, 50px)',
            background: 'linear-gradient(160deg, #E8E8E8 0%, #9E9E9E 35%, #BEBEBE 65%, #D8D8D8 100%)',
            boxShadow: `
              inset 0 0 0 1px rgba(255,255,255,0.55),
              inset 0 0 0 2.5px rgba(0,0,0,0.10),
              0 50px 120px rgba(0,0,0,0.45),
              0 14px 30px rgba(0,0,0,0.25)
            `,
          }}>
            <div style={{
              position: 'absolute',
              top: '1.5%', left: '2.4%', right: '2.4%', bottom: '1.5%',
              borderRadius: 'clamp(28px, 10.5vw, 42px)',
              background: '#050505',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '2%', left: '50%', transform: 'translateX(-50%)', width: '30%', height: '2.8%', background: '#000', borderRadius: '999px', zIndex: 100, boxShadow: '0 0 0 1px rgba(80,80,80,0.35)' }} />

              <div ref={bentoRef} style={{ position: 'absolute', inset: 0, opacity: 0, zIndex: 44, transformOrigin: 'center center', backgroundImage: "url('/dashboard_final_v2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat' }} />

              <div ref={overlayRef} style={{ position: 'absolute', inset: 0, zIndex: 45, pointerEvents: 'none', overflow: 'hidden' }}>
                <img src="/onboard.jpg" alt="" aria-hidden="true" loading="eager" decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              </div>
            </div>

            <SideBtn style={{ left: '-2px', top: '11%', height: '3.5%', borderRadius: '2px 0 0 2px' }} />
            <SideBtn style={{ left: '-2px', top: '18%', height: '6%', borderRadius: '2px 0 0 2px' }} />
            <SideBtn style={{ left: '-2px', top: '26%', height: '6%', borderRadius: '2px 0 0 2px' }} />
            <SideBtn style={{ right: '-2px', top: '21%', height: '10%', borderRadius: '0 2px 2px 0' }} />
            <SideBtn style={{ right: '-2px', top: '39%', height: '4.5%', borderRadius: '0 2px 2px 0' }} />
          </div>
        </div>

        {/* ── Feature icons ─────────────────────────────────────────────────── */}
        {ICONS.map((icon, i) => (
          <div
            key={i}
            ref={el => { iconRefs.current[i] = el; }}
            className="absolute z-30 will-change-transform"
            style={{ left: `${icon.heroLeft}%`, top: `${icon.heroTop}%`, transform: 'translate(-50%,-50%)', cursor: 'default', pointerEvents: 'auto' }}
            onMouseEnter={() => { hoverTarget.current[i] = 1.08; }}
            onMouseLeave={() => { hoverTarget.current[i] = 1.0; }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
              <div style={{
                width: 'clamp(54px, 14vw, 64px)',
                height: 'clamp(54px, 14vw, 64px)',
                borderRadius: 'clamp(14px, 2vw, 17px)',
                background: icon.bg,
                border: '1px solid rgba(255,255,255,0.90)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                userSelect: 'none',
              }}>
                <span style={{ fontSize: 'clamp(25px, 7vw, 30px)', lineHeight: 1 }}>
                  {icon.emoji}</span>
              </div>
            </div>
          </div>
        ))}

        {/* ── Scroll cue ────────────────────────────────────────────────────── */}
        <div
          ref={scrollCueRef}
          onClick={scrollToEnd}
          style={{ position: 'absolute', bottom: 'calc(20px + env(safe-area-inset-bottom, 0px))', left: '50%', transform: 'translateX(-50%)', zIndex: 25, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', opacity: 0.75, cursor: 'pointer', userSelect: 'none' }}
        >
          <span style={{ fontSize: '9px', letterSpacing: '0.14em', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>SCROLL</span>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ animation: 'scrollCue 2.2s ease-in-out infinite' }}>
            <path d="M1 1l7 7 7-7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

      </div>

      <style>{`
        @media (max-width: 639px) {
          .hero-narrative {
            top: 0 !important;
            bottom: 22% !important;
            padding-top: max(80px, env(safe-area-inset-top, 20px)) !important;
            justify-content: center !important;
          }
        }
        @media (min-width: 640px) {
          .hero-narrative {
            padding-top: max(clamp(72px, 12dvh, 130px), calc(clamp(52px, 9dvh, 110px) + env(safe-area-inset-top, 0px)));
          }
        }
        @keyframes scrollCue {
          0%, 100% { transform: translateY(0);   opacity: 1; }
          50%       { transform: translateY(5px); opacity: 0.55; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes scrollCue { from {} to {} }
        }
      `}</style>
    </div>
  );
};
