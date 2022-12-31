import React from 'react'
import Form from 'react-bootstrap/Form'
import languages from './languages.json'

function LanguageSelect({selected, onChange, hasDetect}) {
    const options = [];
    for (let l in languages)
        options.push(<option key={l} value={l}>{languages[l]}</option>)
    options.unshift(hasDetect
        ? <option key='' value=''>Detect language</option>
        : <option key='' value='' disabled className='d-none'>Select target language</option>)
        
    return (
        <Form.Select value={selected} onChange={onChange} required={!hasDetect}>
            {options}
        </Form.Select>
    )
}

export default LanguageSelect
