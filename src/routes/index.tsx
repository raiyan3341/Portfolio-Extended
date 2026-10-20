import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  GraduationCap, Code2, Users, Gamepad2, ArrowRight, Menu, X, Cpu, Globe, Database, Network,
  ShieldCheck, Wrench, Sparkles, Trophy, Music, Plane, Camera, BookOpen, Mail, Github, Linkedin,
  Facebook, ExternalLink, ArrowUp, School, Building2, Target, Heart, Crosshair,
  Instagram, Phone, MessagesSquare, Twitter, Award, BadgeCheck, MapPin, Quote, Star, Zap,
  Headphones, Languages,
} from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import cricket from "@/assets/cricket.jpg";
import football from "@/assets/football.jpg";
import carrom from "@/assets/carrom.jpg";
import gameValorant from "@/assets/game-valorant.jpg";
import gameEfootball from "@/assets/game-efootball.jpg";
import gameFreefire from "@/assets/game-freefire.jpg";
import skillProgramming from "@/assets/skill-programming.jpg";
import skillWebdev from "@/assets/skill-webdev.jpg";
import skillDatabase from "@/assets/skill-database.jpg";
import skillNetworking from "@/assets/skill-networking.jpg";
import skillCcna from "@/assets/skill-ccna.jpg";
import skillTools from "@/assets/skill-tools.jpg";
import certCcna from "@/assets/cert-ccna.jpg";
import certWebdev from "@/assets/cert-webdev.jpg";
import certDatabase from "@/assets/cert-database.jpg";
import university from "@/assets/university.jpg";
import travelDhaka from "@/assets/travel-dhaka.jpg";
import travelNarayanganj from "@/assets/travel-narayanganj.jpg";
import travelThakurgaon from "@/assets/travel-thakurgaon.jpg";
import travelSylhet from "@/assets/travel-sylhet.jpg";
import travelSundarbans from "@/assets/travel-sundarbans.jpg";
import travelBandarban from "@/assets/travel-bandarban.jpg";
import travelCoxsbazar from "@/assets/travel-coxsbazar.jpg";
import travelKuakata from "@/assets/travel-kuakata.jpg";
import travelBarisal from "@/assets/travel-barisal.jpg";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projectImages = [project1, project2, project3];

