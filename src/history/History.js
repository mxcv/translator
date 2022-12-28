import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import languages from '../language-select/languages.json'
import { getTranslations, clearTranslations } from './HistoryRepository'

function History() {
    const [translations, setTranslations] = useState([]);
    useEffect(() => setTranslations(getTranslations), [])

    function onClear() {
        clearTranslations()
        setTranslations([])
    }

    return (
        <div>
            {
                !translations?.length ? <h2>Nothing to show</h2> :
                    <div className='d-flex align-items-end justify-content-between mb-3'>
                        <div>Found: {translations.length}</div>
                        <Button variant='danger' onClick={onClear}>Clear history</Button>
                    </div>
            }
            {
                translations.map((t, i) =>
                <Table key={i} striped="columns" bordered>
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
                )
            }
        </div>
    )
}

export default History
