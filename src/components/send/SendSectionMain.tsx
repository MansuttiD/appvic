import lastSends from '../../libs/send/lastSends.json';
import ButtonBlue from '../recharge/ButtonBlue';
import ButtonGrey from '../recharge/ButtonGrey';
import LastSend from './LastSend';

export default function SendSectionMain({ section, setLastSend, lastSend,handleCancelReturn,handleChangeSection }: any) {
  return (
    <div
    className={`${section == 'main' ? 'flex' : 'hidden'}  flex-col gap-4`}
  >
    <h3 className="text-soft_blue text-[32px] font-medium">
      Ultimos Enviados
    </h3>
    <div className="flex flex-col gap-3 ">
      {lastSends.map((last) => (
        <LastSend
          key={last.id}
          last={last}
          setLastSend={setLastSend}
          lastSend={lastSend}
        />
      ))}
    </div>
    <div className="flex gap-5 mt-11 self-end flex-wrap">
      <ButtonGrey
        type="button"
        text={'Regresar'}
        trigger={handleCancelReturn}
      />
      <ButtonBlue
        type="button"
        text="Confirmar"
        trigger={handleChangeSection}
        value={lastSend}
      />
    </div>
  </div>
  );
}
