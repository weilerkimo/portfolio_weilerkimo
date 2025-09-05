// src/app/home/page.tsx
import projects from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function HomePage() {
  return (
    <main style={{padding:32}}>
      <h2 style={{marginBottom:18}}>Selected Work</h2>
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',
        gap:20
      }}>
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </main>
  );
}