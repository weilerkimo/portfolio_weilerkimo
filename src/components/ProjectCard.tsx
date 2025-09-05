// src/components/ProjectCard.tsx
import Image from "next/image";
import React from "react";

type Project = {
  title: string;
  slug: string;
  image?: string;
  year?: string;
  // füge Felder hinzu, die du in projects.ts verwendest
};

export default function ProjectCard({ project }: { project: Project }) {
  const imgSrc = project.image ? `/projects/${project.image}` : "/projects/placeholder.jpg";

  return (
    <article className="card">
      <a href={`/projects/${project.slug}`}>
        <Image src={imgSrc} alt={project.title} width={1200} height={800} />
        <h3>{project.title}</h3>
      </a>
    </article>
  );
}