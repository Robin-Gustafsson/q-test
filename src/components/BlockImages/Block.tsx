import * as S from './Block.styles'
import Image from 'next/image'
import Home from 'components/NewsLetter'

const Block: any = () => {
  return (
    <S.BlockImage>
      <Image
        src="https://a.storyblok.com/f/116485/1920x1490/fb82f06dd0/1920x1490_category_mulberry_mens.jpg/m/750x0/filters:quality(88)"
        alt="Lite text"
        layout="responsive"
        objectFit="cover"
        width={1200}
        height={1000}
      />
      <Image
        src="https://a.storyblok.com/f/116485/1920x1490/fb82f06dd0/1920x1490_category_mulberry_mens.jpg/m/750x0/filters:quality(88)"
        alt="Lite text"
        layout="responsive"
        objectFit="cover"
        width={1200}
        height={1000}
      />
      <Image
        src="https://a.storyblok.com/f/116485/1920x1490/fb82f06dd0/1920x1490_category_mulberry_mens.jpg/m/750x0/filters:quality(88)"
        alt="Lite text"
        layout="responsive"
        objectFit="cover"
        width={1200}
        height={1000}
      />

      <Home></Home>
    </S.BlockImage>
  )
}

export default Block
