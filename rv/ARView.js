import React, { useState, useEffect } from 'react';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import MyARScene from './MyARScene'; // Tu escena AR

const ARView = () => {
  const [showAR, setShowAR] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAR(true);
    }, 500);  // Espera medio segundo antes de intentar renderizar AR

    return () => clearTimeout(timer);  // Limpiar en caso de que el componente se desmonte
  }, []);

  if (!showAR) {
    return null;  // Muestra nada hasta que esté listo
  }

  return (
    <ViroARSceneNavigator initialScene={{ scene: MyARScene }} />
  );
};

export default ARView;
