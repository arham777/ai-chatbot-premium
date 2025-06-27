
import { X, Bot, Minimize2, Maximize2 } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const ChatHeader = ({ onClose, isExpanded, onToggleExpand }: ChatHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 flex items-center justify-between border-b border-slate-700/50">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
            <Bot size={20} className="text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
        </div>
        <div>
          <h3 className="font-semibold text-lg">AI Assistant</h3>
          <p className="text-slate-300 text-sm flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Online • Typically replies instantly
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onToggleExpand}
          className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200"
          aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
        >
          {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
        <button
          onClick={onClose}
          className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
