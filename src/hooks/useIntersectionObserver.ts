import { useState, useRef, useEffect } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current as Element);
    }

    return () => observer.disconnect();
  }, []);

  return { targetRef, isIntersecting };
};

export default useIntersectionObserver;
