import banks from '../../libs/recharge/banks.json';
import options from '../../libs/recharge/optionsCountry.json';
import ArrowContainer from '../sharedRechargeWithdraw/ArrowContainer';
import SelectContainer from '../sharedRechargeWithdraw/SelectContainer';
import UsdtContainer from '../sharedRechargeWithdraw/UsdtContainer';
import ButtonBlue from './ButtonBlue';
import ButtonGrey from './ButtonGrey';
import LabelBank from './LabelBank';

export default function SectionBank({
  confirmBank,
  cancelTransaction,
  currency,
  handleChange,
  bankActive,
  setBankActive,
  handleCancelReturn,
  handleConfirmBank,
}: any) {
  
  return (
    <div
      className={`${
        confirmBank || cancelTransaction ? 'hidden' : 'flex'
      } flex-col`}
    >
      <div className="flex flex-col gap-8 justify-center items-center mb-12  md:flex-row">
        <SelectContainer currency={currency} handleChange={handleChange} options={options} title='Moneda de pago'/>
        <ArrowContainer/>
        <UsdtContainer title='Moneda a recibir'/>
      </div>

      <div className={`${currency ? '' : 'hidden'}`}>
        <h3 className="font-semibold text-xl mb-6 text-soft_blue">
          Tasa por 1 USDT
        </h3>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {banks.map((bank) => (
            <LabelBank
              key={bank.id}
              bank={bank}
              bankActive={bankActive}
              setBankActive={setBankActive}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-5 mt-11 self-end flex-wrap">
        <ButtonGrey
          type="button"
          text={bankActive ? 'Cancelar' : 'Regresar'}
          trigger={handleCancelReturn}
        />
        <ButtonBlue
          type="button"
          text="Confirmar Banco"
          trigger={handleConfirmBank}
          value={bankActive}
        />
      </div>
    </div>
  );
}
