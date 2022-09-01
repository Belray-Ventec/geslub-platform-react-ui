import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react'
import { Table } from '../src/components/table'
import {productColumns, productData } from '../src/utils/data'

describe('Testing Table', () => {
    const onEditCustomFn = jest.fn()
    const onEditFn = jest.fn()
    const onDeleteItemsFn = jest.fn()

    const onDeleteFn = jest.fn()
    const addFn = jest.fn()
    const shareFn = jest.fn()
    
    const onSeeFn = jest.fn()
    const onDownloadFn = jest.fn()
    const onInfoFn = jest.fn()
    const onShareFn = jest.fn()

    const setup = () => {
        render(
            <Table
                data={productData}
                columns={productColumns}
                getRowKey={(item) => item.id}
                showPages
                itemsPerPage={3}
                actions={[{ label: 'Editar', callback: onEditCustomFn }]}
                showInfo
                showDownload
                showShare
                showSee
                onDelete={() => onDeleteFn()}
                add={() => addFn()}
                share={() => shareFn()}
                onEdit={() => onEditFn()}
                onDeleteItem={() => onDeleteItemsFn()}
                onSee={() => onSeeFn()}
                onDownload={() => onDownloadFn()}
                onInfo={() => onInfoFn()}
                onShare={() => onShareFn()}
                showHeaderButtons
                showMoreOptions
            />
        )
    }

    test('Debe Mostrar los encabezados de la tabla', async () => {
        setup()
        const id = screen.getByRole('columnheader', { name: /id/i})
        expect(id).toBeInTheDocument()

        const nombre = screen.getByRole('columnheader', { name: /nombre/i })
        expect(nombre).toBeInTheDocument()

        const precio = screen.getByRole('columnheader', { name: /precio/i })
        expect(precio).toBeInTheDocument()
    })

    test('Debe mostrar los datos de la tabla', async () => {
        setup()
        const id = screen.getByRole('cell', {
            name: /3/i
          })
        expect(id).toBeInTheDocument()

        const nombre = screen.getByRole('cell', {
            name: /coca cola/i
          })
        expect(nombre).toBeInTheDocument()

        const precio = screen.getByRole('cell', {
            name: /1200/i
          })
        expect(precio).toBeInTheDocument()
    })

    test('Debe mostrar los botones de acciones superiores y deben ser clickeables', async () => {
        setup()
        const add = screen.getByLabelText('add')
        expect(add).toBeInTheDocument()

        fireEvent.click(add);
        expect(addFn).toHaveBeenCalledTimes(1)

        const share = screen.getByLabelText('share')
        expect(share).toBeInTheDocument()

        fireEvent.click(share);
        expect(shareFn).toHaveBeenCalledTimes(1)

        const deleted = screen.getByLabelText('delete')
        expect(deleted).toBeInTheDocument()

        fireEvent.click(deleted);
        expect(onDeleteFn).toHaveBeenCalledTimes(1)
    } )

    test('Debe mostrar los botones de acciones de cada item de la tabla y deben ser clickeables', async () => {
        setup()

        const container = screen.getByRole('table')

        const infoButton = container.querySelector('[aria-label="infoItem"]')
        expect(infoButton).toBeInTheDocument()

        fireEvent.click(infoButton!);
        expect(onInfoFn).toHaveBeenCalledTimes(1)

        const downloadButton = container.querySelector('[aria-label="downloadItem"]')
        expect(downloadButton).toBeInTheDocument()

        fireEvent.click(downloadButton!);
        expect(onDownloadFn).toHaveBeenCalledTimes(1)

        const seeButton = container.querySelector('[aria-label="seeItem"]')
        expect(seeButton).toBeInTheDocument()

        fireEvent.click(seeButton!);
        expect(onSeeFn).toHaveBeenCalledTimes(1)

        const shareButton = container.querySelector('[aria-label="shareItem"]')
        expect(shareButton).toBeInTheDocument()

        fireEvent.click(shareButton!);
        expect(onShareFn).toHaveBeenCalledTimes(1)

        const editButton = container.querySelector('[aria-label="editItem"]')
        expect(editButton).toBeInTheDocument()

        fireEvent.click(editButton!);
        expect(onEditFn).toHaveBeenCalledTimes(1)

        const deleteButton = container.querySelector('[aria-label="deleteItem"]')
        expect(deleteButton).toBeInTheDocument()

        fireEvent.click(deleteButton!);
        expect(onDeleteItemsFn).toHaveBeenCalledTimes(1)
        


    } )
    
    test('Debe mostrar los botones de paginacion y deben ser clickeables y mostrar el siguiente item', async () => {
        setup()
        
        const nextButton = screen.getByLabelText('next')
        expect(nextButton).toBeInTheDocument()

        fireEvent.click(nextButton);
        
        const street = await screen.findByRole('cell', {
            name: /camino viejo de leganés/i
          })
        
        expect(street).toBeInTheDocument()

     
    })

    test('Debe permitir ordenar la columna nombre de forma ascendente', async () => {
        setup()
        const nombre = screen.getByText(/nombre/i)
        expect(nombre).toBeInTheDocument()

        fireEvent.click(nombre);
        const orderedProduct = await screen.findByRole('cell', {
            name: /articulos de aseo/i
          })
        
        expect(orderedProduct).toBeInTheDocument()
    })

})