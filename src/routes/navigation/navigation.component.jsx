import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { signOutStart } from '../../store/user/user.action';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'> Shop </NavLink>

          {currentUser ?
              (<NavLink as='span' onClick={signOutUser}> SIGN OUT </NavLink>)
              :
              (<NavLink to='/auth'>Sign in</NavLink>)
          }

          <CartIcon />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
  }

export default Navigation;