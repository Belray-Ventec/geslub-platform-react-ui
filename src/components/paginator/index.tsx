import React from 'react';
import {StatePaginatorProps} from '../../hooks/usePaginate';
import './paginator.css';

export interface PaginatorProps<T> {
    paginator: StatePaginatorProps<T>;
    showPages?: boolean;
    next: () => void;
    previous: () => void;
    goPage: (page: number) => void;
}


export default function Paginator<T>({paginator, next, previous, goPage, showPages}: PaginatorProps<T>): JSX.Element {

    const firstElement = Math.ceil((paginator.totalItems / paginator.totalPages) * paginator.previousPage + 1);
    const lastElement = Math.ceil((paginator.totalItems / paginator.totalPages) * paginator.page)

    return (
    <div className='containerPaginator'>
        <div className="contenedor-pages">
        <div className='previous'>
            <span onClick={(): void => previous()} className='previousText'>Anterior</span>
        </div>
        {showPages && (
        <div className='pages'>
            {[...Array.from(Array(paginator.totalPages).keys())].map((item) => (
                <span onClick={(): void => goPage(item + 1)} className={`pageLink ${paginator.page === (item + 1) ? 'pageLink--active' : '' }`} key={item}>{item + 1}</span>
            ))}
        </div>   
        )}
        <div className='next'>
            <span onClick={(): void => {
                next();
            }} className='nextText'>Siguiente</span>
        </div>
        </div>
        <span>Mostrando {paginator.totalPages > 0 ? firstElement: '0'} a {paginator.totalPages > 0 ? lastElement : '0'} de {paginator.totalItems} registros</span>
    </div>
  )
}
