import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react'
import { Table } from '../src/components/table'
import {productColumns, productData } from '../src/utils/data'

describe('Testing Table', () => {
    const onEdit = jest.fn()
    const setup = () => {
        render(
            <Table
                data={productData}
                columns={productColumns}
                getRowKey={(item) => item.id}
                showPages
                itemsPerPage={3}
                actions={[{ label: 'Editar', callback: onEdit }]}
                showInfo
                showDownload
                showShare
                showSee
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

    // test('Debe mostrar los botones de acciones', async () => {
    //     setup()
    //     const agregar = document.querySelector('#root > div:nth-child(1) > button:nth-child(1) > svg')
    //     expect(agregar).toBeInTheDocument()
        
    //     const compartir = screen.getByRole('button', { name: /compartir/i })
    //     expect(compartir).toBeInTheDocument()

    //     const eliminar = screen.getByRole('button', { name: /descargar/i })
    //     expect(eliminar).toBeInTheDocument()

    // })
})