import ItemAdmin from "../../ItemAdmin";
import ItemSpecialties from "../../ItemSpecialties";
import './college.css';
import qr from '../../../source/site.png';
const itemSpec = [
    { title: 'Агроінженерія' },
    { title: 'Електроенергетика, електротехніка та електромеханіка' },
    { title: 'Садово-паркове господарство' },
    { title: 'Облік і оподаткування' },
    { title: "Комп'ютерні науки та інформаційні технології", cheker: true },
    { title: 'Фінанси, банківська справа та страхування' },
    { title: 'Інженерія програмного забезпечення' },
]
const admincollege = [
    {
        fio: 'Кужель Віталій Володимирович',
        description: 'Директор Відокремленого структурного підрозділу Агротехнічний коледж Уманського національного університету садівництва, кандидат економічних наук, доцент, спеціаліст вищої кваліфікаційної категорії, викладач-методист.',
        image: 'https://uatk.ck.ua/images/Vukladachi/zagaln/Director.jpg'
    },
    {
        fio: 'Николюк Наталія Петрівна',
        description: 'Заступник директора з навчальної роботи, спеціаліст вищої кваліфікаційної категорії, викладач-методист.',
        image: 'https://uatk.ck.ua/images/Vukladachi/zagaln/Natpetr.jpg'
    },
    {
        fio: 'Бенескул Петро Леонідович',
        description: 'Заступник директора з виховної роботи, спеціаліст вищої кваліфікаційної категорії, викладач-методист. На посаді працює з 1991 року.',
        image: 'https://uatk.ck.ua/images/Beneskul%2023.jpg'
    },
    {
        fio: 'Ільчук Марина Ярославівна',
        description: 'Заступник директора з практичного навчання, спеціаліст вищої кваліфікаційної категорії, викладач-методист.',
        image: 'https://uatk.ck.ua/images/Vukladachi/ekonom/ilcyc.jpg'
    },
    {
        fio: 'Ярко Ігор Володимирович',
        description: "Заступник директора з адміністративно - господарської роботи, спеціаліст першої кваліфікаційної категорії, викладач комп'ютерних дисциплін.",
        image: 'https://uatk.ck.ua/images/Vukladachi/program/uarco.jpg'
    },
]

const CollegeSection = () => {
    return (
        <section className="page__college">
            <div className="college__container">
                <h1 className="college-title">
                    Уманський фаховий коледж
                </h1>
                <h2 className="college__sub-title">
                    технологій та бізнесу Уманського національного університету садівництва
                </h2>
                <div className="college-content__specialties">
                    <h2 className="specialties-title">Спеціальності коледжу</h2>
                    <div className="specialties__content">
                        <ul className="specialties__list">
                            {itemSpec.map((item, index) => (
                                <ItemSpecialties key={index} title={item.title} cheker={item.cheker} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="college-content__specialties">
                    <h2 className="specialties-title title-admin">Адміністрація коледжу</h2>
                    <div className="specialties__content">
                        <div className="admin__list">
                            {admincollege.map((item, index) => (
                                <ItemAdmin key={index} fio={item.fio} description={item.description} image={item.image} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="college__volonter">
                    <h1 className="college-volonter__title title align-center">Волонтерство</h1>
                    <p className="college-volonter__text">
                        Черговий внесок на підтримку ЗСУ колектив та студенти коледжу зробили 6 грудня.
                    </p>
                    <p className="college-volonter__text">
                        На потреби Збройних Сил України через волонтерський центр допомоги при ГО «Закон і справедливість» було передано бійцям на передові позиції комплекти термобілизни, плитоноски, тактичні наплічники, захисні маскувальні костюми, патріотичні листівки та інше.
                    </p>
                    <p className="college-volonter__text">
                        Напередодні Дня Святого Миколая, в найгарячіші точки України, де наші захисники дають  відсіч російським окупантам, волонтерським центром допомоги при ГО «Закон і справедливість» міста Умань було доправлено черговий вантаж - допомоги, який включав в себе і  подарунки від викладачів та студентів нашого коледжу: плитоноски, тактичні наплічники, термобілизну, патріотичні листівки та інше.
                    </p>
                    <div className="college-volonter__gallery">
                        <div className="colleg-volonter__up">
                            <div className="college-volonter__block-img">
                                <img src="https://uatk.ck.ua/images/ImgForMaterial/2022/05-12-22-02.jpg" alt="volonter-img" />
                            </div>
                            <div className="college-volonter__block-img">
                                <img src="https://uatk.ck.ua/images/ImgForMaterial/2022/05-12-22-03.jpg" alt="volonter-img" />
                            </div>
                            <div className="college-volonter__block-img">
                                <img src="https://uatk.ck.ua/images/ImgForMaterial/2022/05-12-22-04.jpg" alt="volonter-img" />
                            </div>
                        </div>
                        <div className="colleg-volonter__down">
                            <div className="college-volonter__block-img">
                                <img src="https://uatk.ck.ua/images/ImgForMaterial/2022/15-12-22-03.jpg" alt="volonter-img" />
                            </div>
                            <div className="college-volonter__block-img">
                                <img src="https://uatk.ck.ua/images/ImgForMaterial/2022/15-12-22-03.jpg" alt="volonter-img" />
                            </div>
                            <div className="college-volonter__block-img">
                                <img src="https://uatk.ck.ua/images/ImgForMaterial/2022/15-12-22-03.jpg" alt="volonter-img" />
                            </div>
                            <div className="college-volonter__block-img">
                                <img src="https://uatk.ck.ua/images/ImgForMaterial/2022/15-12-22-02.jpg" alt="volonter-img" />
                            </div>
                            <div className="college-volonter__block-img">
                                <img src="https://uatk.ck.ua/images/ImgForMaterial/2022/15-12-22-01.jpg" alt="volonter-img" />
                            </div>
                            <div className="college-volonter__block-img">
                                <img src="https://uatk.ck.ua/images/ImgForMaterial/2022/21-11-22-08.jpg" alt="volonter-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CollegeSection;