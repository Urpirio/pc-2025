import { IoArrowForward } from "react-icons/io5";

export default function CardSimples() {
  return (
    <article className="w-1/6 min-w-50 flex flex-col gap-2 border border-gray-300 rounded-xl shadow-sm">
        <div className="flex justify-between items-center bg-green-500 h-2 rounded-t-xl">

        </div>
        <div className="flex justify-between items-center gap-5 p-5">
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">5,000</h3>
                <span>Casos creados</span>
            </div>
            <div className="flex items-end h-full justify-center">
                <button className="border border-gray-300 rounded-full p-2">
                    <IoArrowForward  className="text-gray-500"/>
                </button>
            </div>
        </div>
    </article>
  )
}
