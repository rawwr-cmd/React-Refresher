import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>made by rawwr♥</div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/"
            >
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/new-meetup"
            >
              New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/favs"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
