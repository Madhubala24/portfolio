import React, { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const SKILLS = [
  {
    icon: '⛓️',
    title: 'Blockchain Development',
    tags: [
      { label: 'Solidity', type: 'accent' },
      { label: 'ERC-20', type: 'accent' },
      { label: 'ERC-721', type: 'accent' },
      { label: 'ERC-1155', type: 'accent' },
      { label: 'BEP Standards', type: 'accent' },
      { label: 'Smart Contracts', type: 'accent' },
      { label: 'Hardhat', type: '' },
      { label: 'Truffle', type: '' },
      { label: 'Remix IDE', type: '' },
      { label: 'Hedera SDK', type: '' },
    ],
  },
  {
    icon: '🌐',
    title: 'Web3 Integrations',
    tags: [
      { label: 'Web3.js', type: 'blue' },
      { label: 'Ethers.js v6', type: 'blue' },
      { label: 'MetaMask', type: 'blue' },
      { label: 'WalletConnect', type: 'blue' },
      { label: 'MoonPay SDK', type: 'blue' },
      { label: 'ThirdWeb SDK', type: 'blue' },
      { label: 'IPFS', type: '' },
      { label: 'OpenZeppelin', type: '' },
      { label: 'UUPS Upgradeable', type: '' },
    ],
  },
  {
    icon: '🔧',
    title: 'Backend & APIs',
    tags: [
      { label: 'Node.js', type: 'green' },
      { label: 'Express.js', type: 'green' },
      { label: 'MongoDB', type: 'green' },
      { label: 'JWT Auth', type: 'green' },
      { label: 'RESTful APIs', type: 'green' },
      { label: 'Firebase', type: '' },
      { label: 'Postman', type: '' },
      { label: 'Git', type: '' },
    ],
  },
  {
    icon: '💡',
    title: 'DeFi & Tokenomics',
    tags: [
      { label: 'Staking', type: 'accent' },
      { label: 'Liquidity Pools', type: 'accent' },
      { label: 'Token Swaps', type: 'accent' },
      { label: 'Token Governance', type: 'accent' },
      { label: 'Stablecoins', type: 'accent' },
      { label: 'NFT Fractionalization', type: 'accent' },
      { label: 'Asset Tokenization', type: '' },
      { label: 'Burn / Mint Mechanics', type: '' },
    ],
  },
  {
    icon: '🖥️',
    title: 'Frontend & Tools',
    tags: [
      { label: 'HTML', type: 'blue' },
      { label: 'CSS', type: 'blue' },
      { label: 'JavaScript', type: 'blue' },
      { label: 'SharePoint', type: '' },
      { label: 'Power Automate', type: '' },
      { label: 'SPFx', type: '' },
      { label: 'VS Code', type: '' },
    ],
  },
  {
    icon: '⚙️',
    title: 'Blockchain Protocols',
    tags: [
      { label: 'Ethereum', type: 'green' },
      { label: 'BSC (BNB Chain)', type: 'green' },
      { label: 'Hedera Hashgraph', type: 'green' },
      { label: 'Aptos', type: 'green' },
      { label: 'PoSA Consensus', type: '' },
      { label: 'Private Blockchain', type: '' },
      { label: 'Testnet Deployment', type: '' },
    ],
  },
];

const EXPERIENCE = [
  {
    company: 'Shaeryl DataTech',
    period: 'Feb 2025 – Present',
    role: 'Senior Blockchain Developer',
    accentIndex: 0,
    projects: [
      {
        title: 'NFT Marketplace & Fractionalization Platform',
        bullets: [
          'Migrated from Truffle to Hardhat with Ethers.js v6; architected fractional NFT ownership using ERC-1155 with UUPS upgradeable patterns.',
          'Developed vault contracts, ERC-20 fraction tokens, and enhanced marketplace with royalty enforcement and security features.',
          'Implemented TokenGovernance with blacklist/whitelist controls and optimized gas usage across all contracts.',
          'Integrated MoonPay and ThirdWeb for fiat-to-crypto onboarding, wallet creation, and gasless transactions.',
        ],
      },
      {
        title: 'Private Blockchain Ecosystem',
        bullets: [
          'Built private BSC fork with PoSA consensus, native token with mint/burn USD peg, and validator network infrastructure.',
          'Developed lease NFTs (BEP-721) with fractionalization protocol (BEP-1155) integrated with booking APIs; designed tokenomics with controlled supply release.',
        ],
      },
      {
        title: 'Payment System on Hedera Hashgraph',
        bullets: [
          'Developed stablecoin payment system with Node.js/Express APIs for JWT auth, minting/burning, P2P transfers, and QR-based merchant dashboards.',
          'Implemented transaction tracking, MongoDB integration, and scalable architecture for merchant dashboards.',
        ],
      },
    ],
    tech: ['Solidity ^0.8.30', 'Hardhat', 'Ethers.js v6', 'OpenZeppelin', 'Hedera SDK', 'MoonPay', 'ThirdWeb', 'Node.js', 'MongoDB'],
  },
  {
    company: 'WINNGOO Consultancy Services',
    period: 'Sep 2024 – Jan 2025',
    role: 'Blockchain Developer',
    accentIndex: 1,
    projects: [
      {
        title: 'Cryptocurrency Mining & Distribution Platform',
        bullets: [
          'Developed custom cryptocurrency with automated mining and smart contract-based coin distribution to user wallets.',
          'Built frontend with wallet integration, API testing, and deployed on Ethereum testnet with security validation.',
        ],
      },
    ],
    tech: ['Solidity', 'JavaScript', 'Web3.js', 'Testnet Deployment'],
  },
  {
    company: 'Thiran Technologies Pvt. Ltd',
    period: 'Aug 2023 – Jul 2024',
    role: 'Blockchain Developer',
    accentIndex: 2,
    projects: [
      {
        title: 'NFT-Based Ticketing System',
        bullets: [
          'Designed blockchain ticketing platform where each ticket is minted as an ERC-721 NFT with transfer restrictions and ownership verification.',
          'Integrated MetaMask wallet for user authentication; built frontend with QR code generation for automated ticket validation.',
          'Created anti-fraud validation checks and admin dashboard for ticket monitoring and sales analytics.',
        ],
      },
      {
        title: 'Enterprise Automation Solutions',
        bullets: [
          'Developed Power Automate flows for KPI dashboards with automated data integration from multiple sources.',
          'Built SPFx-based time tracking system and streamlined email approval workflows.',
        ],
      },
    ],
    tech: ['Solidity', 'ERC-721', 'MetaMask', 'QR Code', 'Power Automate', 'SPFx'],
  },
  {
    company: 'Boson Labs',
    period: 'Mar 2022 – Aug 2023',
    role: 'Blockchain Developer (Full Stack)',
    accentIndex: 0,
    projects: [
      {
        title: 'DeFi Platform Development (Aptos)',
        bullets: [
          'Led development for Pool (deposit/withdrawal with APY tracking), Swap (token exchange with slippage protection), and Staking (automated reward distribution) modules.',
          'Built reusable components and implemented multi-wallet provider integration.',
        ],
      },
      {
        title: 'NFT Document Management System',
        bullets: [
          'Integrated external API with Python backend for document transformation and metadata extraction.',
          'Implemented NFT minting with private IPFS storage, cryptographic verification, and access control for secure document ownership.',
        ],
      },
      {
        title: 'Smart Contract Development',
        bullets: [
          'Developed and deployed Solidity smart contracts for DeFi protocols — liquidity pools, swaps, and rewards — with comprehensive security testing.',
        ],
      },
    ],
    tech: ['Solidity', 'Aptos', 'Python', 'IPFS', 'RESTful APIs', 'DeFi Protocols'],
  },
  {
    company: 'Boson Labs',
    period: 'Dec 2020 – Dec 2021',
    role: 'Blockchain Developer (Intern)',
    accentIndex: 1,
    projects: [
      {
        title: '',
        bullets: [
          'Contributed to DeFi platform development focusing on liquidity pool features for token deposits and withdrawals.',
          'Supported implementation of swap and staking mechanisms; participated in code reviews and testing.',
        ],
      },
    ],
    tech: ['Solidity', 'Web3.js', 'DeFi Fundamentals'],
  },
];

const PROJECTS = [
  {
    icon: '🖼️',
    title: 'Fractional NFT Marketplace',
    desc: 'ERC-1155 marketplace with UUPS upgradeable patterns, vault contracts, fraction tokens, royalty enforcement, and fiat onboarding via MoonPay & ThirdWeb.',
    tags: ['ERC-1155', 'UUPS', 'MoonPay', 'Hardhat'],
    color: '#c8873a',
  },
  {
    icon: '⛓️',
    title: 'Private BSC Blockchain',
    desc: 'Custom private BSC fork with PoSA consensus, native token with USD-pegged mint/burn mechanics, validator network, and lease NFTs with fractionalization.',
    tags: ['BSC Fork', 'PoSA', 'BEP-721', 'BEP-1155'],
    color: '#3a7fc8',
  },
  {
    icon: '💳',
    title: 'Hedera Stablecoin Payments',
    desc: 'Stablecoin payment system on Hedera Hashgraph with JWT auth, P2P transfers, minting/burning, QR merchant dashboards, and MongoDB transaction tracking.',
    tags: ['Hedera', 'Node.js', 'MongoDB', 'QR Payments'],
    color: '#3ac88a',
  },
  {
    icon: '🎟️',
    title: 'NFT Ticketing System',
    desc: 'Blockchain event ticketing with ERC-721 NFT tickets, MetaMask auth, QR code validation, anti-fraud checks, and admin analytics dashboard.',
    tags: ['ERC-721', 'MetaMask', 'QR Code', 'Solidity'],
    color: '#c8873a',
  },
  {
    icon: '📈',
    title: 'DeFi Platform (Aptos)',
    desc: 'Full DeFi protocol on Aptos with Pool (APY tracking), Swap (slippage protection), and Staking (automated rewards) modules plus multi-wallet integration.',
    tags: ['Aptos', 'DeFi', 'Staking', 'Liquidity Pools'],
    color: '#3a7fc8',
  },
  {
    icon: '📄',
    title: 'NFT Document Management',
    desc: 'Secure document ownership using NFT minting on private IPFS storage, cryptographic verification, and access control with Python backend integration.',
    tags: ['IPFS', 'Python', 'NFT Minting', 'Access Control'],
    color: '#3ac88a',
  },
];

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
const tagClass = (type) => {
  if (type === 'accent') return 'bg-orange-50 text-orange-600 border border-orange-200';
  if (type === 'blue')   return 'bg-blue-50 text-blue-600 border border-blue-200';
  if (type === 'green')  return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
  return 'bg-stone-100 text-stone-500 border border-stone-200';
};

const dotColor = ['border-orange-400', 'border-blue-400', 'border-emerald-400'];

function Tag({ label, type = '' }) {
  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full ${tagClass(type)}`}>
      {label}
    </span>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/* ─────────────────────────────────────────
   NAV
───────────────────────────────────────── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-4"
      style={{ background: 'rgba(245,242,236,0.88)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(26,24,20,0.1)' }}>
      <button onClick={() => scrollTo('hero')}
        className="font-syne font-extrabold text-lg tracking-tight text-stone-900 hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer">
        MB.
      </button>
      <ul className="hidden md:flex gap-8 list-none">
        {['about','skills','experience','projects','contact'].map(s => (
          <li key={s}>
            <button onClick={() => scrollTo(s)}
              className="text-sm font-medium text-stone-500 hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer capitalize">
              {s}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => scrollTo('contact')}
        className="text-sm font-medium px-5 py-2 rounded-full bg-stone-900 text-white hover:bg-orange-500 transition-colors cursor-pointer border-none">
        Hire Me
      </button>
    </nav>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-8 md:px-16 pt-28 pb-16 overflow-hidden">
      {/* orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 rounded-full animate-drift pointer-events-none"
        style={{ background: '#c8873a', filter: 'blur(80px)', opacity: 0.18 }} />
      <div className="absolute bottom-12 right-72 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: '#3a7fc8', filter: 'blur(80px)', opacity: 0.15, animation: 'drift 8s ease-in-out infinite alternate', animationDelay: '-4s' }} />

      <div className="relative z-10 max-w-3xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-orange-500 px-4 py-1.5 rounded-full mb-6 animate-fadeUp"
          style={{ background: 'rgba(200,135,58,0.1)', border: '1px solid rgba(200,135,58,0.2)' }}>
          ⬡ Senior Blockchain Developer · Web3 · DeFi · NFT
        </span>

        <h1 className="font-syne font-extrabold leading-[1.05] tracking-tight text-stone-900 animate-fadeUp"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', animationDelay: '0.1s' }}>
          Madhubala<br />
          <span className="text-orange-500">Rajadurai</span>
        </h1>

        <p className="mt-5 text-lg text-stone-500 font-light max-w-xl animate-fadeUp" style={{ animationDelay: '0.2s' }}>
          Building decentralized applications, smart contracts & Web3 integrations that power the future of digital economies — secure, transparent, and scalable.
        </p>

        <div className="flex flex-wrap gap-4 mt-8 animate-fadeUp" style={{ animationDelay: '0.3s' }}>
          <button onClick={() => scrollTo('experience')}
            className="px-7 py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-orange-500 transition-all hover:-translate-y-0.5 cursor-pointer border-none">
            View My Work
          </button>
          <button onClick={() => scrollTo('contact')}
            className="px-7 py-3 rounded-full text-stone-900 text-sm font-medium border-2 border-stone-900 hover:bg-stone-900 hover:text-white transition-all hover:-translate-y-0.5 cursor-pointer bg-transparent">
            Get in Touch
          </button>
        </div>

        <div className="flex flex-wrap gap-10 mt-14 animate-fadeUp" style={{ animationDelay: '0.4s' }}>
          {[['4+', 'Years Experience'], ['6+', 'Major Projects'], ['3', 'Blockchain Protocols']].map(([num, label]) => (
            <div key={label}>
              <div className="font-syne font-extrabold text-3xl text-stone-900">{num}</div>
              <div className="text-xs text-stone-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ABOUT
───────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="px-8 md:px-16 py-24" style={{ background: '#f5f2ec' }}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-3">About Me</p>
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-stone-900 mb-6">
            Full-Stack Blockchain Engineer
          </h2>
          <p className="text-stone-500 mb-4">
            I'm a Senior Blockchain Developer with 4+ years of hands-on experience designing and deploying decentralized applications, smart contracts, and Web3 integrations across DeFi, NFT, and tokenization ecosystems.
          </p>
          <p className="text-stone-500 mb-4">
            I specialize in architecting upgradeable and scalable blockchain solutions — from fractional NFT marketplaces and private blockchain networks to stablecoin payment systems on Hedera Hashgraph.
          </p>
          <p className="text-stone-500 mb-8">
            My background spans the full lifecycle of a blockchain product: smart contract development in Solidity, backend APIs in Node.js, and seamless Web3 frontend integrations.
          </p>
          <div className="space-y-3">
            {[
              ['✉️', 'mb771966@gmail.com', 'mailto:mb771966@gmail.com'],
              ['📞', '+91 6379357925', 'tel:+916379357925'],
              ['🔗', 'linkedin.com/in/madhu-bala-r-680239201', 'https://linkedin.com/in/madhu-bala-r-680239201'],
              ['📍', 'Chennai, Tamil Nadu, India', null],
            ].map(([icon, text, href]) => (
              <div key={text} className="flex items-center gap-3 text-sm text-stone-500">
                <span>{icon}</span>
                {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer" className="text-orange-500 hover:underline">{text}</a>
                  : <span>{text}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 reveal">
          {[
            ['DeFi', 'Staking · Swaps · Liquidity Pools', 0],
            ['NFT', 'Marketplaces · Fractionalization', 1],
            ['Web3', 'MetaMask · WalletConnect · IPFS', 0],
            ['⬡', 'Smart Contract Architecture', 1],
          ].map(([num, label, offset], i) => (
            <div key={i} className={`bg-white rounded-2xl p-5 border border-stone-100 hover:-translate-y-1 transition-transform ${offset ? 'mt-6' : ''} ${i === 2 ? '-mt-6 md:-mt-6' : ''}`}>
              <div className="font-syne font-extrabold text-2xl text-orange-500">{num}</div>
              <div className="text-xs text-stone-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SKILLS
───────────────────────────────────────── */
function Skills() {
  return (
    <section id="skills" className="px-8 md:px-16 py-24" style={{ background: '#edeae1' }}>
      <div className="reveal">
        <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-3">Expertise</p>
        <h2 className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-stone-900 mb-3">Technical Skills</h2>
        <p className="text-stone-500 mb-12 max-w-lg">A focused toolkit built around blockchain development, smart contracts, and Web3 integrations.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl p-6 border border-stone-100 hover:-translate-y-1 transition-transform reveal">
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-syne font-bold text-stone-900 mb-4">{s.title}</h3>
            <div className="flex flex-wrap gap-2">
              {s.tags.map(t => <Tag key={t.label} {...t} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   EXPERIENCE
───────────────────────────────────────── */
function Experience() {
  return (
    <section id="experience" className="px-8 md:px-16 py-24" style={{ background: '#f5f2ec' }}>
      <div className="reveal">
        <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-3">Career</p>
        <h2 className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-stone-900 mb-3">Work Experience</h2>
        <p className="text-stone-500 mb-12 max-w-lg">4+ years building blockchain solutions across DeFi, NFT, and enterprise ecosystems.</p>
      </div>

      <div className="relative timeline-line pl-10 space-y-8">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative reveal">
            {/* dot */}
            <div className={`absolute -left-10 top-5 w-5 h-5 rounded-full bg-white border-[3px] ${dotColor[exp.accentIndex]}`} />

            <div className="bg-white rounded-2xl p-6 border border-stone-100 hover:-translate-y-1 transition-transform">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <div className="font-syne font-bold text-stone-900">{exp.company}</div>
                <span className="text-xs font-semibold text-orange-500 px-3 py-1 rounded-full"
                  style={{ background: 'rgba(200,135,58,0.1)' }}>{exp.period}</span>
              </div>
              <div className="text-sm text-blue-500 font-medium mb-4">{exp.role}</div>

              {exp.projects.map((proj, pi) => (
                <div key={pi} className="mt-3">
                  {proj.title && (
                    <div className="flex items-center gap-2 text-sm font-semibold text-stone-800 mb-2">
                      <span className="text-orange-400 text-xs">▸</span>{proj.title}
                    </div>
                  )}
                  <ul className="space-y-1.5">
                    {proj.bullets.map((b, bi) => (
                      <li key={bi} className="text-sm text-stone-500 pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-orange-400">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map(t => <Tag key={t} label={t} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PROJECTS
───────────────────────────────────────── */
function Projects() {
  return (
    <section id="projects" className="px-8 md:px-16 py-24" style={{ background: '#edeae1' }}>
      <div className="reveal">
        <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-3">Work</p>
        <h2 className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-stone-900 mb-3">Key Projects</h2>
        <p className="text-stone-500 mb-12 max-w-lg">Highlights from 4+ years of building real-world blockchain solutions.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p) => (
          <div key={p.title} className="bg-white rounded-2xl p-6 border border-stone-100 hover:-translate-y-1 transition-transform flex flex-col gap-3 relative overflow-hidden reveal">
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: p.color }} />
            <div className="text-3xl">{p.icon}</div>
            <h3 className="font-syne font-bold text-stone-900">{p.title}</h3>
            <p className="text-sm text-stone-500 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(t => <Tag key={t} label={t} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   EDUCATION
───────────────────────────────────────── */
function Education() {
  return (
    <section id="education" className="px-8 md:px-16 py-24" style={{ background: '#f5f2ec' }}>
      <div className="reveal">
        <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-3">Education</p>
        <h2 className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-stone-900 mb-10">Academic Background</h2>
      </div>
      <div className="bg-white rounded-2xl p-8 border border-stone-100 flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-xl reveal">
        <div className="text-5xl">🎓</div>
        <div>
          <div className="font-syne font-bold text-xl text-stone-900">Bachelor of Engineering</div>
          <div className="text-stone-500 mt-1">Computer Science & Engineering</div>
          <div className="flex gap-6 mt-3">
            <span className="text-sm text-stone-400">🗓️ 2022</span>
            <span className="text-sm text-stone-400">📊 CGPA: 8.08</span>
          </div>
          <span className="inline-block mt-3 text-xs font-semibold text-emerald-600 px-3 py-1 rounded-full"
            style={{ background: 'rgba(58,200,138,0.12)' }}>✓ First Class with Distinction</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CONTACT
───────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 py-24 text-center" style={{ background: '#1a1814', color: '#fff' }}>
      <p className="text-xs font-bold tracking-widest uppercase text-orange-400 mb-3">Let's Connect</p>
      <h2 className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-white mb-4">Open to Opportunities</h2>
      <p className="text-stone-400 max-w-md mx-auto mb-10">
        Whether it's a DeFi protocol, NFT platform, or blockchain payment system — let's build something great together.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {[
          ['✉️', 'mb771966@gmail.com', 'mailto:mb771966@gmail.com'],
          ['📞', '+91 6379357925', 'tel:+916379357925'],
          ['🔗', 'LinkedIn', 'https://linkedin.com/in/madhu-bala-r-680239201'],
        ].map(([icon, label, href]) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-medium transition-all hover:-translate-y-0.5"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
            onMouseEnter={e => e.currentTarget.style.background = '#c8873a'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>
            {icon} {label}
          </a>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
function Footer() {
  return (
    <footer className="text-center py-5 text-xs text-stone-500"
      style={{ background: '#1a1814', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      © 2025 Madhubala Rajadurai · Senior Blockchain Developer · Chennai, India
    </footer>
  );
}

/* ─────────────────────────────────────────
   MAIN
───────────────────────────────────────── */
export default function Portfolio() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}