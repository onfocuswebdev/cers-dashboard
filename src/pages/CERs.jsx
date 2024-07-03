import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import { Header, Stacked, Stacked2, Pie } from '../components';
import { energyDataFinan, energyDataEnerg, pieChartData0, pieChartData1, pieChartData2 } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const CERs = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className=" md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl lg:w-1/2 lg:m-auto">
        <Header category="SIMULAZIONE CER" title="RUA BARONE, 23 - CHIVASSO, (TO)" />
      </div>
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Energia Prodotta</p>
              <p className="text-2xl">94,4 MWh</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Energia Consumatta</p>
              <p className="text-2xl">104 MWh</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
        </div>
      </div>
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {energyDataFinan.map((item) => (
          <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-sm text-gray-400  mt-1">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {energyDataEnerg.map((item) => (
          <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-sm text-gray-400  mt-1">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">Prelevata e Autoconsumata</p>
              <p className="text-gray-400">ANNO</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart0" data={pieChartData0} legendVisiblity height="160px" />
            </div>
          </div>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">Immessa e Condivisa</p>
              <p className="text-gray-400">ANNO</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart1" data={pieChartData1} legendVisiblity height="160px" />
            </div>
          </div>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">Immessa e Autoconsumata</p>
              <p className="text-gray-400">ANNO</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart2" data={pieChartData2} legendVisiblity height="160px" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Energia Prodotta, Immessa e Condivisa &#40;Anno&#41;</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Energia Immessa</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Energia Prodotta</span>
              </p>
              <p className="flex items-center gap-2 text-blue-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Energia Condivisa</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div>
              <Stacked currentMode={currentMode} width="420px" height="360px" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Energia Prodotta e Consumata &#40;Mensile&#41;</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Energia Consumata</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Energia Prodotta</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div>
              <Stacked2 currentMode={currentMode} width="420px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CERs;
