import './Projects.css';

// Import images
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';

function Projects() {
  return (

    <div className="page">
      <div className="slider">
        <div className="list">
          <div className="item" style={{ '--position': 1 }}><img src={img1} alt="Project" /></div>
          <div className="item" style={{ '--position': 2 }}><img src={img2} alt="Project" /></div>
          <div className="item" style={{ '--position': 3 }}><img src={img3} alt="Project" /></div>
          <div className="item" style={{ '--position': 4 }}><img src={img4} alt="Project" /></div>
          <div className="item" style={{ '--position': 5 }}><img src={img5} alt="Project" /></div>
          <div className="item" style={{ '--position': 6 }}><img src={img2} alt="Project" /></div>
          <div className="item" style={{ '--position': 7 }}><img src={img3} alt="Project" /></div>
          <div className="item" style={{ '--position': 8 }}><img src={img4} alt="Project" /></div>
          <div className="item" style={{ '--position': 9 }}><img src={img5} alt="Project" /></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
