import React from "react";

interface ProjectType {
  URL: string;
  name: string;
  description: string;
}

export default function Project(project: ProjectType) {
  return (
    <li><a href={project.URL}>{project.name}</a> {project.description}</li>
  );
}