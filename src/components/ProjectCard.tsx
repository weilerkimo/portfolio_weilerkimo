// src/components/ProjectCard.tsx
import Link from "next/link";

export default function ProjectCard({project}:{project:any}) {
  return (
    <Link href={`/projects/${project.slug}`} style={{textDecoration:'none', color:'inherit'}}>
      <article style={{
        borderRadius:8,
        overflow:'hidden',
        boxShadow:'0 6px 18px rgba(0,0,0,0.12)',
        background:'#0f0f10'
      }}>
        <div style={{height:220, background:'#222', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <img src={project.image} alt={project.title} style={{maxWidth:'100%', maxHeight:'100%'}} />
        </div>
        <div style={{padding:16}}>
          <h3 style={{margin:0, fontSize:16}}>{project.title}</h3>
          <p style={{margin:'6px 0 0', color:'#bdbdbd', fontSize:13}}>{project.role} • {project.year}</p>
          <p style={{marginTop:10, color:'#9e9e9e', fontSize:13}}>{project.short}</p>
        </div>
      </article>
    </Link>
  );
}