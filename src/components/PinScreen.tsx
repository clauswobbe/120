import { useState } from 'react'

const ACCESS_CODE = import.meta.env.VITE_ACCESS_CODE as string

interface Props {
  onUnlock: () => void
}

export function PinScreen({ onUnlock }: Props) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (input === ACCESS_CODE) {
      sessionStorage.setItem('unlocked', '1')
      onUnlock()
    } else {
      setError(true)
      setInput('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center px-6">
      <div className="text-center max-w-sm w-full">
        <div className="text-6xl mb-6">🎂</div>
        <h1 className="text-3xl font-bold text-white mb-2">120 år tilsammen</h1>
        <p className="text-stone-400 mb-10">Indtast koden for at åbne siden</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false) }}
            placeholder="Kode"
            autoFocus
            autoComplete="off"
            autoCapitalize="none"
            className="w-full text-center text-lg bg-stone-700 text-white placeholder-stone-500 border border-stone-600 rounded-xl px-4 py-3 outline-none focus:border-stone-400 transition-colors"
          />
          {error && (
            <p className="text-red-400 text-sm">Forkert kode — prøv igen</p>
          )}
          <button
            type="submit"
            className="w-full bg-white text-stone-900 font-semibold py-3 rounded-xl hover:bg-stone-100 transition-colors"
          >
            Åbn
          </button>
        </form>
      </div>
    </div>
  )
}
