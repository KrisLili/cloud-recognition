import Image from 'next/image';

export default function QuickCapture() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">快速识别云形态</h2>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-blue-100">立即拍照或上传图片,快速识别云的类型</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            开始识别
          </button>
        </div>
        <div className="relative w-12 h-12">
          <Image
            src="/icons/camera.svg"
            alt="相机图标"
            fill
            className="object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>
      </div>
    </div>
  );
} 