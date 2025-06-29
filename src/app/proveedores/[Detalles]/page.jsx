import Sectionheader from "../../../../components/components - Proveedores/components - Detalles/Section - header";
import SectionCardDetalles from "../../../../components/components - Proveedores/components - Detalles/Section -CardDetalles";
import SectionTablaTipos from "../../../../components/components - Proveedores/components - Detalles/Section - TablaTipos";
import Header from "../../../../components/components - Globales/components/Header";
import PopUp_POST_PUT_Provedor from "../../../../components/components - Proveedores/Subcomponents/Pop-Up/Pop-Up - POST-PUT-Proveedorr";

export default async function pages({params}) {
    const {Detalles} = params;

  return (
    <body>
        <Header/>
        <main className="flex flex-col px-5">
           <Sectionheader/>
           <SectionCardDetalles/>
           <SectionTablaTipos/>
           <PopUp_POST_PUT_Provedor Cpagina={false} NombrePopUp={'Editar Proveedor'} Description={'Edita los datos necesarios del proveedor.'}/>
        </main>
    </body>
  )
};
