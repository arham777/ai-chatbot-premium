import { MessageCircle } from "lucide-react";

interface ChatIconProps {
  onClick: () => void;
}

const ChatIcon = ({ onClick }: ChatIconProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-black hover:bg-neutral-800 text-white rounded-full border border-neutral-200 hover:border-neutral-300 transform hover:scale-105 transition-all duration-200 flex items-center justify-center z-50 group"
      aria-label="Open chat"
    >
      <MessageCircle size={18} className="sm:size-5 group-hover:scale-110 transition-transform duration-200" />
      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
    </button>
  );
};

export default ChatIcon;
