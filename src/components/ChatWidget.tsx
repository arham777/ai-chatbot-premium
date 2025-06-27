import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import ChatIcon from "./ChatIcon";
import ChatWindow from "./ChatWindow";

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatWidgetRef {
  openChat: () => void;
  closeChat: () => void;
}

interface ChatWidgetProps {
  initialOpen?: boolean;
}

const ChatWidget = forwardRef<ChatWidgetRef, ChatWidgetProps>(({ initialOpen = false }, ref) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your SNGPL AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useImperativeHandle(ref, () => ({
    openChat: () => setIsOpen(true),
    closeChat: () => setIsOpen(false),
  }));

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
      return "Hello! It's great to meet you. I'm here to help with all your SNGPL service needs. What can I assist you with today?";
    } else if (input.includes('help')) {
      return "I'm here to help! You can ask me about billing, new connections, service requests, complaints, or general information about SNGPL services. What would you like to know?";
    } else if (input.includes('bill') || input.includes('payment')) {
      return "I can help you with billing inquiries! You can ask about bill details, payment methods, due dates, or billing history. What specific billing information do you need?";
    } else if (input.includes('connection') || input.includes('apply')) {
      return "I can guide you through the connection process! Whether you need a new residential or commercial connection, I'll help you understand the requirements and application steps.";
    } else if (input.includes('complaint') || input.includes('issue')) {
      return "I'm here to help resolve any issues. Please describe your concern, and I'll guide you through the complaint process or provide immediate assistance where possible.";
    } else if (input.includes('thank')) {
      return "You're very welcome! I'm glad I could help. Feel free to ask if you have any other questions about SNGPL services.";
    } else {
      const responses = [
        "That's an interesting question! Let me help you with that. Could you provide a bit more context about your SNGPL service needs?",
        "I understand what you're asking about. As your SNGPL AI assistant, I'm here to provide you with accurate information and guidance.",
        "Great question! I'm here to assist you with all SNGPL-related inquiries. Let me provide you with some helpful information.",
        "Thanks for reaching out! I'm processing your request and I'll do my best to give you a comprehensive answer about our services.",
        "I appreciate you asking! Based on your question, here's what I can help you with regarding SNGPL services...",
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
});

ChatWidget.displayName = "ChatWidget";

export default ChatWidget;
