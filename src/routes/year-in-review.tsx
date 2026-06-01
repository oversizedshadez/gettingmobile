import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import football from "@/assets/flag-football.jpg";
import basketball from "@/assets/basketball.jpg";
import walk from "@/assets/walk.jpg";
import cooking from "@/assets/cooking.jpg";

export const Route = createFileRoute("/year-in-review")({
  head: () => ({
    meta: [
      { title: "Year in Review — Getting Mobile" },
      { name: "description", content: "Events, programs, and impact from Getting Mobile's first year." },
      { property: "og:title", content: "Year in Review — Getting Mobile" },
      { property: "og:description", content: "How we launched, who we reached, and what we learned." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Year />
    </SiteLayout>
  ),
});

const events = [
  { tag: "EVENT 01", title: "Flag Football at Williamson High", date: "Spring — Mobile, AL", img: football, body: "Our first event. A warm spring day at Williamson High's stadium. We promoted health through accessible play, aligned with established health campaigns, and planted Getting Mobile's flag in a community with a 45% obesity rate.", stats: [["Players", "60+"], ["Families reached", "200+"], ["New sign-ups", "85"]] },
  { tag: "EVENT 02", title: "Basketball Tournament", date: "Summer — Local Gym Partnership", img: basketball, body: "Partnered with a local gym to host a community tournament. Leveraged a sport already tied to obesity-awareness movements, gave away gym memberships, and built the partnerships that anchor everything else we do.", stats: [["Teams", "12"], ["Memberships donated", "20"], ["Volunteers", "18"]] },
  { tag: "EVENT 03", title: "Walk for Obesity", date: "Fall — Community Track", img: walk, body: "A non-competitive, self-paced walk for all ages and fitness levels. Strengthened ties with PTAs, recreation departments, and wellness groups, and welcomed older residents into our movement.", stats: [["Walkers", "150+"], ["Partners", "8"], ["Miles walked", "400+"]] },
  { tag: "EVENT 04", title: "Healthy Cooking & Nutrition Workshop", date: "Fall — Community Center", img: cooking, body: "Interactive cooking workshop led by nutritionists and local chefs. Focused on affordable, family-friendly meals and the practical skills that make healthy eating sustainable.", stats: [["Families", "35"], ["Recipes shared", "12"], ["Return rate", "70%"]] },
];

function Year() {
  return (
    <>
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
          <div className="text-xs font-bold tracking-widest text-primary mb-4">YEAR ONE</div>
          <h1 className="font-display text-5xl md:text-7xl text-balance max-w-4xl">From mission to motion.</h1>
          <p className="mt-6 max-w-2xl text-white/85 text-lg">Four flagship events, hundreds of kids and families, and the partnerships that make year two possible.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { k: "445+", v: "People reached" },
          { k: "4", v: "Flagship events" },
          { k: "12", v: "Community partners" },
          { k: "85", v: "Post-event sign-ups" },
        ].map((s) => (
          <div key={s.k} className="bg-card rounded-3xl p-6 text-center shadow-card">
            <div className="font-display text-4xl md:text-5xl text-primary">{s.k}</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-2">{s.v}</div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20 space-y-8">
        {events.map((e, i) => (
          <article key={e.title} className={`grid md:grid-cols-2 gap-0 bg-card rounded-3xl overflow-hidden shadow-card ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="aspect-[4/3] md:aspect-auto">
              <img src={e.img} alt={e.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-xs font-bold tracking-widest text-primary mb-2">{e.tag}</div>
              <h2 className="font-display text-3xl mb-1">{e.title}</h2>
              <div className="text-sm text-muted-foreground mb-4">{e.date}</div>
              <p className="text-muted-foreground leading-relaxed mb-6">{e.body}</p>
              <div className="grid grid-cols-3 gap-3">
                {e.stats.map(([k, v]) => (
                  <div key={k} className="bg-muted rounded-2xl p-3 text-center">
                    <div className="font-display text-xl text-secondary">{v}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{k}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <div className="bg-secondary text-secondary-foreground rounded-3xl p-10 md:p-14">
          <div className="text-xs font-bold tracking-widest text-primary mb-3">WHAT WE LEARNED</div>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Sports get them in the door. Community keeps them coming back.</h2>
          <p className="text-white/80 leading-relaxed max-w-3xl">Across every event, the metric that mattered most wasn't attendance; it was the percentage of attendees who signed up for ongoing programs. Year one proved that with the right partners and the right tone, kids will keep showing up.</p>
        </div>
      </section>
    </>
  );
}
