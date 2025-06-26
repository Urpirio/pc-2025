import Header from "../../../../components/components - Globales/components/Header";
import SectionHeader from "../../../../components/components - Bandeja-casos/components -DCasos/SubHeaders/Section - Header";
import NavDcasos from "../../../../components/components - Bandeja-casos/components -DCasos/Nav/Nav -  Dcasos";

export default function layout({children}) {
  return (
    <body>
        <Header/>
        <div className="px-5">
        <SectionHeader/>
        <main className="flex">
            <NavDcasos/>
            {children}
        </main>
        </div>
    </body>
  )
}
