// src/components/Hero.tsx
export default function Hero() {
  return (
    <section style={{padding:'80px 20px', textAlign:'center'}}>
      <h1 style={{fontSize:48, margin:0}}>Kimo Weiler — Graphic Designer</h1>
      <p style={{maxWidth:720, margin:'18px auto', color:'#bdbdbd'}}>
        I design brand systems, editorial work and packaging. Currently applying for design internships in London, New York and Toronto.
      </p>
      <div style={{marginTop:18}}>
        <a href="/home" style={{padding:'10px 16px', borderRadius:6, background:'#1f6feb', color:'#fff', textDecoration:'none'}}>View work</a>
        <a href="/contact" style={{padding:'10px 16px', marginLeft:12, borderRadius:6, background:'#2d2d2d', color:'#fff', textDecoration:'none'}}>Contact</a>
      </div>
    </section>
  );
}