import React from 'react'

export default function Resite() {

  return (
    <div className='resite'>
        <div className='resite_logo'><img src={`/assets/images/navbar_logo_ru.svg`} width={400} alt='logo'/></div>
        <div className='resite_text'>
            <h1 className='resite_h1'>ГРЯДЕТ НОВЫЙ СТАРТ</h1>
            <div className='resite_line'></div>
            <span className='resite_span'>Наш сайт в разработке! Мы готовим для вас что-то удивительное и захватывающее.</span>
            <span className='resite_span'>Тел: 0312 54 43 20, 0312 54 43 22. <br/>г.Бишкек, ул. Чынгыза Айтматова 1 ст 2</span>
        </div>
    </div>
  )
}
