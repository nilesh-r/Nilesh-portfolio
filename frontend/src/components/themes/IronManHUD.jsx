import React from 'react';
import { motion } from 'framer-motion';

const IronManHUD = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      
      {/* HUD Backdrop Glow */}
      <div className="absolute inset-0 bg-radial-at-center from-[#2b0303]/60 via-black to-black opacity-80"></div>
      
      {/* Central Arc Reactor Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/10 blur-[100px] animate-pulse-glow"></div>
      
      {/* Refined Geometric HUD Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border-[1px] border-cyan-500/20 animate-spin-slow">
        <div className="absolute top-0 left-1/2 w-1 h-[40px] bg-cyan-400/60 -translate-x-1/2 shadow-[0_0_20px_rgba(0,212,255,1)]"></div>
        <div className="absolute bottom-0 left-1/2 w-1 h-[40px] bg-cyan-400/60 -translate-x-1/2 shadow-[0_0_20px_rgba(0,212,255,1)]"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-[1px] border-yellow-500/20 animate-spin-slow-reverse">
        <div className="absolute left-0 top-1/2 w-[40px] h-1 bg-yellow-400/60 -translate-y-1/2 shadow-[0_0_20px_rgba(255,191,0,1)]"></div>
        <div className="absolute right-0 top-1/2 w-[40px] h-1 bg-yellow-400/60 -translate-y-1/2 shadow-[0_0_20px_rgba(255,191,0,1)]"></div>
      </div>

      {/* Target Crosshairs / Grid Centers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-cyan-400/20 rounded-full flex items-center justify-center">
        <div className="w-[10px] h-[10px] bg-cyan-400/80 rounded-full shadow-[0_0_10px_rgba(0,212,255,1)]"></div>
        <div className="absolute w-[2px] h-[240px] bg-cyan-500/20"></div>
        <div className="absolute h-[2px] w-[240px] bg-cyan-500/20"></div>
      </div>

      {/* Hexagonal Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDQwIj48cGF0aCBkPSJNMCAxMGwxMi02TDI0IDEwdjIwbC0xMiA2TDAgMzBWMXptMTItM2wtMTAgNXYxNmwxMCA1bDEwLTVWMTVsLTEwLTV6IiBmaWxsPSJyZ2JhKDAsMjEyLDI1NSwwLjAyKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-30"></div>

      {/* Vertical Scanning Laser */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/20 shadow-[0_0_20px_rgba(0,212,255,0.8)] animate-scan-line"></div>

      {/* Screen Edge Viginette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(20,0,0,0.9)]"></div>

      {/* Floating Data Readouts (Static text approximations) */}
      <div className="absolute top-[10%] left-[5%] text-cyan-400 font-mono text-[10px] uppercase tracking-widest flex flex-col gap-1 drop-shadow-[0_0_5px_rgba(0,212,255,0.8)]">
        <span>SYS.MONITORING: ONLINE</span>
        <span>ARC.REACTOR: 98.4%</span>
        <span>HUD.UI_SYNC: COMPLETE</span>
      </div>
      <div className="absolute bottom-[10%] right-[5%] text-yellow-400 font-mono text-[10px] uppercase tracking-widest flex items-end flex-col gap-1 drop-shadow-[0_0_5px_rgba(255,191,0,0.8)]">
        <span>TARGET.LOCK: ACQUIRED</span>
        <span>REPULSOR.STATUS: STANDBY</span>
        <div className="flex gap-1 mt-2">
            {[...Array(10)].map((_, i) => (
                <div key={i} className={`h-4 w-1 ${Math.random() > 0.4 ? 'bg-yellow-400/80 shadow-[0_0_5px_rgba(255,191,0,0.8)]' : 'bg-yellow-400/30'}`}></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default IronManHUD;
