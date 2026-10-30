import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

it('renders its text as the accessible name', () => {
  render(<Button>Save</Button>)
  expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
})

it('calls onClick when clicked', async () => {
  const user = userEvent.setup()
  const onClick = vi.fn()
  render(<Button onClick={onClick}>Save</Button>)
  const button = screen.getByRole('button' , {name:'Save'})
  await user.click(button)
  expect(onClick).toHaveBeenCalledTimes(1)
})


it('uses type="button" by default' , () => {
    render(<Button>Save</Button>)
    const button = screen.getByRole('button' , {name : 'Save'})
    expect(button).toHaveAttribute('type' , 'default')
})

it('the type can be overridden',() => {
render(<Button type="submit">Save</Button>)
const button = screen.getByRole('button' , {name: 'Save'})
expect(button).toHaveAttribute('type', 'submit')
})

it("does not call onClick when disabled" , async() => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Button disabled onClick={onClick}>Save</Button>)
    const button = screen.getByRole('button' , {name:"Save"})
    expect(button).toBeDisabled()
    await user.click(button)
   expect(onClick).not.toHaveBeenCalled()
})

it('is busy and does not call onClick when loading', async() => {
const user = userEvent.setup()
const onClick = vi.fn()
render(<Button loading onClick={onClick}>Save</Button>)
const button = screen.getByRole('button' , {name:"Save"})
expect(button).toHaveAttribute('aria-busy', 'true')
expect(button).toHaveAttribute('aria-disabled', 'true')
await user.click(button)
expect(onClick).not.toHaveBeenCalled()
})

it("forwards the ref to the button element" , () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Save</Button>)
    expect(ref.current).toBe(screen.getByRole('button' , {name:"Save"}))
})

it('passes native attributes such as aria-label', () => {
  render(<Button aria-label="Close">X</Button>)
  expect(screen.getByRole('button', { name: 'X' })).toBeInTheDocument()
})