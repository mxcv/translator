import React, { useState } from 'react'
import Languages from '../languages/Languages'
import { ReactComponent as SwapIcon } from './swap.svg';
import './Translator.css'

function Translator() {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [text, setText] = useState('')
    const [translation, setTranslation] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
        }
    }

    async function detectLanguage(text) {
        options.body = `{"text":"${text}"}`
        const response = await fetch(`https://${process.env.REACT_APP_API_HOST}/language_detect`, options)
        if (!response.ok)
            throw new Error(response)
        return (await response.json()).language_detection.language
    }

    async function translate(text, from, to) {
        options.body = `{"text":"${text}","source":"${from}","target":"${to}"}`
        const response = await fetch(`https://${process.env.REACT_APP_API_HOST}/translate`, options)
        if (!response.ok)
            throw new Error(response)
        return (await response.json()).translations.translation
    }

    function onSwapLanguages() {
        const temp = from
        setFrom(to)
        setTo(temp)
    }
    
    function onTranslate(e, detectedFrom) {
        e?.preventDefault()
        setIsLoading(true)
        if (from || detectedFrom)
            translate(text, from ? from : detectedFrom, to)
                .then(t => setTranslation(t))
                .catch(err => console.error(err))
                .finally(() => setIsLoading(false))
        else
            detectLanguage(text)
                .then(language => {
                    setFrom(language)
                    onTranslate(null, language)
                })
                .catch(err => console.error(err))
    }

    return (
        <form onSubmit={onTranslate} className='Translator container-md'>
            <div className='d-flex flex-row mt-2'>
                <Languages selected={from} onChange={e => setFrom(e.target.value)} hasDetect />
                <button type='button' onClick={onSwapLanguages} className='btn btn-outline-secondary mx-2'>
                    <SwapIcon />
                </button>
                <Languages selected={to} onChange={e => setTo(e.target.value)} />
            </div>
            <div className='row mt-0 g-2'>
                <div className='col-lg'>
                    <textarea value={text} onChange={e => setText(e.target.value)} required className='form-control' rows='10' />
                </div>
                <div className='col-lg'>
                    <textarea value={translation} onChange={e => setTranslation(e.target.value)} disabled={isLoading} className='form-control h-100 Translator-result' readOnly placeholder='Translation' />
                </div>
            </div>
            <div className='row justify-content-end m-0 mt-2'>
                <button disabled={isLoading} className='col-md-auto btn btn-outline-primary'>Translate</button>
            </div>
        </form>
    )
}

export default Translator
