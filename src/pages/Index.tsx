
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Experience seamless communication with our AI assistant. Click the chat icon in the bottom-right corner to get started with instant support and answers to your questions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-blue-600 font-semibold">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Always Available</h3>
              <p className="text-gray-600">Get instant responses anytime, anywhere with our AI assistant.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-green-600 font-semibold">AI</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Assistance</h3>
              <p className="text-gray-600">Powered by advanced AI to understand and help with your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 font-semibold">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Quick responses to keep your workflow smooth and efficient.</p>
            </div>
          </div>
        </div>
      </div>
      
      <ChatWidget />
    </div>
  );
};

export default Index;
