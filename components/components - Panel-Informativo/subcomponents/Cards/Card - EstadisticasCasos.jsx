'use client';
import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function CardEstadisticasCasos() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            //cuando tenga los datos reales, se debe agregar un estractor que
            //  cree un array de los datos para insertar aqui
            datasets: [
                {
                    data: [500, 6000, 2000, 1500],
                    backgroundColor: ['#7dd3fc', '#3b82f6', '#1d4ed8', ' #1e3a8a'],
                    hoverBackgroundColor: ['#7dd3fc', '#3b82f6', '#1d4ed8', ' #1e3a8a']
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

  return (
    <article className="flex h-full justify-between items-center gap-5 p-5">
        <div className="flex flex-col gap-5">
            <div className="flex flex-col border-b border-gray-300 pb-2 gap-2">
                <span className="text-2xl font-bold text-blue-300">500</span>
                <span className="text-lg text-gray-500">Correo electrónico</span>
            </div>
            <div className="flex flex-col border-b border-gray-300 pb-2 gap-2">
                <span className="text-2xl font-bold text-blue-500">6,000</span>
                <span className="text-lg text-gray-500">Presencial</span>
            </div>
            <div className="flex flex-col border-b border-gray-300 pb-2 gap-2">
                <span className="text-2xl font-bold text-blue-700">2,000</span>   
                <span className="text-lg text-gray-500">Call center</span>
            </div>
            <div className="flex flex-col border-b border-gray-300 pb-2 gap-2">
                <span className="text-2xl font-bold text-blue-900">1,500</span>   
                <span className="text-lg text-gray-500">Pagina web</span>
            </div>
        </div>
        <div className="w-[50%] h-full">
            <Chart className='w-full h-full'  type="doughnut" data={chartData} options={chartOptions}  />
        </div>
    </article>
  )
}
