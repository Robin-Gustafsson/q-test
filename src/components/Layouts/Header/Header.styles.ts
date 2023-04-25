import styled from 'styled-components'

export const Header = styled.header`
  background-color: #fff;
  color: black;
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  padding: 1rem;
  border-bottom: 0.0625rem solid rgb(229, 229, 229);
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`

export const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 60px;
`


export const Nav = styled.a``

export const MenuItem = styled.div`
&.MobileHidden {
  @media screen and (max-width: 1007px) {
    display: none;
  }
}
  display: flex;
  gap: 1.5em;
  align-items: center;
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  

  button {
    border: none;
    background: #fff;
    font-size: 1.6rem;
  }
}
`

export const Logo = styled.a``

export const MenuNav = styled.ul`
  gap: 4rem;
  display: flex;
  
`

export const NavParent = styled.div`
  cursor: pointer;
`
