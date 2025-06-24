'use client';
import Link from "next/link";
import Image from "next/image";
import Logo from '@/../public/Img/img - Panel-informativo/logo-2.png';
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();

  return (
   <header className="flex justify-between items-center border border-gray-200 px-5">
    <div className="h-full border-r border-gray-200 px-5 flex items-center">
      <Image className="w-50 h-17 object-contain" src={Logo} alt={'Logo'} />
    </div>
  <div className="flex justify-between gap-10 items-center w-full">
    
      <nav className=" w-full flex gap-5 pl-10  items-center">
        <Link href={'/panel-informativo'} className={`text-[16px] text-blue-900 
          ${pathname === '/panel-informativo' ? 'text-blue-900' : 'text-gray-500 hover:text-blue-900 transition-colors duration-300'}`}>
            Panel informativo
        </Link>
        <Link href={'/bandeja-de-casos'} className={`text-[16px] text-blue-900 
          ${pathname === '/bandeja-de-casos' ? 'text-blue-900' : 'text-gray-500 hover:text-blue-900 transition-colors duration-300'}`}>
            Bandeja de casos
        </Link>
        <Link href={'/proveedores'} className={`text-[16px] text-blue-900 
          ${pathname === '/proveedores' ? 'text-blue-900' : 'text-gray-500 hover:text-blue-900 transition-colors duration-300'}`}>
            Proveedores
        </Link>
        <Link href={'/consumidores'} className={`text-[16px] text-blue-900 
          ${pathname === '/consumidores' ? 'text-blue-900' : 'text-gray-500 hover:text-blue-900 transition-colors duration-300'}`}>
            Consumidores
        </Link>
        <Link href={'/administracion'} className={`text-[16px] text-blue-900 
          ${pathname === '/administracion' ? 'text-blue-900' : 'text-gray-500 hover:text-blue-900 transition-colors duration-300'}`}>
            Administracion
        </Link>
      </nav>
      
    </div>
    <div className="flex items-center justify-end w-[20%] gap-2">
        <button className="bg-blue-100 flex-shrink-0 rounded-full p-1 flex items-center gap-2 relative">
          <div className="rounded-full flex-shrink-0 h-2 w-2 bg-red-500 absolute top-0 right-0"></div>
          <IoMdNotificationsOutline className="text-2xl text-blue-900" />
        </button>
      <div className="flex items-center border-l border-gray-200 pl-2 gap-2">
        <span className="text-lg font-semibold text-blue-900">Juan Manuel</span>
        <button className=" bg-blue-100 flex-shrink-0 rounded-full p-3">
          <FiUser className="text-xl text-blue-900" />
        </button>
      </div>
    </div>
   </header>
  )
}
