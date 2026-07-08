import React, { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your scholarship assistant. How can I help you today?", isBot: true }
  ]);

  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom of the chat when a new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // 1. Append User Message
    setMessages((prev) => [...prev, { text: trimmedInput, isBot: false }]);
    setInput("");

    // 2. Simulate Bot Response
    setTimeout(() => {
      let reply = "That sounds interesting! Let me search our platform for scholarships related to that.";
      const textLower = trimmedInput.toLowerCase();
      
      if (textLower.includes("hello") || textLower.includes("hi")) {
        reply = "Hello! How can I help you navigate your scholarship dashboard today?";
      }

      setMessages((prev) => [...prev, { text: reply, isBot: true }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Inline styles mapping your exact CSS configurations */}
      <style>{`
        .chat-toggle-btn {
          position: fixed; bottom: 25px; right: 25px;
          width: 60px; height: 60px;
          background-color: #1e3a8a; color: white;
          border: none; border-radius: 50%;
          font-size: 24px; cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1000; transition: transform 0.2s;
        }
        .chat-toggle-btn:hover { transform: scale(1.05); }
        .chat-window {
          position: fixed; bottom: 95px; right: 25px;
          width: 350px; height: 450px;
          background-color: #ffffff; border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          display: flex; flex-direction: column;
          z-index: 1000; overflow: hidden;
          transition: all 0.3s ease;
        }
        .chat-header {
          background-color: #1e3a8a; color: white;
          padding: 15px; display: flex;
          justify-content: space-between; align-items: center;
        }
        .chat-header h3 { margin: 0; font-size: 16px; }
        .chat-close-btn { background: none; border: none; color: white; font-size: 20px; cursor: pointer; }
        .chat-messages { flex: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; background-color: #f8fafc; }
        .chat-msg { padding: 10px 14px; border-radius: 8px; max-width: 75%; font-size: 14px; line-height: 1.4; }
        .bot-msg { background-color: #e2e8f0; color: #334155; align-self: flex-start; }
        .user-msg { background-color: #1e3a8a; color: white; align-self: flex-end; }
        .chat-input-container { display: flex; padding: 10px; border-top: 1px solid #e2e8f0; background-color: white; }
        .chat-input-field { flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; outline: none; }
        .chat-send-btn { background-color: #1e3a8a; color: white; border: none; padding: 0 15px; margin-left: 8px; border-radius: 6px; cursor: pointer; }
        .chat-send-btn:hover { background-color: #1d4ed8; }
      `}</style>

      {/* Floating Toggle Button */}
      <button className="chat-toggle-btn" onClick={toggleChat}>
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Scholarship Assistant</h3>
            <button className="chat-close-btn" onClick={toggleChat}>&times;</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.isBot ? "bot-msg" : "user-msg"}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input-field"
              placeholder="Ask about scholarships..."
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              autoFocus
            />
            <button className="chat-send-btn" onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}