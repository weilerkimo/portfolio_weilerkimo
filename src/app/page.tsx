cd ~/portfolio-reclone
cp src/app/page.tsx src/app/page.tsx.bak

cat > src/app/page.tsx <<'TSX'
export default function Page() {
  return (
    <main style={{background:'#0b0b0b',color:'#fff',minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{maxWidth:980,textAlign:'center',padding:40}}>
        <h1>Kimo Weiler — Graphic Designer</h1>
        <p>Selected graphic design work — landing / home / projects / contact</p>
      </div>
    </main>
  );
}
TSX