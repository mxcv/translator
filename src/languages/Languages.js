import React from 'react'
import languages from './languages.json'

function Languages() {
    const options = [];
    for (let l in languages)
        options.push(<option key={l} value={l}>{languages[l]}</option>)
    return <select className='form-select'>{options}</select>
}

export default Languages
