import React, { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";

// Improved bot responses
const botResponses: Record<string, string> = {
  "how does zero investment work":
    "With our zero-investment plan, you pay nothing upfront! We install high-quality solar panels at no cost. You pay a small monthly fee (usually lower than your current electricity bill). After the contract ends, the system is yours, and you enjoy free electricity!",
  "what is the installation process":
    "Our installation is quick and hassle-free:\n1) Free site assessment\n2) Custom system design & approval\n3) Professional installation in 1-2 days\n4) Grid connection & commissioning\n5) Continuous monitoring & support\nWe handle all paperwork and permits for you!",
  "how much can i save monthly":
    "Savings vary based on your electricity usage and system size. Most customers save 20-50% immediately. After the contract, you can enjoy 90-100% savings. Example: A ₹10,000 bill may reduce to ₹8,000 initially and eventually ₹0!",
  "which areas do you serve":
    "We operate in 12 states including Maharashtra, Karnataka, Tamil Nadu, Gujarat, Rajasthan, Delhi NCR, UP, Haryana, Punjab, Telangana, Andhra Pradesh, and Kerala. We cover 100+ cities and 500+ towns!",
  "warranty":
    "We provide a 25-year warranty covering panels, inverters, and installation workmanship. You also get 24/7 monitoring and maintenance support throughout the warranty period!",
};

// Quick responses
const quickResponses = [
  "How does zero investment work",
  "What is the installation process",
  "How much can I save monthly",
  "Which areas do you serve",
  "Warranty",
];

// Message type
type MessageType = {
  id: number;
  sender: "user" | "bot";
  text: string;
  time: Date;
};

// Message bubble component
const MessageBubble = ({ message }: { message: MessageType }) => (
  <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-xs p-3 rounded-2xl break-words whitespace-pre-wrap ${
        message.sender === "user"
          ? "bg-secondary text-white"
          : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
      }`}
    >
      <div className="flex items-start space-x-2">
        {message.sender === "bot" && (
          <Bot size={16} className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
        )}
        {message.sender === "user" && <User size={16} className="mt-1 flex-shrink-0" />}
        <div className="flex-1">
          <p className="text-sm leading-relaxed">{message.text}</p>
          <p
            className={`text-xs mt-1 opacity-70 ${
              message.sender === "user"
                ? "text-white"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {message.time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Main Chatbot
const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: 1,
      sender: "bot",
      text:
        "Hi! I'm AXISOL's FAQ assistant. I can help you with questions about our zero-investment solar scheme, installation process, and more. How can I help you today?",
      time: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Generate bot response
  const sendBotResponse = useCallback((input: string) => {
    const lowerInput = input.toLowerCase();
    let response =
      "Thank you for your question! For detailed information, please contact our expert team at +91 1800-123-4567 or request a free consultation. We're here to help you save money with solar energy!";

    for (const [key, answer] of Object.entries(botResponses)) {
      if (lowerInput.includes(key)) {
        response = answer;
        break;
      }
    }

    setMessages((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1].id + 1,
        sender: "bot",
        text: response,
        time: new Date(),
      },
    ]);
  }, []);

  // Send user message
  const handleSendMessage = useCallback(
    (messageToSend?: string) => {
      const msg = (typeof messageToSend === "string" ? messageToSend : inputMessage).trim();
      if (!msg) return;

      setMessages((prev) => [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          sender: "user",
          text: msg,
          time: new Date(),
        },
      ]);

      if (typeof messageToSend !== "string") setInputMessage("");

      setTimeout(() => sendBotResponse(msg), 700);
    },
    [inputMessage, sendBotResponse]
  );

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open FAQ Chatbot"
          className="fixed bottom-6 right-6 w-16 h-16 bg-secondary text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 animate-pulse"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[32rem] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-secondary text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold">FAQ Chatbot</h3>
                <p className="text-sm opacity-90">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close FAQ Chatbot"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 flex flex-col p-4 space-y-2 overflow-hidden">
            <div className="flex-1 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick responses */}
            <div className="flex flex-wrap gap-2 mt-2">
              {quickResponses.map((qr, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(qr)}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  {qr}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex space-x-2 mt-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything about solar..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                aria-label="Type your message"
                autoFocus
              />
              <button
                onClick={() => handleSendMessage()}
                className="p-2 bg-secondary text-white hover:scale-110 transition-transform rounded-lg"
                aria-label="Send Message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
