import { useState, type CSSProperties } from "react";
import Modal from "../modal/Modal";
import "./Card.css";

interface ICardProps {
  title: string;
  description: string;
  year: number[];
  role: string;
  workType: string;
  img: {
    displaySrc: string;
    displayAlt: string;
    additionals?: string[];
    style?: CSSProperties;
  };
  detail: {
    description: string;
    points: string[];
    skills: string[];
    link?: string;
  };
  isConfidential?: boolean;
}
const Card = ({
  title,
  description,
  role,
  year,
  img,
  detail,
  isConfidential,
  workType,
}: ICardProps) => {
  const [open, setOpen] = useState(false);
  const displayedYear = year.length > 1 ? `${year[0]} - ${year[1]}` : year[0];

  return (
    <>
      <article onClick={() => setOpen(true)}>
        <div className="card-image">
          <img src={img.displaySrc} alt={img.displayAlt} style={img.style} />
        </div>
        {isConfidential && <span className="confidential">CONFIDENTIAL</span>}
        <h3>{title}</h3>
        <p className="desc">{description}</p>

        <div className="card-details">
          <span>{displayedYear}</span>
          <span>·</span>
          <span>{role}</span>
        </div>
      </article>

      <Modal open={open}>
        <div className="card-modal">
          <div className="card-modal-header">
            <div className="worktype">
              <p className="card-label">
                {workType} · {displayedYear}
              </p>
              <h2>{title}</h2>
            </div>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
          <div className="card-modal-body">
            {img.additionals && img.additionals?.length > 0 && (
              <div className="card-modal-images">
                {img.additionals.map((image) => (
                  <img src={image} alt="" width="100%" height="auto" />
                ))}
              </div>
            )}

            <div className="card-modal-detail">
              {detail.link && (
                <div>
                  <p className="card-label">Link</p>
                  <a
                    href={detail.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {detail.link}
                  </a>
                </div>
              )}
              <div>
                <p className="card-label">Project Description</p>
                {detail.description}
              </div>

              <div>
                <p className="card-label">What I've Done</p>
                <div>
                  {detail.points.map((point) => (
                    <span>
                      * {point}
                      <br />
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="card-label">Skills</p>
                <div className="skills">
                  {detail.skills.map((skill) => (
                    <span className="skill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Card;
