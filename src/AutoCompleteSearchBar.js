import { useState, useRef } from 'react';
import './App.css';
import { getAutoCompleteData } from './getAutoCompleteData';

function AutoCompleteSearchBar() {
  const [respData, setRespData] = useState([]);
  const inputElement = useRef();
  const handleAutoCompleteSearch = async (event) => {
    console.log(event.target.value);
    const dataResp = await getAutoCompleteData(event.target.value);
    setRespData(event.target.value && (dataResp || []));
  };
  const optionsHandler = (event) => {
    inputElement.current.value = event.target.innerText;
    setRespData([]);
  };

  return (
    <div className="text-3xl font-bold underline">
      <h2>Autocomplete Search Bar</h2>
      <input type="text" id="searchbox" ref={inputElement} className='searchbox' onKeyUp={handleAutoCompleteSearch}/>
      <br/>
      { respData.length>0 && 
        <div id="respdata" className='respdatadiv'>
          {respData.map((item,index)=>{
            return <><span key={`${item.name}_${index}`} className='suggesteditems' onClick={optionsHandler}>{item.name}</span><br/></>
          })}
        </div>
      }
    </div>
  );
}

export default AutoCompleteSearchBar;
