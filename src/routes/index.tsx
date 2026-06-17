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
  MapPin,
  Phone,
} from "lucide-react";
import logoAsset from "../assets/logo.svg.asset.json";
import QAiLogo from "../assets/Logo.svg";

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
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 grid grid-cols-[1fr_auto_1fr] items-center">
        <a href="#top" className="flex items-center" aria-label="Ensemble QAi">
          <img src={QAiLogo} alt="Ensemble" className="h-6 w-auto" />
        </a>
        <nav className="hidden md:flex items-center justify-center gap-10 text-sm text-muted-foreground">
          <a href="#what" className="hover:text-primary transition-colors">Platform</a>
          <a href="#devices" className="hover:text-primary transition-colors">Devices</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#expertise" className="hover:text-primary transition-colors">Expertise</a>
        </nav>
        <div className="flex justify-end">
          <a
            href="mailto:qai-contact@ensemble.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[0_0_24px_-6px_var(--color-primary)]"
          >
            Contact Us
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
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
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            AI-powered CTV &amp; Smart TV automation
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight flex items-center justify-center"><span className="text-gradient-accent"><img src={QAiLogo} alt="QAi Logo" className="h-12 md:h-16" /></span></h1>
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
        style={{ background: "radial-gradient(circle, oklch(0.74 0.18 55 / 0.25), transparent 60%)" }} />
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute inset-0 rounded-full border border-primary/30" />
        <div className="absolute inset-[8%] rounded-full border border-primary/20" />
        <div className="absolute inset-[16%] rounded-full border border-accent/20" />
      </div>
      <div className="absolute inset-0 animate-spin-reverse">
        <div className="absolute inset-[4%] rounded-full border border-dashed border-primary/15" />
        <div className="absolute inset-[24%] rounded-full border border-accent/15" />
      </div>
      <div className="absolute inset-0 animate-spin-slow" style={{ transform: "rotateX(0deg)" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/10"
            style={{ transform: `rotateY(${i * 30}deg)` }}
          />
        ))}
      </div>
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
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <span className="text-foreground">What is</span>
            <span className="text-gradient-accent mt-2">
              <img src={QAiLogo} alt="QAi Logo" className="h-8 md:h-12" />
            </span>
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
          <p className="text-center text-xs uppercase tracking-[0.32em] text-primary/90">
            Supported Devices
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-3 text-center text-2xl md:text-3xl font-semibold text-foreground/90">
            One ecosystem, every screen.
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-14 surface-card p-6 md:p-10 overflow-hidden">
            {/* SVG connection web behind tiles */}
            <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="none" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="lineGrad" x1="0" x2="1">
                  <stop offset="0" stopColor="oklch(0.74 0.18 55 / 0)" />
                  <stop offset="0.5" stopColor="oklch(0.74 0.18 55 / 0.7)" />
                  <stop offset="1" stopColor="oklch(0.74 0.18 55 / 0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="50" x2="100" y2="50" stroke="url(#lineGrad)" strokeWidth="0.3" strokeDasharray="2 3" className="animate-dash-flow" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="url(#lineGrad)" strokeWidth="0.3" strokeDasharray="2 3" className="animate-dash-flow" />
            </svg>

            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-accent)" }} />

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
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="group relative aspect-square flex items-center justify-center rounded-2xl border border-border bg-background/40 backdrop-blur transition-colors hover:border-primary/60"
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "radial-gradient(120px 80px at 50% 0%, oklch(0.74 0.18 55 / 0.30), transparent 70%)" }} />
                  <div className="relative text-foreground/95">{d.render}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
type Feature = {
  icon: ReactNode;
  title: string;
  text: string;
  bullets?: string[];
};

const features: Feature[] = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI Powered Automation Testing",
    text: "AI-driven visual testing that interacts with your app like a real user, real automated black-box testing across all OTT devices and Smart TVs.",
    bullets: [
      "Visual testing that interacts like a real user",
      "Black-box automation across OTT & Smart TVs",
      "Self-healing scripts powered by AI vision",
      "Continuous regression across every device",
    ],
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Remote Device Access & Manual Testing",
    text: "Gain instant, secure remote access to a diverse ecosystem of devices, eliminating the need for extensive hardware labs and enabling your team to work from anywhere.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Device Network Analysis",
    text: "Correlate device network events with on-screen visuals, transforming hours of manual QA into a single, automated insight.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Cross-Device Automation",
    text: "Handle complex user flows seamlessly. Supports cross-device automation including web interactions for scenarios like second-screen authentication.",
  },
];

