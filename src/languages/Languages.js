import React from 'react'
import languages from './languages.json'

function Languages({selected, onChange, hasDetect}) {
    const options = [];
    for (let l in languages)
        options.push(<option key={l} value={l}>{languages[l]}</option>)
    options.unshift(hasDetect
        ? <option key='' value=''>Detect language</option>
        : <option key='' value='' disabled className='d-none'>Select target language</option>)
        
    return (
        <select value={selected} onChange={onChange} required={!hasDetect} className='form-select'>
            {options}
        </select>
    )
}

export default Languages
