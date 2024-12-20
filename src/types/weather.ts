export interface WeatherForecast {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  forecast: string;
}

export const cloudTypeToWeather: Record<string, WeatherForecast> = {
  '积雨云': {
    temperature: 25,
    condition: '雷阵雨',
    humidity: 85,
    windSpeed: 5.8,
    precipitation: 75,
    forecast: '未来6小时可能出现强降水和雷暴天气'
  },
  '层积云': {
    temperature: 22,
    condition: '多云',
    humidity: 65,
    windSpeed: 3.2,
    precipitation: 10,
    forecast: '天气较为稳定，可能出现零星小雨'
  },
  '卷云': {
    temperature: 28,
    condition: '晴转多云',
    humidity: 45,
    windSpeed: 2.5,
    precipitation: 0,
    forecast: '天气晴好，未来24小时内可能转为多云'
  },
  // 可以添加更多云型对应的天气预测
}; 