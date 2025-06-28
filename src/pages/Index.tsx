import { useRef } from "react";
import ChatWidget, { ChatWidgetRef } from "@/components/ChatWidget";
import SplitText from "@/components/SplitText";
import CountUp from "@/components/CountUp";
import BackgroundDots from "@/components/BackgroundDots";
import ThreeDButton from "@/components/ThreeDButton";
import WorldMap from "@/components/ui/world-map";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Users,
  BarChart3,
  CheckCircle2,
  MapPin,
  Quote,
} from "lucide-react";

const Index = () => {
  const chatWidgetRef = useRef<ChatWidgetRef>(null);

  const handleStartConversation = () => {
    chatWidgetRef.current?.openChat();
  };

  const handleAnimationComplete = () => {
    console.log('Hero text animation completed!');
  };

  // SNGPL service coverage data points (major cities and regions in Pakistan)
  const sngplCoverage = [
    {
      start: { lat: 33.6844, lng: 73.0479, label: "Islamabad" }, // Islamabad
      end: { lat: 31.5497, lng: 74.3436, label: "Lahore" }, // Lahore
    },
    {
      start: { lat: 31.5497, lng: 74.3436, label: "Lahore" }, // Lahore
      end: { lat: 32.0836, lng: 72.6711, label: "Sargodha" }, // Sargodha
    },
    {
      start: { lat: 33.6844, lng: 73.0479, label: "Islamabad" }, // Islamabad
      end: { lat: 34.0151, lng: 71.5249, label: "Peshawar" }, // Peshawar
    },
    {
      start: { lat: 31.5497, lng: 74.3436, label: "Lahore" }, // Lahore
      end: { lat: 32.1877, lng: 74.1945, label: "Gujranwala" }, // Gujranwala
    },
    {
      start: { lat: 33.6844, lng: 73.0479, label: "Islamabad" }, // Islamabad
      end: { lat: 32.5007, lng: 74.5361, label: "Sialkot" }, // Sialkot
    },
  ];

  // Customer testimonials and success stories
  const testimonials = [
    {
      quote: "The AI assistant resolved my billing query in seconds. No more waiting in long phone queues or visiting offices. This is exactly what modern customer service should look like.",
      name: "Ahmad Hassan",
      title: "Residential Customer, Lahore",
    },
    {
      quote: "Applying for a new commercial connection was incredibly smooth. The AI guided me through every step and kept me updated on the progress. Outstanding service!",
      name: "Fatima Khan",
      title: "Business Owner, Islamabad",
    },
    {
      quote: "I was skeptical about AI customer service, but this changed my mind completely. It understands my queries perfectly and provides accurate information instantly.",
      name: "Muhammad Ali",
      title: "Customer Service Manager, Karachi",
    },
    {
      quote: "The 24/7 availability is a game-changer. I can check my gas usage, bills, and even lodge complaints at any time. This AI assistant is truly revolutionary.",
      name: "Sarah Ahmed",
      title: "Homeowner, Gujranwala",
    },
    {
      quote: "As someone who frequently travels, having access to SNGPL services through AI chat from anywhere is incredibly convenient. Modern technology at its finest.",
      name: "Usman Malik",
      title: "Project Engineer, Peshawar",
    },
    {
      quote: "The AI assistant helped me understand my tariff structure in simple terms. No technical jargon, just clear explanations. Exactly what customers need.",
      name: "Zainab Qureshi",
      title: "Teacher, Sialkot",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-black tracking-tight">SNGPL AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-neutral-600 hover:text-black transition-colors text-sm">Features</a>
              <a href="#about" className="text-neutral-600 hover:text-black transition-colors text-sm">About</a>
              <a href="#support" className="text-neutral-600 hover:text-black transition-colors text-sm">Support</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 xl:py-28">
          <BackgroundDots 
            dotSize={1}
            dotColor="#000000"
            backgroundColor="transparent"
            gap={20}
            fade={true}
            className="opacity-40"
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 text-4xl tracking-super-tight text-black lg:text-6xl">
                <SplitText
                  text="Intelligent assistance for "
                  className="text-4xl lg:text-6xl tracking-super-tight text-black"
                  delay={50}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 50 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.2}
                  rootMargin="-50px"
                  textAlign="center"
                />
                <SplitText
                  text="SNGPL customers"
                  className="text-4xl lg:text-6xl tracking-super-tight text-black font-bold"
                  delay={30}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 50 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.2}
                  rootMargin="-50px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </div>
              <p className="mb-8 text-xl font-light leading-relaxed text-neutral-600 sm:mb-10">
                Navigate Sui Northern Gas Pipelines services with ease. 
                Our AI assistant provides instant support for billing, connections, 
                and service updates—available 24/7.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ThreeDButton 
                  variant="primary"
                  size="lg" 
                  onClick={handleStartConversation}
                >
                  Start conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ThreeDButton>
                <ThreeDButton 
                  variant="secondary"
                  size="lg"
                >
                  Learn more
                </ThreeDButton>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="bg-neutral-50 py-16 sm:py-20 lg:py-24 xl:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-16 lg:mb-20">
              <h2 className="mb-4 text-3xl font-light tracking-tighter text-black lg:text-4xl">
                Everything you need
              </h2>
              <p className="mx-auto max-w-2xl text-lg font-light text-neutral-600">
                Comprehensive support designed for efficiency and simplicity
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-medium tracking-tight text-black">
                  Instant Support
                </h3>
                <p className="font-light leading-relaxed text-neutral-600">
                  Get immediate answers to billing inquiries, service requests, 
                  and account management without waiting.
                </p>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-medium tracking-tight text-black">
                  Secure & Reliable
                </h3>
                <p className="font-light leading-relaxed text-neutral-600">
                  Your data is protected with enterprise-grade security 
                  while ensuring consistent service availability.
                </p>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-medium tracking-tight text-black">
                  24/7 Availability
                </h3>
                <p className="font-light leading-relaxed text-neutral-600">
                  Access support anytime, anywhere. Our AI assistant 
                  never sleeps, ensuring help when you need it most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 lg:py-24 xl:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              <div>
                <h2 className="mb-6 text-3xl font-light tracking-tighter text-black lg:text-4xl">
                  Comprehensive service management
                </h2>
                <p className="mb-8 text-lg font-light leading-relaxed text-neutral-600 lg:mb-10">
                  Handle all your SNGPL interactions through a single, 
                  intelligent interface designed for efficiency.
                </p>
                
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-black" />
                    <div>
                      <h3 className="mb-2 font-medium tracking-tight text-black">Bill Management</h3>
                      <p className="font-light text-neutral-600">
                        View bills, understand charges, and manage payments effortlessly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-black" />
                    <div>
                      <h3 className="mb-2 font-medium tracking-tight text-black">Connection Services</h3>
                      <p className="font-light text-neutral-600">
                        Apply for new connections and track application status in real-time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-black" />
                    <div>
                      <h3 className="mb-2 font-medium tracking-tight text-black">Support & Complaints</h3>
                      <p className="font-light text-neutral-600">
                        Lodge complaints and receive updates on resolution progress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-neutral-50 p-6 sm:p-8 lg:p-10 xl:p-12">
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center space-x-4">
                    <Users className="h-8 w-8 text-black" />
                    <div>
                      <div className="font-medium text-black tracking-tight">Customer Satisfaction</div>
                      <div className="text-2xl font-light text-black tracking-tight">
                        <CountUp
                          from={0}
                          to={98.5}
                          duration={2.5}
                          delay={0.3}
                          className="text-2xl font-light text-black tracking-tight"
                        />
                        %
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <BarChart3 className="h-8 w-8 text-black" />
                    <div>
                      <div className="font-medium text-black tracking-tight">Response Time</div>
                      <div className="text-2xl font-light text-black tracking-tight">
                        &lt; <CountUp
                          from={0}
                          to={2}
                          duration={1.5}
                          delay={0.5}
                          className="text-2xl font-light text-black tracking-tight"
                        /> sec
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Shield className="h-8 w-8 text-black" />
                    <div>
                      <div className="font-medium text-black tracking-tight">Uptime</div>
                      <div className="text-2xl font-light text-black tracking-tight">
                        <CountUp
                          from={0}
                          to={99.9}
                          duration={2.8}
                          delay={0.7}
                          className="text-2xl font-light text-black tracking-tight"
                        />
                        %
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 xl:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-16 lg:mb-20">
              <div className="mb-4 flex items-center justify-center">
                <Quote className="mr-2 h-8 w-8 text-black" />
                <h2 className="text-3xl font-light tracking-tighter text-black lg:text-4xl">
                  What our customers say
                </h2>
              </div>
              <p className="mx-auto max-w-2xl text-lg font-light text-neutral-600">
                Real experiences from SNGPL customers who have transformed 
                their service interactions with our AI assistant.
              </p>
            </div>
            
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className="py-4"
            />
          </div>
        </section>

        {/* Service Coverage Map Section */}
        <section className="py-16 sm:py-20 lg:py-24 xl:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-16 lg:mb-20">
              <div className="mb-4 flex items-center justify-center">
                <MapPin className="mr-2 h-8 w-8 text-black" />
                <h2 className="text-3xl font-light tracking-tighter text-black lg:text-4xl">
                  Service Coverage
                </h2>
              </div>
              <p className="mx-auto max-w-2xl text-lg font-light text-neutral-600">
                SNGPL serves millions of customers across Pakistan with an extensive 
                pipeline network connecting major cities and regions.
              </p>
            </div>
            
            <div className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8 lg:p-10 xl:p-12">
              <WorldMap dots={sngplCoverage} lineColor="#000000" />
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:mt-16">
              <div className="text-center">
                <div className="mb-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                  <CountUp
                    from={0}
                    to={8.5}
                    duration={2.5}
                    delay={0.2}
                    separator=","
                    className="text-2xl font-semibold text-black tracking-tight sm:text-3xl"
                  />
                  M+
                </div>
                <div className="font-light text-neutral-600">Active Customers</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                  <CountUp
                    from={0}
                    to={15000}
                    duration={2.8}
                    delay={0.4}
                    separator=","
                    className="text-2xl font-semibold text-black tracking-tight sm:text-3xl"
                  />
                  km
                </div>
                <div className="font-light text-neutral-600">Pipeline Network</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                  <CountUp
                    from={0}
                    to={250}
                    duration={2.2}
                    delay={0.6}
                    className="text-2xl font-semibold text-black tracking-tight sm:text-3xl"
                  />
                  +
                </div>
                <div className="font-light text-neutral-600">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                  <CountUp
                    from={0}
                    to={50}
                    duration={2}
                    delay={0.8}
                    className="text-2xl font-semibold text-black tracking-tight sm:text-3xl"
                  />
                  +
                </div>
                <div className="font-light text-neutral-600">Years of Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-16 sm:py-20 lg:py-24 xl:py-28">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-light tracking-tighter text-white lg:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg font-light text-neutral-300 sm:mb-10">
              Experience the future of customer service with our AI assistant. 
              Simple, fast, and always available.
            </p>
            <ThreeDButton 
              variant="secondary"
              size="lg" 
              onClick={handleStartConversation}
            >
              Start now
              <ArrowRight className="ml-2 h-4 w-4" />
            </ThreeDButton>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 py-12 sm:py-16 md:grid-cols-4 lg:gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black">
                  <span className="text-sm font-bold text-white">S</span>
                </div>
                <span className="font-semibold tracking-tight text-black">SNGPL AI</span>
              </div>
              <p className="mb-6 max-w-md font-light leading-relaxed text-neutral-600">
                Revolutionizing customer service for Sui Northern Gas Pipelines Limited with 
                intelligent AI assistance. Available 24/7 to help with billing, connections, 
                and support requests.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-400 transition-colors hover:text-black">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 transition-colors hover:text-black">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 transition-colors hover:text-black">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-black">SERVICES</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-neutral-600 transition-colors hover:text-black">
                    Bill Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 transition-colors hover:text-black">
                    New Connections
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 transition-colors hover:text-black">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 transition-colors hover:text-black">
                    Complaint Resolution
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 transition-colors hover:text-black">
                    Account Information
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-black">SUPPORT</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-neutral-600 transition-colors hover:text-black">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 transition-colors hover:text-black">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 transition-colors hover:text-black">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 transition-colors hover:text-black">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 transition-colors hover:text-black">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-neutral-200 py-6">
            <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
              <p className="text-sm text-neutral-500">
                © {new Date().getFullYear()} Sui Northern Gas Pipelines Limited. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-neutral-500 transition-colors hover:text-black">
                  Privacy
                </a>
                <a href="#" className="text-sm text-neutral-500 transition-colors hover:text-black">
                  Terms
                </a>
                <a href="#" className="text-sm text-neutral-500 transition-colors hover:text-black">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget ref={chatWidgetRef} />
    </div>
  );
};

export default Index;
