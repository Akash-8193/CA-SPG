"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Lock, User, ArrowRight } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if already logged in (using sessionStorage for persistence across reloads)
  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "CA" && password === "CA@123") {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");
      setError("");
    } else {
      setError("Invalid ID or Password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F9F9F9] flex flex-col justify-center items-center p-4 selection:bg-[#b90a2a] selection:text-white font-sans pt-20">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-[#050505] p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#b90a2a]/20 to-transparent opacity-50"></div>
            <h2 className="text-2xl font-serif font-bold text-white relative z-10">Admin Portal</h2>
            <p className="text-gray-400 text-sm mt-2 relative z-10">Sign in to manage submissions</p>
          </div>
          
          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-500 p-3 rounded-xl text-sm font-medium text-center border border-red-100">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Admin ID</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-[#F9F9F9] border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b90a2a]/20 focus:border-[#b90a2a] transition-all"
                    placeholder="Enter ID"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-[#F9F9F9] border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b90a2a]/20 focus:border-[#b90a2a] transition-all"
                    placeholder="Enter Password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#b90a2a] text-white rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center hover:bg-[#9a0822] shadow-lg hover:shadow-[#b90a2a]/30 transition-all group"
              >
                Sign In
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Optional Admin Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center mt-20">
        <h2 className="font-serif font-bold text-xl text-[#1A1A1A]">Admin Dashboard</h2>
        <button 
          onClick={() => {
            sessionStorage.removeItem("adminAuth");
            setIsAuthenticated(false);
          }}
          className="text-sm font-medium text-gray-500 hover:text-[#b90a2a] transition-colors"
        >
          Logout
        </button>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
