import React from "react"
import { TagList } from '../src/components/tagList/';
import { render, screen, fireEvent } from '@testing-library/react';
import { tagListData } from '../src/utils/data/';
import '@testing-library/jest-dom'



describe('TagList', () => {
    const onClickFn = jest.fn()

    const setup = () => {
        render(
            <TagList 
            data={tagListData} 
                getRowKey={(item) => item.id} 
                getValue={(item) => item.name} 
                backgroundColor='#00a65a' 
                color='#fff' 
                rounded 
                onClick={() => onClickFn()} 
                align='center' />
                )
            }

    test('Debe mostrar el texto del tag', async () => {
        setup()
        const tag = screen.getByText(/tag 8/i)
        expect(tag).toBeInTheDocument()
    })

    test('Debe mostrar el tag con el color y el background', async () => {
        setup()
        const tag = screen.getByText(/tag 8/i)
        expect(tag).toHaveStyle('background-color: #00a65a')
        expect(tag).toHaveStyle('color: #fff')
    })

    test('Debe llamar a la función onClick', async () => {
        setup()
        const tag = screen.getByText(/tag 8/i)
        fireEvent.click(tag)
        expect(onClickFn).toHaveBeenCalled()
    } )


        
})