import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/user/userSlice';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .logo {
    height: 3rem;
    width: 8rem;
    /* margin-left: 4rem;*/
  }

  button {
    background: #ffffff;
    border-radius: 36px;
  }
`;

const Menu = styled.div`
  .login {
    border: none;
    cursor: pointer;
  }

  .signup {
    border: none;
    background: #0aa1dd;
    color: #eef3ff;
    cursor: pointer;
  }
`;

const Header = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <NavBar>
      <NavLink to="/">
        <img className="logo" src="/img/Logo.png" alt="logo" />
      </NavLink>
      <Menu>
        {!userInfo ? (
          <NavLink to="/user/login">
            <button className="login">login</button>
          </NavLink>
        ) : (
          <Link to="/">
            <button className="login" onClick={() => dispatch(logout())}>
              logout
            </button>
          </Link>
        )}
      </Menu>
    </NavBar>
  );
};

export default Header;
