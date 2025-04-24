import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/style';
import DataCard from './components/DataCard';
import ARPanel from './components/ARPanel';

const AppContainer = () => {
  const [showAR, setShowAR] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <Text style={styles.headerSubtitle}>Bienvenido al panel</Text>
        </View>

        <View style={styles.card}>
          <DataCard label="Temperatura" value="25°C" />
          <DataCard label="Humedad" value="60%" />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setShowAR(true)}>
            <Text style={styles.buttonText}>Mostrar AR</Text>
          </TouchableOpacity>
        </View>

        {showAR && <ARPanel onClose={() => setShowAR(false)} />}
      </View>
    </SafeAreaView>
  );
};

export default AppContainer;
