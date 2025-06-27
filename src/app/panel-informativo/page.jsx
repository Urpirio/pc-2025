// import Header from "../../../components/components - Globales/components/Header";
import SectionCasos from "../../../components/components - Panel-Informativo/components/Section - Casos";
import SectionCardCasos from "../../../components/components - Panel-Informativo/components/Section - CardCasos";
import SectionGridChart from "../../../components/components - Panel-Informativo/components/Section - GridChart";

export default function page() {
  return (
   <body>
    {/* <Header/> */}
    <main>
        <SectionCasos />
        <SectionCardCasos />
        <SectionGridChart />
    </main>
   </body>
  )
}
