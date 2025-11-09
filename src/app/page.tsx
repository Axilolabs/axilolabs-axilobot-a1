'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setCurrentTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコサシスセソ';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(0, 255, 65, 0.15)';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [loading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-green-400 font-mono text-xl mb-8 animate-pulse">
            {'>'} System ready! {progress}%
          </div>
          <div className="w-96 h-6 bg-gray-900 border border-green-500 rounded overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-300 flex items-center"
              style={{ width: `${progress}%` }}
            >
              {Array.from({ length: Math.floor(progress / 5) }).map((_, i) => (
                <div key={i} className="w-4 h-full bg-green-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="relative flex flex-col min-h-screen bg-black overflow-hidden">
      {/* Matrix Rain Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Scanline Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="scanline"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 pb-24">
        {/* Robot Icon */}
        <div className="mb-8">
          <svg 
            className="w-32 h-32 text-green-400 animate-float" 
            viewBox="0 0 512 512" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="currentColor" d="M256 19c-13.8 0-27.9 3.02-41.5 8.48L256 79.44l41.5-51.96C283.9 22.02 269.8 19 256 19zm-59.4 16.96c-18.5 10.27-35.9 24.69-50.9 41.74-10.8 12.21-20.2 25.7-24.8 32.4l-64.8 87.1 59.1 83L95.9 348l71.6 64.2-6.9-27.3 36.1-108.2-40.7 27.1-75.98-106.3 42.28-56.3 97.4 48.7h72.7l97.4-48.7 42.3 56.3-76 106.3-40.8-27.2 1 3.2 35.2 105.1-6.9 27.3 71.5-64.2-19.4-67.8 59.2-83-64.8-87.1c-4.6-6.7-14-20.19-24.8-32.4-15-17.05-32.4-31.47-50.9-41.74L256 110.2zm15.1 256.44l-5 15h98.6l-5-15zm-11.5 34.2l-16.3 49.1h144.2l-16.4-49.1zm-17.3 68.3l12.3 49.2h121.6l12.2-49.2zm33.6 68.4L256 493l39.5-29.7z"/>
          </svg>
        </div>

        {/* Title with Glitch Effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-green-400 font-mono tracking-wider glitch-text">
          AXILOBOT API Manager
        </h1>

        {/* Subtitle */}
        <div className="text-green-400 font-mono text-xl mb-2 border-l-4 border-green-400 pl-4">
          <span className="animate-pulse">{'>>>'}</span> WELCOME TO AXILOBOT API MANAGER
        </div>
        
        <div className="text-green-500 font-mono text-sm mb-12 opacity-70">
          --- Enter the Mission ---
        </div>

        {/* Stats Display */}
        <div className="grid grid-cols-3 gap-8 mb-12 text-center">
          <div className="border border-green-500 p-4 bg-black bg-opacity-50">
            <div className="text-green-400 font-mono text-2xl font-bold">24/7</div>
            <div className="text-green-500 font-mono text-xs">ACTIVE</div>
          </div>
          <div className="border border-green-500 p-4 bg-black bg-opacity-50">
            <div className="text-green-400 font-mono text-2xl font-bold">∞</div>
            <div className="text-green-500 font-mono text-xs">CAPACITY</div>
          </div>
          <div className="border border-green-500 p-4 bg-black bg-opacity-50">
            <div className="text-green-400 font-mono text-2xl font-bold">99%</div>
            <div className="text-green-500 font-mono text-xs">SECURE</div>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/api-dashboard">
          <button className="group relative px-12 py-4 bg-black border-2 border-green-400 text-green-400 font-mono text-lg hover:bg-green-400 hover:text-black transition-all duration-300 overflow-hidden">
            <span className="relative z-10">ACCESS API CONTROL PANEL</span>
            <div className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <div className="absolute inset-0 border border-green-400 animate-pulse"></div>
          </button>
        </Link>

        {/* System Info */}
        <div className="mt-12 text-green-500 font-mono text-xs space-y-1 opacity-50">
          <div>SYSTEM STATUS: OPERATIONAL</div>
          <div>SECURITY LEVEL: MAXIMUM</div>
          <div>LAST UPDATE: {new Date().toLocaleDateString()}</div>
        </div>

        {/* Corner Decorations */}
        <div className="fixed top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-green-400"></div>
        <div className="fixed top-4 right-4 w-20 h-20 border-r-2 border-t-2 border-green-400"></div>
        <div className="fixed bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-green-400"></div>
        <div className="fixed bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-green-400"></div>

        {/* Real-time Timestamp */}
        <div className="fixed top-4 right-32 text-green-400 font-mono text-sm border border-green-400 px-4 py-2 bg-black bg-opacity-80">
          {currentTime}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 border-t border-green-400 bg-black bg-opacity-90 py-4 mt-auto">
        <div className="text-center">
          <div className="text-green-400 font-mono text-sm mb-1">
            Axilobot API Manager v1.0.0
          </div>
          <div className="text-green-500 font-mono text-xs">
            © {new Date().getFullYear()} All Rights Reserved. Axilobot by{' '}
            <a 
              href="https://www.axilolabs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 underline transition-colors"
            >
              Axilolabs
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      <style jsx>{`
        .scanline {
          position: absolute;
          width: 100%;
          height: 100px;
          background: linear-gradient(
            transparent,
            rgba(0, 255, 0, 0.03),
            transparent
          );
          animation: scan 8s linear infinite;
        }

        @keyframes scan {
          0% { transform: translateY(-100px); }
          100% { transform: translateY(100vh); }
        }

        .glitch-text {
          text-shadow: 
            0.05em 0 0 rgba(255, 0, 0, 0.75),
            -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
            0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          animation: glitch 500ms infinite;
        }

        @keyframes glitch {
          0% {
            text-shadow: 
              0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          14% {
            text-shadow: 
              0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          15% {
            text-shadow: 
              -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          49% {
            text-shadow: 
              -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          50% {
            text-shadow: 
              0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          99% {
            text-shadow: 
              0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          100% {
            text-shadow: 
              0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
        }
      `}</style>
    </main>
  );
}