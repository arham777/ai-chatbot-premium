interface ChatResponse {
  response: string;
  sources: string[];
}

export const fetchChatResponse = async (query: string, sessionId: string = "1"): Promise<ChatResponse> => {
  try {
    const url = new URL("http://103.18.20.205:8070/SNGPL-Chatbot");
    url.searchParams.append("session_id", sessionId);
    url.searchParams.append("query", query);

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: ChatResponse = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching chat response:", error);
    return {
      response: "I'm sorry, I couldn't process your request at the moment. Please try again later.",
      sources: []
    };
  }
}

export const fetchSuggestedQuestions = async (prompt: string): Promise<string[]> => {
  try {
    const url = new URL("http://103.18.20.205:8070/multi_cmnt_suggest");
    url.searchParams.append("prompt", prompt);

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: string[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching suggested questions:", error);
    return [];
  }
} 