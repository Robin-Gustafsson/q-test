import styled from 'styled-components'

interface PropsBurger {
  props: boolean
}

export const HamburgerParent = styled.div<PropsBurger>`
@media screen and (min-width: 1109px) {
  display: none;
}
  width: 2rem;
  height: 0.1rem;
  margin: 0.5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 10px;
  gap: 4px;
  padding: 0.5px 0 0 0;

  div {
    height: 10px;
    background-color: black;
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    opacity: 1;
    :nth-child(1) {
      transform: ${(props: any) =>
    props.props === true ? 'rotate(45deg) translateY(6px);' : 'unset;'};
    }

    :nth-child(3) {
        transform: ${(props: any) =>
    props.props === true ? 'rotate(-45deg) translateY(-7px);' : 'unset;'};
  }
  :nth-child(2) {
      transform: ${(props: any) =>
    props.props === true ? 'translateX(200%);' : 'unset;'};
        opacity: ${(props: any) => (props.props === true ? '0;' : '1;')}; 

}
`

export default HamburgerParent
