import { RxMixerHorizontal } from "react-icons/rx";

export default function SectionCasos() {
  return (
    <section className="flex justify-between items-center px-5 py-2">
        <div>
            <h2 className="text-2xl text-blue-900 font-bold">Casos</h2>
        </div>
        <div className="flex gap-2">
            <button className="bg-blue-900 text-white px-4 py-2  rounded-md hover:bg-blue-800 transition-colors duration-300 cursor-pointer">Crear reporte</button>
            <button className="flex items-center gap-2 border border-gray-400 shadow-sm px-3 py-2 rounded-md">
                <RxMixerHorizontal />
                <span>Filtrar</span>
            </button>
        </div>
    </section>
  )
}
