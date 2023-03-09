import React, { useState } from 'react';
import PopUp from '../../PopUp';


const language = [
    {
        title: 'HTML',
        content: "HTML - мова гіпертекствої розмітки. Стандартизована мова розмітки документів для перегляду веб-сторінок у браузері.",
    },
    {
        title: 'CSS',
        content: 'CSS - це спеціальна мова (мова стилів), за допомогою якої описують вигляд документів (як і де відображати елементи веб-сторінки), написаних мовами розмітки даних.',
    },
    {
        title: 'JavaScript',
        content: "JavaScript - динамічна, об'єктно-орієнтована прототипна мова програмування. Реалізація стандарту ECMAScript",
    }
]

export const Language = () => {
    const [openPopUp, isOpenPopUp] = useState(false);
    const [information, setInformation] = useState({
        title: '',
        content: '',
    })
    const handlerPopUp = (e: any, title: string, content: any) => {
        e.preventDefault();
        isOpenPopUp(true);
        setInformation({ title: title, content: content });
    }
    const closePopUp = () => {
        isOpenPopUp(false)
    }

    return (
        <section className="page__language">
            <div className="language__container">
                <h1 className="language__title title align-center profession__title">
                    Мови програмування, які має знати FRONTEND-розробник
                </h1>
                <div className="language__content">
                    <ul className="language-content__list profession-list">
                        {language.map((item, idx) => (
                            <li className="language-content__item profession-item" key={idx}>
                                <a href="" className="profession-link" onClick={(e) => handlerPopUp(e, item.title, item.content)}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="language__content-photo profession-img">
                    <img src="https://i.pinimg.com/736x/7b/3a/fd/7b3afde842ecf43aa0db3aa984cbca52.jpg" alt="" />
                </div>
            </div>
            <PopUp
                title={information.title}
                content={information.content}
                closepop={closePopUp}
                ispopup={openPopUp}
            />
        </section>
    )
}