import { useState, KeyboardEvent } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-neutral-200 bg-white">
      <div className="flex items-end space-x-3">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="w-full p-3 pr-12 border border-neutral-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent max-h-32 min-h-[44px] bg-white hover:border-neutral-300 transition-colors duration-200 placeholder-neutral-400 font-light"
            rows={1}
            style={{
              height: 'auto',
              minHeight: '44px',
              maxHeight: '128px',
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = Math.min(target.scrollHeight, 128) + 'px';
            }}
          />
        </div>
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className="p-3 bg-black text-white rounded-lg hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-400 transition-all duration-200 flex-shrink-0 border border-neutral-200 hover:border-neutral-300"
          aria-label="Send message"
        >
          <Send size={16} />
        </button>
      </div>
      <div className="flex items-center justify-between mt-3 text-xs text-neutral-500">
        <span className="font-light">Press Enter to send, Shift + Enter for new line</span>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="font-light">AI is ready</span>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