function Features() {
  const [hero, ...rest] = features;
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

        {/* Restructured: hero feature on top full-width, three even cards below */}
        <div className="mt-16 grid gap-6">
          <Reveal>
            <article className="surface-card relative p-8 md:p-12 overflow-hidden">
              <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full opacity-30 blur-3xl"
                style={{ background: "var(--gradient-accent)" }} />
              <div className="relative grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                    {hero.icon}
                  </div>
                  <h3 className="mt-5 font-display text-2xl md:text-3xl font-semibold">
                    {hero.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
                    {hero.text}
                  </p>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {hero.bullets!.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                      className="flex items-start gap-3 rounded-xl border border-border bg-background/40 px-4 py-3 hover:border-primary/40 transition-colors"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-foreground/90">{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }: Feature) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="surface-card group relative h-full p-7 overflow-hidden hover:border-primary/40 transition-colors"
    >
      <div className="absolute inset-x-0 -top-px h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-primary), transparent)" }} />
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
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
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
                    {it.icon}
                  </div>
                  <span className="text-lg text-foreground/90">{it.label}</span>
                </div>
                <span className="font-display text-5xl md:text-6xl font-bold text-gradient-accent">
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
            <div className="flex w-max gap-20 animate-marquee">
              {loop.map((l, i) => (
                <div
                  key={`${l.name}-${i}`}
                  className="group flex h-32 w-56 items-center justify-center shrink-0"
                >
                  <img
                    src={l.src}
                    alt={l.name}
                    className="logo-mono max-h-24 max-w-full object-contain"
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
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-6 ">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur px-8 py-10 md:px-12 md:py-12">
            <div className="absolute inset-y-0 left-0 w-1"
              style={{ background: "linear-gradient(180deg, transparent, var(--color-primary), transparent)" }} />
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
              <img src={QAiLogo} alt="Ensemble" className="h-7 md:h-8 w-auto shrink-0" />
              <div className="hidden md:block h-12 w-px bg-border" />
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-display text-2xl md:text-3xl font-semibold">
                  See Ensemble QAi in action
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Walk through the platform with our team and discover how AI-driven testing fits your media workflow.
                </p>
              </div>
              <a
                href="mailto:qai-contact@ensemble.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[0_0_24px_-6px_var(--color-primary)] shrink-0"
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
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <img src={QAiLogo} alt="Ensemble" className="h-7 w-auto" />
        </div>
        <FooterCol
          title="Locations"
          icon={<MapPin className="h-3.5 w-3.5" />}
          items={["Vancouver", "London", "Baia Mare", "Brașov"]}
        />
        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.28em] text-primary/90 flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" /> Get in Touch
          </h4>
          <ul className="mt-5 space-y-2 text-foreground/90 text-sm">
            <li><span className="text-muted-foreground">MAIN LINE:</span> 1.604.231.9510</li>
            <li><span className="text-muted-foreground">TOLL FREE:</span> 1.855.607.3279</li>
            <li><span className="text-muted-foreground">FAX:</span> 1.604.231.9545</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.28em] text-primary/90">Links</h4>
          <ul className="mt-5 space-y-2 text-foreground/90 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-display text-lg font-semibold tracking-tight lowercase text-foreground/80">ensemble</div>
          <p className="text-sm text-muted-foreground">
            © Ensemble Systems 2026 · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, icon, items }: { title: string; icon?: ReactNode; items: string[] }) {
  return (
    <div>
      <h4 className="font-display text-xs uppercase tracking-[0.28em] text-primary/90 flex items-center gap-2">
        {icon} {title}
      </h4>
      <ul className="mt-5 space-y-2 text-foreground/90 text-sm">
        {items.map((it) => <li key={it}>{it}</li>)}
      </ul>
    </div>
  );
}
