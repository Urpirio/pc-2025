import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function ButtonsHeaderTabla({NombreColumna}) {
  return (
    <button className='flex items-center gap-2'>
        <span>{NombreColumna}</span>
        <div className='flex flex-col justify-center'>
            <IoIosArrowUp className='text-[10px]' />
            <IoIosArrowDown className='text-[10px]'/>
        </div>
    </button>
  )
}
