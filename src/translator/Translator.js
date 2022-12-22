import React, {useState} from 'react'
import Languages from '../languages/Languages'
import { ReactComponent as SwapIcon } from './swap.svg';
import './Translator.css'

function Translator() {
    return (
        <form className='Translator container-md'>
            <div className='d-flex flex-row mt-2'>
                <Languages />
                <button type='button' className='btn btn-outline-secondary mx-2'><SwapIcon /></button>
                <Languages />
            </div>
            <div className='row mt-0 g-2'>
                <div className='col-lg'>
                    <textarea className='form-control' rows='10' />
                </div>
                <div className='col-lg'>
                    <textarea className='form-control h-100 Translator-result' readOnly placeholder='Translation' />
                </div>
            </div>
            <div className='row justify-content-end m-0 mt-2'>
                <button className='col-md-auto btn btn-outline-primary'>Translate</button>
            </div>
        </form>
    )
}

export default Translator
