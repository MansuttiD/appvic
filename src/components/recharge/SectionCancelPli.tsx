import ButtonBlue from "./ButtonBlue";
import ButtonGrey from "./ButtonGrey";

export default function SectionCancelPli({ handleCancelReturn,handleReturnToHome}: any) {
    return (
        <div className="hidden">
          <div className={`flex flex-col`}>
            <div className="flex flex-col bg-white rounded-3xl py-4 pl-8 pr-5">
              <h4 className="text-md font-black text-soft_blue mb-6">
                Carga de fondos Cancelada
              </h4>
              <table className="grid grid-cols-2 md:flex md:flex-col ">
                <thead>
                  <tr className="flex flex-col items-start md:grid md:grid-cols-5 md:text-center">
                    <th>Nombre</th>
                    <th>ID</th>
                    <th>Número de cuenta</th>
                    <th>Tipo de cuenta</th>
                    <th>Banco</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="flex flex-col md:grid md:grid-cols-5 md:text-center">
                    <td>Julio Zambrano</td>
                    <td>V13456789</td>
                    <td>0015492250123554879</td>
                    <td>Corriente</td>
                    <td>Banco de Venezuela</td>
                  </tr>
                </tbody>
                <tfoot
                  className={`flex flex-row sm:flex-col items-center col-span-full mt-3 border-b-[1px] border-solid pb-2 border-[#e1dede]`}
                >
                  <tr
                    className={`flex flex-col sm:grid  sm:grid-cols-3 justify-items-start w-full`}
                  >
                    <th>ID de Transaccioón Interna</th>
                    <th>Número de referencia del pago</th>
                  </tr>
                  <tr className=" flex flex-col sm:grid sm:grid-cols-3 justify-items-start w-full">
                    <td>84987456464564</td>
                    <td>84987456464564</td>
                  </tr>
                </tfoot>
              </table>
              <div className="text-center flex flex-col gap-14 pt-2">
                <h3 className="font-black text-md text-soft_blue">
                  Su Transacción Fue Cancelada{' '}
                </h3>
                <p className="text-soft_blue font-semibold text-base">
                  Si usted efectivamente le envio los fondos al PLI y considera
                  que esto fue un error por favor contactar con soporte{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-5 mt-11">
            <ButtonGrey
              type="button"
              text="Soporte"
              trigger={handleCancelReturn}
            />
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
  