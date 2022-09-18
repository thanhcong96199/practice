import React from 'react';
import { useState } from 'react';
import callAPISearchArticle from '../callAPI';
import { PARAM_SEARCH } from '../constants';

function InputSearch({offset,onUpdateArticelSearch}) {
    const [search, setSearch] = useState('')
    const onEnter = (e) => {
        if(e.key == "Enter"){
            callAPISearchArticle(search, PARAM_SEARCH.TYPE, PARAM_SEARCH.MARKET, PARAM_SEARCH.LIMIT, offset)
            .then(
                (resole) => {
                    console.log(resole)
                    onUpdateArticelSearch(resole?.data?.artists, resole?.data?.tracks)
                } 
            )
        }
    }
    return (
        <div className="input-form">
            <input type="text" 
            className='search-input'
            placeholder='Search for ...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => onEnter(e)}
            />
        </div>
    );
}

export default InputSearch;