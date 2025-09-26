import { Link } from "react-router-dom";
import css from "./Header.module.css";


function Header() {
  return (
    <header className={css.headerGeneral}>
      <Link to="/">Inicio</Link>
      <Link to="/calculadora">Calculadora</Link>
    </header>
  )
}

export default Header
