import React from 'react'
import * as S from './Mobile.styles'
import SideBar from './Mobile.styles'

{
  /* //Here we declare the type props as a boolean, it can be true or false */
}
interface PropsTest {
  props: boolean
}

{
  /*we get the props from our header (parent) and display the categories in our hamburger menu when clicked on*/
}
const Mobile: any = ({ props }: PropsTest) => {
  const test: PropsTest = {
    props: props,
  }
  console.log(test)

  return (
    <SideBar {...test}>
      <S.MobileCategory>
        <a>Men</a>
      </S.MobileCategory>

      <S.MobileCategory>
        <a>Women</a>
      </S.MobileCategory>

      <S.MobileCategory>
        <a>New in</a>
      </S.MobileCategory>

      <S.MobileCategory>
        <a>Objects</a>
      </S.MobileCategory>

      <S.MobileCategory>
        <a>About Us</a>
      </S.MobileCategory>

      <S.MobileMenuItem>
        <div>
          <a>Customer Service</a>
        </div>
      </S.MobileMenuItem>

      <S.MobileMenuItem>
        <div>
          <button>Languages</button>
        </div>
      </S.MobileMenuItem>
    </SideBar>
  )
}

export default Mobile
