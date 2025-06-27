// import SectionNavegacionProvedores from "../../../components/components - Proveedores/components/Section - NavegacionProvedores";
import SectionProveedores from "../../../components/components - Proveedores/components/Section - Proveedores";
import SectionTablaProveedores from "../../../components/components - Proveedores/components/Section - TablaProveedores";
import PopUpFiltro from "../../../components/components - Proveedores/Subcomponents/Pop-Up/Pop-Up - Filtro";
import PopUp_POST_PUT_Provedor from "../../../components/components - Proveedores/Subcomponents/Pop-Up/Pop-Up - POST-PUT-Proveedorr";
import Header from "../../../components/components - Globales/components/Header";
import SectionTablaNavegacion from "../../../components/components - Globales/components/Section - TablaNavegacion";


export default function page() {
  return (
    <body>
        {/* <Header/> */}
        <main className="flex flex-col gap-2">
            <SectionProveedores/>
            <SectionTablaProveedores/>
            <SectionTablaNavegacion/>
            <PopUpFiltro/>
            <PopUp_POST_PUT_Provedor Cpagina={true} NombrePopUp={'Crear Proveedor'} Description={'Introduzca los datos solicitados para crear el proveedor.'}/>
        </main>
    </body>
  )
}
