import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/ongoing")({
  head: () => ({
    meta: [
      { title: "Ongoing Efforts — Getting Mobile" },
      { name: "description", content: "What we're planning next: public seminars, expanded partnerships, and year-round programs." },
      { property: "og:title", content: "Ongoing Efforts — Getting Mobile" },
      { property: "og:description", content: "Future events, partnerships, and growth at Getting Mobile." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Ongoing />
    </SiteLayout>
  ),
});

function Ongoing() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
          <div className="text-xs font-bold tracking-widest mb-4 opacity-80">WHAT'S NEXT</div>
          <h1 className="font-display text-5xl md:text-7xl text-balance max-w-4xl">The movement keeps moving.</h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/90 text-lg">Year two is about depth: turning one-time events into year-round programs, and turning local momentum into regional impact.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid md:grid-cols-2 gap-5">
        {[
          { tag: "FLAGSHIP EVENT", title: "Public Seminar at Mobile Convention Center", body: "Subject-matter experts, parents, and kids in one room, both informational and emotional. Located at the Arthur R. Outlaw Convention Center for capacity, visibility, and credibility.", when: "Spring 2027" },
          { tag: "MOTIVATIONAL EVENT", title: "Goggins Pulls Up — 40% Rule Run", body: "A community run with a twist: when most participants think they're done, we reveal they're only 40% done. A live experiment in discipline, mindset, and what kids can do when they believe they can.", when: "Summer 2027" },
          { tag: "PROGRAM", title: "12-Week Family Fitness Plan", body: "A post-event sign-up that turns a single great day into a 12-week habit. Sent home with families after every flagship event.", when: "Year-round" },
          { tag: "PARTNERSHIP", title: "Schools & Recreation Departments", body: "Embedding nutrition and movement curriculum into the places kids already spend their week — partnering with PTAs, district wellness leads, and city rec programs.", when: "Ongoing" },
        ].map((c) => (
          <div key={c.title} className="bg-card rounded-3xl p-8 shadow-card border-t-4 border-primary">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-bold tracking-widest text-primary">{c.tag}</div>
              <div className="text-xs text-muted-foreground">{c.when}</div>
            </div>
            <h3 className="font-display text-2xl mb-3">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{c.body}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <div className="text-xs font-bold tracking-widest text-primary mb-3">GROWTH GOALS</div>
        <h2 className="font-display text-3xl md:text-4xl mb-8 max-w-2xl">Where year two takes us.</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            ["1,500+", "kids and families directly served"],
            ["3", "neighboring communities expanded into"],
            ["25", "active local partners and sponsors"],
            ["12wk", "family programs running continuously"],
          ].map(([k, v]) => (
            <div key={k} className="bg-secondary text-secondary-foreground rounded-3xl p-6">
              <div className="font-display text-4xl text-primary">{k}</div>
              <div className="text-sm text-secondary-foreground/80 mt-2">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <div className="bg-accent rounded-3xl p-10 md:p-14 text-accent-foreground">
          <h2 className="font-display text-3xl md:text-4xl mb-4 max-w-2xl">Want to bring Getting Mobile to your community?</h2>
          <p className="mb-6 max-w-xl">We're actively looking for partner schools, gyms, and recreation programs.</p>
          <Link to="/donate" className="inline-flex bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold shadow-pop hover:scale-105 transition-transform">Get involved →</Link>
        </div>
      </section>
    </>
  );
}
