import React from "react";

interface ProjectType {
  URL: string;
  name: string;
  description: string;
  more?: React.ReactNode;
}

export default function Project(project: ProjectType) {
  const [showMore, setShowMore] = React.useState(false);
  const handleClick = () => setShowMore(!showMore);


  return (
    <div className="card bg-light mb3">

      <div className="card-body" onClick={handleClick}>
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}
          {!showMore && project.more && <a href="#" className="float-right">  more...</a>}
        </p>
        {showMore && project.more}
        <a href={project.URL} className="btn btn-primary">
          View on Github
        </a>
      </div>
    </div>
  );
}