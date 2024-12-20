'use client';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  result: CloudRecognitionResult | null;
  isLoading: boolean;
}

export default function PreviewModal({
  isOpen,
  onClose,
  imageUrl,
  result,
  isLoading,
}: PreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">云形态识别</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              关闭
            </button>
          </div>
          
          {imageUrl && (
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <img src={imageUrl} alt="预览图" className="object-cover w-full h-full" />
            </div>
          )}
          
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="ml-2">正在识别中...</span>
            </div>
          ) : result ? (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">识别结果</h4>
                <p className="text-lg">{result.type}</p>
              </div>
              <div>
                <h4 className="font-medium">置信度</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-500 h-2.5 rounded-full" 
                    style={{ width: `${result.confidence * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {Math.round(result.confidence * 100)}%
                </p>
              </div>
              <div>
                <h4 className="font-medium">描述</h4>
                <p className="text-gray-600">{result.description}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
} 