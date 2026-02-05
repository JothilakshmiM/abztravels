import React, { useState, useEffect, useRef, useCallback } from "react";

const steps = [
  { field: "pickup", prompt: "Where is your pickup location?" },
  { field: "drop", prompt: "Where is your drop location?" },
  { field: "date", prompt: "When do you want to leave? Say 'today', 'tomorrow', or a date." },
  { field: "days", prompt: "How many days do you need the vehicle for?" },
  { field: "vehicle", prompt: "Which vehicle do you prefer? Sedan, SUV, Tempo, or Luxury?" },
  { field: "persons", prompt: "How many people are travelling?" }
];

const VoiceAssistant = ({ formData, setFormData }) => {
  const [isListening, setIsListening] = useState(false);
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState("");

  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);

  const speak = useCallback((text, callback) => {
    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.onend = () => {
      if (callback) callback();
    };
    synthRef.current.speak(utterance);
  }, []);

  const normalizeInput = (field, text) => {
    const lowerText = text.toLowerCase();

    if (field === "days" || field === "persons") {
      const match = lowerText.match(/\d+/);
      if (match) return match[0];
      const numberWords = {
        "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
        "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10
      };
      for (let word in numberWords) {
        if (lowerText.includes(word)) return numberWords[word];
      }
      return text; // Fallback
    }

    if (field === "vehicle") {
      if (lowerText.includes("sedan")) return "Sedan";
      if (lowerText.includes("suv")) return "SUV";
      if (lowerText.includes("tempo") || lowerText.includes("traveller")) return "Tempo Traveler";
      if (lowerText.includes("luxury")) return "Luxury";
      return "";
    }

    if (field === "date") {
      const today = new Date();
      if (lowerText.includes("today")) {
        return today.toISOString().split("T")[0];
      }
      if (lowerText.includes("tomorrow")) {
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split("T")[0];
      }
      // Simple parsing attempt for numeric dates is complex without library, 
      // relying on user checking the form or saying relative dates.
      // If the browser supports Date.parse heavily, we could try, but often risky.
      // Leaving as is if not relative.
    }

    return text.replace(/[.]/g, ""); // Remove trailing periods
  };

  const startListening = useCallback((stepIndex) => {
    if (!recognitionRef.current) return;

    // Slight delay to ensure speaking is done
    setTimeout(() => {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        setStatus(`Listening for ${steps[stepIndex].field}...`);
      } catch (e) {
        // Already started or error
        console.error("Recognition start error", e);
      }
    }, 500);
  }, [steps]);

  const processResult = useCallback((transcript, stepIndex) => {
    const currentStep = steps[stepIndex];
    const value = normalizeInput(currentStep.field, transcript);

    setFormData(prev => ({ ...prev, [currentStep.field]: value }));

    const nextStepIndex = stepIndex + 1;
    const response = value ? `Got it.` : `I didn't catch that.`;

    // If we normalized to empty string (e.g. invalid vehicle), maybe we should ask again? 
    // For now, proceeding straightforwardly to keep flow simple, user can edit usage.

    if (nextStepIndex < steps.length) {
      speak(`${response} ${steps[nextStepIndex].prompt}`, () => {
        startListening(nextStepIndex);
      });
    } else {
      speak("Thank you. I have filled the form. Please review and submit.", () => {
        setActive(false);
        setStatus("Completed");
        setIsListening(false);
      });
    }
  }, [setFormData, speak, startListening, steps]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setIsListening(false);

        // Find which step we are on based on missing data or state? 
        // Better to track state in a ref or use the closure's state if we rely on recursion.
        // Actually, the `startListening` pattern above is tricky with closures. 
        // Let's rely on a ref to track current step to avoid closure staleness if we used local state.

        // Wait! processResult needs to know the step.
        // The simplistic architecture in original file used `step` state. 
        // Let's stick to a state-based approach or Ref-based.
        // Since `onresult` is bound once, we need a Ref for current step.
      };

      recognitionRef.current = recognition;
    }
  }, []);

  // We need to manage the step flow. 
  // Let's use a Ref for current step index to avoid re-binding `onresult` constantly.
  const stepRef = useRef(0);

  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setIsListening(false);
        processResult(transcript, stepRef.current);
        stepRef.current += 1;
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech error", event.error);
        setIsListening(false);
        speak("Sorry, I didn't hear that. Please try again.", () => {
          startListening(stepRef.current);
        });
      };
    }
  }, [processResult, speak, startListening]);

  const startAssistant = () => {
    setActive(true);
    stepRef.current = 0;
    speak(`Hello! ${steps[0].prompt}`, () => {
      startListening(0);
    });
  };

  if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
    return null; // or message that browser not supported
  }

  return (
    <div className="voice-assistant-container" style={{ margin: "20px 0", textAlign: "center" }}>
      {!active && (
        <button
          onClick={startAssistant}
          className="voice-start-btn"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "0 auto"
          }}
        >
          <span>🎙️</span> Start Voice Booking
        </button>
      )}

      {active && (
        <div className="voice-status" style={{ padding: "15px", background: "#f5f5f5", borderRadius: "8px" }}>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
            {isListening ? "👂 Listening..." : "🤖 Speaking..."}
          </p>
          <p>{status}</p>
          <button
            onClick={() => { setActive(false); synthRef.current.cancel(); }}
            style={{ marginTop: "10px", padding: "5px 10px", background: "#ff4444", color: "white", border: "none", borderRadius: "4px" }}
          >
            Stop Assistant
          </button>
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;
