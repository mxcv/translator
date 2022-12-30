import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import LanguagePanel from '../language-panel/LanguagePanel';
import TextareaPanel from '../textarea-panel/TextareaPanel';
import SubmitPanel from '../submit-panel/SubmitPanel';
import { translate, detectLanguage } from './TranslatorRepository';

function Translator() {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [text, setText] = useState('')
    const [translation, setTranslation] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [savedTranslation, setSavedTranslation] = useState(null)

    function onTranslate(e, from) {
        e?.preventDefault()
        setIsLoading(true)
        if (from)
            translate(text, from, to)
                .then(t => {
                    setTranslation(t);
                    setSavedTranslation({text: text, translation: t, from: from, to: to})
                })
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
        <Form onSubmit={e => onTranslate(e, from)}>
            <LanguagePanel from={from} setFrom={setFrom} to={to} setTo={setTo} />
            <TextareaPanel text={text} setText={setText} translation={translation} isLoading={isLoading} />
            <SubmitPanel savedTranslation={savedTranslation} setSavedTranslation={setSavedTranslation} isLoading={isLoading} />
        </Form>
    )
}

export default Translator
