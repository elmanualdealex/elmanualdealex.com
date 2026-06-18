"use client";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-fuchsia-500/10 blur-3xl" />
                <div className="absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            {/* Header */}
            <header className="border-b border-zinc-900 bg-black/60 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                    <a href="/" className="font-bold tracking-tight text-lg">
                        elmanualdealex
                    </a>

                    <nav className="hidden md:flex gap-8 text-sm text-zinc-500">
                        <a href="/#quests" className="hover:text-white transition">quests</a>
                        <a href="/#skills" className="hover:text-white transition">skills</a>
                        <a href="/#inventory" className="hover:text-white transition">inventory</a>
                        <a href="/contact" className="text-violet-400">contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="mx-auto max-w-3xl px-6 pt-24 pb-16">
                <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">
                    CONTACT NODE
                </p>

                <h1 className="text-5xl md:text-6xl font-black tracking-[-0.04em]">
                    Establish Connection
                </h1>

                <p className="mt-4 text-zinc-500">
                    Send a message, collaboration request, or just say hi.
                </p>
            </section>

            {/* Form */}
            <section className="mx-auto max-w-3xl px-6 pb-32">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl">

                    <form
                        action="https://formspree.io/f/xzdqlpbz"
                        method="POST"
                        className="space-y-5"
                    >
                        <div>
                            <label className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                                Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                className="mt-2 w-full rounded-2xl border border-zinc-800 bg-black/40 px-4 py-3 text-sm outline-none focus:border-violet-500/50"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="mt-2 w-full rounded-2xl border border-zinc-800 bg-black/40 px-4 py-3 text-sm outline-none focus:border-violet-500/50"
                                placeholder="you@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                className="mt-2 w-full rounded-2xl border border-zinc-800 bg-black/40 px-4 py-3 text-sm outline-none focus:border-violet-500/50"
                                placeholder="Your message..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-2xl bg-violet-500 px-6 py-3 font-semibold text-black hover:scale-[1.02] transition"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-900">
                <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-zinc-600 flex justify-between">
                    <span>© 2026 elmanualdealex</span>
                    <span className="text-violet-400">SYSTEM ONLINE</span>
                </div>
            </footer>
        </main>
    );
}