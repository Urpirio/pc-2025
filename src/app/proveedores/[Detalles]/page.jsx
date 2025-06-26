import Sectionheader from "../../../../components/components - Consumidores/components - Detalles/Section - header";
import Header from "../../../../components/components - Globales/components/Header";

export default async function pages({params}) {
    const {Detalles} = params;

  return (
    <body>
        <Header/>
        <main className="flex flex-col px-5">
           <Sectionheader/>
        </main>
    </body>
  )
};
