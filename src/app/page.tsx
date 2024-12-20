'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import PreviewModal from '@/components/recognition/PreviewModal';
import type { CloudRecognitionResult } from '@/types/cloud';
import type { WeatherForecast } from '@/types/weather';
import { cloudTypeToWeather } from '@/types/weather';

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recognitionResult, setRecognitionResult] = useState<CloudRecognitionResult | null>(null);
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast | null>(null);

  const handleIdentifyClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setSelectedImage(previewUrl);
      setIsModalOpen(true);
      setIsLoading(true);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // 模拟识别结果
        const mockResult: CloudRecognitionResult = {
          type: '积雨云',
          confidence: 0.89,
          description: '积雨云是一种垂直发展的云，通常预示着强烈的降水和雷暴天气。'
        };
        
        setRecognitionResult(mockResult);
        // 根据识别结果更新天气预测
        setWeatherForecast(cloudTypeToWeather[mockResult.type]);
      } catch (error) {
        console.error('识别失败:', error);
        alert('识别失败，请重试');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setRecognitionResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[70vh] mb-8">
        <Image
          src="https://images.unsplash.com/photo-1534088568595-a066f410bcda"
          alt="云图背景"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
        
        {/* 识别功能 */}
        <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold">快速识别云形态</h2>
              <p className="mt-2">立即拍照或上传图片，快速识别云的类型</p>
              <div className="mt-4 flex gap-4">
                <button 
                  onClick={handleIdentifyClick}
                  className="bg-white text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  开始识别
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 天气预测 */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-4">天气预测</h2>
          {weatherForecast ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">{weatherForecast.temperature}°C</div>
                  <div className="text-gray-600">{weatherForecast.condition}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-500">湿度:</span> {weatherForecast.humidity}%
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">风速:</span> {weatherForecast.windSpeed}m/s
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">降水概率:</span> {weatherForecast.precipitation}%
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-gray-600">{weatherForecast.forecast}</p>
              </div>
            </div>
          ) : (
            <div className="text-gray-500 text-center py-4">
              请上传云图以获取天气预测
            </div>
          )}
        </div>
      </div>

      <PreviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageUrl={selectedImage}
        result={recognitionResult}
        isLoading={isLoading}
      />
    </main>
  );
}
