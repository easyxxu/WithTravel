import React from "react";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: rgb(249, 249, 249);
  font-family: var(--point--font);
`;

const Title = styled.a`
  text-decoration: none;
  font-family: var(--point--font);
  color: rgb(17, 16, 16);
  font-size: 36px;
  margin-left: 40px;
`;

const Nav = styled.ul`
  display: flex;
  padding: 0;
  margin-right: 20px;
`;

const NavLi = styled.li`
  margin: 8px 12px;
`;
export default function Header() {
  return (
    <Container>
      <Title href="#">WithTravel</Title>
      <nav>
        <Nav class="nav">
          <NavLi>
            <a href="login.html">Login</a>
          </NavLi>
          <NavLi>
            <a href="#">Join</a>
          </NavLi>
        </Nav>
      </nav>
    </Container>
  );
}
