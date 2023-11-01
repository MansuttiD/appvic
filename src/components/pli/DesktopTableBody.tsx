import { Select, SelectItem } from '@nextui-org/select';
import Image from 'next/image';
import options2 from '../../libs/pli/options2.json';
import { SelectorIcon } from '../shared/SelectorIcon';

export default function DesktopTableBody({
  executionPanelActive,
  handleCloseExecutionPanel,
  handleOpenExecutionPanel,
  handleReceivedDifferentAmountModal,
}: any) {

  return (
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
          <span className="font-semibold">A nombre de</span>Julian Zambrano
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
        <th className=" text-md font-black col-span-full  w-full ">Origen</th>
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
        <th className=" text-md font-black  w-full col-span-full">Destino</th>
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
              selectorIcon={<SelectorIcon />}
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
                selectorIcon: 'static',
                mainWrapper: 'h-[25px]',
                innerWrapper: '',
                helperWrapper: '',
                listboxWrapper: '',
              }}
            >
              {options2.map((option) => (
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
        </td>
      </tr>
    </tbody>
  );
}
