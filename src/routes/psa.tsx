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
      <h1 className="font-display text-5xl md:text-6xl mb-6 text-balance">Watch our PSA.</h1>
      <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-10">
        A short look at the heart of Getting Mobile — kids, movement, and the families that make it possible.
      </p>

      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-pop bg-black">
        <video
          src="/psa.mp4"
          controls
          playsInline
          preload="metadata"
          className="w-full h-full object-contain"
        />
      </div>


      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/donate" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-pop">Support the mission</Link>
        <Link to="/about" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold">Read our mission</Link>
      </div>
    </section>
  );
}
