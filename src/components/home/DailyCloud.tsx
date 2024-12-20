import Image from 'next/image';

interface CloudImage {
  id: string;
  url: string;
  title: string;
  description: string;
}

export default function DailyCloud() {
  // 这里应该从 API 获取数据
  const featuredClouds: CloudImage[] = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1567571393863-c1db931b1375',
      title: '今日精选',
      description: '壮观的积雨云'
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda',
      title: '热门推荐',
      description: '美丽的卷云'
    }
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">每日精选云图</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredClouds.map(cloud => (
          <div key={cloud.id} className="relative aspect-video rounded-lg overflow-hidden group">
            <Image
              src={cloud.url}
              alt={cloud.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white font-medium">{cloud.title}</h3>
              <p className="text-white/80 text-sm">{cloud.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 