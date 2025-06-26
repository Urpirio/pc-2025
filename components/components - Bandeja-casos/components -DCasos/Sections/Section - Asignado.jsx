import CardsPersonas from "../../subcomponents/Cards/Cards - Personas";
import { DataCardPersona } from "../../Data/Data - CardPersonas";

export default function SectionAsignado() {
  return (
   <section className="w-full">
    <div className="border-b border-gray-300 w-full pb-5 pt-8">
        <h2 className="text-xl font-semibold text-blue-900">Asignado</h2>
        <p className="text-gray-500 text-sm">Departamento: inspeccion y vigilancia</p>
    </div>
    <div className="flex gap-10 items-center py-5 px-5">
       <CardsPersonas PersonaAsignado={DataCardPersona}/>
    </div>
   </section>
  )
}
