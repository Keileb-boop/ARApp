const ARScene = (props) => {
    const { temperature, humidity, location } = props.data;
  
    return (
      <ViroARScene onTrackingUpdated={() => {}}>
        <ViroARPlaneSelector>
          <ViroText
            text={`🌡️ Temp: ${temperature}°C\n💧 Hum: ${humidity}%\n📍 ${location}`}
            scale={[0.3, 0.3, 0.3]}
            position={[0, 0, -1]}
            style={{
              fontSize: 40,
              color: '#ffffff',
              textAlign: 'center',
            }}
          />
        </ViroARPlaneSelector>
      </ViroARScene>
    );
  };
  