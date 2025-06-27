
import { X, Bot } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Bot size={16} />
        </div>
        <div>
          <h3 className="font-semibold">AI Assistant</h3>
          <p className="text-blue-100 text-xs">Online • Typically replies instantly</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="p-1 hover:bg-blue-500 rounded transition-colors"
        aria-label="Close chat"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default ChatHeader;
