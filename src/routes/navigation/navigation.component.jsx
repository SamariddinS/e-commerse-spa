import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import { Fragment } from 'react';

const Navigation = () => {
    return (
      <Fragment>
        <nav>
          <div className='navigation'>
            <Link className='logo-container' to='/'>
              <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
              <Link className='nav-link' to='/shop'>Shop</Link>
              <Link className='nav-link' to='/auth'>Sign in</Link>
            </div>
          </div>
        </nav>

        <Outlet />
      </Fragment>
    );
  }

export default Navigation;