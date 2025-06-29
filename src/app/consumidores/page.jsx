'use client';
import SectionHeader from "../../../components/components - Consumidores/components/Section -  Consumidores";
import SectionTablaConsumidores from "../../../components/components - Consumidores/components/Section - TablaConsumidores";
import PopUp_POST_PUT_Consumidores from "../../../components/components - Consumidores/subcomponents/Pop-Up/Pop-Up - POST-PUT-Consumidores";
import Header from "../../../components/components - Globales/components/Header";


export default function page() {
  return (
    <body>
        <Header/>
        <main className="flex flex-col gap-2">
            <SectionHeader/>
            <SectionTablaConsumidores/>
            <PopUp_POST_PUT_Consumidores NombrePopUp={'Crear consumidor'} Description={'Introduzca los datos solicitados para crear el consumidor.'} Cpagina={true}/>
        </main>
    </body>
  )
}
