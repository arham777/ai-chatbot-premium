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
      <div className="flex justify-end group">
        <div className="max-w-[75%] bg-black text-white p-3 rounded-lg rounded-br-md border border-neutral-200 hover:border-neutral-300 transition-all duration-200">
          <p className="text-sm leading-relaxed font-normal">{message.text}</p>
          <p className="text-xs text-neutral-300 mt-2 opacity-80">
            {formatTime(message.timestamp)}
          </p>
        </div>
        <div className="ml-3 mt-1">
          <div className="w-7 h-7 bg-neutral-100 border border-neutral-200 rounded-full flex items-center justify-center">
            <User size={14} className="text-black" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start group">
      <div className="mr-3 mt-1">
        <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
          <Bot size={14} className="text-white" />
        </div>
      </div>
      <div className="max-w-[75%] bg-neutral-50 p-3 rounded-lg rounded-bl-md border border-neutral-200 hover:border-neutral-300 transition-all duration-200">
        <p className="text-sm text-black leading-relaxed font-normal">{message.text}</p>
        <p className="text-xs text-neutral-500 mt-2">
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
