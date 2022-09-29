import React from 'react'
import { Logo } from './Logo'

export default function Header() {
    return (
        <div className='w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600'>
            <Logo />
        </div>
    )
}
