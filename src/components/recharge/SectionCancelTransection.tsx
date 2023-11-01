import ButtonBlue from "./ButtonBlue";
import SenderTable from "./SenderTable";

export default function SectionCancelTransaction({cancelTransaction,confirmCount ,senderInfo,sernderTransaction,handleReturnToHome}: any) {
    return (
        <div className={`${cancelTransaction ? '' : 'hidden'}`}>
          <div className={`${confirmCount ? 'flex' : 'hidden'} flex-col`}>
            <div className="flex flex-col bg-white rounded-3xl py-4 pl-8 pr-5">
              <h4 className="text-md font-black text-soft_blue mb-6">
                Carga de fondos Cancelada
              </h4>
              <SenderTable
                value={'correct'}
                info={senderInfo}
                transaction={sernderTransaction}
                referenceNumber=""
              />
              <div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-soft_blue text-md font-black">
                    Recibiste
                  </h3>
                  <p className="text-soft_blue text-base font-normal flex flex-col">
                    <span className="text-soft_blue font-semibold text-base">
                      Monto
                    </span>{' '}
                    USDT 550,00
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
  