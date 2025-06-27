
const TypingIndicator = () => {
  return (
    <div className="flex justify-start animate-fade-in">
      <div className="mr-2 mt-1">
        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-sm border">
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <span className="text-xs text-gray-500 ml-2">AI is typing...</span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
