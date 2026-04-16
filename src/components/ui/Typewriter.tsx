"use client";
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
}

export default function Typewriter({ text, speed = 150, deleteSpeed = 100, delay = 1500 }: TypewriterProps) {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  // Alternating colors: Black for even loops, Grey (text-black/70) for odd loops
  const isBlack = loopNum % 2 === 0;

  useEffect(() => {
    const handleType = () => {
      const fullText = text;
      
      if (!isDeleting) {
        // Typing phase
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText.length + 1 === fullText.length) {
          // Finished typing, wait before deleting
          setTypingSpeed(delay);
          setIsDeleting(true);
        } else {
          setTypingSpeed(speed);
        }
      } else {
        // Deleting phase
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText.length === 0) {
          // Finished deleting, move to next loop and switch color
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(500); // Small pause before typing again
        } else {
          setTypingSpeed(deleteSpeed);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, text, speed, deleteSpeed, delay, typingSpeed]);

  return (
    <span className={`relative transition-colors duration-500 ${isBlack ? 'text-black' : 'text-black/60'}`}>
      {currentText}
      <span className={`inline-block w-[3px] h-[0.8em] ml-1 animate-pulse ${isBlack ? 'bg-black' : 'bg-black/60'}`}></span>
    </span>
  );
}
