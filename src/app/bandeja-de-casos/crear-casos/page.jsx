import Header from "../../../../components/components - Globales/components/Header";
import SectionConsumidorF from "../../../../components/components - Bandeja-casos/components - CrearCasos/Section -ConsumidorF";
import SectionProveedor from "../../../../components/components - Bandeja-casos/components - CrearCasos/Section - Proveedor";
import SectionProvedorPersona from "../../../../components/components - Bandeja-casos/components - CrearCasos/Section - ProvedorPersona";
import SectionCargaDocumentos from "../../../../components/components - Bandeja-casos/components - CrearCasos/Section - CargaDocumentos";
import SectionGuardarCaso from "../../../../components/components - Bandeja-casos/components - CrearCasos/Section - GuardarCaso";

export default function page() {
  return (
    <body>
        <Header/>
        <main>
            <SectionConsumidorF/>
            <SectionProveedor/>
            <SectionProvedorPersona/>
            <SectionCargaDocumentos/>
            <SectionGuardarCaso/>
        </main>
    </body>
  )
}
