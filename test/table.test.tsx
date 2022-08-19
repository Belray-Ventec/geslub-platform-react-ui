import { screen, render } from '@testing-library/react';
import React from 'react'
import { Table } from '../src/components/table'
import {productColumns, productData } from '../src/utils/data'

describe('Testing Table', () => {
    const setup = () => {
        render(
            <Table
                data={productData}
                columns={productColumns}
                getRowKey={(item) => item.id}
                showPages
                itemsPerPage={10}
                actions={[]}
                showInfo
                showDownload
                showShare
                showSee
            />
        )
    }

    test('Mostrar encabezados de la tabla', async () => {
        setup()
        const columns = ['Id', 'Nombre', 'Precio', 'Comprar', 'Etiquetas', 'Street', 'Pais']
        const id = await screen.getByText(columns[0])
        expect(id).toBeInTheDocument()
    })
})