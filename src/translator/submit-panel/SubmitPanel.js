import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { saveFavorite } from '../../favorites/FavoritesRepository'
import heart from './heart.svg'

function SubmitPanel({ savedTranslation, setSavedTranslation, isLoading }) {
    function onSave() {
        saveFavorite(savedTranslation)
        setSavedTranslation(null)
    }

    return (
        <Row className='mt-2 justify-content-between'>
            <Col xs={10} md='auto'>
                <Button type='submit' variant='primary' disabled={isLoading} className='w-100'>Translate</Button>
            </Col>
            <Col xs={2} md='auto' className='d-flex justify-content-end'>
                <Button variant='danger' disabled={savedTranslation === null} onClick={onSave}>
                    <img width='22' height='22' src={heart} alt='heart' className='p-0' />
                </Button>
            </Col>
        </Row>
    )
}

export default SubmitPanel
