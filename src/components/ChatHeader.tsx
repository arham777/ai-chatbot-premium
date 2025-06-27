import { X, Bot, Minimize2, Maximize2 } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const ChatHeader = ({ onClose, isExpanded, onToggleExpand }: ChatHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 flex items-center justify-between border-b border-slate-700/50">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
            <Bot size={16} className="text-white" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-base">AI Assistant</h3>
          <p className="text-slate-300 text-sm">
            Ready to help you
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onToggleExpand}
          className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200"
          aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
        >
          {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
        <button
          onClick={onClose}
          className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200"
          aria-label="Close chat"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
