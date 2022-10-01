import { useState } from 'react';
import { getApi } from '../apiConfig';
function SearchComponent({ setData, setArtist }) {
  const [keySearch, setKeySearch] = useState('');

  const handleInputSearch = (value) => {
    setKeySearch(value);
  };

  const handleOnkeyDown = (e) => {
    if (e.key === 'Enter') {
      getApi(keySearch).then((res) => setData(res));
      
    }
  };

  return (
    <div className='d-flex justify-content-center' style={{height:"50px"}}>
      <input
        style={{borderRadius:"20px", border:"none" }}
        className="border-2 border-gray-500 w-[400px] px-2 py-1"
        placeholder="type to search for an artists"
        value={keySearch}
        onChange={(e) => handleInputSearch(e.target.value)}
        onKeyDown={(e) => handleOnkeyDown(e)}
      ></input>
    </div>
  );
}

export default SearchComponent;
