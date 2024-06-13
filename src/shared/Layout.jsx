import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setUserInfo } from "../redux/slices/authSlice";

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
  gap: 15px;
  align-items: center;
`;

const LogoutButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const getUserInfo = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return null;

    const response = await axios.get(
      `https://moneyfulpublicpolicy.co.kr/user`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  };

  useEffect(() => {
    getUserInfo().then((res) => {
      dispatch(setUserInfo(res));
      setUser(res);
    });
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("로그아웃 되었습니다.");
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
            <AvatarImage src={user?.avatar} alt="User Avatar" />
            <p>{user?.nickname}</p>
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
