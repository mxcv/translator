import React, { createRef, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TextareaPanel.css'

function TextareaPanel({text, setText, translation, isLoading}) {
    const textRef = createRef()
    const translationRef = createRef()

    function updateHeight(textarea) {
        textarea.style.height = 'inherit';
        const style = window.getComputedStyle(textarea);
        const height = parseInt(style.getPropertyValue('border-top-width'), 10)
                     + parseInt(style.getPropertyValue('padding-top'), 10)
                     + textarea.scrollHeight
                     + parseInt(style.getPropertyValue('padding-bottom'), 10)
                     + parseInt(style.getPropertyValue('border-bottom-width'), 10);
    
        textarea.style.height = `${height}px`;
    }
    
    useEffect(() => updateHeight(textRef.current), [textRef])
    useEffect(() => updateHeight(translationRef.current), [translationRef])

    return (
        <Row className='mt-0 g-2'>
            <Col sm>
                <Form.Control as="textarea"
                    value={text}
                    ref={textRef}
                    onChange={e => setText(e.target.value)}
                    required
                    maxLength='5000'
                    className='Textarea' />
            </Col>
            <Col sm>
                <Form.Control as="textarea"
                    value={translation}
                    ref={translationRef}
                    disabled={isLoading}
                    readOnly
                    placeholder='Translation'
                    className='Textarea' />
            </Col>
        </Row>
    )
}

export default TextareaPanel
