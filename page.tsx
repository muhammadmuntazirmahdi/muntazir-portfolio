import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { siteContent } from "@/lib/content";

export default function Home(){return <>
  <Navbar/>
  <main>
    <section id="home" className="container flex min-h-screen items-center pt-24">
      <div className="grid w-full gap-12 py-20 md:grid-cols-[1.2fr_.8fr] md:items-end">
        <div><p className="mb-5 text-sm uppercase tracking-[.22em] muted">Personal Portfolio Platform</p><h1 className="display max-w-4xl text-6xl font-semibold md:text-8xl">{siteContent.profile.name}</h1><p className="mt-7 max-w-2xl text-xl leading-relaxed muted md:text-2xl">{siteContent.profile.title}</p><p className="mt-5 max-w-xl leading-7 muted">{siteContent.profile.intro}</p><div className="mt-8 flex flex-wrap gap-3"><a href="#work" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black">Explore My Work</a><a href="#contact" className="rounded-full border line px-6 py-3 text-sm">Let&apos;s Connect</a></div></div>
        <div className="aspect-[4/5] rounded-[2rem] border line bg-[#151517] p-3"><div className="flex h-full items-end rounded-[1.5rem] border line bg-gradient-to-b from-[#202024] to-[#0e0e10] p-6"><div><p className="text-sm muted">Technology × Media × Creativity</p><p className="mt-3 text-2xl font-medium">{siteContent.profile.philosophy}</p></div></div></div>
      </div>
    </section>

    <Section id="about" label="01 / About" title="Learning at the intersection of technology and creativity."><p className="max-w-3xl text-xl leading-9 muted">I&apos;m building my skills across AI, digital technology, media, storytelling, and creative content. This portfolio is designed to document the journey honestly — current work, experiments, learning, and future growth.</p></Section>

    <Section id="work" label="02 / Selected Work" title="Things I&apos;m building and exploring."><div className="grid gap-4 md:grid-cols-3">{siteContent.projects.map((p,i)=><article key={p.title} className="group min-h-80 rounded-[1.5rem] border line bg-[var(--surface)] p-6 transition hover:-translate-y-1"><div className="flex h-full flex-col justify-between"><div><p className="text-xs uppercase tracking-widest muted">0{i+1} · {p.category}</p><h3 className="mt-16 text-3xl font-medium tracking-tight">{p.title}</h3><p className="mt-4 leading-7 muted">{p.description}</p></div><p className="mt-8 text-sm">{p.status}</p></div></article>)}</div></Section>

    <Section id="journey" label="03 / Journey" title="Still becoming."><div className="border-l line pl-6"><div className="pb-10"><p className="text-sm muted">Academic foundation</p><h3 className="mt-2 text-2xl">FSc Pre-Medical</h3></div><div className="pb-10"><p className="text-sm muted">Creative exploration</p><h3 className="mt-2 text-2xl">Storytelling, media, music and content</h3></div><div><p className="text-sm muted">Current direction</p><h3 className="mt-2 text-2xl">AI, web development and creative technology</h3></div></div></Section>

    <Section id="creative" label="04 / Creative" title="The creative side matters too."><div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">{["Filmmaking","Acting","Music & Singing","Storytelling","Digital Content","Creative Direction","Photography","Visual Experiments"].map(x=><div key={x} className="rounded-2xl border line p-5"><span className="muted">{x}</span></div>)}</div></Section>

    <Section id="learning" label="05 / Currently Learning" title="Curiosity in progress."><div className="flex flex-wrap gap-3">{siteContent.learning.map(x=><span key={x} className="rounded-full border line px-5 py-3 text-sm">{x}</span>)}</div></Section>

    <Section id="contact" label="06 / Contact" title="Let&apos;s connect."><div className="grid gap-10 md:grid-cols-2"><div><p className="max-w-md leading-7 muted">Professional opportunities, creative collaborations, technology projects, or simply a conversation about ideas.</p><a className="mt-6 inline-block underline underline-offset-4" href="mailto:muhammadmuntazir312@gmail.com">muhammadmuntazir312@gmail.com</a></div><div className="rounded-3xl border line p-6"><p className="text-sm muted">Social profiles will be managed from the admin dashboard.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Instagram","LinkedIn","GitHub","X"].map(x=><div key={x} className="rounded-xl border line p-4">{x}</div>)}</div></div></div></Section>
  </main>
  <footer className="container border-t line py-8 text-sm muted">© {new Date().getFullYear()} Muhammad Muntazir Mahdi</footer>
</>}
