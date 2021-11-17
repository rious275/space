import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <NavWrap>
      <div>Nav</div>
    </NavWrap>
  )
}

export default Nav;

const NavWrap = styled.div`
  height: 100px;

  border: 1px solid red;
`;