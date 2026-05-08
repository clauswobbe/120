import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { PinScreen } from './components/PinScreen.tsx'

const SITE_URL = 'https://120.wobtop.com'

const concerts = [
  {
    id: 'whitney',
    artist: 'Whitney Houston Show',
    subtitle: 'The Greatest Love of All',
    date: 'Fredag 9. april 2027',
    venue: 'Odeon, Odense',
    description:
      'En hyldestkoncert til en af verdens mest elskede sangerinder. Oplev Whitneys største hits — fra "I Will Always Love You" til "Greatest Love of All" — med et stort liveband og en stjernestøbt vokal.',
    color: 'from-purple-900 to-indigo-800',
    accent: 'text-purple-200',
    badge: 'bg-purple-500',
    url: 'https://odeonodense.dk/kalender/whitney-houston-show-2027-04-09',
    emoji: '🎤',
  },
  {
    id: 'dire',
    artist: 'A Tribute to Dire Straits',
    subtitle: 'Money for Nothing • Sultans of Swing',
    date: 'Fredag 23. april 2027',
    venue: 'Odeon, Odense',
    description:
      'En autentisk hyldestkoncert til Dire Straits med alle de store klassikere. Mark Knopflers ikoniske guitarspil og bandets unikke sound genoplives i et spektakulært show.',
    color: 'from-amber-900 to-orange-800',
    accent: 'text-amber-200',
    badge: 'bg-amber-500',
    url: 'https://odeonodense.dk/kalender/a-tribute-to-dire-straits-2027-04-23',
    emoji: '🎸',
  },
]

export default function App() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('unlocked') === '1')
  const [showQR, setShowQR] = useState(false)

  if (!unlocked) {
    return <PinScreen onUnlock={() => setUnlocked(true)} />
  }

  return (
    <div className="min-h-screen bg-stone-50 font-sans">

      {/* Hero */}
      <header className="bg-gradient-to-br from-stone-800 to-stone-900 text-white px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-4">🎂</div>
          <h1 className="text-5xl font-bold tracking-tight mb-3">
            120 år tilsammen
          </h1>
          <p className="text-2xl text-stone-300 font-light mb-2">
            Lone &amp; Peter
          </p>
          <p className="text-stone-300 text-lg mt-6 leading-relaxed">
            Tillykke med de 60 år — hver!
          </p>
          <p className="text-stone-400 text-base mt-2">
            Vi glæder os til at fejre jer nu, og til at opleve en god aften sammen i Odense.
          </p>
          <p className="text-stone-500 text-sm mt-6">
            En gave fra Anna Marie &amp; Claus
          </p>
          <div className="mt-4 inline-block border border-stone-600 rounded-full px-6 py-2 text-stone-300 text-sm">
            2 × koncertbilletter + hotelovernatning i Odense
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Concert choice */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-stone-800 text-center mb-2">
            Vælg jeres koncert
          </h2>
          <p className="text-stone-500 text-center mb-10">
            I bestemmer — vi tager med! 🎉
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {concerts.map((c) => (
              <div
                key={c.id}
                className={`bg-gradient-to-br ${c.color} rounded-2xl overflow-hidden shadow-lg text-white flex flex-col`}
              >
                <div className="p-8 flex-1">
                  <div className="text-5xl mb-4">{c.emoji}</div>
                  <h3 className="text-2xl font-bold leading-tight mb-1">
                    {c.artist}
                  </h3>
                  <p className={`text-sm font-medium mb-5 ${c.accent}`}>
                    {c.subtitle}
                  </p>
                  <div className="space-y-1 mb-6">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <span>📅</span>
                      <span>{c.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <span>📍</span>
                      <span>{c.venue}</span>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {c.description}
                  </p>
                </div>
                <div className="px-8 pb-8">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block w-full text-center ${c.badge} hover:opacity-90 transition-opacity text-white font-semibold py-3 px-6 rounded-xl text-sm`}
                  >
                    Læs mere om koncerten →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hotel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-stone-800 text-center mb-2">
            Overnatning
          </h2>
          <p className="text-stone-500 text-center mb-10">
            Vi bor alle fire på Hotel Odeon
          </p>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-stone-100">
            <div className="bg-gradient-to-r from-teal-700 to-teal-600 px-8 py-6">
              <div className="text-4xl mb-3">🏨</div>
              <h3 className="text-2xl font-bold text-white">Hotel Odeon</h3>
              <p className="text-teal-100 text-sm mt-1">Odense, Fyn</p>
            </div>
            <div className="px-8 py-6">
              <p className="text-stone-600 leading-relaxed mb-6">
                En perle i hjertet af Odense, der forener internationale standarder med det bedste fra Fyn — i en varm og rolig atmosfære, som inviterer til afslapning og fordybelse. Tæt på shopping, seværdigheder, restauranter og nattelivet.
              </p>
              <a
                href="https://hotelodeon.dk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 hover:bg-teal-700 transition-colors text-white font-semibold py-3 px-6 rounded-xl text-sm"
              >
                Se Hotel Odeon →
              </a>
            </div>
          </div>
        </section>

        {/* QR code */}
        <section className="text-center pt-24">
          <h2 className="text-2xl font-bold text-stone-800 mb-2">
            Del siden
          </h2>
          <p className="text-stone-500 mb-6 text-sm">
            Scan QR-koden for at åbne siden på din telefon
          </p>
          <button
            onClick={() => setShowQR(!showQR)}
            className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 transition-colors text-white font-semibold py-3 px-8 rounded-xl text-sm mb-6"
          >
            {showQR ? 'Skjul QR-kode' : 'Vis QR-kode'}
          </button>

          {showQR && (
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                <QRCodeSVG
                  value={SITE_URL}
                  size={200}
                  bgColor="#ffffff"
                  fgColor="#1c1917"
                  level="M"
                />
                <p className="text-stone-400 text-xs mt-3">{SITE_URL}</p>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="text-center py-8 text-stone-400 text-sm">
        Med kærlighed fra Anna Marie &amp; Claus 💛
      </footer>
    </div>
  )
}
