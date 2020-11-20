import { render, screen } from 'shared/test-utils'
import theme from 'styles/theme'
import { Hero, Title, Body, Cta } from '.'

describe('components/Text', () => {
  test('<Hero /> should render with correctly styles', () => {
    const { rerender } = render(<Hero>Hero Text</Hero>)

    const hero = screen.getByText('Hero Text')

    expect(hero).toBeInTheDocument()
    expect(hero).toHaveStyle(`color: ${theme.colors.dark}`)
    expect(hero).toHaveStyle(`font-size: ${theme.fontSizes.hero}`)

    rerender(<Hero color="success">Hero Text</Hero>)
    expect(hero).toHaveStyle(`color: ${theme.colors.success}`)
  })

  test('<Title /> should render with correctly styles', () => {
    const { rerender } = render(<Title>Title Text</Title>)

    const title = screen.getByText('Title Text')

    expect(title).toBeInTheDocument()
    expect(title).toHaveStyle(`color: ${theme.colors.dark}`)
    expect(title).toHaveStyle(`font-size: ${theme.fontSizes.title}`)

    rerender(<Title color="success">Title Text</Title>)
    expect(title).toHaveStyle(`color: ${theme.colors.success}`)
  })

  test('<Body /> should render with correctly styles', () => {
    const { rerender } = render(<Body>Body Text</Body>)

    const body = screen.getByText('Body Text')

    expect(body).toBeInTheDocument()
    expect(body).toHaveStyle(`color: ${theme.colors.dark}`)
    expect(body).toHaveStyle(`font-size: ${theme.fontSizes.body}`)

    rerender(<Body color="success">Body Text</Body>)
    expect(body).toHaveStyle(`color: ${theme.colors.success}`)
  })

  test('<Cta /> should render with correctly styles', () => {
    const { rerender } = render(<Cta>CTA Text</Cta>)

    const cta = screen.getByText('CTA Text')

    expect(cta).toBeInTheDocument()
    expect(cta).toHaveStyle(`color: ${theme.colors.dark}`)
    expect(cta).toHaveStyle(`font-size: ${theme.fontSizes.cta}`)
    expect(cta).toHaveStyle('font-weight: bold')

    rerender(<Cta color="success">Cta Text</Cta>)
    expect(cta).toHaveStyle(`color: ${theme.colors.success}`)
  })
})
