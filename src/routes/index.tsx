import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import {
  Bot,
  Globe,
  Activity,
  Layers,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Tv,
  Zap,
  Network,
  Cpu,
  Sparkles,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ensemble QAi — OTT & Smart TV Testing" },
      {
        name: "description",
        content:
          "Seamless, intelligent testing across CTV devices and Smart TVs. Remote access and AI-powered automation to ensure your apps perform flawlessly.",
      },
      { property: "og:title", content: "Ensemble QAi — OTT & Smart TV Testing" },
      {
        property: "og:description",
        content:
          "AI-powered automation and remote device access for flawless media experiences.",
      },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <WhatIs />
      <SupportedDevices />
      <Features />
      <Expertise />
      <TrustedBy />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent shadow-[0_0_24px_-6px_var(--color-primary)]">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          <span>Ensemble</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#what" className="hover:text-foreground transition-colors">Platform</a>
          <a href="#devices" className="hover:text-foreground transition-colors">Devices</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#expertise" className="hover:text-foreground transition-colors">Expertise</a>
        </nav>
        <a
          href="mailto:qai-contact@ensemble.com"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[0_0_24px_-6px_var(--color-primary)]"
        >
          Contact Us
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section id="top" ref={ref} className="relative isolate pt-32 pb-28 min-h-[100svh] flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
        <Globe3D />
        <Particles />
      </div>

      <motion.div style={{ y, opacity }} className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            AI-powered CTV & Smart TV automation
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Ensemble </span>
            <span className="text-gradient-accent">QAi</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="mt-4 text-2xl md:text-4xl font-display font-semibold text-foreground/90">
            OTT &amp; Smart TV Testing
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Seamless, efficient, and intelligent testing across a myriad of CTV devices and Smart TVs.
            Remote access and AI-powered automation to ensure your apps perform flawlessly.
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="mailto:qai-contact@ensemble.com"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.02] transition"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}

function Globe3D() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] md:w-[860px] md:h-[860px]">
      <div className="absolute inset-0 rounded-full animate-pulse-glow"
           style={{ background: "radial-gradient(circle, oklch(0.78 0.16 215 / 0.25), transparent 60%)" }} />
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute inset-0 rounded-full border border-primary/30" />
        <div className="absolute inset-[8%] rounded-full border border-primary/20" />
        <div className="absolute inset-[16%] rounded-full border border-accent/20" />
      </div>
      <div className="absolute inset-0 animate-spin-reverse">
        <div className="absolute inset-[4%] rounded-full border border-dashed border-primary/15" />
        <div className="absolute inset-[24%] rounded-full border border-accent/15" />
      </div>
      {/* meridians */}
      <div className="absolute inset-0 animate-spin-slow" style={{ transform: "rotateX(0deg)" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/10"
            style={{ transform: `rotateY(${i * 30}deg)` }}
          />
        ))}
      </div>
      {/* orbiting dots */}
      <div className="absolute inset-0 animate-spin-slow">
        <span className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_var(--color-primary)]" />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_16px_var(--color-accent)]" />
      </div>
      <div className="absolute inset-0 animate-spin-reverse">
        <span className="absolute left-0 top-1/3 h-1.5 w-1.5 rounded-full bg-primary/80" />
        <span className="absolute right-1/4 bottom-0 h-2 w-2 rounded-full bg-accent/80" />
      </div>
    </div>
  );
}

