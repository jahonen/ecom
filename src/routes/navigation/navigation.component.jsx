import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'; 

import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className= 'navbar'>
          <Link classname='logo-container' to='/'>
            <CrwnLogo classname='logo'/>
          </Link>
          <div classname='nav-links-container'>
            <Link classname='nav-link' to='/shop'>
                SHOP
            </Link>
          </div>
          <div classname='nav-links-container'>
            <Link classname='nav-link' to='/sign-in'>
                SIGN-IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation