'use client';

import { useSectionCargaDocumentos } from "../Hooks/Section/useSectionCargaDocumentos";

export default function SectionCargaDocumentos() {

    const {ContenedorElementos} = useSectionCargaDocumentos();

  return (
    <section className="flex flex-col gap-2 px-5 py-3">
        <div>
            <h2 className="text-lg text-gray-600 font-semibold">Carga de documentos <span className="text-red-500">*</span></h2>
        </div>
        <div  className="flex flex-wrap border w-full border-gray-300 rounded-md p-5">
            <ContenedorElementos/>
        </div>
    </section>
  )
}
