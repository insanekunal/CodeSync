import FormComponent from "@/components/forms/FormComponent"
import { FaGithub } from "react-icons/fa"
import logo from "@/assets/codesync-logo.png"

function HomePage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden">

            {/* Background */}
            {/* Background Gradient */}
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 blur-3xl"></div>

{/* Background Logo Watermark */}
<div className="absolute inset-0 flex items-center justify-center opacity-[0.20] pointer-events-none">
    <img
        src={logo}
        alt="Background Logo"
        className="w-[500px] md:w-[700px] object-contain"
    />
</div>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 px-8 py-5 flex justify-between items-center">
                <div className="flex items-center gap-3">
    <img
        src={logo}
        alt="CodeSync Logo"
        className="w-10 h-10 object-contain"
    />

    <h1 className="text-2xl font-bold tracking-tight">
        CodeSync
    </h1>
</div>

                <a
                    href="https://github.com/insanekunal/code-sync-new"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-orange-400 transition text-2xl"
                >
                    <FaGithub />
                </a>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex items-center px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">

                    {/* Left Side */}
                    <div className="space-y-6">
                        <p className="text-orange-400 uppercase tracking-[0.3em] text-xs">
                            Real-time Collaborative Coding
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                            Code Together.
                            <br />
                            Build Faster.
                        </h1>

                        <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
                            A real-time collaborative coding platform for developers 
                            featuring live code execution, AI assistance, whiteboard 
                            collaboration, and team chat.
                        </p>

                        <div className="flex gap-8 text-sm text-zinc-500 pt-4">
                            <span>Live Collaboration</span>
                            <span>AI Copilot</span>
                            <span>Code Execution</span>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="backdrop-blur-xl bg-white/8  border border-white/10 rounded-3xl p-8 shadow-2xl">
                        <div className="mb-6 text-center">
                            <h2 className="text-3xl font-bold mb-2">
                                Start Session
                            </h2>

                            <p className="text-zinc-400 text-sm">
                                Join your workspace instantly
                            </p>
                        </div>

                        <FormComponent />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage