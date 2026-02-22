import React, { useRef, useEffect, useState, useMemo, memo } from 'react';

// ── Hooks ──────────────────────────────────────────────────────────────────────
function useVisible(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useBreakpoint() {
  const get = () => {
    if (typeof window === 'undefined') return 'desktop' as const;
    const w = window.innerWidth;
    return w < 640 ? 'mobile' as const : w < 1024 ? 'tablet' as const : 'desktop' as const;
  };
  const [bp, setBp] = useState(get);
  useEffect(() => {
    const fn = () => setBp(get());
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);
  return bp;
}

// ── Arrow ─────────────────────────────────────────────────────────────────────
const Arrow = memo(({ dark = false }: { dark?: boolean }) => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path
      d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
      stroke={dark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.28)'}
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
));

// ── Static data (module-level = jamais recréé) ─────────────────────────────────
const AGENDA_SLOTS = [
  { time: '10h30', name: 'Sophie M.',  service: 'Gel couleur',  color: '#E0EDFE', dot: '#1A5CB8' },
  { time: '13h00', name: 'Léa D.',     service: 'Pose résine',  color: '#FDE8F0', dot: '#eb5e9d' },
  { time: '15h30', name: 'Marie F.',   service: 'Remplissage',  color: '#DFFBEA', dot: '#15803D' },
] as const;

const STAT_BARS = [44, 58, 52, 69, 76, 95, 82] as const;

const CLIENTS = [
  { i: 'SM', name: 'Sophie M.', service: 'Gel couleur · 60 €',  date: 'Hier',      c: '#eb5e9d' },
  { i: 'LD', name: 'Léa D.',    service: 'Pose résine · 75 €',  date: 'Il y a 3j', c: '#6B21A8' },
  { i: 'MF', name: 'Marie F.',  service: 'Remplissage · 35 €',  date: 'Il y a 5j', c: '#1A5CB8' },
] as const;

// ── Mini UIs — memo : ne re-rendent jamais ────────────────────────────────────
const NotifPreview = memo(() => (
  <div style={{ marginTop: '14px', background: '#F9F9F9', borderRadius: '14px', padding: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
      <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: '#FEF0DC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>🔔</div>
      <div style={{ fontSize: '10px', fontWeight: 700, color: '#111', fontFamily: 'Inter,sans-serif' }}>Rappel envoyé — il y a 2 min</div>
      <div style={{ marginLeft: 'auto', fontSize: '9px', color: '#10B981', fontWeight: 600, fontFamily: 'Inter,sans-serif' }}>✓✓</div>
    </div>
    <div style={{ background: '#fff', borderRadius: '9px', padding: '9px 11px', border: '1px solid rgba(0,0,0,0.05)' }}>
      <p style={{ fontSize: '10.5px', color: '#444', fontFamily: 'Inter,sans-serif', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>
        "Bonjour Sophie 👋 Rappel RDV demain 10h30. Répondez O pour confirmer."
      </p>
    </div>
    <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
      {[{ v: '98%', l: 'Taux livraison', pink: false }, { v: '0', l: 'No-show ce mois', pink: true }].map((s, i) => (
        <div key={i} style={{ flex: 1, background: '#fff', borderRadius: '8px', padding: '6px 8px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '13px', fontWeight: 900, color: s.pink ? '#eb5e9d' : '#111', fontFamily: 'Inter,sans-serif', lineHeight: 1 }}>{s.v}</div>
          <div style={{ fontSize: '8px', color: 'rgba(0,0,0,0.35)', fontFamily: 'Inter,sans-serif', marginTop: '1px' }}>{s.l}</div>
        </div>
      ))}
    </div>
  </div>
));

const PaymentPreview = memo(() => (
  <div style={{ marginTop: '14px' }}>
    <div style={{ background: '#DFFBEA', borderRadius: '14px', padding: '14px 16px', border: '1px solid rgba(21,128,61,0.10)', marginBottom: '8px' }}>
      <div style={{ fontSize: '9px', fontWeight: 700, color: '#15803D', letterSpacing: '0.08em', fontFamily: 'Inter,sans-serif', marginBottom: '4px' }}>ACOMPTE REÇU</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
        <span style={{ fontSize: '28px', fontWeight: 900, color: '#15803D', letterSpacing: '-0.04em', fontFamily: 'Inter,sans-serif', lineHeight: 1 }}>15,00 €</span>
        <span style={{ fontSize: '10px', color: 'rgba(21,128,61,0.55)', fontFamily: 'Inter,sans-serif' }}>Visa ····4242</span>
      </div>
    </div>
    <div style={{ display: 'flex', gap: '6px' }}>
      {[{ v: '0 €', l: 'Impayé', c: '#eb5e9d' }, { v: '100%', l: 'Sécurisé', c: '#111' }].map((s, i) => (
        <div key={i} style={{ flex: 1, background: '#fff', borderRadius: '10px', padding: '8px 10px', border: '1px solid rgba(0,0,0,0.055)', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 900, color: s.c, fontFamily: 'Inter,sans-serif', lineHeight: 1 }}>{s.v}</div>
          <div style={{ fontSize: '9px', color: 'rgba(0,0,0,0.35)', fontFamily: 'Inter,sans-serif', marginTop: '2px' }}>{s.l}</div>
        </div>
      ))}
    </div>
  </div>
));

const SMSPreview = memo(() => (
  <div style={{ marginTop: '14px', background: '#FEFCE8', borderRadius: '14px', padding: '13px', border: '1px solid rgba(146,64,14,0.08)' }}>
    <div style={{ fontSize: '9px', fontWeight: 700, color: '#92400E', letterSpacing: '0.07em', fontFamily: 'Inter,sans-serif', marginBottom: '7px' }}>✉️  CAMPAGNE ENVOYÉE</div>
    <p style={{ fontSize: '11px', color: '#555', fontFamily: 'Inter,sans-serif', lineHeight: 1.55, margin: '0 0 10px', fontStyle: 'italic' }}>
      "✨ Nouveau vernis semi-permanent. Cette semaine -10% pour toi →"
    </p>
    <div style={{ display: 'flex', gap: '6px' }}>
      {[{ v: '24', l: 'Envoyés', pink: false }, { v: '8', l: 'Réponses', pink: true }, { v: '33%', l: 'Taux retour', pink: false }].map((s, i) => (
        <div key={i} style={{ flex: 1, background: '#fff', borderRadius: '8px', padding: '7px 6px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '14px', fontWeight: 900, color: s.pink ? '#eb5e9d' : '#111', fontFamily: 'Inter,sans-serif', lineHeight: 1 }}>{s.v}</div>
          <div style={{ fontSize: '8px', color: 'rgba(0,0,0,0.35)', fontFamily: 'Inter,sans-serif', marginTop: '2px' }}>{s.l}</div>
        </div>
      ))}
    </div>
  </div>
));

const ClientList = memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginTop: '14px' }}>
    {CLIENTS.map((c, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', borderRadius: '13px', padding: '9px 12px', border: '1px solid rgba(235,94,157,0.09)' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: c.c, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#fff', fontFamily: 'Inter,sans-serif' }}>{c.i}</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#111', fontFamily: 'Inter,sans-serif' }}>{c.name}</div>
          <div style={{ fontSize: '10px', color: 'rgba(0,0,0,0.38)', fontFamily: 'Inter,sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.service}</div>
        </div>
        <span style={{ fontSize: '9px', color: 'rgba(0,0,0,0.28)', fontFamily: 'Inter,sans-serif', flexShrink: 0 }}>{c.date}</span>
      </div>
    ))}
  </div>
));

// ── Card ──────────────────────────────────────────────────────────────────────
const Card = memo<{
  style?: React.CSSProperties;
  visible: boolean;
  delay: number;
  children: React.ReactNode;
}>(({ style, visible, delay, children }) => (
  <div style={{
    borderRadius: '22px',
    padding: 'clamp(20px, 2.6vw, 28px)',
    boxShadow: '0 2px 18px rgba(0,0,0,0.05)',
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 550ms ease ${delay}ms, transform 550ms ease ${delay}ms`,
    willChange: 'opacity, transform',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    ...style,
  }}>
    {children}
  </div>
));

// ── CardHead ──────────────────────────────────────────────────────────────────
const CardHead = memo<{ eyebrow: string; title: string; dark?: boolean }>(({ eyebrow, title, dark }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
    <div>
      <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.30)', fontFamily: 'Inter,sans-serif', marginBottom: '5px' }}>{eyebrow}</div>
      <h3 style={{ fontSize: 'clamp(15px, 1.9vw, 19px)', fontWeight: 800, color: dark ? '#fff' : '#111', letterSpacing: '-0.022em', fontFamily: 'Inter,sans-serif', lineHeight: 1.22, margin: 0 }} dangerouslySetInnerHTML={{ __html: title }} />
    </div>
    <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '10px' }}>
      <Arrow dark={dark} />
    </div>
  </div>
));

// ── Main ──────────────────────────────────────────────────────────────────────
export const FeaturesBento: React.FC = () => {
  const { ref: sectionRef, visible } = useVisible();
  const bp = useBreakpoint();
  const isDesktop = bp === 'desktop';
  const isMobile  = bp === 'mobile';

  // Positions grid calculées une seule fois par breakpoint
  const grid = useMemo(() => ({
    cols: isDesktop ? 'repeat(3, 1fr)' : isMobile ? '1fr' : '1fr 1fr',
    rows: isDesktop ? '320px auto auto' : 'auto',
    hero:        { gridColumn: isDesktop ? '1 / 3' : isMobile ? '1' : '1 / 3', gridRow: isDesktop ? '1' : 'auto' },
    agendaStats: { gridColumn: isDesktop ? '3'     : isMobile ? '1' : '1 / 3', gridRow: isDesktop ? '1 / 3' : 'auto' },
    rappels:     { gridColumn: '1',                                              gridRow: isDesktop ? '2' : 'auto' },
    paiements:   { gridColumn: isDesktop ? '2' : isMobile ? '1' : '2',          gridRow: isDesktop ? '2' : 'auto' },
    sms:         { gridColumn: '1',                                              gridRow: isDesktop ? '3' : 'auto' },
    clientes:    { gridColumn: isDesktop ? '2 / 4' : isMobile ? '1' : '1 / 3', gridRow: isDesktop ? '3' : 'auto' },
  }), [isDesktop, isMobile]);

  return (
    <section id="features" ref={sectionRef} style={{
      background: 'linear-gradient(135deg, #FFF8FB 0%, #FFF0F7 50%, #F6EEFF 100%)',
      padding: 'clamp(64px, 8vw, 96px) clamp(20px, 5vw, 64px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Blob décoratif */}
      <div style={{ position: 'absolute', top: '-40px', right: '8%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(235,94,157,0.06) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none' }} />

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto clamp(40px,6vw,60px)', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 550ms ease, transform 550ms ease', willChange: 'opacity, transform' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '5px 14px 5px 10px', borderRadius: '999px', border: '1px solid rgba(235,94,157,0.22)', background: 'rgba(235,94,157,0.06)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#eb5e9d', fontFamily: 'Inter,sans-serif', marginBottom: '18px' }}>
          <span style={{ fontSize: '9px' }}>✦</span><span>Fonctionnalités</span>
        </div>
        <h2 className="font-serif-elegant italic" style={{ display: 'block', fontSize: 'clamp(1.9rem,4vw,3.2rem)', lineHeight: 1.1, letterSpacing: '-0.022em', color: '#111', marginBottom: '12px' }}>
          Votre salon tourne.<br /><span style={{ color: '#eb5e9d' }}>Même quand vous dormez.</span>
        </h2>
        <p style={{ fontSize: 'clamp(0.88rem,1.4vw,1rem)', color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, fontFamily: 'Inter,sans-serif' }}>
          Six outils. Automatiques. Silencieux.<br />Pensés pour que vous pensiez enfin à autre chose.
        </p>
      </div>

      {/* ── Bento grid ── */}
      <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: grid.cols, gridTemplateRows: grid.rows, gap: '14px' }}>

        {/* ① Hero */}
        <Card visible={visible} delay={0} style={{
  ...grid.hero,
  background: '#111', border: '1px solid rgba(255,255,255,0.06)',
  padding: 0,
  flexDirection: isDesktop ? 'row' : 'column-reverse',  // ← 'column' → 'column-reverse'
}}>
          {/* Texte */}
          <div style={{
            width: isDesktop ? '50%' : '100%',
            padding: 'clamp(22px, 3vw, 32px)',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'flex-start', gap: '16px',
            position: 'relative', zIndex: 2,
            boxSizing: 'border-box',
            height: isDesktop ? '100%' : 'auto',
          }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Arrow dark />
            </div>
            <h3 style={{ fontSize: 'clamp(16px, 2vw, 24px)', fontWeight: 800, color: '#fff', fontFamily: 'Inter,sans-serif', letterSpacing: '-0.025em', lineHeight: 1.18, margin: 0 }}>
              Gérez votre salon <span style={{ color: '#eb5e9d' }}>facilement</span>,<br />où que vous soyez.
            </h3>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)', fontFamily: 'Inter,sans-serif', lineHeight: 1.65, margin: 0 }}>
              Tous les outils pour gérer vos rendez-vous et vos revenus — disponibles sur votre téléphone.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ padding: '9px 16px', borderRadius: '99px', background: '#eb5e9d', color: '#fff', fontSize: '11px', fontWeight: 700, fontFamily: 'Inter,sans-serif', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0}}>
                Commencer dès maintenant →
              </button>
            </div>
          </div>

          {/* Image — absolute sur desktop, stylée sur mobile/tablet */}
{isDesktop ? (
  <img
    src="/VisualAPP.png"
    alt="" aria-hidden="true"
    loading="lazy" decoding="async"
    style={{
      position: 'absolute',
      top: '-8%', bottom: '-8%', right: '-4%',
      width: '64%', height: '116%',
      objectFit: 'cover', objectPosition: 'center center',
      zIndex: 1, pointerEvents: 'none',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 22%)',
      maskImage: 'linear-gradient(to right, transparent 0%, black 22%)',
    }}
  />
) : (
  // ── Wrapper mobile : image + fade bas + coins arrondis haut ──
  <div style={{
  position: 'relative',
  width: '100%',
  height: isMobile ? '260px' : '300px',   // ← hauteur du wrapper (zone visible)
  flexShrink: 0,
  overflow: 'hidden',
  borderRadius: 'inherit',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}}>
  <img
    src="/VisualAPP.png"
    alt="" aria-hidden="true"
    loading="lazy" decoding="async"
    style={{
      width: '100%',
      height: '130%',                      // ← dépasse du wrapper → déborde en bas
      objectFit: 'cover',
      objectPosition: 'center 15%',
      display: 'block',
    }}
  />
  {/* Fondu bas — plus prononcé pour couvrir le débordement */}
  <div style={{
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to bottom, transparent 30%, #111 90%)',  // ← démarre plus tôt
    pointerEvents: 'none',
  }} />

  </div>
)}
        </Card>

        {/* ② Agenda + Stats */}
        <Card visible={visible} delay={80} style={{ ...grid.agendaStats, background: '#fff', border: '1px solid rgba(0,0,0,0.055)', padding: 0, gap: 0 }}>
          {/* Agenda */}
          <div style={{ padding: 'clamp(20px,2.6vw,26px)', flex: 1, display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.28)', fontFamily: 'Inter,sans-serif', marginBottom: '4px' }}>Agenda en ligne</div>
                <h3 style={{ fontSize: 'clamp(14px,1.6vw,17px)', fontWeight: 800, color: '#111', fontFamily: 'Inter,sans-serif', letterSpacing: '-0.02em', lineHeight: 1.2, margin: 0 }}>
                  Fini les messages<br />à 23h.
                </h3>
              </div>
              <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Arrow />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
              {AGENDA_SLOTS.map((slot, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FAFAFA', borderRadius: '10px', padding: '8px 10px', border: '1px solid rgba(0,0,0,0.04)' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(0,0,0,0.35)', fontFamily: 'Inter,sans-serif', flexShrink: 0, minWidth: '32px' }}>{slot.time}</span>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: slot.dot, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#111', fontFamily: 'Inter,sans-serif', lineHeight: 1.2 }}>{slot.name}</div>
                    <div style={{ fontSize: '9.5px', color: 'rgba(0,0,0,0.35)', fontFamily: 'Inter,sans-serif' }}>{slot.service}</div>
                  </div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: slot.color, flexShrink: 0 }} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: '10px', background: '#FDE8F0', borderRadius: '99px', padding: '6px 12px', display: 'inline-flex', alignItems: 'center', gap: '5px', alignSelf: 'flex-start' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#eb5e9d' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#eb5e9d', fontFamily: 'Inter,sans-serif' }}>3 RDV aujourd'hui</span>
            </div>
          </div>

          {/* Stats */}
          <div style={{ padding: 'clamp(20px,2.6vw,26px)', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.28)', fontFamily: 'Inter,sans-serif', marginBottom: '4px' }}>Statistiques</div>
                <h3 style={{ fontSize: 'clamp(14px,1.6vw,17px)', fontWeight: 800, color: '#111', fontFamily: 'Inter,sans-serif', letterSpacing: '-0.02em', lineHeight: 1.2, margin: 0 }}>
                  Vos revenus,<br />enfin lisibles.
                </h3>
              </div>
              <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Arrow />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '12px' }}>
              {[
                { v: '1 840 €', l: 'Ce mois',      up: '+23%',             upColor: '#10B981' },
                { v: '94%',     l: 'Remplissage',  up: '↑ vs mois dernier', upColor: '#10B981' },
              ].map((k, i) => (
                <div key={i} style={{ background: '#FAFAFA', borderRadius: '10px', padding: '10px', border: '1px solid rgba(0,0,0,0.04)' }}>
                  <div style={{ fontSize: 'clamp(14px,1.4vw,17px)', fontWeight: 900, color: '#111', fontFamily: 'Inter,sans-serif', letterSpacing: '-0.03em', lineHeight: 1 }}>{k.v}</div>
                  <div style={{ fontSize: '9px', color: 'rgba(0,0,0,0.35)', fontFamily: 'Inter,sans-serif', marginTop: '2px' }}>{k.l}</div>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: k.upColor, fontFamily: 'Inter,sans-serif', marginTop: '3px' }}>{k.up}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '40px' }}>
              {STAT_BARS.map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h * 0.40}px`, background: i === 5 ? 'linear-gradient(180deg,#eb5e9d,#f43f8a)' : 'rgba(235,94,157,0.13)', borderRadius: '3px 3px 0 0' }} />
              ))}
            </div>
          </div>
        </Card>

        {/* ③ Rappels */}
        <Card visible={visible} delay={120} style={{ ...grid.rappels, background: '#fff', border: '1px solid rgba(0,0,0,0.055)' }}>
          <CardHead eyebrow="Rappels SMS" title="Zéro no-show,<br/>garanti." />
          <NotifPreview />
        </Card>

        {/* ④ Paiements */}
        <Card visible={visible} delay={160} style={{ ...grid.paiements, background: '#fff', border: '1px solid rgba(0,0,0,0.055)' }}>
          <CardHead eyebrow="Paiements & acomptes" title="Fini les impayés,<br/>pour toujours." />
          <PaymentPreview />
        </Card>

        {/* ⑤ SMS */}
        <Card visible={visible} delay={200} style={{ ...grid.sms, background: '#fff', border: '1px solid rgba(0,0,0,0.055)' }}>
          <CardHead eyebrow="SMS Marketing" title="Relancez vos clientes<br/>en 30 secondes." />
          <SMSPreview />
        </Card>

        {/* ⑥ Clientes */}
        <Card visible={visible} delay={240} style={{ ...grid.clientes, background: '#FDE8F0', border: '1px solid rgba(235,94,157,0.10)' }}>
          <CardHead eyebrow="Fiches clientes" title="Elle sait qu'elle compte pour vous." />
          <ClientList />
        </Card>

      </div>
    </section>
  );
};