import {
  profile, education, certificates, skills, projects, portfolioUrl, leadership, sports,
  music, travel, photography, reading, games, moreGames, contact,
} from "@/data/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — Beyond the Code` },
      { name: "description", content: "Personal identity portfolio: education, skills, projects, leadership, sports and gaming." },
      { property: "og:title", content: `${profile.name} — Beyond the Code` },
      { property: "og:description", content: "More Than Just a Developer. A personal universe of code, networks and play." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Home", "About", "Education", "Skills", "Projects", "Leadership", "Interests", "Contact"];
const sportImg = { cricket, football, carrom };
const skillIcons = [Cpu, Globe, Database, Network, ShieldCheck, Wrench];
const skillBg = [skillProgramming, skillWebdev, skillDatabase, skillNetworking, skillCcna, skillTools];
const certIcons = [ShieldCheck, Code2, Database];
const certBg = [certCcna, certWebdev, certDatabase];
const contactIcons = [Mail, Github, Linkedin, Facebook, Instagram, Phone, MessagesSquare, Twitter];
const gameImg = [gameValorant, gameEfootball, gameFreefire];
const travelImg = [travelDhaka, travelNarayanganj, travelThakurgaon, travelSylhet, travelSundarbans, travelBandarban, travelCoxsbazar, travelKuakata, travelBarisal];
const photoImg = [photo1, photo2, photo3, photo4];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && el.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => { const el = document.getElementById(n.toLowerCase()); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#home" className="font-display text-sm font-bold tracking-wider">
          {profile.name.toUpperCase()} <span className="text-primary">/ BEYOND THE CODE</span>
        </a>
        <nav className="hidden gap-6 lg:flex">
          {NAV.map((n) => {
            const id = n.toLowerCase();
            return (
              <a key={n} href={`#${id}`} className={`relative text-sm transition-colors hover:text-foreground ${active === id ? "text-foreground" : "text-muted-foreground"}`}>
                {n}
                {active === id && <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded bg-primary" />}
              </a>
            );
          })}
        </nav>
        <button aria-label="Menu" className="lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="grid border-t border-border bg-background px-5 py-3 lg:hidden">
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="py-2 text-muted-foreground hover:text-primary">{n}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Heading({ title, sub, icon: Icon }: { title: string; sub: string; icon?: typeof Sparkles }) {
  return (
    <div className="mb-10">
      <h2 className="flex items-center gap-3 border-l-4 border-primary pl-4 text-3xl font-bold md:text-4xl">
        {title}
        {Icon && <Icon className="h-7 w-7 text-primary" />}
      </h2>
      <p className="mt-2 pl-5 text-muted-foreground">{sub}</p>
    </div>
  );
}
function Section({ id, children, className = "", variant = "warm" }: { id?: string; children: ReactNode; className?: string; variant?: "warm" | "cool" | "grid" }) {
  const bg = variant === "cool" ? "ambient-cool" : variant === "grid" ? "grid-bg" : "ambient-warm";
  return (
    <section id={id} className="relative">
      <div className={`pointer-events-none absolute inset-0 ${bg}`} />
      <div className={`relative mx-auto max-w-7xl px-5 py-20 ${className}`}><Reveal>{children}</Reveal></div>
    </section>
  );
}
function IconBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-accent text-primary shadow-[0_0_18px_-4px] shadow-primary/40 ${className}`}>{children}</div>;
}

function Marquee({ children, duration = 40, reverse = false, className = "" }: { children: ReactNode; duration?: number; reverse?: boolean; className?: string }) {
  return (
    <div className={`marquee-paused group relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div
        className="animate-marquee flex w-max gap-4"
        style={{ ["--marquee-duration" as string]: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section id="home" className="relative grid-bg pt-16">
        <div className="pointer-events-none absolute inset-0 ambient" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <p className="flex items-center gap-2 text-sm text-primary"><Sparkles className="h-4 w-4" /> Hi, I'm {profile.name}</p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] md:text-7xl">
              {profile.tagline[0]}<br /><span className="text-primary">{profile.tagline[1]}</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">{profile.intro}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.labels.map((l) => <span key={l} className="rounded-full border border-border bg-secondary px-4 py-1.5 text-xs transition hover:border-primary/60 hover:text-primary">{l}</span>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">Explore My World <ArrowRight className="h-4 w-4" /></a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-accent">Contact Me</a>
            </div>
          </div>
          <div className="relative mx-auto w-56 sm:w-64 md:w-full md:max-w-sm">
            <div className="absolute -inset-6 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -inset-3 animate-spin-slower rounded-full border-2 border-dashed border-primary/40" />
            <div className="absolute -inset-3 animate-pulse-ring rounded-full border border-primary/50" />
            <div className="animate-floaty relative">
              <img src={profileImg} alt={`${profile.name} portrait`} width={1024} height={1024} className="relative aspect-square w-full rounded-full border-4 border-primary/50 object-cover glow" />
              <p className="absolute -right-4 bottom-6 -rotate-6 rounded-full border border-border bg-card/90 px-4 py-2 font-script text-2xl text-primary shadow-lg backdrop-blur">Dream • Learn • Build</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 pb-16 md:grid-cols-4">
          {[
            [GraduationCap, "Education", "My Academic Journey", "#education"],
            [Code2, "Technical Skills", "What I Know & Learn", "#skills"],
            [Users, "Leadership", "University & Beyond", "#leadership"],
            [Gamepad2, "Gaming & Hobbies", "Play, Relax, Enjoy", "#interests"],
          ].map(([I, t, s, h], i) => {
            const Icon = I as typeof Users;
            return (
              <a key={t as string} href={h as string} className="surface card-shine group relative p-5 hover:-translate-y-2">
                <span className="absolute right-4 top-4 font-display text-4xl font-extrabold text-primary/10 transition group-hover:text-primary/25">0{i + 1}</span>
                <IconBox className="transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-5 w-5" /></IconBox>
                <p className="mt-4 font-display font-semibold">{t as string}</p>
                <p className="text-xs text-muted-foreground">{s as string}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition group-hover:opacity-100">Explore <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" /></span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" variant="cool">
        <Heading title="About Me" sub="Let me introduce myself" icon={Heart} />
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="surface card-shine relative p-7">
            <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />
            <p className="text-xl leading-relaxed text-foreground/85 md:text-2xl">{profile.bio}</p>
          </div>
          <div className="surface card-shine relative p-6">
            <p className="mb-5 flex items-center gap-2 font-display font-semibold"><Star className="h-4 w-4 text-primary" /> Quick Facts</p>
            {[
              [Users, "Full Name", `${profile.fullName} (${profile.name})`],
              [Zap, "Current Status", profile.status],
              [MapPin, "Hometown", profile.hometown],
            ]
              .filter(([, , v]) => v)
              .map(([I, k, v]) => {
                const Icon = I as typeof Users;
                return (
                  <div key={k as string} className="mb-4 flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary"><Icon className="h-4 w-4" /></span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{k as string}</p>
                      <p className="font-medium">{v as string}</p>
                    </div>
                  </div>
                );
              })}
            <p className="absolute bottom-4 right-5 -rotate-6 font-script text-2xl text-primary">Better Everyday</p>
          </div>
          <div className="surface card-shine p-6">
            <p className="mb-5 flex items-center gap-2 font-display font-semibold"><Heart className="h-4 w-4 text-primary" /> My Interests</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {profile.interests.map((i, idx) => {
                const Icon = [Cpu, Gamepad2, Trophy, BookOpen][idx % 4]!;
                return (
                  <div key={i} className="group flex flex-col items-center gap-2 rounded-lg bg-secondary py-4 text-sm transition hover:bg-accent hover:text-accent-foreground">
                    <Icon className="h-5 w-5 text-primary transition group-hover:scale-125" />{i}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="surface card-shine p-6">
            <p className="mb-4 flex items-center gap-2 font-display font-semibold"><Target className="h-4 w-4 text-primary" /> Goals</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {profile.goals.map((g) => (
                <li key={g} className="group flex gap-2 transition hover:text-foreground">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary transition group-hover:scale-150 group-hover:shadow-[0_0_8px] group-hover:shadow-primary" />{g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" variant="grid">
        <Heading title="Education" sub="My Academic Journey" icon={GraduationCap} />
        <div className="relative space-y-6 border-l border-border pl-8">
          {education.map((e, i) => {
            const Icon = [Building2, School, School][i] ?? School;
            return (
              <div key={e.level} className="relative">
                <span className="absolute -left-[37px] top-6 h-3 w-3 rounded-full bg-primary glow" />
                <div className="surface card-shine flex flex-col gap-4 p-6 sm:flex-row">
                  <IconBox><Icon className="h-5 w-5" /></IconBox>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap justify-between gap-2">
                      <p className="font-display text-lg font-semibold">{e.level}</p>
                      <span className="text-sm text-primary">{e.dates}</span>
                    </div>
                    <p className="font-medium">{e.institution}</p>
                    <p className="text-sm text-muted-foreground">{e.qualification}</p>
                    {e.description && <p className="mt-1 text-sm text-muted-foreground">{e.description}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {certificates.length > 0 && (
          <div className="mt-14">
            <p className="mb-6 flex items-center gap-2 font-display text-xl font-semibold"><Award className="h-5 w-5 text-primary" /> Certificates & Courses</p>
            <div className="grid gap-5 md:grid-cols-3">
              {certificates.map((c, i) => {
                const Icon = certIcons[i % certIcons.length]!;
                return (
                  <div key={c.title} className="surface card-shine group relative overflow-hidden p-6 hover:-translate-y-2">
                    <img src={certBg[i % certBg.length]} alt="" loading="lazy" width={1024} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-700 group-hover:scale-110 group-hover:opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/85 to-card/40" />
                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <IconBox className="transition duration-500 group-hover:rotate-6 group-hover:scale-110"><Icon className="h-5 w-5" /></IconBox>
                        <span className="flex items-center gap-1 rounded-full border border-primary/30 bg-accent px-3 py-1 text-[11px] font-medium text-accent-foreground"><BadgeCheck className="h-3 w-3" />{c.status}</span>
                      </div>
                      <p className="mt-4 font-display text-lg font-semibold">{c.title}</p>
                      <p className="text-sm font-medium text-primary">{c.provider}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {c.topics.map((t) => <span key={t} className="rounded-md bg-secondary/80 px-2.5 py-1 text-xs backdrop-blur transition group-hover:bg-accent">{t}</span>)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Section>

      {/* SKILLS */}
      <Section id="skills" variant="warm">
        <Heading title="Technical Universe" sub="Tools and technologies I'm working with" icon={Cpu} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const Icon = skillIcons[i % skillIcons.length]!;
            return (
              <div key={s.category} className="surface group relative overflow-hidden p-6 hover:-translate-y-2">
                <img src={skillBg[i % skillBg.length]} alt="" loading="lazy" width={1024} height={640} className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-700 group-hover:scale-110 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/85 to-card/40" />
                <div className="relative">
                  <IconBox className="transition duration-500 group-hover:rotate-6 group-hover:scale-110"><Icon className="h-5 w-5" /></IconBox>
                  <p className="mt-4 font-display text-lg font-semibold">{s.category}</p>
                  <p className="text-xs text-muted-foreground">{s.note}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{s.items.map((it) => <span key={it} className="rounded-md bg-secondary/80 px-2.5 py-1 text-xs backdrop-blur transition hover:bg-primary hover:text-primary-foreground">{it}</span>)}</div>
                  <p className="mt-4 text-xs font-medium text-primary">{s.status}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" variant="cool">
        <Heading title="Projects" sub="Some of my works and practice projects" icon={Code2} />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((p, i) => (
            <div key={p.title} className="surface card-shine flex flex-col overflow-hidden hover:-translate-y-2">
              <div className="relative h-44 w-full overflow-hidden">
                <img src={projectImages[i % projectImages.length]} alt={p.title} className="h-full w-full object-cover transition duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-display text-lg font-semibold">{p.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="rounded-md bg-secondary px-2.5 py-1 text-xs">{t}</span>)}</div>
                <div className="mt-auto flex gap-2 pt-6">
                  {p.demo && <a href={p.demo} className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:brightness-110">Live Demo</a>}
                  {p.github && <a href={p.github} className="rounded-full border border-border px-4 py-2 text-xs transition hover:border-primary">GitHub</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
        {portfolioUrl && (
          <a href={portfolioUrl} target="_blank" rel="noreferrer" className="surface card-shine mt-6 flex items-center gap-4 p-5">
            <IconBox><ExternalLink className="h-5 w-5" /></IconBox>
            <div><p className="text-sm text-muted-foreground">Check out my existing portfolio for more projects</p><p className="text-primary">{portfolioUrl}</p></div>
          </a>
        )}
      </Section>

      {/* LEADERSHIP */}
      <Section id="leadership" variant="grid">
        <Heading title="University Life & Leadership" sub="Learning, growing and contributing" icon={Users} />
        <div className="relative overflow-hidden rounded-2xl border border-border">
          <img src={university} alt="Northern University Bangladesh campus" loading="lazy" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover opacity-30 md:left-auto md:w-2/5 md:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40 md:bg-gradient-to-r md:from-background md:via-background/95 md:to-transparent" />
          <div className="relative grid items-center gap-10 p-6 md:grid-cols-[1.5fr_1fr] md:p-10">
            <div className="space-y-5">
              {leadership.map((l) => (
                <div key={l.role} className="surface card-shine flex gap-4 p-6">
                  <IconBox><Users className="h-5 w-5" /></IconBox>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap justify-between gap-2"><p className="font-display font-semibold">{l.role}</p><span className="text-sm text-primary">{l.dates}</span></div>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">{l.points.map((p) => <li key={p}>• {p}</li>)}</ul>
                  </div>
                </div>
              ))}
            </div>
            <p className="-rotate-6 text-center font-script text-5xl leading-tight text-primary drop-shadow-lg">Good Students<br />Build Great<br />Futures</p>
          </div>
        </div>
      </Section>

      {/* INTERESTS */}
      <Section id="interests" variant="warm">
        <Heading title="Hobbies & Sports" sub="Because life is not just about work and study" icon={Trophy} />
        <div className="grid gap-5 md:grid-cols-3">
          {sports.map((s) => (
            <div key={s.name} className="surface group overflow-hidden hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img src={sportImg[s.image]} alt={s.name} loading="lazy" width={1024} height={640} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <Trophy className="absolute right-4 top-4 h-6 w-6 text-primary opacity-80 transition group-hover:scale-125" />
              </div>
              <div className="p-6">
                <p className="font-display text-lg font-semibold">{s.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                <p className="mt-3 text-xs text-primary">{s.fav}</p>
              </div>
            </div>
          ))}
        </div>

        {/* OTHER HOBBIES — marquee style */}
        <div className="mt-20 space-y-14">
          {/* Music */}
          <div>
            <p className="mb-2 flex items-center gap-2 font-display text-xl font-semibold"><Music className="h-5 w-5 text-primary" /> Music</p>
            <p className="mb-5 text-sm text-muted-foreground">{music.note}</p>
            <Marquee duration={45}>
              {music.english.map((song) => (
                <span key={song} className="surface flex shrink-0 items-center gap-3 px-5 py-3 text-sm">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary"><Headphones className="h-4 w-4" /></span>
                  {song}
                </span>
              ))}
            </Marquee>
            <Marquee duration={50} reverse className="mt-4">
              {music.bangla.map((song) => (
                <span key={song} className="surface flex shrink-0 items-center gap-3 px-5 py-3 text-sm">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary"><Languages className="h-4 w-4" /></span>
                  {song}
                </span>
              ))}
            </Marquee>
          </div>

          {/* Travel */}
          <div>
            <p className="mb-2 flex items-center gap-2 font-display text-xl font-semibold"><Plane className="h-5 w-5 text-primary" /> Travel</p>
            <p className="mb-5 text-sm text-muted-foreground">{travel.note}</p>
            <Marquee duration={60}>
              {travel.places.map((place, i) => (
                <div key={place} className="group relative h-44 w-72 shrink-0 overflow-hidden rounded-xl border border-border">
                  <img src={travelImg[i % travelImg.length]} alt={place} loading="lazy" width={1024} height={640} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-4 flex items-center gap-1.5 font-display font-semibold"><MapPin className="h-4 w-4 text-primary" />{place}</p>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Photography */}
          <div>
            <p className="mb-2 flex items-center gap-2 font-display text-xl font-semibold"><Camera className="h-5 w-5 text-primary" /> Photography</p>
            <p className="mb-5 text-sm text-muted-foreground">{photography.note}</p>
            <Marquee duration={40} reverse>
              {photography.captions.map((cap, i) => (
                <div key={cap} className="group relative h-52 w-80 shrink-0 overflow-hidden rounded-xl border border-border">
                  <img src={photoImg[i % photoImg.length]} alt={cap} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-4 flex items-center gap-1.5 font-display font-semibold"><Camera className="h-4 w-4 text-primary" />{cap}</p>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Reading */}
          <div>
            <p className="mb-2 flex items-center gap-2 font-display text-xl font-semibold"><BookOpen className="h-5 w-5 text-primary" /> Reading</p>
            <p className="mb-5 text-sm text-muted-foreground">{reading.note}</p>
            <Marquee duration={55}>
              {reading.books.map((b) => (
                <div key={b.title} className="surface flex w-64 shrink-0 flex-col gap-1 p-5">
                  <span className="w-fit rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-medium text-accent-foreground">{b.genre}</span>
                  <p className="mt-1 font-display font-semibold leading-snug">{b.title}</p>
                  <p className="text-xs text-muted-foreground">{b.author}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="mt-20">
          <Heading title="Gaming Zone" sub="Play. Relax. Reconnect." icon={Gamepad2} />
          <div className="grid gap-5 md:grid-cols-3">
            {games.map((g, gi) => (
              <div key={g.name} className="surface group overflow-hidden hover:-translate-y-2">
                <div className="relative h-44 overflow-hidden">
                  <img src={gameImg[gi % 3]} alt={g.name} loading="lazy" width={1024} height={640} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <Crosshair className="absolute right-4 top-4 h-6 w-6 text-neon opacity-80 transition group-hover:rotate-90 group-hover:scale-125" />
                </div>
                <div className="p-6">
                  <p className="font-display text-lg font-semibold">{g.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{g.text}</p>
                  <p className="mt-3 text-xs text-primary">{g.mode}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mb-4 mt-8 font-display font-semibold">More Games</p>
          <div className="flex flex-wrap gap-3">{moreGames.map((g) => <span key={g} className="surface flex items-center gap-2 px-5 py-3 text-sm"><Gamepad2 className="h-4 w-4 text-primary" />{g}</span>)}</div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" variant="cool">
        <Heading title="Get In Touch" sub="Let's connect. Feel free to reach out!" icon={Mail} />
        <div className="grid gap-4 sm:grid-cols-2">
          {contact.filter((c) => c.value).map((c, i) => {
            const Icon = contactIcons[i % contactIcons.length]!;
            return (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="surface card-shine group flex items-center gap-4 p-5">
                <IconBox className="transition duration-500 group-hover:rotate-6 group-hover:scale-110"><Icon className="h-5 w-5" /></IconBox>
                <div className="min-w-0"><p className="text-sm font-semibold">{c.label}</p><p className="truncate text-sm text-muted-foreground">{c.value}</p></div>
              </a>
            );
          })}
        </div>
      </Section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm">
          <div>
            <p className="font-display font-bold">{profile.name.toUpperCase()} <span className="text-primary">/ BEYOND THE CODE</span></p>
            <p className="text-muted-foreground">More Than Just a Developer.</p>
          </div>
          <p className="text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a href="#home" aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-primary"><ArrowUp className="h-4 w-4" /></a>
        </div>
      </footer>
    </div>
  );
}
