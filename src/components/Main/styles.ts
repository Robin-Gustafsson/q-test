import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #fff;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50%;

  @media screen and (max-width: 1400px) {
    height: 50%;
  }

`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  display: flex;
  display: inline-block;
  width: 10px;
`