function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div className="absolute inset-0">
      {dots.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const delay = (i % 8) * 0.6;
        const size = 1 + ((i * 7) % 3);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary/60"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}

/* ---------- What is ---------- */
function WhatIs() {
  return (
    <section id="what" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold">
            What is <span className="text-gradient-accent">Ensemble QAi</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A cutting-edge service providing remote access to a comprehensive range of CTV devices and
            Smart TVs. More than just access — it&apos;s an advanced automation platform designed to
            rigorously verify media applications, leveraging the power of Artificial Intelligence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Supported devices ---------- */
const devices: { render: ReactNode; key: string }[] = [
  { key: "roku", render: <span className="brand-roku text-2xl">ROKU</span> },
  {
    key: "firetv",
    render: (
      <span className="flex items-baseline gap-1">
        <span className="brand-firetv-1 text-2xl">fire</span>
        <span className="brand-firetv-2 text-sm tracking-widest">TV</span>
      </span>
    ),
  },
  {
    key: "android",
    render: (
      <span className="flex items-baseline gap-1">
        <span className="brand-android-1 text-xl">android</span>
        <span className="brand-android-2 text-sm">TV</span>
      </span>
    ),
  },
  {
    key: "apple",
    render: (
      <span className="flex items-baseline gap-1">
        <span className="brand-apple text-2xl"></span>
        <span className="brand-apple text-xl">tv</span>
      </span>
    ),
  },
  {
    key: "rokutv",
    render: (
      <span className="flex items-baseline gap-1">
        <span className="brand-roku text-xl">ROKU</span>
        <span className="brand-roku text-sm">TV</span>
      </span>
    ),
  },
  { key: "tizen", render: <span className="brand-tizen text-2xl">Tizen</span> },
  { key: "vizio", render: <span className="brand-vizio text-2xl">VIZIO</span> },
  {
    key: "lg",
    render: (
      <span className="flex items-baseline gap-1">
        <span className="brand-lg-1 text-2xl">LG</span>
        <span className="brand-lg-2 text-xs">webOS</span>
      </span>
    ),
  },
  { key: "vega", render: <span className="brand-vega text-2xl">Vega</span> },
];

function SupportedDevices() {
  return (
    <section id="devices" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Supported Devices
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-3 text-center text-2xl md:text-3xl font-semibold text-foreground/90">
            One ecosystem, every screen.
          </h3>
        </Reveal>

        <div className="relative mt-14">
          {/* connecting glow line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <motion.div
            className="relative grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {devices.map((d) => (
              <motion.div
                key={d.key}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.04 }}
                className="group relative aspect-square flex items-center justify-center rounded-2xl border border-border bg-card/60 backdrop-blur transition-colors hover:border-primary/40"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "radial-gradient(120px 80px at 50% 0%, oklch(0.78 0.16 215 / 0.25), transparent 70%)" }} />
                <div className="relative text-foreground/90">{d.render}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
function Features() {
  const featureBullets = [
    "Visual testing that interacts like a real user",
    "Black-box automation across OTT & Smart TVs",
    "Self-healing scripts powered by AI vision",
    "Continuous regression across every device",
  ];
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-center text-4xl md:text-5xl font-bold">
            Key Features &amp; <span className="text-gradient-accent">Benefits</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-center text-muted-foreground text-lg">
            Everything you need to ensure flawless media experiences.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large feature */}
          <Reveal className="lg:col-span-2">
            <article className="surface-card relative h-full p-8 md:p-10 overflow-hidden">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
                style={{ background: "var(--gradient-accent)" }} />
              <div className="relative grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Bot className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl md:text-3xl font-semibold">
                    AI Powered Automation Testing
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    AI-driven visual testing that interacts with your app like a real user, real
                    automated black-box testing across all OTT devices and Smart TVs.
                  </p>
                </div>
                <ul className="space-y-3">
                  {featureBullets.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                      className="flex items-start gap-3 rounded-xl border border-border bg-background/40 px-4 py-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-foreground/90">{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Remote Device Access & Manual Testing"
              text="Gain instant, secure remote access to a diverse ecosystem of devices, eliminating the need for extensive hardware labs and enabling your team to work from anywhere."
            />
          </Reveal>
          <Reveal delay={0.05}>
            <FeatureCard
              icon={<Activity className="h-6 w-6" />}
              title="Device Network Analysis"
              text="Correlate device network events with on-screen visuals, transforming hours of manual QA into a single, automated insight."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FeatureCard
              icon={<Layers className="h-6 w-6" />}
              title="Cross-Device Automation"
              text="Handle complex user flows seamlessly. Supports cross-device automation including web interactions for scenarios like second-screen authentication."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="surface-card h-full p-7 transition-colors hover:border-primary/40"
    >
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
    </motion.article>
  );
}

/* ---------- Expertise ---------- */
const expertiseItems = [
  { value: "15+", label: "Years in Media", icon: <ShieldCheck className="h-5 w-5" /> },
  { value: "50+", label: "Media Clients", icon: <Tv className="h-5 w-5" /> },
  { value: "200+", label: "Media Projects", icon: <Zap className="h-5 w-5" /> },
];

function Expertise() {
  return (
    <section id="expertise" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-center text-4xl md:text-5xl font-bold">
            Our Expertise in <span className="text-gradient-accent">Media</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            With a rich history in the media space since 2012, our team brings over a decade of
            experience and deep industry knowledge to every solution we build. We understand the
            unique challenges and demands of media application development and delivery.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-4 max-w-2xl mx-auto">
          {expertiseItems.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.1}>
              <div className="surface-card flex items-center justify-between gap-6 px-7 py-6 group hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    {it.icon}
                  </div>
                  <span className="text-lg text-foreground/90">{it.label}</span>
                </div>
                <span className="text-5xl md:text-6xl font-display font-bold text-gradient-accent">
                  {it.value}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Trusted by ---------- */
const logos = [
  { name: "ABC News", src: "https://qai.ensemble.com/assets/abc-news-DXUAe8T-.svg" },
  { name: "Disney", src: "https://qai.ensemble.com/assets/disney-Bk0yOObg.svg" },
  { name: "CBS", src: "https://qai.ensemble.com/assets/cbs-Bwg8xOqI.svg" },
  { name: "National Geographic", src: "https://qai.ensemble.com/assets/national-geographic-KKyd8xPT.svg" },
  { name: "DreamWorks", src: "https://qai.ensemble.com/assets/dreamworks-CTinPYXW.svg" },
  { name: "Discovery", src: "https://qai.ensemble.com/assets/discovery-Dvjg4OWj.svg" },
];

function TrustedBy() {
  const loop = [...logos, ...logos];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center text-4xl md:text-5xl font-bold">
            Trusted by <span className="text-gradient-accent">Industry Leaders</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-center text-muted-foreground text-lg">
            We&apos;re proud to have worked with some of the biggest names in media and entertainment.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 relative overflow-hidden"
            style={{ maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)" }}>
            <div className="flex w-max gap-16 animate-marquee">
              {loop.map((l, i) => (
                <div
                  key={`${l.name}-${i}`}
                  className="group flex h-32 w-56 items-center justify-center shrink-0"
                >
                  <img
                    src={l.src}
                    alt={l.name}
                    className="max-h-24 max-w-full object-contain opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-16 text-center"
            style={{ background: "linear-gradient(135deg, oklch(0.22 0.06 252), oklch(0.26 0.10 280))" }}>
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full opacity-50 blur-3xl"
              style={{ background: "var(--gradient-accent)" }} />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold">
                See Ensemble <span className="text-gradient-accent">QAi</span> in action
              </h2>
              <p className="mt-5 mx-auto max-w-2xl text-muted-foreground text-lg">
                Walk through the platform with our team and discover how AI-driven testing fits
                your media workflow.
              </p>
              <a
                href="mailto:qai-contact@ensemble.com"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.02] transition"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative border-t border-border mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <h4 className="text-xs uppercase tracking-[0.28em] text-muted-foreground flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" /> Locations
          </h4>
          <ul className="mt-5 space-y-2 text-foreground/90">
            <li>Vancouver</li>
            <li>London</li>
            <li>Baia Mare</li>
            <li>Brașov</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.28em] text-muted-foreground flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" /> Get in Touch
          </h4>
          <ul className="mt-5 space-y-2 text-foreground/90 text-sm">
            <li><span className="text-muted-foreground">MAIN LINE:</span> 1.604.231.9510</li>
            <li><span className="text-muted-foreground">TOLL FREE:</span> 1.855.607.3279</li>
            <li><span className="text-muted-foreground">FAX:</span> 1.604.231.9545</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Legal</h4>
          <ul className="mt-5 space-y-2 text-foreground/90 text-sm">
            <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition">Cookies</a></li>
            <li><a href="#" className="hover:text-primary transition">Terms of Use</a></li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="GitHub" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-2xl font-bold tracking-tight lowercase">ensemble</div>
          <p className="text-sm text-muted-foreground">
            © Ensemble Systems 2026 · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
