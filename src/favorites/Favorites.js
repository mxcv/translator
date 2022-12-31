import React, { useEffect, useState } from 'react'
import { Table, Row, Col, Button } from 'react-bootstrap'
import { getFavorites, removeFavorite, clearFavorites } from './FavoritesRepository'
import languages from '../translator/language-select/languages.json'
import cross from './cross.svg'
import './Favorites.css'

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    
    useEffect(() => {
        document.title = 'Translator - Favorites'
        setFavorites(getFavorites())
    }, []);

    function onClear() {
        clearFavorites()
        setFavorites([])
    }

    function onRemove(id) {
        removeFavorite(id)
        setFavorites(favorites.filter(f => f.id !== id))
    }

    return (
        <div>
            {
                !favorites?.length ? <h2>Nothing to show</h2> :
                    <div className='d-flex align-items-end justify-content-between mb-3'>
                        <div>Found: {favorites.length}</div>
                        <Button variant='danger' onClick={onClear}>Clear favorites</Button>
                    </div>
            }
            {
                favorites.map(t =>
                <Row key={t.id} className='g-1 mb-3'>
                    <Col>
                        <Table key={t.id} striped="columns" bordered className='mb-0'>
                            <thead>
                                <tr>
                                    <th>{languages[t.from]}</th>
                                    <th>{languages[t.to]}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='w-50'>{t.text}</td>
                                    <td className='w-50'>{t.translation}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs='auto'>
                        <Button variant='outline-danger' onClick={() => onRemove(t.id)} className='btn-remove h-100'>
                            <img src={cross} width='22' height='22' alt='cross' />
                        </Button>
                    </Col>
                </Row>
                )
            }
        </div>
    )
}

export default Favorites
