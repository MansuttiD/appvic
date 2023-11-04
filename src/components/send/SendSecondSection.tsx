import Image from 'next/image';
import { useForm } from 'react-hook-form';
import ButtonBlue from '../recharge/ButtonBlue';
import ButtonGrey from '../recharge/ButtonGrey';

export default function SendSecondSection({
  section,
  lastSend,
  handleCancelReturn,
  handleConfirmPayment,
}: any) {
    
  const { register, watch } = useForm<any>();
  const quantity = watch('quantity');

  return (
    <div className={`${section == 'secondSection' ? '' : 'hidden'}`}>
      <div className="bg-white  rounded-3xl p-3">
        <div className=" flex flex-col sm:flex-row justify-between mb-5">
          <div className={`flex gap-4`}>
            <Image alt="" src={lastSend.image} width={44} height={44} />
            <p
              className={`${'text-grey_button'} flex flex-col text-sm font-normal `}
            >
              <span className={`${'text-soft_blue'} font-semibold text-base`}>
                {lastSend.name}
              </span>
              {lastSend.email}
            </p>
          </div>
          <div className="text-2xl font-black text-soft_blue flex items-center ">
            <span>USDT</span>{' '}
            <input
              type="text"
              className="max-w-[200px] px-2 outline-none"
              placeholder="0,00"
              {...register('quantity')}
            />
          </div>
        </div>
        <div>
          <textarea
            name=""
            id=""
            maxLength={160}
            className="w-full texts rounded-[20px] border-[1px] border-solid border-[#E7E7E7] p-3 h-[100px] outline-none"
            placeholder={`Déjale un mensaje a ${lastSend.name} ...`}
          ></textarea>
          <p className="text-grey_button">Max 160 Caracteres</p>
        </div>
        <div className="flex justify-end gap-5">
          <ButtonGrey
            type="button"
            text={'Regresar'}
            trigger={handleCancelReturn}
          />
          <ButtonBlue
            type="button"
            text="Confirmar Pago"
            trigger={handleConfirmPayment}
            value={quantity}
          />
        </div>
      </div>
    </div>
  );
}
