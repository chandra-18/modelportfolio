import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">CK</p>
      <ul className="nav-menu">
        <li>
          <a href="https://www.linkedin.com/in/chandrakanth-v/">
            <img
              className="social-network-img"
              src="https://image.flaticon.com/icons/png/512/174/174857.png"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/chandra-18">
            <img
              className="social-network-img"
              src="https://image.flaticon.com/icons/png/512/25/25231.png"
              alt="Git Hub"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/chandra65046843">
            <img
              className="social-network-img"
              src="https://res.cloudinary.com/dmwrugc6z/image/upload/v1621681890/Background_4x_1_bzyjew.png"
              alt="Twitter"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
