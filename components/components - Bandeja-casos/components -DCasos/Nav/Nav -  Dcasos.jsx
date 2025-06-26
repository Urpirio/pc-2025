import Link from "next/link";

export default function NavDcasos() {
  return (
    <section className="flex w-[20%] py-2 ">
      <nav className="flex flex-col gap-2 px-5 w-full">
        <Link className=" w-full p-2 rounded-md bg-gray-100 text-blue-900 font-medium" href={''}>Asignado</Link>
        <Link className=" w-full p-2 rounded-md text-blue-900 font-medium" href={''}>Datos generales</Link>
        <Link className=" w-full p-2 rounded-md text-blue-900 font-medium" href={''}>Actualizaciones</Link>
        <Link className=" w-full p-2 rounded-md text-blue-900 font-medium" href={''}>Documentos</Link>
        <Link className=" w-full p-2 rounded-md text-blue-900 font-medium" href={''}>Actividades</Link>
      </nav>
    </section>
  )
}
