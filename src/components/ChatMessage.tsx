import { Bot, User, ExternalLink, MessageCircleQuestion } from "lucide-react";
import { useEffect, useState } from "react";
import type { Message } from "./ChatWidget";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatMessageProps {
  message: Message;
  onSendMessage?: (text: string) => void;
}

const ChatMessage = ({ message, onSendMessage }: ChatMessageProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSuggestedQuestionClick = (question: string) => {
    if (onSendMessage) {
      onSendMessage(question);
    }
  };

  useEffect(() => {
    // Skip streaming for user messages
    if (message.isUser) {
      setDisplayText(message.text);
      setIsComplete(true);
      return;
    }

    // Reset state for new AI messages
    setDisplayText("");
    setIsComplete(false);
    
    const text = message.text;
    let currentIndex = 0;
    
    // Speed of text appearance (lower number = faster)
    const typingSpeed = 15;
    
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, typingSpeed);
    
    return () => clearInterval(interval);
  }, [message]);

  if (message.isUser) {
    return (
      <div className="flex justify-end group">
        <div className="max-w-[75%] bg-black text-white p-3 rounded-lg rounded-br-md border border-neutral-200 hover:border-neutral-300 transition-all duration-200">
          <p className="text-sm leading-relaxed font-normal">{message.text}</p>
          <p className="text-xs text-neutral-300 mt-2 opacity-80">
            {formatTime(message.timestamp)}
          </p>
        </div>
        <div className="ml-3 mt-1">
          <div className="w-7 h-7 bg-neutral-100 border border-neutral-200 rounded-full flex items-center justify-center">
            <User size={14} className="text-black" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start group">
      <div className="mr-3 mt-1">
        <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
          <Bot size={14} className="text-white" />
        </div>
      </div>
      <div className="max-w-[75%] bg-neutral-50 p-3 rounded-lg rounded-bl-md border border-neutral-200 hover:border-neutral-300 transition-all duration-200">
        <div className="markdown text-sm text-black leading-relaxed font-normal">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {displayText}
          </ReactMarkdown>
          {!isComplete && (
            <span className="inline-block w-1.5 h-4 bg-black animate-blink ml-0.5"></span>
          )}
        </div>
        
        {isComplete && message.sources && message.sources.length > 0 && (
          <div className="mt-3 pt-2 border-t border-neutral-200">
            <p className="text-xs text-neutral-500 mb-1 font-medium">Sources:</p>
            <div className="flex flex-col gap-1">
              {message.sources.map((source, index) => {
                // Show hostname + pathname, truncate if too long
                let displayUrl = '';
                try {
                  const urlObj = new URL(source);
                  displayUrl = urlObj.hostname + urlObj.pathname;
                } catch {
                  displayUrl = source;
                }
                const maxLen = 40;
                const truncated = displayUrl.length > maxLen ? displayUrl.slice(0, maxLen) + '...' : displayUrl;
                return (
                  <a 
                    key={index} 
                    href={source} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-blue-600 hover:text-blue-800 flex items-center underline underline-offset-2"
                    title={displayUrl}
                  >
                    <ExternalLink size={10} className="mr-1" />
                    {truncated}
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {isComplete && message.suggestedQuestions && message.suggestedQuestions.length > 0 && (
          <div className="mt-3 pt-2 border-t border-neutral-200">
            <p className="text-xs text-neutral-500 mb-1 font-medium">Suggested Questions:</p>
            <div className="flex flex-col gap-1.5">
              {message.suggestedQuestions.map((question, index) => (
                <button 
                  key={index}
                  onClick={() => handleSuggestedQuestionClick(question)}
                  className="text-xs text-left text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-1 px-2 rounded flex items-center transition-all"
                >
                  <MessageCircleQuestion size={12} className="mr-1 flex-shrink-0" />
                  <span>{question}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="text-xs text-neutral-500 mt-2">
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
