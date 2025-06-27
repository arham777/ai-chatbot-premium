
import { useState, KeyboardEvent } from "react";
import { Send, Paperclip, Smile } from "lucide-react";

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
    <div className="p-6 border-t border-slate-200 bg-white">
      <div className="flex items-end space-x-3">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="w-full p-4 pr-12 border border-slate-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent max-h-32 min-h-[52px] bg-slate-50 hover:bg-white transition-colors duration-200 placeholder-slate-400"
            rows={1}
            style={{
              height: 'auto',
              minHeight: '52px',
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
          className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:from-slate-400 disabled:to-slate-400 transition-all duration-200 flex-shrink-0 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </div>
      <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
        <span>Press Enter to send, Shift + Enter for new line</span>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>AI is ready</span>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
