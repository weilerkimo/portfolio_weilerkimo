cd ~/portfolio-reclone

cat > src/app/page.tsx <<'TSX'
import Hero from "../components/Hero";

export default function Page() {
  return (
    <main style={{background:'#0b0b0b', color:'#fff', minHeight:'100vh', fontFamily:'system-ui, sans-serif'}}>
      <Hero />
    </main>
  );
}
