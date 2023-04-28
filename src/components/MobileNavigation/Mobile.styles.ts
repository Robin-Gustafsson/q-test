import { findByLabelText } from '@testing-library/react';
import { monitorEventLoopDelay } from 'perf_hooks';
import styled from 'styled-components'

interface PropsTest {
  props: boolean
}

const SideBar = styled.div<PropsTest>`
  position: fixed;
  top: 6vh;
  right: 0;
  width: 50%;
  height: 93vh;
  background: white;
  flex-direction: column;
  transform: ${(props: any) =>
    props.props === true ? 'translateX(0%)' : 'translateX(100%)'};
  transition: transform 0.5s ease-in-out;
  color: black;
  list-style: none;
  z-index: 1000;
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;
`

export const MobileCategory = styled.li``
export const MobileMenuItem = styled.li`
  button {
    background: #fff;
    color: #000;
    border: none;
    font-size: 16px;
  }
`

export default SideBar
