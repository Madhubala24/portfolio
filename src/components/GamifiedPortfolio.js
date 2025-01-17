import React, { useState, useEffect } from 'react';
import { Component, Boxes, Award, Trophy, Star, CircuitBoard, Gamepad2, Sparkles, Github, Linkedin, Mail, FileText, Phone, ArrowLeft, Code, Cpu, Database } from 'lucide-react';

export default function GamifiedPortfolio() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [discoveredSkills, setDiscoveredSkills] = useState([]);
  const [activeSection, setActiveSection] = useState('main');
  const [activeTech, setActiveTech] = useState(null);
  const [showAchievement, setShowAchievement] = useState(false);
  const [achievementText, setAchievementText] = useState('');
  const [particles, setParticles] = useState([]);

  // Personal Info
  const personalInfo = {
    name: "Madhubala Rajadurai",
    title: "Senior Blockchain Developer & React.js Expert",
    bio: "A passionate blockchain and React.js developer with 2.9 years of experience, specializing in creating smart contracts, DeFi solutions, and dynamic web applications. Experienced in building innovative solutions across various blockchain platforms and creating seamless user experiences.",
    contact: {
      linkedin: "https://www.linkedin.com/in/madhubala-r-680239201/",
      email: "mb771966@gmail.com",
      phone: "+91 6379357925"
    }
  };

  // Tech skills data
  const techDetails = {
    blockchain: {
      "Smart Contracts": {
        expertise: "Expert",
        description: "Proficient in Solidity development for Ethereum and EVM-compatible chains",
        technologies: ["Solidity", "ERC-721", "ERC-20", "MetaMask"],
        experience: [
          "Developed NFT-based theme park ticket booking system",
          "Created smart contracts for DeFi applications",
          "Implemented token staking and reward systems"
        ],
        points: 150
      },
      "DeFi Development": {
        expertise: "Advanced",
        description: "Extensive experience in decentralized finance applications",
        technologies: ["Aptos", "Algorand", "Web3.js"],
        experience: [
          "Led MercuryFi project development",
          "Implemented Pool and Swap functionalities",
          "Developed token deposit/withdrawal systems"
        ],
        points: 125
      },
      "Crypto Development": {
        expertise: "Advanced",
        description: "Cryptocurrency and token development specialist",
        technologies: ["EVM", "IPFS", "Token Standards"],
        experience: [
          "Developing crypto coin with trading functionalities",
          "Implemented reward systems",
          "Created NFT transformation systems"
        ],
        points: 100
      }
    },
    react: {
      "Frontend Architecture": {
        expertise: "Expert",
        description: "Building scalable React.js applications with modern practices",
        technologies: ["React.js", "Redux", "TypeScript"],
        experience: [
          "Led frontend development for MercuryFi",
          "Created reusable component libraries",
          "Implemented complex state management"
        ],
        points: 150
      },
      "State Management": {
        expertise: "Advanced",
        description: "Expert in Redux and state management patterns",
        technologies: ["Redux", "Context API", "Redux DevTools"],
        experience: [
          "Implemented complex state flows",
          "Optimized application performance",
          "Created middleware solutions"
        ],
        points: 125
      },
      "API Integration": {
        expertise: "Advanced",
        description: "Experienced in API integration and testing",
        technologies: ["REST APIs", "Postman", "VeevaVault API"],
        experience: [
          "Integrated blockchain APIs",
          "Developed API middleware",
          "Created testing frameworks"
        ],
        points: 100
      }
    }
  };

  useEffect(() => {
    const createParticle = () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3
    });

    setParticles(Array(20).fill(null).map(createParticle));

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: (particle.y - particle.speed) % 100,
        x: particle.x + Math.sin(particle.y / 10) * 0.5
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const unlockSkill = (skillName, category, details) => {
    if (!discoveredSkills.includes(skillName)) {
      const newScore = score + details.points;
      setScore(newScore);
      setDiscoveredSkills(prev => [...prev, skillName]);
      showAchievementMessage(`🎉 Unlocked ${skillName}! +${details.points} XP`);
      
      const newLevel = Math.floor(newScore / 300) + 1;
      if (newLevel > level) {
        setLevel(newLevel);
        showAchievementMessage(`🏆 Level Up! You're now level ${newLevel}!`);
      }
    }
  };

  const showAchievementMessage = (text) => {
    setAchievementText(text);
    setShowAchievement(true);
    setTimeout(() => setShowAchievement(false), 3000);
  };

  const renderSkillCard = (techName, details) => (
    <div
      key={techName}
      className={`p-6 rounded-xl cursor-pointer transition-all transform hover:scale-105 ${
        discoveredSkills.includes(techName)
          ? 'bg-blue-500/30'
          : 'bg-white/10 hover:bg-white/20'
      }`}
      onClick={() => unlockSkill(techName, activeSection, details)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <CircuitBoard className="w-6 h-6 mr-3" />
          <span className="text-xl font-semibold">{techName}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm">
            {details.expertise}
          </span>
          <span className="flex items-center text-yellow-400">
            <Trophy className="w-5 h-5 mr-1" />
            {details.points} XP
          </span>
        </div>
      </div>
      {discoveredSkills.includes(techName) && (
        <div className="mt-4 space-y-4">
          <p className="text-gray-300">{details.description}</p>
          <div>
            <h4 className="font-semibold mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {details.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Experience</h4>
            <ul className="list-disc list-inside space-y-1">
              {details.experience.map((exp, i) => (
                <li key={i} className="text-gray-300">{exp}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden p-8">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transition: 'all 0.05s linear'
          }}
        />
      ))}

      <div className="fixed top-4 right-4 flex items-center space-x-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <span>{score} XP</span>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span>Level {level}</span>
        </div>
      </div>

      <div className={`fixed top-20 right-4 bg-green-500/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg transform transition-all ${
        showAchievement ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        {achievementText}
      </div>

      <div className="max-w-6xl mx-auto">
        {activeSection === 'main' ? (
          <>
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl text-blue-300 mb-4">{personalInfo.title}</p>
              <p className="text-gray-300 max-w-2xl mx-auto">{personalInfo.bio}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div 
                className="relative group cursor-pointer transform hover:scale-105 transition-all"
                onClick={() => setActiveSection('blockchain')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                  <h2 className="text-3xl font-bold mb-4 flex items-center">
                    <Boxes className="w-8 h-8 mr-3 text-blue-400" />
                    Blockchain Quest
                  </h2>
                  <p className="text-gray-300 mb-4">Explore my blockchain journey through DeFi, NFTs, and smart contracts.</p>
                  <div className="flex items-center text-blue-300">
                    <Gamepad2 className="w-5 h-5 mr-2" />
                    <span>Click to start adventure</span>
                  </div>
                </div>
              </div>

              <div 
                className="relative group cursor-pointer transform hover:scale-105 transition-all"
                onClick={() => setActiveSection('react')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                  <h2 className="text-3xl font-bold mb-4 flex items-center">
                    <Component className="w-8 h-8 mr-3 text-purple-400" />
                    React.js Challenge
                  </h2>
                  <p className="text-gray-300 mb-4">Discover my React.js expertise in building modern web applications.</p>
                  <div className="flex items-center text-purple-300">
                    <Gamepad2 className="w-5 h-5 mr-2" />
                    <span>Click to begin quest</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a 
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all flex items-center space-x-2"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={`mailto:${personalInfo.contact.email}`}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all flex items-center space-x-2"
              >
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
              <a 
                href={`tel:${personalInfo.contact.phone}`}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all flex items-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Phone</span>
              </a>
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setActiveSection('main')}
              className="mb-8 flex items-center text-blue-300 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Main Quest
            </button>

            <h2 className="text-4xl font-bold mb-8 flex items-center">
              {activeSection === 'blockchain' ? (
                <>
                  <Boxes className="w-10 h-10 mr-3 text-blue-400" />
                  Blockchain Mastery
                </>
              ) : (
                <>
                  <Component className="w-10 h-10 mr-3 text-purple-400" />
                  React.js Excellence
                </>
              )}
            </h2>

            <div className="grid gap-6">
              {Object.entries(techDetails[activeSection]).map(([techName, details]) => 
                renderSkillCard(techName, details)
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}