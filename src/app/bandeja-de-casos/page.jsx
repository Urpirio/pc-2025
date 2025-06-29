'use client';
import ModalFiltros from "../../../components/components - Bandeja-casos/components/Modal - Filtros";
import SectionBandejaCasos from "../../../components/components - Bandeja-casos/components/Section - BandejaCasos";
import SectionTablaCasos from "../../../components/components - Bandeja-casos/components/Section - TablaCasos";
// import SectionTablaNavegacion from "../../../components/components - Globales/components/Section - TablaNavegacion"; 
import Header from "../../../components/components - Globales/components/Header";

export default function page() {
  return (
    <body className="relative flex flex-col" >
        <Header/>
        <main className="flex flex-col gap-2">
            <SectionBandejaCasos/>
            <SectionTablaCasos/>
            {/* <SectionTablaNavegacion/> */}
        </main>
        <ModalFiltros/>
    </body>
  )
}
