import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-indigo-500 selection:text-white">
      <div className="w-full max-w-xl p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          Vite + React + Tailwind CSS
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Frontend Setup Complete
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          React with Vite and Tailwind CSS is successfully configured inside the{' '}
          <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs">
            frontend/
          </code>{' '}
          folder.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
          >
            Count is {count}
          </button>
          <button
            onClick={() => setCount(0)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 text-sm font-medium transition-all cursor-pointer"
          >
            Reset
          </button>
        </div>

        <div className="border-t border-slate-800 pt-4 flex items-center justify-center gap-6 text-xs text-slate-500">
          <span>⚡ Vite Fast HMR</span>
          <span>🎨 Tailwind CSS</span>
          <span>⚛️ React JSX</span>
        </div>
      </div>
    </div>
  )
}
