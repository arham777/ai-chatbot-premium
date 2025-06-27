
import { MessageCircle } from "lucide-react";

interface ChatIconProps {
  onClick: () => void;
}

const ChatIcon = ({ onClick }: ChatIconProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center z-50 animate-fade-in"
      aria-label="Open chat"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default ChatIcon;
