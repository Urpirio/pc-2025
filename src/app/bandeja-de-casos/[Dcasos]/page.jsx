import SectionAsignado from "../../../../components/components - Bandeja-casos/components -DCasos/Sections/Section - Asignado";
import SectionDatosGenerales from "../../../../components/components - Bandeja-casos/components -DCasos/Sections/Section - DatosGenerales";
import SectionActualizaciones from "../../../../components/components - Bandeja-casos/components -DCasos/Sections/Section - Actualizaciones";
import SectionFormulario from "../../../../components/components - Bandeja-casos/components -DCasos/Sections/Section - Formulario";
import SectionDocumentos from "../../../../components/components - Bandeja-casos/components -DCasos/Sections/Section - Documentos";
import SectionActividades from "../../../../components/components - Bandeja-casos/components -DCasos/Sections/Section - Actividades";
import PopUpProcesarCasos from "../../../../components/components - Bandeja-casos/subcomponents/Pop-Up/Pop-Up-ProcesarCasos";
import PopUpCambioEstado from "../../../../components/components - Bandeja-casos/subcomponents/Pop-Up/Pop-Up-CambioEstado";
import PopUpCambioEstado2 from "../../../../components/components - Bandeja-casos/subcomponents/Pop-Up/Pop-Up-CambioEstado2";
import PopUpAsignarCaso from "../../../../components/components - Bandeja-casos/subcomponents/Pop-Up/Pop-Up-AsignarCaso";
import PopupMiniAsignarCasos from "../../../../components/components - Bandeja-casos/subcomponents/Pop-Up/Pop-up-MiniAsignarCasos";

export default async function page({params}) {

  const {Dcasos} = await params;

  return (
    <div className="w-[80%]">
      <SectionAsignado/>
      <SectionDatosGenerales/>
      <SectionActualizaciones/>
      <SectionFormulario/>
      <SectionDocumentos/>
      <SectionActividades/>
      <PopUpProcesarCasos/>
      <PopUpCambioEstado/>
      <PopUpCambioEstado2/>
      <PopUpAsignarCaso/>
      <PopupMiniAsignarCasos/>
    </div>
  )
}
