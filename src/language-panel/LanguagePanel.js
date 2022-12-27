import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LanguageSelect from '../language-select/LanguageSelect';
import { ReactComponent as SwapIcon } from './swap.svg';

function LanguagePanel({from, setFrom, to, setTo}) {
    function onSwapLanguages() {
        const temp = from
        setFrom(to)
        setTo(temp)
    }

    return (
        <Row className='mt-2 g-2'>
            <Col><LanguageSelect selected={from} onChange={e => setFrom(e.target.value)} hasDetect /></Col>
            <Col xs='auto'>
                <Button type='button' onClick={onSwapLanguages} variant='outline-secondary'>
                    <SwapIcon />
                </Button>
            </Col>
            <Col><LanguageSelect selected={to} onChange={e => setTo(e.target.value)} /></Col>
        </Row>
    )
}

export default LanguagePanel
