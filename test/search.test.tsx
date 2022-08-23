import React from "react"
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react"
import { Search } from "../src/components/search"



describe('Testing Search', () => {

    const onSearchFn = jest.fn()

    const setup = () => {
        render(
            <Search
                handleSearch={() => onSearchFn()}
                timeDebounce={500}
            />
        )
    }

    test('Debe mostrar el input de busqueda', async () => {
        setup()
        const input = screen.getByRole('searchbox')
        expect(input).toBeInTheDocument()
    })

    test('Debe permitir escribir en el buscador el texto "hola"', async () => {
        setup()
        const input = screen.getByRole('searchbox')
        fireEvent.change(input, { target: { value: 'hola' } })

        expect(input).toHaveValue('hola')
    })

})