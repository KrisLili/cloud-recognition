interface WeatherInfo {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

export default function WeatherForecast() {
  // 这里应该从天气 API 获取数据
  const weather: WeatherInfo = {
    temperature: 23,
    condition: '晴',
    humidity: 65,
    windSpeed: 3.2
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">天气预测</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-3xl font-bold">{weather.temperature}°C</div>
          <div className="text-gray-600">{weather.condition}</div>
        </div>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="text-gray-500">湿度:</span> {weather.humidity}%
          </div>
          <div className="text-sm">
            <span className="text-gray-500">风速:</span> {weather.windSpeed}m/s
          </div>
        </div>
      </div>
    </div>
  );
} 