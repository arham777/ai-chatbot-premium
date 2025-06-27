
import { Bot, User } from "lucide-react";
import type { Message } from "./ChatWidget";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (message.isUser) {
    return (
      <div className="flex justify-end animate-fade-in group">
        <div className="max-w-[75%] bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl rounded-br-md shadow-lg hover:shadow-xl transition-all duration-200">
          <p className="text-sm leading-relaxed font-medium">{message.text}</p>
          <p className="text-xs text-blue-100 mt-2 opacity-80">
            {formatTime(message.timestamp)}
          </p>
        </div>
        <div className="ml-3 mt-1">
          <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-md">
            <User size={14} className="text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start animate-fade-in group">
      <div className="mr-3 mt-1">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-md">
          <Bot size={14} className="text-white" />
        </div>
      </div>
      <div className="max-w-[75%] bg-white p-4 rounded-2xl rounded-bl-md shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-100">
        <p className="text-sm text-slate-800 leading-relaxed">{message.text}</p>
        <p className="text-xs text-slate-500 mt-2">
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
