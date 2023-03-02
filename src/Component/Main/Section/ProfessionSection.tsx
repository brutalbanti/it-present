import './profession.css';
import React, { useState } from 'react';
import PopUp from '../../PopUp';
import { info } from 'console';

const profession = [
    {
        title: 'Тестувальник (QA-інженер)',
        content: "QA-інженер - спеціаліст, який стежить за якістю продукту на всіх етапах його розробки. У сучасних реаліях робота QA-інженера починається ще на стадії написання технічної документації: він тестує її та перевіряє вимоги до продукту на наявність помилок, тим самим допомагаючи компанії заощаджувати на їх виправленні.",
        content2: 'Тестувальник - це спеціаліст, який займається перевіркою працездатності десктопних програм та мобільних додатків. У його завдання входить моніторинг помилок у різних сценаріях роботи ПЗ, коли потрібно переконатися, що програма відповідає на дії користувача так, як було спочатку сплановано.'

    },
    {
        title: 'UX/UI-дизайнер',
        content: 'Це креативний фахівець, який проектує призначені для користувача інтерфейси. UI і UX — це два різних сторони дизайну, але частіше за все завдання по обох напрямках тісно пов’язані між собою, а тому їх робить один універсальний фахівець.',
        content2: 'Будь-яке налаштування зовнішнього вигляду товару (упаковка, ергономічність, зовнішня реклама) можна назвати UI/UX-дизайном, адже з його допомогою кінцевий продукт стає зручним для покупця. Різниця тільки в одному — сучасні UI/UX дизайнери використовують сучасні інструменти. Вони викорустовують Figma, Photoshop і т.п'
    },
    {
        title: 'Frontend', subtitle: 'Чим займається Frontend-розробник?',
        content: '',
        arr: [{ id: 1, text: 'Кросбраузерна та адаптивна верстка сайтів, додатків;' }, { id: 2, text: 'Доопрацювання вже наявних сайтів, покращення їхньої якості та зручності;' }, { id: 3, text: 'Cтворення скриптів' }, { id: 4, text: 'Оптимізація та покращення коду' }],
        content2: "Крім того, до обов'язків frontend-фахівця може входити створення автотестів, усунення багів."
    },

    {
        title: 'Backend', subtitle: 'Чим займається Backend-розробник?',
        content: '',
        arr: [{ id: 1, text: 'Створення архітектури коду;' }, { id: 2, text: 'Створення баз даних, організація та управління;' }, { id: 3, text: 'API-розробка' }, { id: 4, text: 'Оптимізація функціоналу та роботи веб-ресурсу для мінімізації часу завантаження' }, { id: 5, text: 'Контроль роботи серверів' }],
        content2: 'Незалежно від того, який напрямок ви виберете - frontend або backend розробку - щоб досягти успіхів, необхідно бути системним і чітким. Робота переважно дистанційна, тому фахівець має вміти планувати свої робочі завдання, дотримуватись дедлайнів. У вас не повинно бути труднощів із пошуком та застосуванням необхідної інформації. Зрозуміло, що потрібно вміти прислухатися до рекомендацій і аргументувати свою позицію.'
    },
    {
        title: 'Розробка мобільних додатків(Android та iOS)',
        subtitle: 'Що роблять розробники iOS?',
        content: 'iOS-розробник, або iOS developer, це програміст, який пише сервіси та програми для айфонів. Через особливості пристроїв Apple та їхньої операційної системи для них потрібно писати спеціальний код. Основна мова, якою пишуть код iOS-розробники, - Swift.',
        subtitle2: 'Чим займається Android-розробник?',
        content2: 'Він пише код для пристроїв, які працюють на операційній системі Android, і може розробити програму для: Смартфона - від будильника до повноцінного інтернет-магазину. Розумного телевізора з вибором програм та можливістю підключення до онлайн-сервісів. Java. Це офіційна мова для розробки під Android, яка підтримується Android Studio і є основою для вивчення Kotlin.'
    },
]

const ProfessionSection = () => {
    const [openPopUp, isOpenPopUp] = useState(false);
    const [information, setInformation] = useState({
        title: '',
        subtitle: '',
        content: '',
        arr: [],
        subtitle2: '',
        content2: ''
    })

    const handlerPopUp = (e: any, title: string, subtitle: any, content: any, arr: any | undefined, subtitle2: any, content2: any) => {
        e.preventDefault();
        isOpenPopUp(true);
        setInformation({ title: title, subtitle: subtitle, content: content, arr: arr, subtitle2: subtitle2, content2: content2 });
    }

    const closePopUp = () => {
        isOpenPopUp(false)
    }

    return (
        <section className="page__profession">
            <div className="profession__container">
                <h2 className="profession__title title align-center">
                    Популярні професії в IT сфері
                </h2>
                <ul className="profession-list">
                    {profession.map((item, index) => (
                        <li className="profession-item" key={index}>
                            <a href="" className='profession-link' onClick={(e) => handlerPopUp(e, item.title, item.subtitle, item.content, item.arr, item.subtitle2, item.content2)}>{item.title}</a>
                        </li>
                    ))}
                </ul>
                <h2 className="profession-title-how title align-center">
                    Як виглядає FRONTEND/BACKEND візуально?
                </h2>
                <div className="profession-img">
                    <img src="https://telegra.ph/file/1d3be5a74ca9d8a6014c8.png" alt="" />
                </div>
            </div>
            <PopUp
                title={information.title}
                subtitle={information.subtitle}
                content={information.content}
                array={information.arr}
                subtitle2={information.subtitle2}
                content2={information.content2}
                closepop={closePopUp}
                ispopup={openPopUp}
            />
        </section>
    )
}

export default ProfessionSection;