import React from 'react'
import { PARAM_SEARCH } from '../constants';

export default function Panigation({offset, setOffset, artistsSearch, tracks}) {
    const totalArtists = Math.ceil(artistsSearch.total/PARAM_SEARCH.LIMIT);
    const totalTrasks = Math.ceil(tracks.total/PARAM_SEARCH.LIMIT)
    const limitPage = totalArtists >= totalTrasks ? totalArtists : totalTrasks;
    const handlePrev = () => {
        setOffset(offset > 0 ? offset - 1 : 0);
    }
    const handleNext = () => {
        setOffset(offset < limitPage ? offset + 1 : limitPage || 0);
    }
    return (
    <div className='page'>
        <div onClick={(e)=> handlePrev()}><iconify-icon icon="carbon:previous-outline"></iconify-icon></div>
        <span className='number-page'>{offset}</span>
        <div onClick={(e)=> handleNext()}><iconify-icon icon="carbon:next-outline"></iconify-icon></div>
    </div>
    )
}
