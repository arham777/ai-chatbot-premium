
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
      <div className="flex justify-end animate-fade-in">
        <div className="max-w-[80%] bg-blue-600 text-white p-3 rounded-2xl rounded-br-sm shadow-sm">
          <p className="text-sm leading-relaxed">{message.text}</p>
          <p className="text-xs text-blue-100 mt-1 opacity-75">
            {formatTime(message.timestamp)}
          </p>
        </div>
        <div className="ml-2 mt-1">
          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
            <User size={12} className="text-gray-600" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start animate-fade-in">
      <div className="mr-2 mt-1">
        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
          <Bot size={12} className="text-blue-600" />
        </div>
      </div>
      <div className="max-w-[80%] bg-white p-3 rounded-2xl rounded-bl-sm shadow-sm border">
        <p className="text-sm text-gray-800 leading-relaxed">{message.text}</p>
        <p className="text-xs text-gray-500 mt-1">
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
