import React, { useEffect, useState } from 'react';
import close from '../source/close.svg';

interface popupinfo {
    title: string,
    subtitle: string,
    content: string,
    array?: any,
    subtitle2: string,
    content2: string,
    closepop: any,
    ispopup: any
}

const PopUp = ({ title, subtitle, content, array, subtitle2, content2, closepop, ispopup }: popupinfo) => {
    const [arrinfo, setArrInfo] = useState(array);
    // arrinfo.map((item: any, index: number) => console.log(item))
    useEffect(() => {
        setArrInfo(array);
    })
    return (
        <div className={ispopup ? "popup-body visible" : "popup-body"}>
            <div className={ispopup ? "popup__container active" : "popup__container"}>
                <h2 className="popup__title">
                    {title}
                    <img src={close} alt="close" className='popup-close' onClick={closepop} />
                </h2>
                {subtitle !== '' && <h3 className="popup__sub-title">{subtitle}</h3>}
                <p className="popup__content">{content}</p>
                {!!arrinfo
                    ?
                    <ul className="popup__list">
                        {arrinfo.map((item: any, index: number) => (
                            <li className="popup__item" key={index}>- {item.text}</li>
                        ))}
                    </ul>
                    :
                    null
                }
                {subtitle2 !== '' && <h3 className="popup__sub-title">{subtitle2}</h3>}
                {content2 !== '' && <p className="popup__content">{content2}</p>}
            </div>
        </div>
    )
}

export default PopUp;