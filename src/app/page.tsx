import QuickCapture from '@/components/home/QuickCapture';
import DailyCloud from '@/components/home/DailyCloud';
import PopularKnowledge from '@/components/home/PopularKnowledge';
import WeatherForecast from '@/components/home/WeatherForecast';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="sr-only">AI 云识别 - 首页</h1>
      
      <div className="space-y-8">
        <QuickCapture />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DailyCloud />
            <PopularKnowledge />
          </div>
          
          <div>
            <WeatherForecast />
          </div>
        </div>
      </div>
    </div>
  );
}
