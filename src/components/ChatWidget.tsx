import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import ChatIcon from "./ChatIcon";
import ChatWindow from "./ChatWindow";
import { fetchChatResponse, fetchSuggestedQuestions } from "@/lib/api";

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  sources?: string[];
  suggestedQuestions?: string[];
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

    try {
      // Call the first API to get the response
      const chatResponse = await fetchChatResponse(text);
      
      // Call the second API to get suggested questions based on the response
      let suggestedQuestions: string[] = [];
      try {
        suggestedQuestions = await fetchSuggestedQuestions(chatResponse.response);
      } catch (suggestError) {
        console.error("Error fetching suggested questions:", suggestError);
      }
      
      // Create the AI message with empty text initially
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: chatResponse.response,
        isUser: false,
        timestamp: new Date(),
        sources: chatResponse.sources,
        suggestedQuestions: suggestedQuestions,
      };
      
      setMessages(prev => [...prev, aiMessage]);
      
      // The typing indicator will show in ChatMessage component as it streams
      // No need for it in the ChatWindow
      setIsTyping(false);
      
    } catch (error) {
      console.error("Error getting AI response:", error);
      // Fallback response in case of error
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I couldn't process your request at the moment. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
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
