import React, {useState} from 'react'
import Languages from '../languages/Languages'
import { ReactComponent as SwapIcon } from './swap.svg';
import './Translator.css'

function swapLanguages(from, setFrom, to, setTo) {
    const temp = from
    setFrom(to)
    setTo(temp)
}

function Translator() {
    const [from, setFrom] = useState('en')
    const [to, setTo] = useState('uk')
    
    return (
        <form className='Translator container-md'>
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
                    <textarea className='form-control' rows='10' />
                </div>
                <div className='col-lg'>
                    <textarea className='form-control h-100 Translator-result' readOnly placeholder='Translation' />
                </div>
            </div>
            <div className='row justify-content-end m-0 mt-2'>
                <button className='col-md-auto btn btn-outline-primary'>Translate</button>
            </div>
        </form>
    )
}

export default Translator
