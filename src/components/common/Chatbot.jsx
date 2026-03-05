"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaComments, FaPaperPlane, FaTimes, FaRobot, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import '../../styles/Chatbot.css';

const knowledgeBase = [
    // --- 1. Product Variations & Comparisons ---
    {
        keywords: ["category","categories", "types", "kinds", "options", "variations", "difference", "compare", "which one", "comparison", "versus", "vs", "better", "selection", "choices", "variety", "thickness", "levels", "grades", "range", "collection", "models"],
        answer: "We offer three premium thickness levels to suit your needs:\n- **Essential**: Light, airy, and flexible (Standard weight)\n- **Premium**: Durable with a balanced, high-quality drape\n- **HeavyDuty**: Thick, weighted, and hotel-grade quality\n\nAll our liners are 100% waterproof and eco-friendly! 🌿"
    },

    // --- 2. Material Science & Toxicity ---
    {
        keywords: ["material", "made of", "plastic", "vinyl", "fabric", "peva", "eva", "pvc", "toxic", "non-toxic", "safe", "safety", "bpa", "phthalate", "chemical", "composition", "ingredients", "substance", "allergy", "hypoallergenic", "skin safe", "dermatologist", "irritant", "sensitive"],
        answer: "Our liners are crafted from **100% high-quality PEVA** (Polyethylene Vinyl Acetate). This is a non-toxic, eco-friendly alternative to PVC that is:\n- ✅ Chlorine-free and odorless\n- ✅ Phthalate-free\n- ✅ BPA-free\n- ✅ Safe for children and pets"
    },

    // --- 3. Certifications & Lab Testing ---
    {
        keywords: ["certification", "certified", "standard", "oeko", "test", "tested", "prop 65", "compliance", "lab", "approved", "regulation", "quality control", "guarantee", "oekotex", "third party", "verified", "authentic"],
        answer: "Your safety is our priority. Our materials are **OEKO-TEX Standard 100 certified**, ensuring they have been rigorously tested for over 100 harmful substances. We are also strictly **California Prop 65 compliant**."
    },

    // --- 4. Sustainability & Environmental Impact ---
    {
        keywords: ["eco", "environment", "sustainable", "recycle", "earth", "green", "biodegradable", "landfill", "mission", "vision", "planet", "carbon", "nature", "friendly", "renewable", "waste", "microplastic", "pollution", "ocean", "decompose"],
        answer: "SustainAura liners are designed with the planet in mind. Unlike PVC, PEVA does not release harmful VOCs and is recyclable (Category 4 LDPE). Our mission is to eliminate single-use plastics from every bathroom! 🌍"
    },

    // --- 5. Eco-Friendly Packaging ---
    {
        keywords: ["packaging", "package", "box", "plastic free", "wrap", "shipping material", "envelope", "delivered in", "unboxing", "compostable", "zero waste", "minimalist", "soy ink", "reusable bag"],
        answer: "We use zero plastic packaging! 📦 Your liner arrives in a **reusable fabric bag** or a **recyclable craft paper box** printed with soy-based inks. We are committed to a minimal-waste delivery process from start to finish."
    },

    // --- 6. Odor & Off-gassing ---
    {
        keywords: ["smell", "odor", "scent", "stink", "fume", "gas", "off-gas", "perfume", "fragrance", "headache", "chemical smell", "breath", "nose", "strong smell", "plastic smell", "ventilation"],
        answer: "Because we use high-grade PEVA, our liners are **completely odorless**. You won't experience the strong, headache-inducing chemical 'off-gassing' common with traditional vinyl or PVC liners."
    },

    // --- 7. Essential Series Details ---
    {
        keywords: ["essential", "lightweight", "light", "thin", "basic", "standard", "flexible", "airy", "entry", "cheap", "simplest", "thinnest", "budget", "low cost", "easy"],
        answer: "Our **Essential** series is perfect for everyday use. It is our most flexible and breathable option, designed to dry quickly.\n\n**Best for:** Guest bathrooms, frequent travelers, or those who prefer a lightweight feel.\n\n[Shop Essential Collection](https://a.co/d/1gs8ryW)"
    },

    // --- 8. Premium Series Details ---
    {
        keywords: ["premium", "mid", "medium", "balance", "middle", "average", "standard weight", "normal", "everyday", "regular", "durable", "moderate", "standard weight"],
        answer: "Our **Premium** series offers the perfect middle ground. It provides a heavier drape than the Essential line while remaining flexible and easy to handle.\n\n**Best for:** Daily family use and master bathrooms where you want a high-end feel.\n\n[Shop Premium Collection](https://a.co/d/1gs8ryW)"
    },

    // --- 9. HeavyDuty Series Details ---
    {
        keywords: ["heavyduty", "heavy duty", "heavy", "thick", "hotel", "luxury", "strongest", "heaviest", "durable", "tough", "commercial", "stiff", "weighted", "top tier", "thickest", "industrial", "sturdy"],
        answer: "Our **HeavyDuty** series is our top-tier liner. It features a professional hotel-quality weight with maximum thickness to ensure a superior drape.\n\n**Best for:** Luxury setups, high-traffic showers, and preventing the curtain from billowing inward.\n\n[Shop HeavyDuty Collection](https://a.co/d/1gs8ryW)"
    },

    // --- 10. Magnets & Stability ---
    {
        keywords: ["magnet", "stick", "billow", "fly", "cling", "blow", "bottom", "weight", "anchor", "stay in place", "moving", "suction", "weighted hem", "heavy bottom"],
        answer: "Yes! All SustainAura liners include **three weighted magnets** at the bottom hem. These keep the liner firmly against your tub to prevent it from 'billowing' or sticking to your legs while you shower."
    },

    // --- 11. Grommets & Durability ---
    {
        keywords: ["grommet", "hook", "hole", "rust", "tear", "rip", "metal", "ring", "eyelet", "reinforced", "header", "hanging", "sturdy top", "broken holes", "durability"],
        answer: "We use **rust-proof metal grommets** for our hook holes. This prevents the header from tearing (a common issue with cheap plastic holes) and ensures your liner stays securely hung for a long time."
    },

    // --- 12. Sizing & Dimensions ---
    {
        keywords: ["size", "dimension", "fit", "measure", "long", "width", "height", "inches", "cm", "large", "small", "stall", "tall", "short", "length", "standard size", "square", "72x72", "72 inch", "fits my tub"],
        answer: "Our liners come in the standard industry size of **72\" x 72\"** (183cm x 183cm). This fits almost all standard bathtubs and shower stalls perfectly. We recommend measuring your rod height to be sure!"
    },

    // --- 13. Aesthetics & Transparency ---
    {
        keywords: ["color", "style", "finish", "look", "clear", "opaque", "transparent", "see through", "pattern", "design", "frosty", "white", "privacy", "visible", "appearance", "see-through", "matte"],
        answer: "We offer three elegant finishes:\n1. **Crystal Clear**: Transparent for an invisible look that lets in maximum light.\n2. **Frosty**: A semi-transparent matte finish for a balance of light and privacy.\n3. **Solid White**: Fully opaque for complete privacy."
    },

    // --- 14. Cleaning & Mold Prevention ---
    {
        keywords: ["clean", "wash", "maintenance", "mold", "mildew", "bacteria", "fungus", "soap", "dirty", "scrub", "washing machine", "laundry", "stain", "yellow", "slime", "hygiene", "pink mold", "black mold", "scum", "buildup"],
        answer: "To keep your liner fresh and mold-free:\n1. **Daily**: Shake off excess water and keep the liner spread open to air dry.\n2. **Clean**: Wipe with a damp cloth and mild soap.\n3. **Deep Clean**: Machine wash cold on a gentle cycle. **Do not use heat or a dryer.**"
    },

    // --- 15. Drying & Heat Warning ---
    {
        keywords: ["dry", "drying", "dryer", "heat", "iron", "melt", "shrink", "hang", "air dry", "tumble dry", "radiator", "warm"],
        answer: "⚠️ **Important:** Do not put your PEVA liner in the dryer or use an iron. High heat will melt or deform the material. Simply hang it fully open to air dry; it is naturally quick-drying!"
    },

    // --- 16. Hard Water & Buildup ---
    {
        keywords: ["hard water", "calcium", "white spots", "residue", "mineral", "deposits", "vinegar", "cloudy", "hazy"],
        answer: "If you have hard water, you might notice mineral buildup. We recommend wiping the liner with a solution of **equal parts water and white vinegar** once a month to keep it crystal clear!"
    },

    // --- 17. Hook & Rod Compatibility ---
    {
        keywords: ["hook", "ring", "rod", "hanger", "roller", "compatible", "fit hooks", "curtain rings", "tension rod"],
        answer: "Our liners feature standard-sized grommets that are compatible with all major hook types, including C-rings, roller rings, and S-hooks."
    },

    // --- 18. Warranty & Returns ---
    {
        keywords: ["return", "refund", "exchange", "warranty", "guarantee", "broken", "defect", "problem", "money back", "faulty", "damaged", "policy", "satisfaction", "trial"],
        answer: "We offer a **30-day risk-free return policy** on unused items. Additionally, all our products include a **one-year warranty** against manufacturing defects. We stand by our quality!"
    },

    // --- 19. Company Story & Values ---
    {
        keywords: ["story", "about", "founder", "started", "who are you", "sustainaura", "origin", "goal", "mission", "aim", "objective", "purpose", "values", "history", "owners", "brand", "husband and wife"],
        answer: "SustainAura was founded by a husband-and-wife team tired of 'greenwashing.' We wanted to create home products that were truly safe, sustainable, and high-performing. We are dedicated to ethical craftsmanship and effortless eco-living."
    },

    // --- 20. Apartment & Dorm Use ---
    {
        keywords: ["apartment", "dorm", "college", "rental", "renter", "temporary", "moving", "gift", "new home"],
        answer: "Our liners are a favorite for renters and students! They are easy to install, affordable, and because they are non-toxic, they won't leave your small apartment smelling like chemicals."
    },

    // --- 21. Greetings ---
    {
        keywords: ["hello", "hi", "hey", "start", "greeting", "morning", "afternoon", "evening", "yo", "sup", "anybody there", "help", "welcome"],
        answer: "Hello! 👋 I'm your SustainAura assistant. I can help you choose between our **Essential, Premium, and HeavyDuty** liners, or answer questions about care and materials. How can I help you today?"
    },

    // --- 22. Appreciation ---
    {
        keywords: ["thank", "thanks", "thx", "good", "great", "cool", "awesome", "perfect", "appreciated", "helpful"],
        answer: "You're very welcome! If you have any other questions, feel free to ask. Happy showering! 🚿"
    },

    // --- 23. Human Support ---
    {
        keywords: ["contact", "support", "email", "phone", "human", "person", "agent", "talk to", "representative", "customer service", "help desk", "real person", "call", "address"],
        answer: "Need to speak with a human? You can email our team at **info@sustainaura.eco**. We typically respond within 24 hours!"
    }
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [hasHydrated, setHasHydrated] = useState(false);
    const [messages, setMessages] = useState([
        { 
            text: "Hi there! 👋 I can help with questions about our eco-friendly liners, material safety, or care instructions.", 
            sender: "bot",
            timestamp: new Date().toISOString()
        }
    ]);
    
    const messagesEndRef = useRef(null);

    // Hydrate from sessionStorage after component mounts (client-side only)
    useEffect(() => {
        setHasHydrated(true);
        try {
            const savedMessages = sessionStorage.getItem('sustainaura_chat_messages');
            if (savedMessages) {
                const parsedMessages = JSON.parse(savedMessages);
                // Ensure we have a valid array and clean the data
                if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
                    // Clean messages - ensure text is always a string
                    const cleanedMessages = parsedMessages.map(msg => ({
                        ...msg,
                        text: typeof msg.text === 'string' ? msg.text : String(msg.text)
                    }));
                    setMessages(cleanedMessages);
                }
            }
        } catch (e) {
            console.error('Error parsing saved messages:', e);
            // Clear corrupted data
            sessionStorage.removeItem('sustainaura_chat_messages');
        }
    }, []);

    // Save messages to sessionStorage whenever they change
    useEffect(() => {
        if (hasHydrated) {
            try {
                // Only save string messages, not React elements
                const messagesToSave = messages.map(msg => ({
                    ...msg,
                    text: typeof msg.text === 'string' ? msg.text : String(msg.text)
                }));
                sessionStorage.setItem('sustainaura_chat_messages', JSON.stringify(messagesToSave));
            } catch (e) {
                console.error('Error saving messages:', e);
            }
        }
    }, [messages, hasHydrated]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen && hasHydrated) {
            scrollToBottom();
        }
    }, [messages, isOpen, hasHydrated]);

    const findAnswer = (query) => {
        const lowerQuery = query.toLowerCase();
        for (let entry of knowledgeBase) {
            if (entry.keywords.some(keyword => lowerQuery.includes(keyword))) {
                return entry.answer;
            }
        }
        return null;
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim() || !hasHydrated) return;

        const userMsg = { 
            text: input, 
            sender: "user",
            timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, userMsg]);

        const currentInput = input;
        setInput("");

        setTimeout(() => {
            const answer = findAnswer(currentInput);
            if (answer) {
                setMessages(prev => [...prev, { 
                    text: answer, 
                    sender: "bot",
                    timestamp: new Date().toISOString()
                }]);
            } else {
                setMessages(prev => [...prev, {
                    text: "I'm sorry,Please fill out our contact form or email us at info@sustainaura.eco so our team can assist you!",
                    sender: "bot",
                    timestamp: new Date().toISOString()
                }]);
            }
        }, 600);
    };

    // Clear chat history without asking for confirmation
    const clearChatHistory = () => {
        if (!hasHydrated) return;
        
        const defaultMessage = { 
            text: "Hi there! 👋 I can help with questions about our eco-friendly liners, material safety, or care instructions.", 
            sender: "bot",
            timestamp: new Date().toISOString()
        };
        setMessages([defaultMessage]);
        try {
            sessionStorage.setItem('sustainaura_chat_messages', JSON.stringify([defaultMessage]));
        } catch (e) {
            console.error('Error clearing chat history:', e);
        }
    };

    // Don't render notification badge until hydrated
    const userMessageCount = hasHydrated ? messages.filter(msg => msg.sender === 'user').length : 0;

    return (
        <>
            <AnimatePresence>
                {isOpen && hasHydrated && (
                    <motion.div
                        className="chat-window"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="chat-header">
                            <div className="header-info">
                                <FaRobot className="bot-avatar-icon" />
                                <div>
                                    <h3>SustainAura Support</h3>
                                    <span className="status-dot">Online</span>
                                </div>
                            </div>
                            <div className="header-actions">
                                {hasHydrated && (
                                    <button 
                                        onClick={clearChatHistory} 
                                        className="clear-history-btn"
                                        title="Clear chat history"
                                    >
                                        <FaTrash className="clear-icon" />
                                        Clear History
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="chat-messages">
                            {hasHydrated && messages.map((msg, idx) => (
                                <div key={idx} className={`message ${msg.sender}`}>
                                    {msg.sender === 'bot' && (
                                        <div className="msg-avatar">
                                            <FaRobot />
                                        </div>
                                    )}
                                    <div className="msg-bubble">
                                        {typeof msg.text === 'string' 
                                            ? msg.text.split('\n').map((line, i) => (
                                                <span key={i}>{line}<br/></span>
                                              )) 
                                            : String(msg.text)}
                                        <div className="msg-timestamp">
                                            {new Date(msg.timestamp).toLocaleTimeString([], { 
                                                hour: '2-digit', 
                                                minute: '2-digit' 
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <form className="chat-input-area" onSubmit={handleSend}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="How can we help?"
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        handleSend(e);
                                    }
                                }}
                                disabled={!hasHydrated}
                            />
                            <button 
                                type="submit" 
                                className="send-btn" 
                                disabled={!input.trim() || !hasHydrated}
                            >
                                <FaPaperPlane />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className="chat-toggle-btn"
                onClick={() => hasHydrated && setIsOpen(!isOpen)}
                whileHover={hasHydrated ? { scale: 1.1 } : {}}
                whileTap={hasHydrated ? { scale: 0.9 } : {}}
                title="Chat with SustainAura Assistant"
                style={{ cursor: hasHydrated ? 'pointer' : 'default' }}
            >
                {isOpen ? <FaTimes /> : <FaComments />}
                {hasHydrated && userMessageCount > 0 && (
                    <span className="chat-notification-badge">
                        {userMessageCount}
                    </span>
                )}
            </motion.button>
        </>
    );
};

export default Chatbot;