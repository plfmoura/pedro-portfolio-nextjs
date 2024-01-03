'use client'

import { useState, useEffect } from 'react';

type UseDimensionTypes = {
  width: number;
  height: number;
};

export default function useDimensions(): { dimensions: UseDimensionTypes } {
  const [dimensions, setDimensions] = useState<UseDimensionTypes>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return {
    dimensions,
  };
}
