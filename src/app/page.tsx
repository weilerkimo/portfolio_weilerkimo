/* src/app/page.tsx */
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight">
          Kimo Weiler
        </a>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="/home" className="text-sm hover:underline">Home</a>
          <a href="/projects" className="text-sm hover:underline">Projects</a>
          <a href="/about" className="text-sm hover:underline">About</a>
          <a href="/contact" className="text-sm hover:underline">Contact</a>
          <a href="#" className="ml-3 inline-flex items-center rounded-md border border-slate-900 px-4 py-2 text-sm font-medium hover:bg-slate-50">
            Resume
          </a>
        </nav>

        {/* mobile menu placeholder */}
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md border border-slate-200">
            ☰
          </button>
        </div>
      </header>

      {/* Hero / Controls */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Selected graphic design work
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Showcase of posters, branding, editorial and motion experiments — simple layout for fast review.
            </p>
import HeroButtons from '@/components/HeroButtons';
// ...

<HeroButtons />

          {/* Quick preview grid */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[3/2] rounded-md bg-slate-100 flex items-end p-3">
                <div>
                  <div className="h-10 w-36 bg-slate-200 rounded mb-2" />
                  <div className="text-sm font-medium">Poster — Akademisches Orchester</div>
                </div>
              </div>
              <div className="aspect-[3/2] rounded-md bg-slate-100 flex items-end p-3">
                <div>
                  <div className="h-10 w-36 bg-slate-200 rounded mb-2" />
                  <div className="text-sm font-medium">Packaging — The Green Cup</div>
                </div>
              </div>
              <div className="aspect-[3/2] rounded-md bg-slate-100 flex items-end p-3">
                <div>
                  <div className="h-10 w-36 bg-slate-200 rounded mb-2" />
                  <div className="text-sm font-medium">Editorial — Selection</div>
                </div>
              </div>
              <div className="aspect-[3/2] rounded-md bg-slate-100 flex items-end p-3">
                <div>
                  <div className="h-10 w-36 bg-slate-200 rounded mb-2" />
                  <div className="text-sm font-medium">Campaign — Pop Up Anoma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects grid (placeholder cards) */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold mb-6">All works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {new Array(6).fill(0).map((_, i) => (
            <article key={i} className="rounded-md border border-slate-100 p-4 hover:shadow-md transition">
              <div className="aspect-[16/10] bg-slate-100 rounded mb-4" />
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Project title {i + 1}</div>
                  <div className="text-xs text-slate-500">Poster / Branding</div>
                </div>
                <a href="/projects" className="text-sm text-slate-700 hover:underline">Open</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Kimo Weiler — visual design. Built with Next.js.
        </div>
      </footer>
    </main>
  );
}