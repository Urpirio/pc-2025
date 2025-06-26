import { RxMixerHorizontal } from "react-icons/rx";
import CardsActividades from "../../subcomponents/Cards/Cards - Actividades";
import { DataCardActividades, DataCardActividades2 } from "../../Data/Data - CardActividades";

export default function SectionActividades() {
  return (
    <section className="w-full py-5">
        <div className="border-b border-gray-300 w-full pb-5 pt-2 flex justify-between items-center">
            <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-blue-900">Lista de actividades</h2>
            <p className="text-gray-500 text-sm">Aqui encontraras las actividades del caso</p>
            </div>
            <div>
                <button className="flex items-center gap-2 border border-gray-400 shadow-sm px-3 py-2 rounded-md cursor-pointer">
                    <RxMixerHorizontal/>
                    <span>Filtrar</span>
                </button>
            </div>
        </div>
        <div className="flex gap-5 py-5">
          <div className="w-1/2 flex flex-col gap-5">
            <CardsActividades Data={DataCardActividades}/>
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <CardsActividades Data={DataCardActividades2}/>
          </div>
        </div>
    </section>
  )
}
