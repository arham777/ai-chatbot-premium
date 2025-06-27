
const TypingIndicator = () => {
  return (
    <div className="flex justify-start animate-fade-in">
      <div className="mr-3 mt-1">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-md">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-2xl rounded-bl-md shadow-lg border border-slate-100">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <span className="text-xs text-slate-500 font-medium">AI is thinking...</span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
