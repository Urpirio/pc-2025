import SectionNavegacionProvedores from "../../../components/components - Consumidores/components/Section - NavegacionProvedores";
import SectionProveedores from "../../../components/components - Consumidores/components/Section - Proveedores";
import SectionTablaProveedores from "../../../components/components - Consumidores/components/Section - TablaProveedores";
import PopUpFiltro from "../../../components/components - Consumidores/Subcomponents/Pop-Up/Pop-Up - Filtro";
import Header from "../../../components/components - Globales/components/Header";

export default function page() {
  return (
    <body>
        <Header/>
        <main className="flex flex-col gap-2">
            <SectionProveedores/>
            <SectionTablaProveedores/>
            <SectionNavegacionProvedores/>
            <PopUpFiltro/>
        </main>
    </body>
  )
}
