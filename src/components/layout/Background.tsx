export default function Background() {
  return (
    <div 
      className="fixed inset-0 z-0 transition-opacity duration-500"
      style={{
        backgroundImage: 'url(/images/cloud-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.8
      }}
    />
  );
} 