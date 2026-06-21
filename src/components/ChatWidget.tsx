import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: number;
  sender: 'user' | 'support';
  text: string;
}

const QUICK_ACTIONS = [
  { label: 'Cek Harga', message: 'Halo, saya ingin menanyakan harga layanan sedot WC.' },
  { label: 'Booking Darurat', message: 'Halo, saya butuh layanan sedot WC darurat segera!' },
  { label: 'Info Lokasi', message: 'Halo, apakah wilayah saya tercover layanan sedot WC?' },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chat_messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages([{ id: 1, sender: 'support', text: 'Halo! Ada yang bisa kami bantu terkait layanan Sedot WC?' }]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: inputValue,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');

    // Simulate response after a delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'support',
          text: 'Terima kasih atas pesannya. Tim kami akan segera menanggapi inquiry Anda.',
        },
      ]);
    }, 1000);
  };

  const openWhatsApp = (message: string) => {
    const phone = '6285882448632'; // Assuming this is the business number
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-80 h-[450px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col mb-4 overflow-hidden"
          >
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">Chat Support</h3>
              <button onClick={() => setIsOpen(false)} className="hover:bg-slate-800 p-1 rounded-full">
                <X size={18} />
              </button>
            </div>

            <div className="p-3 bg-slate-100 border-b border-slate-200">
               <p className="text-xs font-bold text-slate-500 mb-2 flex items-center gap-1">
                 <Sparkles size={12} />
                 QUICK SEND (WA)
               </p>
               <div className="flex flex-wrap gap-2">
                 {QUICK_ACTIONS.map(action => (
                   <button 
                     key={action.label}
                     onClick={() => openWhatsApp(action.message)}
                     className="bg-white text-green-600 border border-green-200 text-xs px-2 py-1 rounded-full hover:bg-green-50 transition-colors"
                   >
                     {action.label}
                   </button>
                 ))}
               </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl ${msg.sender === 'user' ? 'bg-amber-500 text-white' : 'bg-white border border-slate-200'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-3 border-t border-slate-200 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ketik pesan..."
                className="flex-1 border border-slate-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button onClick={handleSendMessage} className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-800">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-amber-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}
