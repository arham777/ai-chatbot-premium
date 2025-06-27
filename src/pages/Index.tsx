import ChatWidget from "@/components/ChatWidget";
import { Clock, Bot, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Our Platform
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl">
                  Experience seamless communication with our AI assistant. Click the chat icon in the bottom-right corner to get started with instant support and answers to your questions.
                </p>
              </div>
              <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 pt-12">
                <div className="grid gap-1 rounded-lg border border-slate-200 p-6 shadow-sm bg-white text-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 text-blue-600 rounded-lg p-3">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold">Always Available</h3>
                  </div>
                  <p className="text-sm text-slate-500">
                    Get instant responses anytime, anywhere with our AI assistant.
                  </p>
                </div>
                <div className="grid gap-1 rounded-lg border border-slate-200 p-6 shadow-sm bg-white text-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 text-green-600 rounded-lg p-3">
                      <Bot className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold">Smart Assistance</h3>
                  </div>
                  <p className="text-sm text-slate-500">
                    Powered by advanced AI to understand and help with your needs.
                  </p>
                </div>
                <div className="grid gap-1 rounded-lg border border-slate-200 p-6 shadow-sm bg-white text-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 text-purple-600 rounded-lg p-3">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold">Lightning Fast</h3>
                  </div>
                  <p className="text-sm text-slate-500">
                    Quick responses to keep your workflow smooth and efficient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ChatWidget />
    </div>
  );
};

export default Index;
