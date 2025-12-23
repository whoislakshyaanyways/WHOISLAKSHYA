import './Icons.css';

function Icons({ Style, Image, Link }) {
  const handleClick = () => {
    if (Link) {
      window.open(Link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <img
      className="Icon"
      src={Image}
      style={Style}
      alt="icon"
      onClick={handleClick}
      role="button"
      tabIndex={0}
    />
  );
}

export default Icons;
