// -----------------------------
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo placeholder – replace src with uploaded Blue Ruby logo */}
          <Image
            src="/blue-ruby-logo.png"
            alt="Blue Ruby"
            width={140}
            height={40}
            priority
          />
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="#how" className="hover:text-slate-600">How I Help</Link>
          <Link href="#about" className="hover:text-slate-600">About</Link>
          <Link
            href="#book"
            className="rounded-md bg-slate-900 text-white px-4 py-2 hover:bg-slate-800"
          >
            Book a Clarity Call
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Cross-functional clarity for product and go-to-market decisions.
        </h1>
        <p className="mt-6 text-lg text-slate-700">
          Blue Ruby helps leadership teams bring product, sales, and marketing perspectives together and align on a way forward they can commit to.
        </p>
        <div className="mt-10">
          <Link
            href="#book"
            className="inline-block rounded-md bg-slate-900 text-white px-6 py-3 text-base hover:bg-slate-800"
          >
            Book a Clarity Call
          </Link>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white py-20" id="how">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Who This Is For</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>You have a product in market, but momentum feels harder than it should</li>
            <li>Product, sales, and leadership are not fully aligned on priorities</li>
            <li>Teams are busy, but outcomes are not compounding</li>
            <li>Decisions stall or get revisited without clear resolution</li>
          </ul>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">How I Work</h2>
          <div className="mt-8 grid gap-8">
            <div>
              <h3 className="font-medium">Ask the Right Questions</h3>
              <p className="text-slate-700 mt-2">
                I work across functions to bring together information that exists but is not fully shared or connected.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Synthesize</h3>
              <p className="text-slate-700 mt-2">
                I translate competing perspectives into a shared understanding of priorities, tradeoffs, and constraints.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Drive a Way Forward</h3>
              <p className="text-slate-700 mt-2">
                Together, we land on decisions the team can align behind and execute against.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-20" id="about">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">About Jessica Lan</h2>
            <p className="mt-6 text-slate-700">
              I’m a product strategy and commercialization executive with more than 25 years of experience helping companies navigate complex product and go-to-market decisions across media, marketing technology, and CPG.
            </p>
            <p className="mt-4 text-slate-700">
              Most recently, I served as SVP of Product Marketing &amp; Solutions at Catalina Marketing, where I led product management and commercialization across the portfolio. I’ve built omnichannel media businesses, launched AI-powered capabilities, and helped teams align strategy, operations, and execution during periods of change.
            </p>
            <p className="mt-4 text-slate-700">
              Earlier in my career, I held leadership roles at Essity, Mars Wrigley, and PepsiCo, grounding my work in disciplined brand management, portfolio strategy, and commercial rigor.
            </p>
            <p className="mt-4 text-slate-700">
              I hold an MBA from the Kellogg School of Management at Northwestern University and a BA in Economics and French from Stanford University.
            </p>
            <p className="mt-6 text-slate-700">
              Clients and colleagues know me for bringing clarity, structure, and momentum to ambiguous situations. I’m known for asking the right questions, synthesizing competing perspectives, and helping teams commit to a path forward.
            </p>
          </div>
          <div className="relative w-40 h-40">
            <Image
              src="/headshot.jpg"
              alt="Founder headshot"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" id="book">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Ready to get unstuck?</h2>
          <p className="mt-4 text-slate-700">
            Book a Clarity Call. No prep required. Just bring the real issues.
          </p>
          <div className="mt-8">
            <button className="rounded-md bg-slate-900 text-white px-6 py-3 hover:bg-slate-800">
              Calendly link coming soon
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Blue Ruby
        </div>
      </footer>
    </main>
  );
}

// -----------------------------
