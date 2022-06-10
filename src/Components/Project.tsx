import React from "react";

interface ProjectType {
  URL: string;
  name: string;
  description: string;
}

export default function Project(project: ProjectType) {
  return (
    <div className="card bg-light mb3">

      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
        <a href={project.URL} className="btn btn-primary">
          View on Github
        </a>
      </div>
    </div>
  );
}