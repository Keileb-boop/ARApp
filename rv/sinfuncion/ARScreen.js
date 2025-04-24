// ARScreen.js
import React from 'react';
import { ViroARSceneNavigator } from 'react-viro';

const InitialARScene = require('./ARPanel');

export default function ARScreen() {
  return <ViroARSceneNavigator initialScene={{ scene: InitialARScene }} />;
}
