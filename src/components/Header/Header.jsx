import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <div>
        <header className='header'>
            <div className="header__img">
                <div className="header__img-shadow"></div>
                <div className="header__img-text">Najpopularniejsze filmy tego roku</div>
            </div>
        </header>
    </div>
  )
}
