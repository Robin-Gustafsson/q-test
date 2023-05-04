import * as S from './Hamburger.styles'


interface PropsBurger {
  props: boolean
}

const Hamburger: any = ({ props }: PropsBurger) => {

  const menu: PropsBurger = {
    props: props,
  }

  console.log(menu)

  //returning my hamburger menu
  return (
    <S.HamburgerParent {...menu} >
      <div></div>
      <div></div>
      <div></div>
    </S.HamburgerParent>
  )
}

export default Hamburger;

