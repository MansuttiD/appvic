'use client';

import { useState } from 'react';

const ExecutionPanel = () => {
  const [executionPanelActive, setExecutionPanelActive] = useState(null);

  const handleOpenExecutionPanel = (id: any) => {
    console.log(id);
    setExecutionPanelActive(id);
  };

  const handleCloseExecutionPanel = () => {
    setExecutionPanelActive(null);
  };

  return (
    <div className="col-span-full row-span-2 max-w-[275px] mx-auto sm:max-w-3xl sm:mx-0">
      <header className="mb-5 sm:flex justify-between items-center  md:gap-5 md:pr-3">
        <h1 className="font-semibold text-xl mb-6 sm:mb-0 lg:whitespace-nowrap">
          Panel de ejecucion
        </h1>
        <div className="flex gap-4 font-normal text-sm mb-2 sm:mb-0">
          <p className="text-sm">Tomadas</p>
          <p className="text-sm">Completadas</p>
        </div>
        <div className="grid grid-cols-2 bg-white rounded-full">
          <input
            className="px-4 py-1 outline-none rounded-s-full"
            type="text"
            placeholder="Buscar"
          />
          <select className="blue_gradient-2 px-6 py-1 rounded-full text-base text-white">
            <option value="">ID de Usuario</option>
            <option value="">ID de Usuario2</option>
          </select>
        </div>
      </header>
      <section className="flex flex-col gap-3">
        <table className="bg-white rounded-3xl grid grid-cols-[2fr,2fr,1fr] px-6 py-4 sm:hidden">
          <thead>
            <tr className="h-full flex flex-col justify-evenly gap-2 justify-items-center items-start">
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Método</th>
              <th>Monto</th>
              <th>RSV</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-full flex flex-col justify-evenly gap-2 justify-items-center">
              <td>
                <span className="text-green-600 text-base font-[800]">+</span>
                Buy
              </td>
              <td>26/08/23 - 18:05</td>
              <td>Banesco</td>
              <td>$880</td>
              <td>880eUSD</td>
            </tr>
          </tbody>
          <div className="justify-self-end flex flex-col justify-between">
            <img className="" src=".\images\pli\clock.svg" alt="" />
            <img className="" src=".\images\pli\arrowDawn.svg" alt="" />
          </div>
        </table>
        <div className="hidden sm:flex">
          <table className="flex flex-col w-full">
            <thead className="w-full mb-4 ">
              <tr className="bg-white w-full rounded-3xl grid grid-cols-6 py-3 px-8 justify-items-start">
                <th>Tipo</th>
                <th>Fecha</th>
                <th>Método</th>
                <th>Monto</th>
                <th>USDT</th>
              </tr>
            </thead>
            <tbody
              className={`transition-all duration-500 ${
                executionPanelActive ? 'h-full' : 'h-14 '
              } mb-3 bg-white rounded-3xl px-8 overflow-y-hidden`}
            >
              <tr className=" w-full grid grid-cols-6 items-center  py-2">
                <td>
                  <span className="text-green-600 text-base font-black">+</span>
                  Buy
                </td>
                <td>26/08/23 - 18:05</td>
                <td>Banesco</td>
                <td>$880</td>
                <td>880eUSD</td>
                <td className="w-full flex justify-around items-center">
                  <img src="images\pli\clock.svg" alt="images\pli\clock.svg" />
                  <img
                    onClick={handleCloseExecutionPanel}
                    className={`${executionPanelActive ? '' : 'hidden'}`}
                    src=".\images\pli\arrowUp.svg"
                    alt=""
                  />
                  <img
                    onClick={() => handleOpenExecutionPanel(1)}
                    className={`${executionPanelActive ? 'hidden' : ''}`}
                    src=".\images\pli\arrowDawn.svg"
                    alt=""
                  />
                </td>
              </tr>
              <tr className="grid grid-cols-[1fr,2fr,2fr,2fr] gap-8 py-6  border-b-2 border-solid border-[#00000]">
                <td className="flex flex-col">
                  <span className="font-semibold">Estado</span>Procesado
                </td>
                <td className="flex flex-col ">
                  <span className="font-semibold whitespace-nowrap">
                    Número de transacción
                  </span>
                  8795465674
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold">A nombre de</span>Julian
                  Zambrano
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold">RSV solicitados</span>880 eUSD
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold">Usuario</span>@julzmbrano
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold">Tier</span>2
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold">Ejecutada</span>25/06/23
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold">Tasa de cambio</span>$980
                </td>
              </tr>
              <tr className="grid grid-cols-[1fr,1fr,1fr,1fr,2fr] gap-4 border-b-2 border-solid py-6 border-[#00000]">
                <h4 className=" text-md font-black col-span-full  w-full ">
                  Origen
                </h4>
                <td className="flex flex-col">
                  <span className="font-semibold">Nombre</span>Julian Zambrano
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold">ID</span>Cédula
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold">Número ID</span>12312412412
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold">Cuenta</span>Ahorros
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold whitespace-nowrap">
                    Número de cuenta
                  </span>
                  1231234124134313212312
                </td>
              </tr>
              <tr className="grid grid-cols-[1fr,1fr,1fr,1fr,2fr] gap-4 py-6 justify-between">
                <h4 className=" text-md font-black  w-full col-span-full">
                  Destino
                </h4>
                <td className="flex flex-col">
                  <span className="font-semibold">Nombre</span>Julian Zambrano
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold">ID</span>Cédula
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold">Número ID</span>12312412412
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold">Cuenta</span>Ahorros
                </td>
                <td className="flex flex-col">
                  <span className="font-semibold whitespace-nowrap">
                    Número de cuenta
                  </span>
                  1231234124134313212312
                </td>
              </tr>
              <tr className="flex flex-col gap-4">
                <div>
                  <button className=" text-white blue_gradient-2 rounded-full py-[2px] px-5">
                    Recibí un monto distinto
                  </button>
                </div>
                <div>
                  <button className="text-white blue_gradient-2 rounded-full py-[2px] px-5">
                    Confirmar
                  </button>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ExecutionPanel;
