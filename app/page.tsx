import Loader from "@/components/Loader";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Starfield from "@/components/Starfield";
import Tilt from "@/components/Tilt";
import Reveal from "@/components/Reveal";
import { Logo, ServiceArt, Planet } from "@/components/Art";
import { services, orbits, socials, contact } from "@/lib/data";

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{children}</p>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">{children}</h2>
);

export default function Home() {
  return (
    <main className="bg-[#070d1a] text-slate-300">
      <Loader />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070d1a]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
            <Logo />3AT<span className="text-cyan-300">.</span>
          </a>
          <div className="hidden gap-7 text-sm md:flex">
            {["vision", "services", "stack", "work", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="capitalize hover:text-cyan-300">
                {s}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-full bg-cyan-300 px-5 py-2 text-sm font-medium text-[#070d1a]">
            Start a mission
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-20">
        <Starfield />
        <div className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block"><Planet /></div>
        <div className="relative mx-auto w-full max-w-7xl">
          <Label>Launch</Label>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] text-white sm:text-7xl">
            Build technology. Create innovation. Drive growth.
          </h1>
          <p className="mt-6 text-xl text-cyan-200">
            3AT: Web apps, AI solutions and SaaS products engineered for decisive launches.
          </p>
          <p className="mt-4 max-w-2xl text-slate-400">
            Full-stack developer (MERN, Next.js, WordPress, Shopify) delivering production-ready software for clients worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-cyan-300 px-7 py-3 font-medium text-[#070d1a]">
              Start a mission
            </a>
            <a href="#work" className="rounded-full border border-white/25 px-7 py-3 text-white">
              View work
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {["Speed with control", "30 day MVP path", "Architecture first", "Production ready", "AI assisted delivery"].map((c) => (
              <span key={c} className="rounded-full border border-white/15 px-4 py-1.5 text-sm">
                {c}
              </span>
            ))}
          </div>
          <p className="mt-14 text-xs uppercase tracking-[0.3em] text-slate-500">Scroll to launch ↓</p>
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-8">
            <Label>Vision</Label>
            <p className="mt-4 text-xl text-white">To be a trusted partner that turns ambitious ideas into reliable digital products.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-8">
            <Label>Mission</Label>
            <p className="mt-4 text-xl text-white">
              Deliver fast, well-architected web apps, AI solutions and SaaS products that help businesses grow.
            </p>
          </div>
        </div>
        <div className="mt-24">
          <Label>Process</Label>
          <H2>Four orbits around one mission.</H2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {orbits.map(([n, t, d]) => (
            <div key={n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-cyan-300">{n}</p>
              <h3 className="mt-6 text-2xl text-white">{t}</h3>
              <p className="mt-2 text-slate-400">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <Label>Services</Label>
        <H2>From first build to operational software.</H2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 100}>
              <Tilt className="h-full rounded-2xl">
                <a href="#contact" className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a1428] transition hover:border-cyan-300/50">
                  <div className="h-40 overflow-hidden"><div className="h-full w-full transition duration-500 group-hover:scale-110"><ServiceArt i={i} /></div></div>
                  <div className="p-6">
                    <p className="text-sm text-cyan-300">{s.img}</p>
                    <h3 className="mt-2 text-xl text-white">{s.t}</h3>
                    <p className="mt-2 text-sm text-slate-400">{s.d}</p>
                    <p className="mt-4 text-sm text-cyan-300">Discuss scope →</p>
                  </div>
                </a>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl px-5 py-24">
        <Label>Tools</Label>
        <H2>A build system for fast, durable software.</H2>
        <Stack />
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24">
        <Label>Mission log</Label>
        <H2>Projects delivered for teams already in orbit.</H2>
        <Projects />
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24">
        <Label>Contact</Label>
        <H2>Bring us the hard part.</H2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs uppercase text-slate-500">WhatsApp / Phone</p>
              <a href="https://wa.me/923108697290" className="text-xl text-white">{contact.phone}</a>
              <p className="mt-4 text-xs uppercase text-slate-500">Email</p>
              {contact.emails.map((e) => <a key={e} href={`mailto:${e}`} className="block text-white hover:text-cyan-300">{e}</a>)}
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={contact.cv} className="rounded-full border border-cyan-300/50 px-5 py-2 text-sm text-cyan-300 hover:bg-cyan-300 hover:text-[#070d1a]">Download CV</a>
                <a href={contact.hire} target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan-300 px-5 py-2 text-sm font-medium text-[#070d1a]">Hire me on Fiverr</a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs uppercase text-slate-500">Profiles</p>
              <div className="mt-2 flex flex-wrap gap-3">
                {socials.map(([n, u]) => (
                  <a key={n} href={u} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">
                    {n}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <form action="https://wa.me/923108697290" method="get" target="_blank" className="space-y-4">
            {["Company", "Name", "Email"].map((f) => (
              <input key={f} placeholder={f} className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white outline-none focus:border-cyan-300" />
            ))}
            <textarea name="text" rows={4} placeholder="Message" className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white outline-none focus:border-cyan-300" />
            <button className="rounded-full bg-cyan-300 px-7 py-3 font-medium text-[#070d1a]">Send message</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4">
          <p className="flex items-center gap-2"><Logo size={20} />© 2026 3AT. All rights reserved.</p>
          <p>Web apps · AI solutions · SaaS products</p>
        </div>
      </footer>
    </main>
  );
}
