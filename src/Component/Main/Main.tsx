import CollegeSection from "./Section/CollegeSection";
import { Frameworks } from "./Section/Frameworks";
import ProfessionSection from "./Section/ProfessionSection";
import { QRCodeSection } from "./Section/QRCodeSection";

const Main = () => {
    return  (
        <main className="page">
            <CollegeSection/>
            <ProfessionSection/>
            <Frameworks/>
            <QRCodeSection/>
        </main>
    )
}

export default Main;