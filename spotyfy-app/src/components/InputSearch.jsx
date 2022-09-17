import React from 'react';
import { useState } from 'react';
import callAPISearchArticle from '../callAPI';
import { PARAM_SEARCH } from '../constants';

function InputSearch({offset,onUpdateArticelSearch}) {
    const [search, setSearch] = useState('')
    return (
        <div>
            <input type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
                if(e.key == "Enter"){
                    callAPISearchArticle(search, PARAM_SEARCH.TYPE, PARAM_SEARCH.MARKET, PARAM_SEARCH.LIMIT, offset)
                    .then(
                        (resole) => {
                            // console.log(resole);
                            onUpdateArticelSearch(resole?.data?.artists, resole?.data?.tracks)
                        } 
                    )
                }
            }}
            />
        </div>
    );
}

export default InputSearch;