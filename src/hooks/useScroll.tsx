import { useState, useEffect } from 'react';

type UseScrollTypes = {
  x: number;
  y: number;
};

export default function useScroll(): { scroll: UseScrollTypes } {
  const [scroll, setScroll] = useState<UseScrollTypes>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateScroll = () => {
      setScroll({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    updateScroll();

    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []); 

  return {
    scroll,
  };
}
