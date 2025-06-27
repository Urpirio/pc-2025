
import SectionDetalles from "../../../../components/components - Consumidores/components - Detalles/Section - Detalles";
import SectionTablaDetalles from "../../../../components/components - Consumidores/components - Detalles/Section - TablaDetalles";
import PopUp_POST_PUT_Consumidores from "../../../../components/components - Consumidores/subcomponents/Pop-Up/Pop-Up - POST-PUT-Consumidores";
import Header from "../../../../components/components - Globales/components/Header";
import SectionTablaNavegacion from "../../../../components/components - Globales/components/Section - TablaNavegacion";

export default async function page({params}) {

  const {Detalles} = await params;

  return (
   <body>
    <Header/>
    <main className="flex flex-col gap-3">
        <SectionDetalles/>
        <SectionTablaDetalles/>
        <SectionTablaNavegacion/>
        <PopUp_POST_PUT_Consumidores NombrePopUp={'Editar consumidor'} Description={'Edita los datos necesarios del consumidor.'} Cpagina={false}/>
    </main>
   </body>
  )
}
