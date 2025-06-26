import { IoIosMore } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import Link from "next/link";

export default function ButtonsBodyTabla() {


  const Proveedor = ({contenido,Dcasos}) =>{
    return (
        <div className='flex items-center justify-between'>
            <span>{contenido}</span>
            <Link href={{pathname:`${Dcasos}`}} >
                <PiWarningCircle className="text-xl text-gray-700"/>
            </Link>
        </div>
      )
  };
  
  const Actualizacion = ({contenido,ID}) => {
    return (
        <div className='flex items-center justify-between'>
            <span>{contenido}</span>
            <Link href={{pathname:`${ID}`}} >
                <IoIosMore className="text-2xl"/>
            </Link>
        </div>
      )
  }

  return({
    Actualizacion,
    Proveedor
  })

};
