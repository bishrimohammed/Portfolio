import "./navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navbar2 = () => {
  return (
    <header>
      <Navbar expand="lg" className="w-100" data-bs-theme="dark">
        <Container className="nav-boot ">
          <Navbar.Brand className="nav_logo-container" href="#home">
            <span className="nav_logo"> Navbar</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="collapse-container w-100"
            id="responsive-navbar-nav"
          >
            <Nav className=" nav-collapse">
              <Nav.Link className="text-dark" href="#home">
                Home
              </Nav.Link>
              <Nav.Link href="#features">Skill</Nav.Link>
              <Nav.Link href="#features">Projects</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navbar2;
