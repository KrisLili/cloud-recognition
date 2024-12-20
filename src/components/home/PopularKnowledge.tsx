interface KnowledgeItem {
  id: string;
  title: string;
  excerpt: string;
  readCount: number;
}

export default function PopularKnowledge() {
  // 这里应该从 API 获取数据
  const knowledgeItems: KnowledgeItem[] = [
    {
      id: '1',
      title: '如何区分层积云和层云?',
      excerpt: '通过观察云的形态特征...',
      readCount: 1234
    },
    {
      id: '2',
      title: '积雨云的形成原理',
      excerpt: '积雨云形成于强烈的上升气流中...',
      readCount: 856
    },
    {
      id: '3',
      title: '卷云预示着什么天气？',
      excerpt: '卷云通常预示着天气系统的接近...',
      readCount: 677
    }
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">热门云知识</h2>
      <div className="space-y-3">
        {knowledgeItems.map(item => (
          <div key={item.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="font-medium mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.excerpt}</p>
            <div className="text-xs text-gray-500 mt-2">
              {item.readCount} 次阅读
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 