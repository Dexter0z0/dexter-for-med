import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI study assistant. I can help you with medical questions, explain concepts, and provide study guidance. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Medical concept explanations
    if (lowerMessage.includes('heart') || lowerMessage.includes('cardiac') || lowerMessage.includes('cardiovascular')) {
      return "The cardiovascular system consists of the heart, blood vessels, and blood. The heart has four chambers: two atria (upper chambers) and two ventricles (lower chambers). Key concepts include cardiac output (CO = HR × SV), the cardiac cycle phases, and common conditions like myocardial infarction and heart failure. Would you like me to explain any specific aspect in more detail?";
    }
    
    if (lowerMessage.includes('brain') || lowerMessage.includes('nervous') || lowerMessage.includes('neuron')) {
      return "The nervous system is divided into the central nervous system (brain and spinal cord) and peripheral nervous system. Key concepts include action potentials, neurotransmitters (dopamine, serotonin, acetylcholine), and common disorders like Parkinson's disease and Alzheimer's. The blood-brain barrier protects the brain from toxins. What specific neurological topic would you like to explore?";
    }
    
    if (lowerMessage.includes('hormone') || lowerMessage.includes('endocrine') || lowerMessage.includes('thyroid')) {
      return "The endocrine system uses hormones to regulate body functions. Key glands include the pituitary (master gland), thyroid (metabolism), adrenals (stress response), and pancreas (blood sugar). Common disorders include diabetes, hypothyroidism, and Cushing's syndrome. The hypothalamic-pituitary axis controls many hormonal pathways. Which endocrine topic interests you most?";
    }
    
    if (lowerMessage.includes('lung') || lowerMessage.includes('respiratory') || lowerMessage.includes('breathing')) {
      return "The respiratory system facilitates gas exchange. Key concepts include ventilation (breathing mechanics), perfusion (blood flow), and diffusion (gas exchange at alveoli). Important conditions include asthma, COPD, and pneumonia. The oxygen-hemoglobin dissociation curve shows how oxygen binds to hemoglobin. What respiratory concept would you like me to clarify?";
    }
    
    if (lowerMessage.includes('kidney') || lowerMessage.includes('renal') || lowerMessage.includes('urine')) {
      return "The kidneys filter blood and regulate fluid balance. The nephron is the functional unit, consisting of glomerulus, tubules, and collecting duct. Key processes include filtration, reabsorption, and secretion. Important hormones include ADH (water balance) and aldosterone (sodium balance). Common conditions include acute kidney injury and chronic kidney disease. What renal topic needs clarification?";
    }
    
    if (lowerMessage.includes('stomach') || lowerMessage.includes('digestive') || lowerMessage.includes('gi') || lowerMessage.includes('gastrointestinal')) {
      return "The GI system digests food and absorbs nutrients. Key organs include stomach (acid production), small intestine (absorption), liver (metabolism), and pancreas (enzymes). Important concepts include gastric acid regulation, nutrient absorption mechanisms, and conditions like peptic ulcers and IBD. Which digestive process would you like me to explain?";
    }
    
    // Study tips and methods
    if (lowerMessage.includes('study') || lowerMessage.includes('learn') || lowerMessage.includes('memorize')) {
      return "Here are effective study strategies for medical students: 1) Active recall - test yourself frequently, 2) Spaced repetition - review material at increasing intervals, 3) Clinical correlation - connect basic science to patient cases, 4) Visual aids - use diagrams and flowcharts, 5) Group study - explain concepts to peers. Practice MCQs regularly to test your knowledge. What specific study challenge are you facing?";
    }
    
    if (lowerMessage.includes('exam') || lowerMessage.includes('test') || lowerMessage.includes('preparation')) {
      return "For exam preparation: 1) Create a study schedule 2-3 weeks before, 2) Focus on high-yield topics, 3) Practice past papers and MCQs, 4) Form study groups for discussion, 5) Take regular breaks to avoid burnout, 6) Review weak areas identified through practice tests. The MCQs on this platform are great for self-assessment. Which exam are you preparing for?";
    }
    
    // MCQ and practice guidance
    if (lowerMessage.includes('mcq') || lowerMessage.includes('question') || lowerMessage.includes('practice')) {
      return "For effective MCQ practice: 1) Read questions carefully and identify key words, 2) Eliminate obviously wrong options first, 3) Look for clinical clues in the question stem, 4) Don't second-guess yourself too much, 5) Review explanations for both correct and incorrect answers, 6) Track your performance to identify weak areas. Try the different practice modes on this platform - mixed questions, system-based, or timed practice!";
    }
    
    // General medical education
    if (lowerMessage.includes('medical school') || lowerMessage.includes('medicine') || lowerMessage.includes('doctor')) {
      return "Medical education requires dedication and effective study strategies. Focus on understanding concepts rather than memorization, integrate basic sciences with clinical applications, and practice regularly with MCQs. Remember that becoming a doctor is a journey - be patient with yourself and celebrate small victories. The knowledge you're building now will help you provide excellent patient care. What aspect of medical education would you like guidance on?";
    }
    
    // Default responses for general queries
    const defaultResponses = [
      "That's an interesting question! Could you provide more specific details about the medical topic you'd like to explore? I'm here to help with anatomy, physiology, pathology, and study strategies.",
      "I'd be happy to help you with that medical concept! Could you be more specific about which system or topic you're interested in? I can explain cardiovascular, nervous, endocrine, respiratory, renal, or GI systems.",
      "Great question! To give you the most helpful answer, could you tell me more about the specific medical topic or study challenge you're facing? I'm here to support your learning journey.",
      "I'm here to help with your medical studies! Whether you need explanations of physiological processes, disease mechanisms, or study tips, just let me know what specific area you'd like to focus on."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // 1-3 seconds delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Open AI Assistant"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-blue-600 text-white rounded-t-xl">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">AI Study Assistant</h3>
            <p className="text-xs text-blue-100">Medical Learning Helper</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            aria-label={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`p-2 rounded-full flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}>
                    {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-sm'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[80%]">
                  <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 rounded-bl-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about medical concepts, study tips, or anything else..."
                className="flex-1 resize-none border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                rows={1}
                style={{ minHeight: '38px', maxHeight: '100px' }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIAssistant;