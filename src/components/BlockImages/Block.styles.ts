import styled from 'styled-components'

export const BlockImage = styled.div`
  position: absolute;
  width: 100%;
  height: 80% 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  padding-top: 10px;

  .Wrapper{
    grid-column: span 1;
       @media screen and (max-width: 1086px) {
          grid-column: span 3;
          bottom: 0;
          
          
    
        }
  }
  
  
`
