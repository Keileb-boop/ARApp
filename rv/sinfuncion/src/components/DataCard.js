import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/style';

const DataCard = ({ label, value }) => (
  <View style={styles.cardRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default DataCard;
