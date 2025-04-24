import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';

const ARPanel = ({ onClose }) => {
  return (
    <View style={styles.arPanelContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Panel de Realidad Aumentada</Text>
      <Text style={styles.headerSubtitle}>Información del sensor aquí</Text>
    </View>
  );
};

export default ARPanel;
