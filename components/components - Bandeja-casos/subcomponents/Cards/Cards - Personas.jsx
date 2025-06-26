import Image from "next/image";
import { FiUser } from "react-icons/fi";

export default function CardsPersonas({PersonaAsignado}) {

  const ListPersona = PersonaAsignado.map((items)=>{
        return (
            <article key={items.ID} className="flex items-center gap-3">
                {items.FotoPerfil ? <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={items.FotoPerfil} alt="Foto de perfil"/>
                </div> : <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-blue-100">
                    <FiUser className="text-blue-900 text-xl"/>
                    </div>}
                <div>
                    <h3 className="text-[16px] font-semibold ">{items.nombre} {items.apellido}</h3>
                    <span className="text-sm text-gray-500 font-medium">{items.Cargo}</span>
                </div>
            </article>
          )
    });

    return(ListPersona)
  
};
