import './framework.css';

export const Frameworks = () => {
    return (
        <section className="page__frameworks">
            <div className="frameworks__container">
                <h1 className="frameworks__title title align-center">
                    Фреймворки для розробки FRONTEND
                </h1>
                <div className="frameworks__content">
                    <p className="frameworks-content__text sub-title">
                        Фреймворк — інфраструктура програмних рішень, що полегшує розробку складних систем. Спрощено дану інфраструктуру можна вважати своєрідною комплексною бібліотекою, але при цьому вона має ряд обмежень, що задають правила створення структури проєкту та написання коду.
                    </p>
                    <h3 className="frameworks__list-title">Популярні Фреймворки:</h3>
                    <ul className='frameworks__list'>
                        <li className="frameworks__item">React / Next.js</li>
                        <li className="frameworks__item">Angular</li>
                        <li className="frameworks__item">Vue.js</li>
                    </ul>
                </div>
            </div>
        </section>
    )
} 