import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NHS from '@/components/nhs-widget';
 
describe('Page', () => {
  it('renders a heading from NHS widget API', () => {
    render(<NHS />)
 
    const heading = screen.getByRole('heading', { level: 2 })
 
    expect(heading).toBeInTheDocument()
  })
})