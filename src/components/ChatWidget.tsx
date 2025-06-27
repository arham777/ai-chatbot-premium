
import { useState } from "react";
import ChatIcon from "./ChatIcon";
import ChatWindow from "./ChatWindow";

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(text),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! It's great to meet you. What can I assist you with today?";
    } else if (input.includes('help')) {
      return "I'm here to help! You can ask me questions about our services, get general information, or just have a conversation. What would you like to know?";
    } else if (input.includes('price') || input.includes('cost')) {
      return "I'd be happy to help you with pricing information. Could you let me know which specific service or product you're interested in?";
    } else if (input.includes('contact')) {
      return "You can reach our support team through this chat, or visit our contact page for additional options. Is there something specific I can help you with right now?";
    } else if (input.includes('thank')) {
      return "You're very welcome! I'm glad I could help. Feel free to ask if you have any other questions.";
    } else {
      const responses = [
        "That's an interesting question! Let me help you with that. Could you provide a bit more context?",
        "I understand what you're asking about. Here's what I can tell you based on that...",
        "Great question! I'm here to assist you with that. Let me provide you with some helpful information.",
        "Thanks for reaching out! I'm processing your request and I'll do my best to give you a comprehensive answer.",
        "I appreciate you asking! Based on your question, here's what I recommend...",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  };

  return (
    <>
      {!isOpen && <ChatIcon onClick={() => setIsOpen(true)} />}
      {isOpen && (
        <ChatWindow
          messages={messages}
          onSendMessage={handleSendMessage}
          onClose={() => setIsOpen(false)}
          isTyping={isTyping}
        />
      )}
    </>
  );
};

export default ChatWidget;
