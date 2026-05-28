import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/psa")({
  head: () => ({
    meta: [
      { title: "PSA — Getting Mobile" },
      { name: "description", content: "Our Public Service Announcement — coming soon." },
      { property: "og:title", content: "Getting Mobile PSA" },
      { property: "og:description", content: "Public Service Announcement coming soon." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PSA />
    </SiteLayout>
  ),
});

function PSA() {
  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 py-20 md:py-28">
      <div className="text-xs font-bold tracking-widest text-primary mb-4">PUBLIC SERVICE ANNOUNCEMENT</div>
      <h1 className="font-display text-5xl md:text-6xl mb-6 text-balance">The PSA is on its way.</h1>
      <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-10">
        Our team is finishing production on a Public Service Announcement that captures the heart of Getting Mobile — kids, movement, and the families that make it possible. We'll embed it here the moment it's ready.
      </p>

      <div className="relative aspect-video rounded-3xl bg-gradient-hero overflow-hidden shadow-pop flex items-center justify-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative text-center text-white p-8">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 mb-5">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <div className="font-display text-3xl md:text-4xl mb-2">Coming Soon</div>
          <div className="text-white/80 text-sm">PSA video drops 2027</div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/donate" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-pop">Support the mission</Link>
        <Link to="/about" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold">Read our mission</Link>
      </div>
    </section>
  );
}
