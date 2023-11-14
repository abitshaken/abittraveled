import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <header className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex selection:text-white">
        Abhi Krishnan
      </header>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-white/50 selection:text-white/50">
        Fullstack Engineer
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-[purple]/60 selection:text-[purple]/60">
        krabhishaken AT gmail DOT com
      </div>
    </main>
  )
}
