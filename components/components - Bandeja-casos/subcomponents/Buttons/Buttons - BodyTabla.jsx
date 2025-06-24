import { IoIosMore } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";

export default function ButtonsBodyTabla() {


  const Proveedor = ({contenido}) =>{
    return (
        <div className='flex items-center justify-between'>
            <span>{contenido}</span>
            <button >
                <PiWarningCircle className="text-xl text-gray-700"/>
            </button>
        </div>
      )
  };
  
  const Actualizacion = ({contenido}) => {
    return (
        <div className='flex items-center justify-between'>
            <span>{contenido}</span>
            <button >
                <IoIosMore className="text-2xl"/>
            </button>
        </div>
      )
  }

  return({
    Actualizacion,
    Proveedor
  })

};
