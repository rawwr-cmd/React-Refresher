import { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import FavContext from "../../store/fav-context";

const MainHeader: React.FC = () => {
  const favCtx = useContext(FavContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>made by rawwr♥</div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/"
              end
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
              <span className={classes.badge}>{favCtx.totalFavorites}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
