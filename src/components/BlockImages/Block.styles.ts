import styled from 'styled-components'

export const BlockImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 526px);
  gap: 1em;
  
  

  @media screen and (max-width: 1500px) {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`
