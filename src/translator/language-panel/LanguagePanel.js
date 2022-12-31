import React from 'react'
import { Row, Col, Button } from 'react-bootstrap/'
import LanguageSelect from '../language-select/LanguageSelect'
import swap from './swap.svg'
import './LanguagePanel.css'

function LanguagePanel({from, setFrom, to, setTo}) {
    function onSwap() {
        const temp = from
        setFrom(to)
        setTo(temp)
    }

    return (
        <Row className='mt-2 gx-2'>
            <Col><LanguageSelect selected={from} onChange={e => setFrom(e.target.value)} hasDetect /></Col>
            <Col xs='auto'>
                <Button type='button' onClick={onSwap} variant='outline-secondary' className='btn-swap'>
                    <img src={swap} alt='swap' />
                </Button>
            </Col>
            <Col><LanguageSelect selected={to} onChange={e => setTo(e.target.value)} /></Col>
        </Row>
    )
}

export default LanguagePanel
