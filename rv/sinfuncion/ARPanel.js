// ARPanel.js
import React from 'react';
import { ViroARScene, ViroText, ViroConstants } from 'react-viro';

export default class ARPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Cargando datos...",
      weatherData: {
        temperature: '--',
        humidity: '--',
        cloudCover: '--',
        apparentTemp: '--'
      }
    };
  }

  componentDidMount() {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=13.69&longitude=-89.19&current=temperature_2m,relative_humidity_2m,apparent_temperature,cloud_cover'
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          weatherData: {
            temperature: data.current.temperature_2m,
            humidity: data.current.relative_humidity_2m,
            cloudCover: data.current.cloud_cover,
            apparentTemp: data.current.apparent_temperature
          }
        });
      });
  }

  render() {
    const { temperature, humidity, cloudCover, apparentTemp } = this.state.weatherData;

    return (
      <ViroARScene>
        <ViroText
          text={`🌡 Temp: ${temperature}°C\n🥵 Sensación: ${apparentTemp}°C\n💧 Humedad: ${humidity}%\n☁️ Nubes: ${cloudCover}%`}
          position={[0, 0, -1]}
          style={{ fontSize: 30, color: '#FFFFFF', textAlign: 'center' }}
        />
      </ViroARScene>
    );
  }
}
