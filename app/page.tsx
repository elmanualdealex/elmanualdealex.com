"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


function StatCounter({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current += Math.max(1, Math.ceil(value / 50));

      if (current >= value) {
        setCount(value);
        clearInterval(timer);
        return;
      }

      setCount(current);
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="rounded-2xl border border-zinc-800 p-4 transition hover:border-violet-500/40">
      <p className="text-xs text-zinc-600">{label}</p>
      <p className="text-2xl font-bold text-violet-400">{count}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-bold tracking-tight text-lg">
            elmanualdealex
          </Link>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-500">
            <a href="#quests" className="hover:text-white transition">quests</a>
            <a href="#skills" className="hover:text-white transition">skills</a>
            <a href="#inventory" className="hover:text-white transition">inventory</a>
            <a href="#contact" className="hover:text-white transition">contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 min-h-[90vh] flex flex-col justify-center">
        <div className="w-fit rounded-3xl border border-violet-500/20 bg-zinc-900/40 p-5 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-violet-400">
            MAIN QUEST
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            🌸 Become a Legendary Builder
          </h3>

          <p className="mt-2 max-w-xs text-sm text-zinc-500">
            Mastering cybersecurity, reverse engineering, software engineering, startups, and creating cool things.
          </p>
        </div>

        <h1 className="mt-8 text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-[-0.08em] leading-none">
          ALEX
        </h1>

        <p className="mt-2 text-violet-400 text-lg">
          レベルアップ中 • silly weeb software engineer
        </p>

        <div className="mt-8 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed">
          silly weeb 🌱 :: cybersecurity 🍒 :: malware research 🍉 :: reverse engineering 🐸 :: fullstack dev ☕ :: game modding 🎮 :: cloud & devops ☁️
        </div>

        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
          <StatCounter label="STR" value={15} />
          <StatCounter label="INT" value={95} />
          <StatCounter label="DEX" value={80} />
          <StatCounter label="LUK" value={42} />
        </div>
      </section>

      {/* Character Profile Section */}
      <section id="character-profile" className="mx-auto max-w-7xl px-6 pb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-6">
          CHARACTER PROFILE
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-2">🔐 Cybersecurity</h3>
            <p className="text-zinc-500 text-sm">Breaking, securing and understanding systems.</p>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-2">🧪 Malware Research</h3>
            <p className="text-zinc-500 text-sm">Analyzing software behavior and internals.</p>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-2">🐉 Reverse Engineering</h3>
            <p className="text-zinc-500 text-sm">Understanding software and hardware at a deep level.</p>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-2">☁️ Cloud & DevOps</h3>
            <p className="text-zinc-500 text-sm">Building scalable infrastructure and automations.</p>
          </div>
        </div>
      </section>

      {/* Inventory / Equipped Items Section */}
      <section id="inventory" className="mx-auto max-w-7xl px-6 pb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-6">
          INVENTORY / EQUIPPED ITEMS
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Arch Linux", "Kali Linux", "BSD", "Linux From Scratch", "Vim", "Neovim", "Emacs",
            "Git", "Nginx", "VS Code", "Notion", "Cloudflare", "Vercel", "PostgreSQL", "MongoDB", "Redis"
          ].map((item) => (
            <span key={item} className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Skill Tree Section */}
      <section id="skills" className="mx-auto max-w-7xl px-6 pb-32">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-8">
          SKILL TREE
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Programming Languages */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
            <p className="text-violet-400 text-xs tracking-[0.3em] uppercase mb-4">Programming Languages</p>
            <div className="flex flex-wrap gap-2">
              {[
                "C", "C++", "C#", "Bash", "HTML", "CSS", "JavaScript", "TypeScript",
                "Node.js", "Python", "Rust", "SQL"
              ].map((skill) => (
                <span key={skill} className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Software & Tools */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
            <p className="text-violet-400 text-xs tracking-[0.3em] uppercase mb-4">Software &amp; Tools</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Debian", "Ubuntu", "Arch Linux", "Kali Linux", "BSD", "LFS", "Git", "Nginx",
                "Notion", "OBS Studio", "Trello", "VS Code", "Vim", "Neovim", "Emacs"
              ].map((skill) => (
                <span key={skill} className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & Databases */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
            <p className="text-violet-400 text-xs tracking-[0.3em] uppercase mb-4">Cloud &amp; Databases</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Cloudflare", "GitHub Pages", "Vercel", "MongoDB", "MySQL",
                "MariaDB", "PostgreSQL", "Redis"
              ].map((skill) => (
                <span key={skill} className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guild Stats Section */}
      <section id="guild-stats" className="mx-auto max-w-7xl px-6 pb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-6">
          GUILD STATS
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src="https://github-readme-stats.vercel.app/api?username=elmanualdealex&show_icons=true&count_private=true&theme=material-palenight&hide_border=true&hide=issues,contribs&bg_color=00000000"
            alt="GitHub Stats"
            className="max-w-full md:max-w-[33%] rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=elmanualdealex&layout=compact&hide_border=true&theme=material-palenight&bg_color=00000000&langs_count=6&hide=jupyter%20notebook,tex,css,php&exclude_repo=Pacman-AI"
            alt="Top Languages"
            className="max-w-full md:max-w-[33%] rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=elmanualdealex&theme=material-palenight&hide_border=true&background=FFFFFF00"
            alt="GitHub Streak"
            className="max-w-full md:max-w-[33%] rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl"
          />
        </div>
      </section>

      {/* Pinned Quests Section */}
      <section id="quests" className="mx-auto max-w-7xl px-6 pb-32">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-6">
          PINNED QUESTS
        </p>
        <p className="max-w-2xl text-lg text-zinc-400">
          Take a look at my most relevant repositories ⚡
        </p>
      </section>
    </main>
  );
}