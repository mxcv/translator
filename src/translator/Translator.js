import React, {useState} from 'react'
import Languages from '../languages/Languages'
import { ReactComponent as SwapIcon } from './swap.svg';
import './Translator.css'

function swapLanguages(from, setFrom, to, setTo) {
    const temp = from
    setFrom(to)
    setTo(temp)
}

function translate(e, from, to, text, setTranslation) {
    e.preventDefault();

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
        },
        body: `{"text":"${text}","source":"${from}","target":"${to}"}`
    };
    
    fetch(`https://${process.env.REACT_APP_API_HOST}/translate`, options)
        .then(response => response.json())
        .then(response => setTranslation(response.translations.translation))
        .catch(err => console.error(err));
}

function Translator() {
    const [from, setFrom] = useState('en')
    const [to, setTo] = useState('uk')
    const [text, setText] = useState('')
    const [translation, setTranslation] = useState('')

    return (
        <form onSubmit={e => translate(e, from, to, text, setTranslation)} className='Translator container-md'>
            <div className='d-flex flex-row mt-2'>
                <Languages selected={from} onChange={e => setFrom(e.target.value)} />
                <button type='button'
                    onClick={() => swapLanguages(from, setFrom, to, setTo)}
                    className='btn btn-outline-secondary mx-2'>
                    <SwapIcon />
                </button>
                <Languages selected={to} onChange={e => setTo(e.target.value)} />
            </div>
            <div className='row mt-0 g-2'>
                <div className='col-lg'>
                    <textarea value={text} onChange={e => setText(e.target.value)} className='form-control' rows='10' />
                </div>
                <div className='col-lg'>
                    <textarea value={translation} onChange={e => setTranslation(e.target.value)} className='form-control h-100 Translator-result' readOnly placeholder='Translation' />
                </div>
            </div>
            <div className='row justify-content-end m-0 mt-2'>
                <button className='col-md-auto btn btn-outline-primary'>Translate</button>
            </div>
        </form>
    )
}

export default Translator
