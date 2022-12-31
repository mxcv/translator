import React, { createRef, useEffect } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import './TextareaPanel.css'

function TextareaPanel({text, setText, translation, isLoading}) {
    const textRef = createRef()
    const translationRef = createRef()

    function updateHeight(textarea, clone) {
        textarea.style.height = 'inherit'
        const style = window.getComputedStyle(textarea)
        const height = parseInt(style.getPropertyValue('border-top-width'), 10)
                     + parseInt(style.getPropertyValue('padding-top'), 10)
                     + textarea.scrollHeight
                     + parseInt(style.getPropertyValue('padding-bottom'), 10)
                     + parseInt(style.getPropertyValue('border-bottom-width'), 10)
                     + 'px'
    
        textarea.style.height = height
        if (clone)
            clone.style.height = height
    }

    useEffect(() => updateHeight(textRef.current), [textRef])
    useEffect(() => updateHeight(textRef.current, translationRef.current),
        [translation]) // eslint-disable-line react-hooks/exhaustive-deps
    

    return (
        <Row className='mt-0 g-2'>
            <Col md>
                <Form.Control as="textarea"
                    ref={textRef}
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required
                    maxLength='5000'
                    className='Textarea' />
            </Col>
            <Col md>
                <Form.Control as="textarea"
                    value={translation}
                    disabled={isLoading}
                    readOnly
                    placeholder='Translation'
                    className='Textarea h-100 d-none d-md-block' />
                <Form.Control as="textarea"
                    ref={translationRef}
                    value={translation}
                    disabled={isLoading}
                    readOnly
                    placeholder='Translation'
                    className='Textarea d-md-none' />
            </Col>
        </Row>
    )
}

export default TextareaPanel
