import React from 'react'
import LanguageSelect from '../language-select/LanguageSelect';
import { ReactComponent as SwapIcon } from './swap.svg';

function LanguagePanel({from, setFrom, to, setTo}) {
    function onSwapLanguages() {
        const temp = from
        setFrom(to)
        setTo(temp)
    }

    return (
        <div className='d-flex flex-row mt-2'>
            <LanguageSelect selected={from} onChange={e => setFrom(e.target.value)} hasDetect />
            <button type='button' onClick={onSwapLanguages} className='btn btn-outline-secondary mx-2'>
                <SwapIcon />
            </button>
            <LanguageSelect selected={to} onChange={e => setTo(e.target.value)} />
        </div>
    )
}

export default LanguagePanel
