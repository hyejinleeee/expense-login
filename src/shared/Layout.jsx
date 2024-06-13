import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StNav = styled.nav`
  background-color: #c4c0c0;
  padding: 10px 20px;
  top: 0;
  position: fixed;
  width: 100vw;
  margin: 0;
  left: 0;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
`;

const NavItem = styled.li`
  display: flex;
`;

const LogoutButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifyLogoutSuccess = () => toast("로그아웃 성공!");

  const handleLogout = () => {
    dispatch(logout());
    notifyLogoutSuccess();
    navigate("/");
  };

  return (
    <>
      <StNav>
        <NavContainer>
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/profile">Profile</Link>
            </NavItem>
          </NavList>
          <NavItem>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </NavItem>
        </NavContainer>
      </StNav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
