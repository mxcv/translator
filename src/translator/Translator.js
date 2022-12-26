import React, { useState } from 'react'
import LanguagePanel from '../language-panel/LanguagePanel';
import { translate, detectLanguage } from './TranslatorRepository';
import './Translator.css'

function Translator() {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [text, setText] = useState('')
    const [translation, setTranslation] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
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
            <LanguagePanel from={from} setFrom={setFrom} to={to} setTo={setTo} />
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
