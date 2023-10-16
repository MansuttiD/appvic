'use client';

import { Select, SelectItem } from '@nextui-org/select';
import Image from 'next/image';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ExecutionDifferentAmountModal from './ExecutionPanelDifferentAmountModal';

const MySwal = withReactContent(Swal);

const ExecutionPanel = () => {
  const [executionPanelActive, setExecutionPanelActive] = useState(null);

  const handleOpenExecutionPanel = (id: any) => {
    setExecutionPanelActive(id);
  };

  const handleCloseExecutionPanel = () => {
    setExecutionPanelActive(null);
  };

  const options = [
    { value: 'ID de Usuario', label: 'ID de Usuario' },
    { value: 'N° de Transacción', label: 'N° de Transacción' },
    { value: 'N° de ID', label: 'N° de ID' },
  ];

  const options2 = [
    {
      value: 'No coincide el número de referencia.',
      label: 'No coincide el número de referencia.',
    },
    {
      value: 'Transacción no Encontrada.',
      label: 'Transacción no Encontrada.',
    },
    { value: 'Identificación inválida', label: 'Identificación inválida' },
  ];

  const handleReceivedDifferentAmountModal = () => {
    MySwal.fire({
      html: <ExecutionDifferentAmountModal />,
      showConfirmButton: false,
      customClass: {
        popup: 'rounded-3xl',
      },
    });
  };

  return (
    <div className="col-span-full row-span-2 max-w-[350px] mx-auto sm:max-w-3xl sm:mx-0">
      <header className="mb-5 sm:flex justify-between items-center  md:gap-5 md:pr-3">
        <h1 className="font-semibold text-xl mb-6 sm:mb-0 lg:whitespace-nowrap">
          Panel de ejecucion
        </h1>
        <div className="flex gap-4 font-normal text-sm mb-2 sm:mb-0">
          <p className="text-sm cursor-pointer">Tomadas</p>
          <p className="text-sm cursor-pointer">Completadas</p>
        </div>
        <div className="flex bg-white rounded-full">
          <input
            className="px-4 py-1 outline-none rounded-s-full w-1/2"
            type="text"
            placeholder="Buscar"
          />
          <Select
            aria-label="Selecciona una opción"
            radius="full"
            items={options}
            defaultSelectedKeys={[options[0].value]}
            classNames={{
              trigger:
                'blue_gradient flex flex-row justify-between items-center text-white  ',
              listbox:
                'text-[#8C909A] border-solid border-[1px]  border-blue_500 rounded-md bg-white ',
              selectorIcon: 'hidden',
            }}
          >
            {options.map((option) => (
              <SelectItem
              classNames={{base:'hover:blue_gradient hover:text-white'}}
              key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </header>
      <section className="flex flex-col gap-3 translate-y">
        <div
          className={` transition-all ${
            executionPanelActive ? ' h-auto' : ' h-52'
          } sm:hidden bg-white px-2 rounded-3xl overflow-y-hidden`}
        >
          <div>
            <table className="grid grid-cols-[2fr,2fr,1fr] px-6 py-4 border-b-2 border-solid border-[#00000]">
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
                    <span className="text-green-600 text-base font-[800]">
                      +
                    </span>
                    Buy
                  </td>
                  <td>26/08/23 - 18:05</td>
                  <td>Banesco</td>
                  <td>$880</td>
                  <td>880eUSD</td>
                </tr>
              </tbody>
              <tfoot>
              <tr>
                <td className="justify-self-end flex flex-col justify-between">
                <Image className="" src=".\images\pli\clock.svg" alt="" width={20} height={20} />
                <Image
                  onClick={() => handleOpenExecutionPanel(1)}
                  className={executionPanelActive ? 'hidden' : ''}
                  src=".\images\pli\arrowDawn.svg"
                  alt=""
                  width={15}
                  height={16}
                />
                <Image
                  onClick={handleCloseExecutionPanel}
                  className={executionPanelActive ? '' : 'hidden'}
                  src=".\images\pli\arrowUp.svg"
                  alt=""
                  width={15}
                  height={16}
                />
                </td>
              </tr>
              </tfoot>
            </table>
            <table className="pb-4">
              <tbody>
                <tr className="grid grid-cols-2 gap-5 py-6 px-4  border-b-2 border-solid border-[#00000]">
                  <td className="flex flex-col">
                    <span className="font-semibold">Estado</span>Procesado
                  </td>
                  <td className="flex flex-col ">
                    <span className="font-semibold whitespace-nowrap">
                      N. de transacción
                    </span>
                    8795465674
                  </td>
                  <td className="flex flex-col">
                    <span className="font-semibold">A nombre de</span>Julian
                    Zambrano
                  </td>
                  <td className="flex flex-col">
                    <span className="font-semibold">RSV solicitados</span>880
                    eUSD
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
                <tr className="grid grid-cols-2 gap-4  py-6 px-4 border-b-2 border-solid border-[#00000]">
                  <th className=" text-md font-black col-span-full  w-full ">
                    Origen
                  </th>
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
                <tr className="grid grid-cols-2 gap-4  py-6 px-4">
                  <th className=" text-md font-black col-span-full  w-full ">
                    Destino
                  </th>
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
                <tr>
                  <td className="flex flex-col gap-4 px-4">
                  <button className="text-white blue_gradient-2 rounded-full py-[2px] px-5">
                    Confirmar
                  </button>
                  <button className=" text-white blue_gradient-2 rounded-full py-[2px] px-5">
                    Recibí un monto distinto
                  </button>
                  <div className="rounded-full border-blue_500 border-[1px] max-w-md">
                    <Select
                      label="cancelar"
                      placeholder="Razon"
                      aria-placeholder="Razon de cancelación"
                      aria-label="Razon de cancelación"
                      radius="full"
                      items={options2}
                      classNames={{
                        trigger:
                          'flex flex-row py-0 pl-0 justify-between items-center text-[#8C909A]',
                        label:
                          'text-white blue_gradient-2 rounded-full px-5 py-[1px] max-w-[127px] mr-2',
                        listbox:
                          'text-[#8C909A] border-solid border-[1px]  border-blue_500 rounded-md bg-white ',
                      }}
                    >
                      {options2.map((option) => (
                        <SelectItem
                        classNames={{base:'hover:blue_gradient hover:text-white'}}
                        key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
                executionPanelActive ? 'h-full' : 'h-16 '
              } mb-3 bg-white rounded-3xl pb-8 px-8 overflow-y-hidden`}
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
                <td className="w-full flex gap-4 items-center">
                  <span className="text-[#8F99A9] rounded-full bg-general_backgound px-6 py-1">
                    05:00
                  </span>
                  <Image
                    onClick={handleCloseExecutionPanel}
                    className={`${executionPanelActive ? '' : 'hidden'}`}
                    src=".\images\pli\arrowUp.svg"
                    alt=""
                    width={15}
                    height={16}
                  />
                  <Image
                    onClick={() => handleOpenExecutionPanel(1)}
                    className={`${executionPanelActive ? 'hidden' : ''}`}
                    src=".\images\pli\arrowDawn.svg"
                    alt=""
                    width={15}
                    height={16}
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
                <th className=" text-md font-black col-span-full  w-full ">
                  Origen
                </th>
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
                <th className=" text-md font-black  w-full col-span-full">
                  Destino
                </th>
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
                <td>
                  <button
                    type="button"
                    onClick={handleReceivedDifferentAmountModal}
                    className=" text-white blue_gradient-2 rounded-full py-[2px] px-5"
                  >
                    Recibí un monto distinto
                  </button>
                </td>
                <td className="flex gap-5 ">
                  <button className="text-white blue_gradient-2 rounded-full py-[2px] px-5">
                    Confirmar
                  </button>
                  <div className="rounded-full border-blue_500 border-[1px] max-w-md flex">
                    <Select
                      label="cancelar"
                      placeholder="Razon de cancelación"
                      aria-placeholder="Razon de cancelación"
                      aria-label="Razon de cancelación"
                      radius="full"
                      items={options2}
                      classNames={{
                        trigger:
                          'flex flex-row py-0 pl-0 justify-between items-center text-[#8C909A]',
                        label:
                          'text-white blue_gradient-2 rounded-full px-5 py-[1px] max-w-[127px] mr-2',
                        listbox:
                          'text-[#8C909A] border-solid border-[1px]  border-blue_500 rounded-md bg-white ',
                      }}
                    >
                      {options2.map((option) => (
                        <SelectItem
                        classNames={{base:'hover:blue_gradient hover:text-white'}}
                        key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ExecutionPanel;
