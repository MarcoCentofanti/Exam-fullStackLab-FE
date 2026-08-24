import { NavLink } from "react-router-dom";
import style from "../components/Header.module.css";

export default function Header() {
  return (
    <>
      <ul className={style.navigation}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/books">I nostri libri</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contatti</NavLink>
        </li>
      </ul>
    </>
  );
}
