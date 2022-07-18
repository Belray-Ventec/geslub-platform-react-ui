import React from 'react';
import {StatePaginatorProps} from '../../hooks/usePaginate';
import AngleLeft from '../icons/AngleLeft';
import './paginator.css';

export interface PaginatorProps<T> {
    paginator: StatePaginatorProps<T>;
    showPages?: boolean;
    next: () => void;
    previous: () => void;
    goPage: (page: number) => void;
    themeColor: string;
}


export default function Paginator<T>({paginator, next, previous, goPage, showPages, themeColor}: PaginatorProps<T>): JSX.Element {

    const firstElement = Math.ceil((paginator.totalItems / paginator.totalPages) * paginator.previousPage + 1);
    const lastElement = Math.ceil((paginator.totalItems / paginator.totalPages) * paginator.page);

    return (
    <div className='containerPaginator'>
        <div className="contenedor-pages">
        {showPages && (
        <div className='pages'>
            {[...Array.from(Array(paginator.totalPages).keys())].map((item) => (
                <span style={themeColor ? {backgroundColor: themeColor} : {}} onClick={(): void => goPage(item + 1)} className={`pageLink ${paginator.page === (item + 1) ? 'pageLink--active' : '' }`} key={item}>{item + 1}</span>
            ))}
        </div>   
        )}
        <div onClick={(): void => previous()} className='previous'>
            <span className='previousText'><AngleLeft/></span>
        </div>
        <div onClick={(): void => {
                next();
            }} className='next'>
            <span className='nextText'><AngleLeft/></span>
        </div>
        </div>
        <span>Mostrando {paginator.totalPages > 0 ? firstElement: '0'} a {paginator.totalPages > 0 ? lastElement : '0'} de {paginator.totalItems} registros</span>
    </div>
  )
}
