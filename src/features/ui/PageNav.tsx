import { NavLink } from 'react-router-dom';
import Logo from '../../assets/sw logo.png';

export function PageNav() {
  return (
    <header>
      <img
        src={Logo}
        alt='Official StarWars Logo'
      />
      <ul>
        <li>
          <NavLink to={'/'}>Homepage</NavLink>
        </li>
        <li>
          <NavLink to={'/spaceships'}>Spaceships</NavLink>
        </li>
      </ul>
    </header>
  );
}
