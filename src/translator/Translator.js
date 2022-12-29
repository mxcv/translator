import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LanguagePanel from '../language-panel/LanguagePanel';
import TextareaPanel from '../textarea-panel/TextareaPanel';
import { translate, detectLanguage } from './TranslatorRepository';

function Translator() {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [text, setText] = useState('')
    const [translation, setTranslation] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    function onTranslate(e, from) {
        e?.preventDefault()
        setIsLoading(true)
        if (from)
            translate(text, from, to)
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
        <Form onSubmit={e => onTranslate(e, from)}>
            <LanguagePanel from={from} setFrom={setFrom} to={to} setTo={setTo} />
            <TextareaPanel text={text} setText={setText} translation={translation} isLoading={isLoading} />
            <Row className='mt-2'>
                <Col sm='auto'>
                    <Button type='submit' disabled={isLoading} variant='primary' className='w-100'>Translate</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Translator
