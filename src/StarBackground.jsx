// StarBackground.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const StarBackground = () => {
  return (
    <div style={{ position: 'fixed', width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas>
        <Stars
          radius={100}      // Inner sphere radius
          depth={50}        // Star field depth
          count={1500}      // Number of stars
          factor={2}        // Star size factor
          fade={true}       // Faded stars at distance
        />
      </Canvas>
    </div>
  );
};

export default StarBackground;
