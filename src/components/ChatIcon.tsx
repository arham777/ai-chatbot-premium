
import { MessageCircle } from "lucide-react";

interface ChatIconProps {
  onClick: () => void;
}

const ChatIcon = ({ onClick }: ChatIconProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 animate-fade-in group"
      aria-label="Open chat"
    >
      <MessageCircle size={20} className="sm:size-6 group-hover:scale-110 transition-transform duration-200" />
      <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
    </button>
  );
};

export default ChatIcon;
