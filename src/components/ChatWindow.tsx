import { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import type { Message } from "./ChatWidget";

interface ChatWindowProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  onClose: () => void;
  isTyping: boolean;
}

const ChatWindow = ({ messages, onSendMessage, onClose, isTyping }: ChatWindowProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const chatWindowClasses = isExpanded 
    ? "fixed inset-4 w-auto h-auto bg-white shadow-2xl flex flex-col z-50 animate-scale-in rounded-2xl border border-slate-200 overflow-hidden max-w-full max-h-full"
    : "fixed bottom-4 right-4 w-full max-w-[360px] h-[540px] max-h-[calc(100vh-2rem)] bg-white shadow-2xl flex flex-col z-50 animate-slide-in-right border border-slate-200 rounded-2xl overflow-hidden sm:w-[360px]";

  return (
    <div className={chatWindowClasses}>
      <ChatHeader 
        onClose={onClose} 
        isExpanded={isExpanded}
        onToggleExpand={handleToggleExpand}
      />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-slate-50 to-white min-h-0">
        {messages.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-800 mb-2">Welcome to AI Assistant</h3>
            <p className="text-slate-600 text-sm px-4">Start a conversation and I'll help you with anything you need.</p>
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        )}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatWindow;
