import Header from 'components/Layouts/Header'
import * as S from './styles'

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS & Styled Components',
}) => (
  <S.Wrapper>
    <Header></Header>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
