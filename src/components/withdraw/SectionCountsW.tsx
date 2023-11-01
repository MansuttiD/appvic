import Image from 'next/image';
import { useForm } from 'react-hook-form';
import namesInCounts from '../../libs/recharge/nameOfCount.json';
import ButtonBlue from '../recharge/ButtonBlue';
import ButtonGrey from '../recharge/ButtonGrey';
import SenderTable from '../recharge/SenderTable';
import ArrowContainer from '../sharedRechargeWithdraw/ArrowContainer';

export default function SectionCountsW({
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
          <div className="flex gap-1 ">
            <input
              {...register('quantity')}
              placeholder="0,00"
              className="text-2xl xs:min-w-[169px] max-w-[90px] outline-none font-black text-soft_blue h-14"
              type="text"
            />
            <p className=" text-center self-center text-2xl font-black">USDT</p>
          </div>
          <p className="text-grey_medium text-base font-normal">
            1 USDT = 33,2 Bs.D
          </p>
        </div>
        <ArrowContainer />
        <div className="flex flex-col rounded-3xl  bg-white pt-10 pl-11 pb-12 max-w-xl w-full">
          <h3 className="text-base font-semibold text-soft_blue">
            Usted va a recibir
          </h3>
          <div className="flex gap-6 xs:gap-14 ">
            <p className="text-2xl  font-black text-soft_blue h-14">BS. D</p>
            <p className="text-2xl  font-black text-soft_blue h-14">
              {quantity ? (quantity * 33.2).toFixed(2) : '0,00'}
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
          <p
            className={`hidden text-soft_blue text-md font-black text-center py-3`}
          >
            Esperando a que un Proveedor de Liquidez tome su transacción
          </p>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-soft_blue text-md font-black">Recibirás</h3>
            <p className="text-soft_blue text-base font-normal flex flex-col">
              <span className="text-soft_blue font-semibold text-base">
                Monto
              </span>{' '}
              Bs. D 550,00
            </p>
            <p className="text-base font-normal text-grey_medium">
              Se debita un saldo de mantenimiento de 0,4 USDT.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-11 self-end flex-wrap">
        <div className="hidden">
          <ButtonGrey
            type="button"
            text="Cancelar"
            trigger={handleCancelReturn2}
          />
        </div>

        <ButtonBlue
          type="button"
          text="Finalizar"
          trigger={handleConfirmCount}
          value={true}
        />
      </div>
    </div>
  );
}
