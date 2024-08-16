import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <Link
            to="/create"
            className="btn btn-outline-success me-2"
            type="button"
          >
            CREATE
          </Link>
          <Link
            to="/all"
            className="btn btn-outline-success me-2"
            type="button"
          >
            Show All
          </Link>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
