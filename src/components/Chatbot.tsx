import React, { useState } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi! I\'m AXISOL\'s FAQ assistant. I can help you with questions about our zero-investment solar scheme, installation process, and more. How can I help you today?',
      time: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    "How does zero investment work?",
    "What is the installation process?",
    "How much can I save monthly?",
    "Which areas do you serve?",
    "What's included in the warranty?"
  ];

  const botResponses = {
    "how does zero investment work": "Our zero investment scheme means you pay nothing upfront! We install premium solar panels at no cost to you. You simply pay us monthly (usually less than your current electricity bill) for a fixed period. After the contract period, you own the system and enjoy completely free electricity!",
    "what is the installation process": "Our installation process is simple: 1) Free site assessment 2) System design & approval 3) Professional installation (1-2 days) 4) Grid connection & commissioning 5) Monitoring & maintenance. We handle all permits and paperwork!",
    "how much can i save monthly": "Savings depend on your current bill and system size. Typically, customers save 20-50% immediately, and after the contract period, enjoy 90-100% savings. For a ₹10,000 monthly bill, you might pay us ₹8,000 initially, then ₹0 after contract completion!",
    "which areas do you serve": "We serve 12 states across India including Maharashtra, Karnataka, Tamil Nadu, Gujarat, Rajasthan, Delhi NCR, UP, Haryana, Punjab, Telangana, Andhra Pradesh, and Kerala. We cover 100+ cities and 500+ towns!",
    "warranty": "We offer industry-leading 25-year warranty covering panels, inverters, and installation workmanship. Plus, we provide 24/7 monitoring and maintenance support throughout the warranty period!"
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputMessage,
      time: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple bot response logic
    setTimeout(() => {
      const lowerInput = inputMessage.toLowerCase();
      let botResponse = "Thank you for your question! For detailed information about this topic, please call our expert team at +91 1800-123-4567 or request a free consultation. We're here to help you save money with solar energy!";

      for (const [key, response] of Object.entries(botResponses)) {
        if (lowerInput.includes(key.toLowerCase())) {
          botResponse = response;
          break;
        }
      }

      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: botResponse,
        time: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-secondary text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 animate-pulse"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[32rem] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 flex items-center justify-between">
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
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <Bot size={16} className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    )}
                    {message.sender === 'user' && (
                      <User size={16} className="mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 opacity-70 ${
                        message.sender === 'user' ? 'text-white' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {message.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Quick questions:</p>
              <div className="space-y-2">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left p-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about solar..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-colors"
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