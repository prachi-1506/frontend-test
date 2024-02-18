import { useState } from "react";
import "../style/Card.css";

const Card = ({ post }) => {
  const printDate = (numbers) => {
    const months = [
      "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
    ];
    const date = new Date(numbers);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div className="image-container">
        <img
          src={post.thumbnail.small}
          alt="Thumbnail"
          className="thumbnail"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={openModal}
        />
        {isHovered && !isModalOpen && (
          <div className="learn-more" onClick={openModal}>
            Learn More
          </div>
        )}
      </div>
      <div className="modal">
        <div className="circles-container">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
        </div>
        <div className="modal-title">
          <h2 onClick={openModal} className="lato-black">
            {post.title}
          </h2>
        </div>
        <div className="modal-content">
          <span>{post.content}</span>
        </div>

        <div className="author-role">
          <div className="author-info">
            <span>
              {post.author.name} - {post.author.role}
            </span>
          </div>
          <div className="date">
            <span>{printDate(post.date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
