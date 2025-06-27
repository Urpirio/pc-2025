
import SectionColaboradores from "../../../components/components - Colaboradores/components/Section - Colaboradores";
import PopUp_POST_PUT_Colaboradores from "../../../components/components - Colaboradores/subcomponents/Pop-Up/Pop-Up - POST-PUT_Colaboradores";
import Header from "../../../components/components - Globales/components/Header";
import SectionTablaNavegacion from "../../../components/components - Globales/components/Section - TablaNavegacion";

export default function page() {
  return (
    <body>
        <Header/>
        <main className="flex flex-col gap-2">
            <SectionColaboradores/>
            <SectionTablaNavegacion/>
            <PopUp_POST_PUT_Colaboradores NombrePopUp={'Crear Colaborador'} Description={'Introduzca los datos necesarios para crear el colaborador'} Cpagina={true}/>
        </main>
    </body>
  )
}
