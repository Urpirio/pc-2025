import { RxCaretSort } from "react-icons/rx";
export default function ButtonsHeaderTabla({NombreColumna}) {
  return (
    <button className='flex items-center gap-2'>
        <span>{NombreColumna}</span>
        <RxCaretSort/>
    </button>
  )
}
