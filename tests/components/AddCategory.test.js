import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('pruebas en <AddCategory />', () => {
  test('debe cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />)

    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'cartoons' } })

    expect(input.value).toBe('cartoons')
  })
})
