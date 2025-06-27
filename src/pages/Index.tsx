import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
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
      <nav className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl tracking-super-tight text-black mb-6">
                Intelligent assistance for{" "}
                <span className="font-bold">SNGPL customers</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 font-light leading-relaxed">
                Navigate Sui Northern Gas Pipelines services with ease. 
                Our AI assistant provides instant support for billing, connections, 
                and service updates—available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-black hover:bg-neutral-800 text-white border-0 h-12 px-8 text-base font-medium rounded-md transition-colors"
                >
                  Start conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-neutral-300 text-neutral-600 hover:bg-neutral-50 hover:text-black h-12 px-8 text-base font-medium rounded-md transition-colors"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4 tracking-tighter">
                Everything you need
              </h2>
              <p className="text-lg text-neutral-600 font-light">
                Comprehensive support designed for efficiency and simplicity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-neutral-200 rounded-lg p-8 hover:border-neutral-300 transition-colors">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-black mb-2 tracking-tight">
                    Instant Support
                  </h3>
                  <p className="text-neutral-600 font-light leading-relaxed">
                    Get immediate answers to billing inquiries, service requests, 
                    and account management without waiting.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-lg p-8 hover:border-neutral-300 transition-colors">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-black mb-2 tracking-tight">
                    Secure & Reliable
                  </h3>
                  <p className="text-neutral-600 font-light leading-relaxed">
                    Your data is protected with enterprise-grade security 
                    while ensuring consistent service availability.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-lg p-8 hover:border-neutral-300 transition-colors">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-black mb-2 tracking-tight">
                    24/7 Availability
                  </h3>
                  <p className="text-neutral-600 font-light leading-relaxed">
                    Access support anytime, anywhere. Our AI assistant 
                    never sleeps, ensuring help when you need it most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light text-black mb-6 tracking-tighter">
                  Comprehensive service management
                </h2>
                <p className="text-lg text-neutral-600 font-light mb-8 leading-relaxed">
                  Handle all your SNGPL interactions through a single, 
                  intelligent interface designed for efficiency.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-black mb-1 tracking-tight">Bill Management</h3>
                      <p className="text-neutral-600 font-light">
                        View bills, understand charges, and manage payments effortlessly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-black mb-1 tracking-tight">Connection Services</h3>
                      <p className="text-neutral-600 font-light">
                        Apply for new connections and track application status in real-time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-black mb-1 tracking-tight">Support & Complaints</h3>
                      <p className="text-neutral-600 font-light">
                        Lodge complaints and receive updates on resolution progress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-lg p-8 lg:p-12">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <Users className="h-8 w-8 text-black" />
                    <div>
                      <div className="font-medium text-black tracking-tight">Customer Satisfaction</div>
                      <div className="text-2xl font-light text-black tracking-tight">98.5%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <BarChart3 className="h-8 w-8 text-black" />
                    <div>
                      <div className="font-medium text-black tracking-tight">Response Time</div>
                      <div className="text-2xl font-light text-black tracking-tight">&lt; 2 sec</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Shield className="h-8 w-8 text-black" />
                    <div>
                      <div className="font-medium text-black tracking-tight">Uptime</div>
                      <div className="text-2xl font-light text-black tracking-tight">99.9%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Quote className="h-8 w-8 text-black mr-2" />
                <h2 className="text-3xl lg:text-4xl font-light text-black tracking-tighter">
                  What our customers say
                </h2>
              </div>
              <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
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
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-black mr-2" />
                <h2 className="text-3xl lg:text-4xl font-light text-black tracking-tighter">
                  Service Coverage
                </h2>
              </div>
              <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
                SNGPL serves millions of customers across Pakistan with an extensive 
                pipeline network connecting major cities and regions.
              </p>
            </div>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-12">
              <WorldMap dots={sngplCoverage} lineColor="#000000" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-semibold text-black tracking-tight mb-2">8.5M+</div>
                <div className="text-neutral-600 font-light">Active Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-black tracking-tight mb-2">15,000km</div>
                <div className="text-neutral-600 font-light">Pipeline Network</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-black tracking-tight mb-2">250+</div>
                <div className="text-neutral-600 font-light">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-black tracking-tight mb-2">50+</div>
                <div className="text-neutral-600 font-light">Years of Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6 tracking-tighter">
              Ready to get started?
            </h2>
            <p className="text-lg text-neutral-300 font-light mb-8 max-w-2xl mx-auto">
              Experience the future of customer service with our AI assistant. 
              Simple, fast, and always available.
            </p>
            <Button 
              size="lg" 
              className="bg-white hover:bg-neutral-100 text-black border-0 h-12 px-8 text-base font-medium rounded-md transition-colors"
            >
              Start now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <ChatWidget />
    </div>
  );
};

export default Index;
