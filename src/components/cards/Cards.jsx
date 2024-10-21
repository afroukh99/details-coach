import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className='w-full flex justify-between items-center flex-wrap'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Cards