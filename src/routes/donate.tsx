import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate & Get Involved — Getting Mobile" },
      { name: "description", content: "Support Getting Mobile with a one-time gift, monthly donation, sponsorship, or by volunteering." },
      { property: "og:title", content: "Donate to Getting Mobile" },
      { property: "og:description", content: "One-time, monthly, corporate sponsorship, and volunteer opportunities." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Donate />
    </SiteLayout>
  ),
});

const tiers = [
  { name: "Spark", price: "$25", per: "one-time", body: "Provides one family a healthy-cooking workshop kit.", highlight: false, cta: "Give $25" },
  { name: "Movement", price: "$15", per: "/month", body: "Sponsors a kid's full 12-week fitness program. Cancel anytime.", highlight: true, cta: "Become a monthly donor" },
  { name: "Champion", price: "$2,500", per: "corporate", body: "Underwrite a full community event. Includes logo placement, on-site activation, and social recognition.", highlight: false, cta: "Sponsor an event" },
];


function Donate() {
  return (
    <>
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
          <div className="text-xs font-bold tracking-widest text-primary mb-4">GIVE · VOLUNTEER · SPONSOR</div>
          <h1 className="font-display text-5xl md:text-7xl text-balance max-w-4xl">Your support is the reason a kid shows up.</h1>
          <p className="mt-6 max-w-2xl text-white/85 text-lg">Choose how you want to help. Every option below directly funds the events, workshops, and programs that change kids' habits for life.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-3xl p-8 flex flex-col ${t.highlight ? "bg-primary text-primary-foreground shadow-pop scale-[1.02]" : "bg-card text-card-foreground shadow-card"}`}>
              {t.highlight && <div className="text-xs font-bold tracking-widest mb-3 opacity-90">MOST POPULAR</div>}
              <div className="font-display text-2xl mb-2">{t.name}</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display text-5xl">{t.price}</span>
                <span className={`text-sm ${t.highlight ? "opacity-80" : "text-muted-foreground"}`}>{t.per}</span>
              </div>
              <p className={`text-sm leading-relaxed mb-6 ${t.highlight ? "opacity-90" : "text-muted-foreground"}`}>{t.body}</p>
              <button className={`mt-auto w-full py-3 rounded-full font-bold transition-transform hover:scale-[1.02] ${t.highlight ? "bg-white text-primary" : "bg-secondary text-secondary-foreground"}`}>
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <div className="text-xs font-bold tracking-widest text-primary mb-3">VOLUNTEERS</div>
        <h2 className="font-display text-3xl md:text-4xl mb-6 max-w-3xl">Volunteers are the backbone of Getting Mobile.</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">From organizing events and setting up activity stations, to supporting kids during drills and cooking workshops, to carrying the mission through every neighborhood we reach — volunteers make it all possible. Without people willing to show up, cheer kids on, and keep programs running, Getting Mobile simply wouldn't exist. Whether you can give a few hours on a weekend or commit to an ongoing role, your time is what turns our mission into real, life-changing moments for children and families.</p>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <div className="bg-card rounded-3xl p-10 md:p-14 shadow-card grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs font-bold tracking-widest text-primary mb-3">GET INVOLVED</div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Tell us how you'd like to help.</h2>
            <p className="text-muted-foreground leading-relaxed">Whether you want to volunteer, sponsor, or just learn more — drop your details and we'll be in touch within a week.</p>
          </div>
          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}>
            <input required type="text" placeholder="Your name" className="w-full px-5 py-3.5 rounded-full bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
            <input required type="email" placeholder="Email address" className="w-full px-5 py-3.5 rounded-full bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
            <select className="w-full px-5 py-3.5 rounded-full bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary">
              <option>I want to volunteer</option>
              <option>I want to sponsor an event</option>
              <option>I want to bring Getting Mobile to my community</option>
              <option>Just keep me updated</option>
            </select>
            <button className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-pop hover:scale-[1.01] transition-transform">
              Send →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
