import React from "react";

interface ProjectType {
  URL: string;
  name: string;
  description: string;
  image?: string;
  more?: React.ReactNode;
}

export default function Project(project: ProjectType) {
  const [showMore, setShowMore] = React.useState(false);
  const handleClick = () => setShowMore(!showMore);


  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-sm-5">
          {project.image && <img className="card-img-top row" src={project.image} alt={project.name} />}
        </div>
        <div className="col-sm-7">
          <div className="bg-light mb3">
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
        </div>
      </div>
    </div>
  );
}