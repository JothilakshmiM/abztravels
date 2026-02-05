import { useRef, useEffect, useState } from 'react';
import { FaMicrophone, FaTimes } from 'react-icons/fa';

const VoiceAssistant = ({ form, setForm }) => {
  const startedRef = useRef(false);
  const currentIndexRef = useRef(0);
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState("Click mic to start");
  const [isVisible, setIsVisible] = useState(true);

  const questions = [
    { key: 'pickup', prompt: 'பிக் அப் இடம் எங்கே?' },
    { key: 'dropoff', prompt: 'டிராப் ஆப் இடம் எங்கே?' },
    { key: 'date', prompt: 'பிக் அப் தேதி எப்போது? (உதாரணம்: 2025-08-01)' },
    { key: 'vehicleType', prompt: 'வாகன வகையை சொல்லுங்கள் (Car, SUV, Van, Luxury)' },
    { key: 'passengers', prompt: 'பயணிகளின் எண்ணிக்கையை சொல்லுங்கள்' }
  ];

  const speak = (text, callback) => {
    setMessage(text);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ta-IN';
    utterance.rate = 0.85;
    utterance.onend = () => {
        if (callback) callback();
    };
    speechSynthesis.speak(utterance);
  };

  const listen = () => {
    setIsListening(true);
    setMessage("Listening...");
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ta-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      setIsListening(false);
      const response = event.results[0][0].transcript.toLowerCase();
      handleInitialOrFormResponse(response);
    };

    recognition.onerror = () => {
      setIsListening(false);
      speak('தயவு செய்து மீண்டும் சொல்லுங்கள்', () => listen());
    };

    recognition.start();
  };

  const handleInitialOrFormResponse = (response) => {
    if (!startedRef.current) {
      if (response.includes('வாகனம்') || response.includes('புக்கிங்') || response.includes('booking')) {
        startedRef.current = true;
        speak('சரி, ஆரம்பிப்போம்', () => askQuestion());
      } else {
        speak('தயவு செய்து உங்கள் தேவையை கூறுங்கள். உதாரணம்: எனக்கு வாகனம் வேண்டும்', () => listen());
      }
      return;
    }

    const current = questions[currentIndexRef.current];
    const key = current.key;

    if (key === 'passengers') {
      const number = parseInt(response);
      if (!isNaN(number) && number > 0) {
        setForm((prev) => ({ ...prev, passengers: number }));
      } else {
        speak('தவறான எண்ணிக்கை. மீண்டும் சொல்லுங்கள்', () => listen());
        return;
      }
    } else {
      setForm((prev) => ({ ...prev, [key]: response }));
    }

    currentIndexRef.current++;
    if (currentIndexRef.current < questions.length) {
      askQuestion();
    } else {
      speak('உங்கள் தகவல்கள் வெற்றிகரமாக பதிவு செய்யப்பட்டது. நன்றி!', () => {
          setMessage("Booking Completed!");
          setTimeout(() => setIsVisible(false), 3000);
      });
    }
  };

  const askQuestion = () => {
    const current = questions[currentIndexRef.current];
    speak(current.prompt, () => setTimeout(() => listen(), 500));
  };

  const startAssistant = () => {
    startedRef.current = true; // Manual start assumes intent
    speak('வணக்கம்! Autobotz Voice Assistant. புக் செய்ய உதவு கிறேன்.', () => askQuestion());
  };

    if (!isVisible) return <button className="voice-assistant-fab" onClick={() => setIsVisible(true)}><FaMicrophone /></button>;

  return (
    <div className="voice-assistant-ui">
        <div className="voice-header">
            <h4>Voice Assistant (Tamil)</h4>
            <button onClick={() => setIsVisible(false)}><FaTimes /></button>
        </div>
        <div className="voice-status">
            {isListening ? <div className="pulse-ring"></div> : null}
            <p>{message}</p>
        </div>
        {!isListening && (
            <button className="voice-btn" onClick={startAssistant}>
                <FaMicrophone /> Strat Booking
            </button>
        )}
    </div>
  );
};

export default VoiceAssistant;
