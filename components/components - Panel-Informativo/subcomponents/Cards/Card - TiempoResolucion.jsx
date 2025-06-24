'use client';
import { Chart } from "primereact/chart";
import { useState } from "react";
import { useEffect } from "react";

export default function CardTiempoResolucion() {
    const [chartData,setChartData] = useState({});

    useEffect(()=>{
        const data = {
            labels: ['reclamos','Denuncias','Mediaciones'],
            datasets: [
                {
                    label: '',
                    borderColor: '#1d4ed8',
                    data: [25,15,19],
                },
            ]
        };
        setChartData(data);
    },[])


  return (<Chart className="w-full" type="line" sho  data = {chartData}/>)
}
