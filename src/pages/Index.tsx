import ChatWidget from "@/components/ChatWidget";
import {
  FileText,
  PlusCircle,
  MessageSquareWarning,
  AlertTriangle,
  ShieldCheck,
  LineChart,
  Leaf,
} from "lucide-react";
import sngp from "@/assets/sngp.png";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Intelligent Assistance for SNGPL Customers
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl">
                  Navigate Sui Northern Gas Pipelines LTD's services with ease.
                  Our advanced AI assistant is here to provide you with instant
                  support for billing inquiries, connection requests, and
                  service updates, 24/7.
                </p>
              </div>
              <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 pt-12">
                <div className="grid gap-1 rounded-lg border border-slate-200 p-6 shadow-sm bg-white text-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 text-blue-600 rounded-lg p-3">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold">
                      Effortless Bill Management
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500">
                    Check your latest gas bill, understand tariff details, and
                    get information on payment options instantly. No more
                    waiting or complex website navigation.
                  </p>
                </div>
                <div className="grid gap-1 rounded-lg border border-slate-200 p-6 shadow-sm bg-white text-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 text-green-600 rounded-lg p-3">
                      <PlusCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold">
                      Streamlined Connection Process
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500">
                    Whether it's a new domestic or commercial connection, our
                    AI guides you through the application procedure and helps
                    you track its status.
                  </p>
                </div>
                <div className="grid gap-1 rounded-lg border border-slate-200 p-6 shadow-sm bg-white text-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 text-purple-600 rounded-lg p-3">
                      <MessageSquareWarning className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold">
                      Immediate Support & Updates
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500">
                    Lodge complaints, receive service alerts, and get answers
                    to your questions in real-time, ensuring you're always
                    informed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Comprehensive Support for All Your Needs
              </h2>
              <p className="max-w-[600px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI assistant is designed to handle a wide range of
                services, making your interaction with SNGPL seamless and
                efficient.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Track Applications</h3>
                    <p className="text-slate-500">
                      Get real-time status updates for your new connection or
                      other service applications.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Lodge Complaints</h3>
                    <p className="text-slate-500">
                      Easily file a complaint regarding billing, supply, or any
                      other issue and track its resolution.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Access Information</h3>
                    <p className="text-slate-500">
                      Find information on tariffs, consumer gas prices, and
                      official SNGPL announcements without hassle.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  A Commitment to Service Excellence
                </h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are dedicated to providing a secure, reliable, and
                  transparent service experience. Our AI assistant is another
                  step towards that goal.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="SNGPL Pipeline"
                className="mx-auto  overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src={sngp}
                width="310"
              />
              <div className="grid gap-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-amber-500" />
                  <div>
                    <h3 className="text-lg font-bold">Proactive Alerts</h3>
                    <p className="text-sm text-slate-500">
                      Receive timely notifications about planned shutdowns or
                      potential low-pressure situations in your area.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-8 w-8 text-green-500" />
                  <div>
                    <h3 className="text-lg font-bold">Safety First</h3>
                    <p className="text-sm text-slate-500">
                      Access important safety guidelines and Health, Safety &
                      Environment (HSE) policies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <LineChart className="h-8 w-8 text-rose-500" />
                  <div>
                    <h3 className="text-lg font-bold">Investor Relations</h3>
                    <p className="text-sm text-slate-500">
                      Quickly find information on financial reports,
                      shareholder updates, and corporate briefings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Leaf className="h-8 w-8 text-teal-500" />
                  <div>
                    <h3 className="text-lg font-bold">Energy Conservation</h3>
                    <p className="text-sm text-slate-500">
                      Learn about SNGPL's initiatives and get tips on how you
                      can conserve energy and reduce your bills.
                    </p>
                  </div>
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
