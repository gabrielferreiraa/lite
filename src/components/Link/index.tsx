import NextLink from 'next/link'
import LinkStyled from './Link.styles'

interface Props {
  href: string
  children: React.ReactNode
}
const Link: React.FC<Props> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <LinkStyled>{children}</LinkStyled>
    </NextLink>
  )
}

export default Link
