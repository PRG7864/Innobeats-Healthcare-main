import React, { useState, useEffect, useRef } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm INNO, your Innobeats Healthcare Solutions Assistant.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll messages to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    // Show greeting bubble after a short delay if not already open
    if (!isOpen) {
      const timer = setTimeout(() => {
        setShowGreeting(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleCloseGreeting = (e) => {
    e.stopPropagation(); // Prevent opening the chatbot
    setShowGreeting(false);
  };

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    if (showGreeting) {
      setShowGreeting(false);
    }
  };

  const getBotResponse = (input) => {
    const text = input.toLowerCase();
    
    if (text.includes("infection") || text.includes("air") || text.includes("decontamination") || text.includes("genano")) {
      return "Genano Air Decontamination Units utilize filter-less nanotechnology to destroy airborne pathogens down to 0.003 micrometers. It provides clinical-grade protection for high-risk zones, isolation wards, and ICU environments.";
    }
    
    if (text.includes("ot") || text.includes("operating") || text.includes("theatre") || text.includes("modular")) {
      return "Innobeats offers turnkey Modular Operating Theatres equipped with anti-microbial wall panels, hermetically sealed doors, laminar flow air systems, and integrated surgical control panels compliant with NABH standards.";
    }
    
    if (text.includes("pacemaker") || text.includes("cardiac") || text.includes("crm") || text.includes("valve")) {
      return "Our Cardiac Science line features the IB-Pulse platform which includes single and dual-chamber pacemakers, CRT biventricular resynchronization devices, ICDs, and premium bioprosthetic/mechanical structural heart valves.";
    }
    
    if (text.includes("imaging") || text.includes("diagnostic") || text.includes("x-ray") || text.includes("c-arm")) {
      return "We supply high-resolution digital radiography, portable X-ray systems, and C-arm units integrated with advanced PACS imaging and diagnostic overlays for surgical decision support.";
    }
    
    if (text.includes("contact") || text.includes("support") || text.includes("help") || text.includes("email") || text.includes("phone")) {
      return "You can reach our Pan-India support desk 24/7. Contact us at support@innobeats.in or submit an inquiry directly through our Contact Page. Our technical SLAs ensure a response within 2 hours.";
    }

    if (text.includes("hi") || text.includes("hello") || text.includes("hey")) {
      return "Hello! How can I assist you with Innobeats solutions, partners, or clinical infrastructure products today?";
    }

    return "Thank you for your message. A clinical systems engineer will review your inquiry. You can also reach us directly at contact@innobeats.in for immediate assistance.";
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || userInput;
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setUserInput("");

    // Simulate bot typing delay
    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: getBotResponse(text),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 800);
  };

  const handleQuickQuestion = (question) => {
    handleSendMessage(question);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* 1. Speech Greeting Bubble */}
      {showGreeting && !isOpen && (
        <div 
          onClick={handleToggleChat}
          className="absolute bottom-20 right-2 w-[280px] bg-white border border-brand-blue/10 rounded-2xl p-5 shadow-2xl cursor-pointer animate-fade-in transition-all duration-300 hover:translate-y-[-2px]"
          style={{
            boxShadow: "0 15px 35px rgba(16, 32, 51, 0.15)",
          }}
        >
          {/* Avatar on top border */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md bg-brand-wash">
            <img 
              src="/assets/chatbot-avatar.png" 
              alt="INNO Avatar" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Close button */}
          <button 
            onClick={handleCloseGreeting}
            className="absolute top-3 right-3 text-brand-muted hover:text-brand-navy p-1 transition-colors"
            aria-label="Close greeting"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Greeting Text */}
          <div className="mt-4 text-center">
            <p className="text-brand-navy font-semibold text-[14px] leading-relaxed">
              Hi! I'm INNO, your Innobeats Healthcare Solutions Assistant.
            </p>
          </div>
        </div>
      )}

      {/* 2. Floating Circular Gradient Button */}
      <button
        onClick={handleToggleChat}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform active:scale-95 ${
          isOpen 
            ? "bg-brand-navy hover:bg-brand-navy/90 text-white rotate-90" 
            : "bg-gradient-to-tr from-[#f6ad55] to-[#f687b3] hover:shadow-xl hover:scale-105 text-white"
        }`}
        style={{
          boxShadow: isOpen ? "0 10px 25px rgba(16, 32, 51, 0.25)" : "0 10px 25px rgba(246, 135, 179, 0.4)",
          background: isOpen ? "" : "linear-gradient(135deg, #fbb6ce 0%, #f6ad55 100%)",
        }}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="#102033" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* 3. Full Chat Panel */}
      {isOpen && (
        <div 
          className="absolute bottom-20 right-0 w-[360px] max-w-[calc(100vw-32px)] h-[500px] bg-white border border-brand-blue/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scale-in"
          style={{
            boxShadow: "0 20px 50px rgba(16, 32, 51, 0.22)",
          }}
        >
          {/* Header */}
          <div className="p-4 bg-brand-navy text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-brand-green/30 bg-brand-wash">
                <img 
                  src="/assets/chatbot-avatar.png" 
                  alt="INNO Avatar" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-brand-green border-2 border-brand-navy"></span>
              </div>
              <div>
                <h3 className="font-bold text-xs leading-normal tracking-wide">INNO Assistant</h3>
                <span className="text-[10px] text-brand-green font-bold">Online • Clinical Support</span>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors p-1"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-wash/40">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl p-3 shadow-sm text-xs font-semibold ${
                    msg.sender === "user" 
                      ? "bg-brand-blue text-white rounded-br-none" 
                      : "bg-white border border-brand-blue/5 text-brand-navy rounded-bl-none"
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                  <span className={`block text-[9px] mt-1 text-right ${
                    msg.sender === "user" ? "text-white/70" : "text-brand-muted"
                  }`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions (Suggestions) */}
          <div className="px-4 py-2 border-t border-brand-blue/5 bg-white flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
            <button 
              onClick={() => handleQuickQuestion("Air Decontamination")}
              className="px-3 py-1.5 bg-brand-soft-green text-brand-green border border-brand-green/10 rounded-full text-[10px] font-bold hover:bg-brand-green hover:text-white transition-all"
            >
              Air Decontamination
            </button>
            <button 
              onClick={() => handleQuickQuestion("Modular OT Solutions")}
              className="px-3 py-1.5 bg-brand-soft-blue text-brand-blue border border-brand-blue/10 rounded-full text-[10px] font-bold hover:bg-brand-blue hover:text-white transition-all"
            >
              Modular OTs
            </button>
            <button 
              onClick={() => handleQuickQuestion("Cardiac Pacemakers")}
              className="px-3 py-1.5 bg-brand-soft-yellow text-brand-yellow border border-brand-yellow/15 rounded-full text-[10px] font-bold hover:bg-brand-yellow hover:text-white transition-all"
            >
              Pacemakers
            </button>
            <button 
              onClick={() => handleQuickQuestion("Support Contact")}
              className="px-3 py-1.5 bg-red-50 text-brand-red border border-brand-red/10 rounded-full text-[10px] font-bold hover:bg-brand-red hover:text-white transition-all"
            >
              Support SLA
            </button>
          </div>

          {/* Input Form */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            className="p-3 border-t border-brand-blue/10 bg-white flex items-center gap-2"
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask about clinical solutions..."
              className="flex-1 px-3 py-2 bg-brand-wash border border-brand-blue/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/30 text-xs font-semibold text-brand-navy placeholder-brand-muted/70"
            />
            <button
              type="submit"
              disabled={!userInput.trim()}
              className="w-8 h-8 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white flex items-center justify-center disabled:opacity-50 transition-all"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-45">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
