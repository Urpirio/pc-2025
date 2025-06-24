import CardCasosOficina from "../subcomponents/Cards/Card - CasosOficina";
import CardDemografia from "../subcomponents/Cards/Card - Demografia";
import CardEstadisticasCasos from "../subcomponents/Cards/Card - EstadisticasCasos";
import { IoIosWoman } from "react-icons/io";
import { IoIosMan } from "react-icons/io";
import CardTiempoResolucion from "../subcomponents/Cards/Card - TiempoResolucion";

export default function SectionGridChart() {
  return (
    <section className="grid grid-cols-2 grid-rows-2 gap-2 px-5 py-2">

        {/*  Estadistica de Casos */}
        <div className="col-span-1 row-span-50 border border-gray-300 rounded-xl p-3">
            <div className="flex items-center border-b border-gray-300 pb-3">
                <h3 className="text-xl text-blue-900 font-bold">Estadisticas de casos</h3>
            </div>
            <div className="h-[90%]">
                <CardEstadisticasCasos />
            </div>
        </div>

        {/* Casos por oficina */}
        <div className="col-span-1 row-span-70 border border-gray-300 rounded-xl p-5">
            <div className="flex items-center ">
                <h3 className="text-xl text-blue-900 font-bold">Casos por oficina</h3>
            </div>
           <div className="flex py-5">
            <CardCasosOficina />
           </div>
           <div className="flex justify-center">
            <button className="text-blue-500 font-semibold hover:opacity-80 transition-colors duration-300 cursor-pointer">Mostrar todos</button>
           </div>
        </div>

        {/* Demografía */}
        <div className="col-span-1 row-span-50 border flex flex-col gap-10 border-gray-300 rounded-xl p-3">
            <div className="flex items-center">
                <h3 className="text-xl text-blue-900 font-bold">Demografía</h3>
            </div>
           
               <div className="w-full">
               <CardDemografia/>
               </div>

            <div className="flex justify-center gap-5 w-full">
                <div className="flex items-center ">
                    <IoIosMan className="text-blue-500 text-2xl"/>
                    <span className="text-blue-950 text-xl font-bold">Hombres</span>
                </div>
                <div className="flex items-center">
                    <IoIosWoman className="text-red-400 text-2xl"/>
                    <span className="text-blue-950 text-xl font-bold">Mujeres</span>
                </div>
            </div>
        </div>

        {/* Tiempo de resolución */}
        <div className="col-span-1 row-span-30 border border-gray-300 rounded-xl p-3">
            <div className="flex items-center border-b border-gray-300 pb-3">
                <h3 className="text-xl text-blue-900 font-bold">Tiempo de resolución</h3>
            </div>
            <div>
                <CardTiempoResolucion/>
            </div>
        </div>
    </section>
  )
}
