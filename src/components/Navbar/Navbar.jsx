import "./navbar.css";
const Navbar = () => {
  return (
    <header>
      <div className="d-flex justify-content-between align-items-center">
        <div className="nav_logo">
          Bis<span>hri M.</span>
        </div>
        <div className="nav-collapse">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#home">Skill</a>
          <a href="#home">Portfalio</a>
          <a href="#home">Contact</a>
        </div>
        <div className="github-btn">
          <a
            href="https://github.com/bishrimohammed"
            target="_blank"
            className=""
            rel="noopener noreferrer"
          >
            Github Profile
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
