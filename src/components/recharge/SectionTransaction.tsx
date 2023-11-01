import ButtonBlue from "./ButtonBlue";
import SenderTable from "./SenderTable";

export default function SectionTransaction({ finishTransaction,senderInfo,handleReturnToHome}: any) {
    return (
        <div className={`${finishTransaction ? '' : 'hidden'}`}>
        <div className="flex flex-col">
          <div className="flex flex-col bg-white rounded-3xl py-4 pl-8 pr-5">
            <h4 className="text-md font-black text-soft_blue mb-6">
              Carga de fondos en proceso
            </h4>
            <SenderTable
              value={'correct'}
              info={senderInfo}
              transaction="84987456464564"
              referenceNumber="84987456464564"
            />
            <div>
              <h2 className=" hidden text-md mt-3 font-black text-soft_blue w-full text-center">
                Esperando a que el Proveedor de Liquidez confirme los fondos
              </h2>
              <div className="flex flex-col gap-3 mt-5">
                <h3 className="text-soft_blue text-md font-black">
                  Recibirás
                </h3>
                <p className="text-soft_blue text-base font-normal flex flex-col">
                  <span className="text-soft_blue font-semibold text-base">
                    Monto
                  </span>{' '}
                  USDT 550,00
                </p>
                <p className="text-base font-normal text-grey_medium">
                  Se debita un saldo de mantenimiento de 0,4 USDT.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-11">
          <ButtonBlue
            type="button"
            text="Finalizar"
            trigger={handleReturnToHome}
            value={true}
          />
        </div>
      </div>
    );
  }
  