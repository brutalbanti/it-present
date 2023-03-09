import CollegeSection from "./Section/CollegeSection";
import { Frameworks } from "./Section/Frameworks";
import { Language } from "./Section/Language";
import ProfessionSection from "./Section/ProfessionSection";
import { QRCodeSection } from "./Section/QRCodeSection";

const Main = () => {
    return  (
        <main className="page">
            <CollegeSection/>
            <ProfessionSection/>
            <Language/>
            <Frameworks/>
            <QRCodeSection/>
        </main>
    )
}

export default Main;