import * as S from './Header.styles'
import React, { useState, useEffect } from 'react'
import Mobile from 'components/MobileNavigation'
import Hamburger from 'components/Hamburger'
import LogoComponent from 'components/Logo'
import Category from 'components/CategoryNav'
import IconsComponent from 'components/Icons/Icons'

const Header = () => {
  const [active, setActive] = useState(false)

  const size = useWindowSize()

  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.MenuItem>
          <LogoComponent></LogoComponent>

          <S.MenuItem className="MobileHidden">
            <Category></Category>
          </S.MenuItem>
        </S.MenuItem>

        <S.MenuItem>
          <S.MenuItem className="MobileHidden">
            <div>
              <a>Customer Service</a>
            </div>
            <div>
              <button>SE | EN</button>
            </div>
          </S.MenuItem>

          <IconsComponent></IconsComponent>

          <S.NavParent onClick={() => setActive(!active)}>
            <Hamburger props={active}></Hamburger>
          </S.NavParent>
          <Mobile props={active}></Mobile>
        </S.MenuItem>
      </S.HeaderWrapper>
    </S.Header>
  )
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match

  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

export default Header
