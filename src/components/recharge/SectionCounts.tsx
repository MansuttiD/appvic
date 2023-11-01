import Image from 'next/image';
import { useForm } from 'react-hook-form';
import namesInCounts from '../../libs/recharge/nameOfCount.json';
import ArrowContainer from '../sharedRechargeWithdraw/ArrowContainer';
import AddresseeTable from './AddresseeTable';
import ButtonBlue from './ButtonBlue';
import ButtonGrey from './ButtonGrey';
import SenderTable from './SenderTable';

export default function SectionCounts({
  confirmBank,
  cancelTransaction,
  finishTransaction,
  confirmCount,
  setNameInCount,
  nameInCount,
  handleBankAccount,
  confirmPin,
  senderInfo,
  sernderTransaction,
  handleCancelReturn2,
  handleConfirmCount,
}: any) {
  const { register, watch } = useForm<any>();
  const picture = watch('filePicture');
  const quantity = watch('quantity');
  return (
    <div
      className={`${
        confirmBank && !cancelTransaction && !finishTransaction
          ? 'flex'
          : 'hidden'
      } flex-col gap-8 justify-center  mb-12`}
    >
      <div className="flex flex-col gap-8 justify-center items-center mb-12 md:flex-row">
        <div className="flex flex-col rounded-3xl  bg-white pt-10 pl-11 pb-12 max-w-xl w-full">
          <h3 className="text-base font-semibold text-soft_blue">
            Usted va a pagar
          </h3>
          <div className="flex gap-[15px] ">
            <input
              {...register('quantity')}
              placeholder="0,00"
              className="text-2xl xs:min-w-[169px] max-w-[90px] outline-none font-black text-soft_blue h-14"
              type="text"
            />
            <p className="rounded-xl font-normal text-base bg-general_backgound w-20 py-2 px-6 text-center self-center text-grey_medium">
              Bs.D
            </p>
          </div>
          <p className="text-grey_medium text-base font-normal">
            33,2 Bs.D = 1 USDT
          </p>
        </div>
        <ArrowContainer />
        <div className="flex flex-col rounded-3xl  bg-white pt-10 pl-11 pb-12 max-w-xl w-full">
          <h3 className="text-base font-semibold text-soft_blue">
            Usted va a recibir
          </h3>
          <div className="flex gap-6 xs:gap-14 ">
            <p className="text-2xl  font-black text-soft_blue h-14">USDT</p>
            <p className="text-2xl  font-black text-soft_blue h-14">
              {quantity ? (quantity / 33.2).toFixed(2) : '0,00'}
            </p>
          </div>
          <p className="text-grey_medium text-base font-normal">
            Se debita un saldo de mantenimiento de 0 USDT.
          </p>
        </div>
      </div>
      <div className={`${confirmCount ? 'hidden' : 'flex'}  flex-col gap-6`}>
        <h3 className="font-semibold text-xl  text-soft_blue">
          Banco de Venezuela: Seleccionar Cuenta
        </h3>
        <div className="bg-white rounded-3xl max-w-sm w-full flex gap-4 py-3 pl-5">
          <Image
            src={'./images/recharge/magnifyingGlass.svg'}
            alt=""
            width={20}
            height={20}
          />
          <input className="outline-none" type="text" placeholder="@etiqueta" />
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center ">
          {namesInCounts.map((name) => (
            <p
              key={name.id}
              onClick={() => setNameInCount(name.id)}
              className={`${
                nameInCount == name.id
                  ? 'blue_gradient text-white'
                  : 'bg-white text-soft_blue'
              } text-base font-semibold  max-w-sm w-full justify-between rounded-3xl pl-8 pr-6 py-6 `}
            >
              {name.name}
            </p>
          ))}
        </div>
        <div>
          <button
            onClick={handleBankAccount}
            className="text-base font-semibold bg-white text-soft_blue max-w-sm w-full justify-between rounded-3xl pl-8 pr-6 py-6 "
          >
            Agregar una cuenta
          </button>
        </div>
      </div>
      <div className={`${confirmCount ? 'flex' : 'hidden'} flex-col`}>
        <h3
          className={`${
            confirmPin == 'correct' ? 'hidden ' : ''
          } text-xl font-semibold text-soft_blue`}
        >
          Banco de Venezuela:
        </h3>
        <div className="flex flex-col bg-white rounded-3xl py-4 pl-8 pr-5">
          <h4 className="text-md font-black text-soft_blue mb-6">
            Usted transfiere desde:
          </h4>
          <SenderTable
            value={confirmPin}
            info={senderInfo}
            transaction={sernderTransaction}
            referenceNumber=""
          />
          <h4
            className={`${
              confirmPin == 'correct' ? '' : 'hidden'
            } text-md font-black text-soft_blue mb-6`}
          >
            Cuenta a transferir
          </h4>
          <AddresseeTable
            value={confirmPin}
            info={senderInfo}
            currency="Bs. D"
            quantity="18,530.00"
          />
          <div
            className={`${
              confirmPin == 'correct' ? 'md:flex' : 'hidden'
            }  justify-between pt-6 `}
          >
            <div className="flex flex-col gap-3">
              <label className="text-base font-semibold text-soft_blue">
                Número de referencia del pago
              </label>
              <input
                placeholder="#"
                className="rounded-[20px] px-4 py-1 bg-white border-[1px] border-solid border-[#E7E7E7] outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-base font-semibold text-soft_blue">
                Captura de pantalla del comprobante
              </h5>{' '}
              <div className="rounded-3xl p-1 flex items-center">
                <input
                  type="file"
                  id="file2"
                  {...register('filePicture')}
                  className="hidden"
                />

                <label
                  htmlFor="file2"
                  className=" text-[#808080] border-[1px] border-[#808080] px-6 py-1 rounded-[20px] mr-2 "
                >
                  Subir
                </label>
                <span>{`${
                  picture && picture[0] ? picture[0].name : 'Sube imagen'
                }`}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-base font-semibold text-soft_blue">
                Tiempo disponible
              </h5>
              <p className="blue_gradient px-6 py-1 rounded-3xl text-white text-center">
                00:13:23
              </p>
            </div>
          </div>
          <p
            className={`hidden text-soft_blue text-md font-black text-center py-3`}
          >
            Esperando a que un Proveedor de Liquidez tome su transacción
          </p>
        </div>
      </div>
      <div className="flex gap-5 mt-11 self-end flex-wrap">
        <ButtonGrey
          type="button"
          text={confirmPin ? 'Cancelar' : 'Regresar'}
          trigger={handleCancelReturn2}
        />
        <ButtonBlue
          type="button"
          text={
            confirmPin
              ? 'Pago Realizado'
              : confirmCount
              ? ' Confirmar'
              : nameInCount
              ? 'Confirmar Cuenta'
              : 'Confirmar Banco'
          }
          trigger={handleConfirmCount}
          value={nameInCount}
        />
      </div>
    </div>
  );
}
