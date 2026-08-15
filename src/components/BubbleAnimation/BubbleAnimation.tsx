import React from 'react';
import type { TripCategory } from '../../types';
import './BubbleAnimation.css';

interface BubbleAnimationProps {
  mode?: TripCategory;
}

const BubbleAnimation: React.FC<BubbleAnimationProps> = ({ mode = 'all' }) => {
  if (mode === 'safari') {
    return (
      <div className="atmosphere-particles atmosphere-safari" aria-hidden="true">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="sand-ember"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              animationDuration: `${Math.random() * 6 + 3}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    );
  }

  if (mode === 'transfer') {
    return (
      <div className="atmosphere-particles atmosphere-transfer" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="speed-line"
            style={{
              top: `${8 + i * 6 + Math.random() * 2}%`,
              width: `${Math.random() * 250 + 120}px`,
              animationDuration: `${Math.random() * 1.5 + 0.8}s`,
              animationDelay: `${Math.random() * 2.5}s`,
            }}
          />
        ))}
      </div>
    );
  }

  // Default: Sea / All Underwater Bubbles
  return (
    <div className="atmosphere-particles atmosphere-sea" aria-hidden="true">
      {Array.from({ length: 22 }).map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 18 + 6}px`,
            height: `${Math.random() * 18 + 6}px`,
            animationDuration: `${Math.random() * 12 + 8}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleAnimation;
