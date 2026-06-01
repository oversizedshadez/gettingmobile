import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Getting Mobile" },
      { name: "description", content: "Our mission: helping kids defeat obesity through exercise and nutrition to build lifelong habits." },
      { property: "og:title", content: "About Getting Mobile" },
      { property: "og:description", content: "Our why, what, how, vision, values, and audience." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <About />
    </SiteLayout>
  ),
});

function About() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
          <div className="text-xs font-bold tracking-widest text-primary mb-4">OUR MISSION</div>
          <h1 className="font-display text-4xl md:text-6xl max-w-4xl text-balance">
            Helping kids defeat obesity through <span className="text-primary">exercise and nutrition</span> to build lifelong habits.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid md:grid-cols-3 gap-6">
        {[
          { n: "01", t: "Why", body: "Childhood obesity has become a generational health crisis — especially in communities like Mobile, AL, where rates reach 45%. Habits formed before age 12 last a lifetime. We act now so kids don't carry preventable disease into adulthood." },
          { n: "02", t: "What", body: "We design, fund, and run community events (sports, walks, nutrition workshops, and public seminars) that make movement and healthy food feel exciting, social, and accessible." },
          { n: "03", t: "How", body: "We partner with schools, gyms, PTAs, recreation departments, and motivational figures to meet kids where they are. We measure community reach, post-event sign-ups, and long-term engagement." },
        ].map((c) => (
          <div key={c.n} className="bg-card rounded-3xl p-8 shadow-card">
            <div className="font-display text-primary text-3xl mb-3">{c.n}</div>
            <h3 className="font-display text-2xl mb-3">{c.t}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{c.body}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20 grid md:grid-cols-2 gap-6">
        <div className="bg-primary text-primary-foreground rounded-3xl p-10">
          <div className="text-xs font-bold tracking-widest mb-3 opacity-80">VISION</div>
          <h3 className="font-display text-3xl mb-4">A generation of kids who choose movement and nourishment by default.</h3>
          <p className="opacity-90 leading-relaxed">We see a future where healthy habits aren't a privilege — they're the norm in every neighborhood.</p>
        </div>
        <div className="bg-card rounded-3xl p-10 shadow-card">
          <div className="text-xs font-bold tracking-widest text-primary mb-3">CORE VALUES</div>
          <ul className="space-y-3">
            {["Accessibility — events open to all, regardless of income or fitness level.",
              "Joy — movement should feel like play, not punishment.",
              "Community — we build with local partners, not for them.",
              "Evidence — we measure what works and adapt fast.",
              "Lifelong — short events, long habits."].map((v) => (
              <li key={v} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                <span className="text-sm leading-relaxed">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <div className="text-xs font-bold tracking-widest text-primary mb-3">WHO WE SERVE</div>
        <h2 className="font-display text-3xl md:text-4xl mb-8 max-w-2xl">Our primary and secondary audiences.</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="border-2 border-primary rounded-3xl p-8">
            <div className="font-display text-primary text-sm tracking-widest mb-2">PRIMARY</div>
            <h3 className="font-display text-2xl mb-3">Kids ages 6–14 in high-obesity communities</h3>
            <p className="text-muted-foreground leading-relaxed">Starting with Mobile, AL, where blue-collar families and underserved neighborhoods face obesity rates near 45%. Every program is designed for them first.</p>
          </div>
          <div className="border-2 border-secondary rounded-3xl p-8">
            <div className="font-display text-secondary text-sm tracking-widest mb-2">SECONDARY</div>
            <h3 className="font-display text-2xl mb-3">Parents, schools, and community partners</h3>
            <p className="text-muted-foreground leading-relaxed">The adults whose support turns a one-time event into a lasting habit — PTAs, coaches, gym owners, recreation departments, and local employers.</p>
          </div>
        </div>
      </section>
    </>
  );
}
