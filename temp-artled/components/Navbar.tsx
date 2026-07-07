import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="container nav-container">

        <Link
          href="/"
          className="logo"
        >
          ARTLED WORKS
        </Link>

        <nav>

          <NavLink href="/exhibitions">
            Exhibitions
          </NavLink>

          <NavLink href="/about">
            Artist
          </NavLink>

          <NavLink href="/process">
            Process
          </NavLink>

          <NavLink href="/contact">
            Contact
          </NavLink>

        </nav>

      </div>

    </header>
  );
}
