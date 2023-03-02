import siteqr from '../../../source/site.png';
import tgqr from '../../../source/telegram.png';
import freelancer from '../../../source/freelancer.png';
import './qrcode.css'

export const QRCodeSection = () => {
    return (
        <section className="page__qr-code">
            <div className="qr-code__container">
                <h1 className="qr-code__title title align-center">
                    QR-коди з посиланням на сайт коледжа, та телеграм групу.
                </h1>
                <div className="qr-code__content">
                    <div className="qr-code__block">
                        <img src={siteqr} alt="qr-code" />
                        <h3 className="qr-code-block__sub-title">Посилання на сайт</h3>
                    </div>
                    <div className="qr-code__block">
                        <img src={tgqr} alt="qr-code" />
                        <h3 className="qr-code-block__sub-title">Посилання на телеграм</h3>
                    </div>
                    <div className="qr-code__block">
                        <img src={freelancer} alt="qr-code" />
                        <h3 className="qr-code-block__sub-title">Посилання на Фрилансера по життю</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}