'use client';

import { Select, SelectItem } from '@nextui-org/select';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import options from '../../libs/pli/options.json';
import { SelectorIcon } from '../shared/SelectorIcon';
import DesktopTableBody from './DesktopTableBody';
import ExecutionDifferentAmountModal from './ExecutionPanelDifferentAmountModal';
import MobileTable from './MobilTable';

const MySwal = withReactContent(Swal);

const ExecutionPanel = () => {
  const [executionPanelActive, setExecutionPanelActive] = useState(null);

  const handleOpenExecutionPanel = (id: any) => {
    setExecutionPanelActive(id);
  };

  const handleCloseExecutionPanel = () => {
    setExecutionPanelActive(null);
  };

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
        <div className="flex bg-white rounded-full h-8">
          <input
            className="px-4 py-1 outline-none rounded-s-full w-1/2 h-8"
            type="text"
            placeholder="Buscar"
          />
          <Select
            aria-label="Selecciona una opción"
            radius="full"
            selectorIcon={<SelectorIcon />}
            items={options}
            defaultSelectedKeys={[options[0].value]}
            classNames={{
              trigger:
                'blue_gradient flex py-1 flex-row justify-between items-center text-white h-8',
              listbox:
                'text-[#8C909A] border-solid border-[1px]  border-blue_500 rounded-md bg-white ',
              selectorIcon: 'static',
            }}
          >
            {options.map((option) => (
              <SelectItem
                classNames={{ base: 'hover:blue_gradient hover:text-white' }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </header>
      <section className="flex flex-col gap-3 translate-y">
        <MobileTable
          handleOpenExecutionPanel={handleOpenExecutionPanel}
          executionPanelActive={executionPanelActive}
          handleCloseExecutionPanel={handleCloseExecutionPanel}
        />
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
            <DesktopTableBody
              executionPanelActive={executionPanelActive}
              handleCloseExecutionPanel={handleCloseExecutionPanel}
              handleOpenExecutionPanel={handleOpenExecutionPanel}
              handleReceivedDifferentAmountModal={
                handleReceivedDifferentAmountModal
              }
            />
            
          </table>
        </div>
      </section>
    </div>
  );
};

export default ExecutionPanel;
