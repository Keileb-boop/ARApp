// MyARScene.js
import React from 'react';
import { ViroARScene, ViroText } from '@viro-community/react-viro';

const MyARScene = () => {
  return (
    <ViroARScene>
      <ViroText
        text="Hola desde AR"
        position={[0, 0, -1]}
        style={{ fontSize: 30, color: 'white' }}
      />
    </ViroARScene>
  );
};

export default MyARScene; // ✅ Export default correcto
