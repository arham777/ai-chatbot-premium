import { X, Bot, Minimize2, Maximize2 } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const ChatHeader = ({ onClose, isExpanded, onToggleExpand }: ChatHeaderProps) => {
  return (
    <div className="bg-black text-white p-4 flex items-center justify-between border-b border-neutral-800">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Bot size={16} className="text-black" />
          </div>
        </div>
        <div>
          <h3 className="font-medium text-base tracking-tight">SNGPL AI Assistant</h3>
          <p className="text-neutral-300 text-sm font-light">
            Ready to help you
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onToggleExpand}
          className="p-2 hover:bg-neutral-800 rounded-md transition-colors duration-200"
          aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
        >
          {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
        <button
          onClick={onClose}
          className="p-2 hover:bg-neutral-800 rounded-md transition-colors duration-200"
          aria-label="Close chat"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
