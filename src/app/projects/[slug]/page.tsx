// src/app/projects/[slug]/page.tsx
import { projects } from "../../../data/projects";

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default function ProjectPage({ params }:{params:{slug:string}}) {
  const project = projects.find(p => p.slug === params.slug);
  if(!project) return <div style={{padding:40}}>Project not found</div>;

  return (
    <main style={{padding:32}}>
      <a href="/home" style={{color:'#999'}}>← Back</a>
      <h1 style={{marginTop:8}}>{project.title}</h1>
      <p style={{color:'#bdbdbd'}}>{project.role} • {project.year}</p>
      <div style={{marginTop:20}}>
        <img src={project.image} alt={project.title} style={{width:'100%', maxHeight:600, objectFit:'cover'}} />
      </div>
      <section style={{marginTop:20, color:'#cfcfcf'}}>
        <h3>Project summary</h3>
        <p>{project.short}</p>
        <h4>Details</h4>
        <ul>
          <li>Concept & design direction</li>
          <li>Tools: Illustrator, InDesign, Photoshop</li>
          <li>Deliverables: print, digital assets, mockups</li>
        </ul>
      </section>
    </main>
  );
}