import Apos from "../../Apos/Apos";

const NavbarNav = () => {
  return (
    <ul className="navbar-nav justify-between">
      <li className="nav-item">
        <a className="nav-link">Menu</a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Restaurant
        </a>
        <ul className="dropdown-menu">
          <div className="uppercase text-slate-600 my-3 fw-bold">
            To find a Nando
            <Apos />s enter a town or postcode.{" "}
          </div>
          <li>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control rounded-0"
                placeholder="e.g. W5 3NU"
                aria-label="email"
              />
              <span
                className="input-group-text rounded-0 bg-black text-[#ffff00] fw-bold"
                id="basic-addon1"
              >
                GO
              </span>
            </div>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a className="dropdown-item pt-4">View All Restaurants</a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span>
            Nando
            <Apos />s Rewards
          </span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item">Join now</a>
          </li>
          <li>
            <a className="dropdown-item">Another action</a>
          </li>
          <li>
            <a className="dropdown-item">Something else here</a>
          </li>
          <li>
            <hr className="pb-2" />
          </li>
          <li>
            <a className="dropdown-item flex items-center">
              <i className="bi bi-person-circle text-2xl"></i> &nbsp; Log in
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Cook
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item">Products</a>
          </li>
          <li>
            <a className="dropdown-item">Recipes</a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link">Shop</a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          About Us
        </a>
        <ul className="dropdown-menu">
          <>
            <div className="uppercase text-slate-600 my-3 px-3">About</div>
            <li>
              <a className="dropdown-item">Food</a>
            </li>
            <li>
              <a className="dropdown-item">Fighting Malaria</a>
            </li>
            <li>
              <a className="dropdown-item">Being Sustainable</a>
            </li>
          </>
          <>
            <div className="uppercase text-slate-600 my-3 px-3">Connect</div>
            <li>
              <a className="dropdown-item">
                The Nando
                <Apos />s App
              </a>
            </li>
            <li>
              <a className="dropdown-item">News</a>
            </li>
          </>
          <>
            <div className="uppercase text-slate-600 my-3 px-3">Experience</div>
            <li>
              <a className="dropdown-item">This is PERi-PERi</a>
            </li>
            <li>
              <a className="dropdown-item">Music</a>
            </li>
            <li>
              <a className="dropdown-item">Art</a>
            </li>
          </>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Help
        </a>
        <ul className="dropdown-menu">
          <>
            <div className="uppercase text-slate-600 my-3 px-3">FAOS</div>
            <li>
              <a className="dropdown-item">Search FAOs</a>
            </li>
            <li>
              <a className="dropdown-item">My Account</a>
            </li>
            <li>
              <a className="dropdown-item">Food</a>
            </li>
            <li>
              <a className="dropdown-item">Online Ordering</a>
            </li>
            <li>
              <a className="dropdown-item">Restaurants</a>
            </li>
            <li>
              <a className="dropdown-item">
                Nando
                <Apos />s Card & Discounts
              </a>
            </li>
            <li>
              <a className="dropdown-item">Fundraising Requests</a>
            </li>
            <li>
              <a className="dropdown-item">Sustainability</a>
            </li>
          </>
          <>
            <div className="uppercase text-slate-600 my-3 px-3">Contact</div>
            <li>
              <a className="dropdown-item">Contact Us</a>
            </li>
          </>
          <>
            <div className="uppercase text-slate-600 my-3 px-3">Resources</div>
            <li>
              <a className="dropdown-item">Press Gallery</a>
            </li>
          </>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link">Careers</a>
      </li>
    </ul>
  );
};

export default NavbarNav;
