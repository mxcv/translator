import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { getTranslations, clearTranslations } from './HistoryRepository'
import languages from '../translator/language-select/languages.json'

function History() {
    const [translations, setTranslations] = useState([]);
    
    useEffect(() => {
        document.title = 'Translator - History'
        setTranslations(getTranslations())
    }, []);

    function onClear() {
        clearTranslations()
        setTranslations([])
    }

    return (
        <div>
            <h1>History</h1>
            {
                !translations?.length ? <em>Nothing to show</em> :
                    <div className='d-flex align-items-end justify-content-between mb-3'>
                        <div>Found: {translations.length}</div>
                        <Button variant='danger' onClick={onClear}>Clear history</Button>
                    </div>
            }
            {
                translations.map(t =>
                <Table key={t.id} striped="columns" bordered>
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
