import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero-kids.jpg";
import football from "@/assets/flag-football.jpg";
import cooking from "@/assets/cooking.jpg";
import walk from "@/assets/walk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Getting Mobile — Kids. Movement. Lifelong Habits." },
      { name: "description", content: "Helping kids defeat obesity through exercise and nutrition. Join Getting Mobile and help build lifelong healthy habits." },
      { property: "og:title", content: "Getting Mobile" },
      { property: "og:description", content: "Helping kids defeat obesity through exercise and nutrition." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Home />
    </SiteLayout>
  ),
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-25">
          <img src={hero} alt="" className="w-full h-full object-cover mix-blend-luminosity" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-36 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> A Non-Profit From Mobile, AL
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl max-w-4xl text-balance">
            Helping kids <span className="text-primary">defeat obesity</span> — one move at a time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
            Through exercise, nutrition, and community events, Getting Mobile builds the lifelong habits that transform kids' health long before adulthood.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/donate" className="bg-primary text-primary-foreground px-7 py-4 rounded-full font-bold shadow-pop hover:scale-105 transition-transform">
              Donate now
            </Link>
            <Link to="/about" className="bg-white/10 backdrop-blur border border-white/30 text-white px-7 py-4 rounded-full font-bold hover:bg-white/20 transition-colors">
              Learn our mission
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl">
            {[
              { k: "1 in 5", v: "U.S. kids live with obesity" },
              { k: "45%", v: "Obesity rate in our target community" },
              { k: "5+", v: "Community events in year one" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-3xl md:text-4xl text-primary">{s.k}</div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { tag: "MOVE", title: "Exercise that feels like play", body: "Flag football, basketball, and community walks: sport-led events that get kids moving and laughing.", img: football },
            { tag: "FUEL", title: "Nutrition the family can cook", body: "Affordable, hands-on cooking workshops led by nutritionists and local chefs.", img: cooking },
            { tag: "TOGETHER", title: "A community that shows up", body: "Schools, gyms, PTAs, and recreation centers: we partner with the people kids already trust.", img: walk },
          ].map((c) => (
            <article key={c.tag} className="bg-card rounded-3xl overflow-hidden shadow-card group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <div className="text-xs font-bold tracking-widest text-primary mb-2">{c.tag}</div>
                <h3 className="font-display text-2xl mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <div className="bg-gradient-sun rounded-3xl p-10 md:p-16 text-secondary-foreground bg-secondary relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -left-10 -bottom-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="text-xs font-bold tracking-widest text-primary mb-3">EXPLORE THE MISSION</div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Every kid deserves a head start on a healthy life.</h2>
            <p className="text-white/80 mb-8 text-lg">See what we've built, where we're going, and how you can help.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/year-in-review" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-pop">Year in Review</Link>
              <Link to="/ongoing" className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20">Ongoing efforts</Link>
              <Link to="/psa" className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20">Watch the PSA</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
