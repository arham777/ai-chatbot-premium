import { Bot } from "lucide-react";

const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="mr-3 mt-1">
        <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
          <Bot size={14} className="text-white" />
        </div>
      </div>
      <div className="bg-neutral-50 p-4 rounded-lg rounded-bl-md border border-neutral-200">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <span className="text-xs text-neutral-500 font-light">AI is thinking...</span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
