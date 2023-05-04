import * as S from './Hero.styles'
import Image from 'next/image'
import Block from 'components/BlockImages'
import Home from 'components/NewsLetter'

const Hero = () => (
  <S.Hero>


    <Image
      src="https://a.storyblok.com/f/116485/3840x2000/a497a01214/3840x2000_desktop_dotw_beebird_01.jpg/m/3840x0/filters:quality(88)"
      alt="Lite text"
      layout="responsive"
      objectFit="cover"
      width={1920}
      height={1080}
    />

    <Block></Block>
  </S.Hero>



)

export default Hero
