import { Select, SelectItem } from '@nextui-org/select';
import Image from 'next/image';
import options2 from '../../libs/pli/options2.json';
import { SelectorIcon } from '../shared/SelectorIcon';

export default function MobileTable({
  handleOpenExecutionPanel,
  executionPanelActive,
  handleCloseExecutionPanel,
}: any) {

  return (
    <div
    className={` transition-all ${
      executionPanelActive ? ' h-auto' : ' h-52'
    } sm:hidden bg-white px-2 rounded-3xl overflow-y-hidden`}
  >
    <div>
      <table className="grid grid-cols-[2fr,2fr,1fr] xs:px-6 py-4 border-b-2 border-solid border-[#00000]">
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
            <td className="flex flex-col gap-36">
              <Image
                className=""
                src=".\images\pli\clock.svg"
                alt=""
                width={20}
                height={20}
              />
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
          <tr className="grid grid-cols-2 gap-5 py-6 xs:px-4  border-b-2 border-solid border-[#00000]">
            <td className="flex flex-col">
              <span className="font-semibold">Estado</span>Procesado
            </td>
            <td className="flex flex-col ">
              <span className="font-semibold xs:whitespace-nowrap">
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
          <tr className="grid grid-cols-2 gap-4  py-6 xs:px-4 border-b-2 border-solid border-[#00000]">
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
          <tr className="grid grid-cols-2 gap-4  py-6 xs:px-4">
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
            <td className="flex flex-col gap-4 sx:px-4 ">
              <button className="text-white blue_gradient-2 rounded-full py-[2px] px-5">
                Confirmar
              </button>
              <button className=" text-white blue_gradient-2 rounded-full py-[2px] px-5">
                Recibí un monto distinto
              </button>
              <div className="rounded-full border-blue_500 border-[1px] max-w-md">
                <Select
                  label="cancelar"
                  placeholder="Razón de cancelación"
                  selectorIcon={<SelectorIcon />}
                  aria-placeholder="Razon de cancelación"
                  aria-label="Razon de cancelación"
                  radius="full"
                  items={options2}
                  classNames={{
                    trigger:
                      'flex flex-row py-1 pl-0 justify-between items-center text-[#8C909A] h-7',
                    label:
                      'text-white blue_gradient-2 rounded-full px-5 py-[1px] h-[28px] max-w-[127px]',
                    listbox:
                      'text-[#8C909A] border-solid border-[1px]  border-blue_500 rounded-md bg-white ',
                    selectorIcon: 'static',
                  }}
                >
                  {options2.map((option) => (
                    <SelectItem
                      classNames={{
                        base: 'hover:blue_gradient hover:text-white',
                      }}
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
      </table>
    </div>
    
  </div>
  );
}
