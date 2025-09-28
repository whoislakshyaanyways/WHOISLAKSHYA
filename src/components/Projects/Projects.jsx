import './Projects.css';

import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';

function Projects() {
  const images = [img1, img2, img3, img4, img5, img2, img3, img4, img5];

  return (
    <div className="page">
      <div className="slider">
        <div className="list">
          {images.map((src, index) => (
            <div
              key={index}
              className="item"
              style={{ '--position': index + 1 }}
            >
              <img src={src} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
