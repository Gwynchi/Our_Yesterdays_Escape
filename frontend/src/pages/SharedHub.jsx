import React, { useCallback, useEffect, useRef, useState } from "react";
import "../App.css";

// Updated to use the new image instead of a video. 
// Make sure to adjust the extension (.jpg/.png) and path to match where you saved it.
const BG_IMG_SRC = "/assets/pictures/background/OYE_img.png"; 
const LOGO_SRC = "/assets/pictures/text/OYE_text.png";

const LOGO_HOLD_MS = 2200; 
const FADE_MS = 700; 
const SESSION_KEY = "oye-intro-played";

const hasPlayed = () => {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
};
const markPlayed = () => {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
  }
};

export default function SharedHub({
  onComplete,
  skipIfPlayed = false,
}) {
  // Since we use a static image now, we can skip the "video" phase 
  // and start directly at the "logo" phase.
  const [phase, setPhase] = useState(() =>
    skipIfPlayed && hasPlayed() ? "skipped" : "logo"
  ); 

  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    markPlayed();
    if (onCompleteRef.current) onCompleteRef.current();
  }, []);

  useEffect(() => {
    if (phase === "skipped") finish();
  }, [phase, finish]);

  useEffect(() => {
    if (phase === "logo") {
      const t = setTimeout(() => setPhase("login"), LOGO_HOLD_MS);
      return () => clearTimeout(t);
    }

    if (phase === "leaving") {
      const t = setTimeout(finish, FADE_MS);
      return () => clearTimeout(t);
    }
  }, [phase, finish]);

  if (phase === "skipped") return null;

  const showLogo = phase === "logo";
  const showLogin = phase === "login";

  return (
    <div className={`oye-intro oye-intro--${phase}`}>
      
      {/* Replaced video tag with the static background image */}
      <img
        className="oye-intro__video object-cover w-full h-full absolute inset-0"
        src={BG_IMG_SRC}
        alt="Background"
      />

      <div className="oye-intro__scrim" />

      {/* Main layout container with adjustment to pull everything up */}
      <div className="oye-stage flex flex-col items-center justify-center w-full min-h-screen absolute inset-0 -mt-24">
        
        {/* Centered logo */}
        <img
          className={`oye-logo mx-auto block object-contain transition-all duration-700 ${showLogo || showLogin ? "is-visible" : ""} ${
            showLogin ? "is-docked" : ""
          }`}
          src={LOGO_SRC}
          alt="Our Yesterday's Escape"
          draggable="false"
        />

        {/* Login Form Container */}
        <div className={`oye-card-wrap w-full max-w-md mx-auto mt-6 ${showLogin ? "is-open" : ""}`}>
          <section
            className="oye-glass w-full"
            aria-hidden={!showLogin}
            inert={!showLogin ? "" : undefined}
          >
            <h1 className="oye-glass__title text-3xl font-sans tracking-[0.2em] text-[#2C1E16] text-center mb-6 font-light uppercase">
              LOGIN
            </h1>
            
            <div className="oye-glass__body">
              <form onSubmit={(e) => {
                e.preventDefault();
                setPhase("leaving"); // Triggers the fade out transition
              }}>
                <input 
                  type="email" 
                  placeholder="email" 
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 border-[#2C1E16]/80 rounded-md focus:outline-none focus:border-[#D4A373] text-center placeholder-[#2C1E16]/70 text-[#2C1E16] mb-4"
                  required
                />
                
                <input 
                  type="password" 
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 border-[#2C1E16]/80 rounded-md focus:outline-none focus:border-[#D4A373] text-center placeholder-[#2C1E16]/70 text-[#2C1E16]"
                  required 
                />

                <div className="text-center mt-6">
                  <p className="text-xs text-[#2C1E16] font-medium mb-4 leading-tight">
                    Haven't registered yet? <a href="#" className="font-bold underline">Click here</a> <br/>
                    so we will see you certainly in Yesterday
                  </p>
                  
                  <button 
                    type="submit" 
                    className="px-8 py-2 bg-transparent border-2 border-[#2C1E16] rounded-md text-[#2C1E16] hover:bg-[#2C1E16] hover:text-[#fdfaf6] transition-colors uppercase tracking-widest text-sm font-bold mt-2"
                  >
                    Done
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}