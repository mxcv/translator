import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LanguagePanel from '../language-panel/LanguagePanel';
import { translate, detectLanguage } from './TranslatorRepository';
import './Translator.css'

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
            <Row className='mt-0 g-2'>
                <Col sm>
                    <Form.Control as="textarea" value={text} onChange={e => setText(e.target.value)} required rows='10' />
                </Col>
                <Col sm>
                    <Form.Control as="textarea" value={translation} onChange={e => setTranslation(e.target.value)} disabled={isLoading} className='h-100 Translator-result' readOnly placeholder='Translation' />
                </Col>
            </Row>
            <Row className='mt-2 justify-content-end'>
                <Col sm='auto'>
                    <Button type='submit' disabled={isLoading} variant='primary' className='w-100'>Translate</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Translator
