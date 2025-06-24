'use client';
import { Chart } from "primereact/chart";
import { useState } from "react";
import { useEffect } from "react";

export default function CardDemografia() {

    const [chartData, setChartData] = useState({});

    useEffect(()=>{
        const data = {
            labels: ['18 - 24','25 - 34','35 - 45','55 - 75'],
            datasets: [
                {
                    label: '',
                    borderRadius: 10,
                    backgroundColor: '#1D4ED8',
                    data:[52,45,100,20]
                },
                {
                    label: '',
                    borderRadius: 10,
                    backgroundColor: '#FF6568',
                    data:[50,70,50,10]
                }
            ]
        };
        const option = {

        }
        setChartData(data)

    },[])



  return (<Chart className="h-full w-full" type="bar" data={chartData}/>)
}
