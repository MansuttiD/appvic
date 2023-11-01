export default function SenderTable({
  value,
  info,
  transaction,
  referenceNumber,
}: any) {
  return (
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
          <td>{info.name}</td>
          <td>{info.id}</td>
          <td>{info.numberCount}</td>
          <td>{info.typeCount}</td>
          <td>{info.bank}</td>
        </tr>
      </tbody>
      <tfoot
        className={`${
          value == 'correct' ? 'flex' : 'hidden'
        }  flex-row sm:flex-col items-center col-span-full mt-3 border-b-[1px] border-solid pb-2 border-[#e1dede]`}
      >
        <tr className="flex flex-col items-center  sm:grid grid-cols-3 w-full place-items-start">
          <th className={`${referenceNumber ? '' : 'hidden'}`}>
            Número de referencia del pago
          </th>
          <th className="col-start-2 col-end-3">ID de Transaccioón Interna</th>
        </tr>
        <tr className=" flex flex-col items-center sm:grid grid-cols-3 w-full place-items-start">
          <td className={`${referenceNumber ? '' : 'hidden'}`}>
            {transaction}
          </td>
          <td className="col-start-2 col-end-3">{transaction}</td>
        </tr>
      </tfoot>
    </table>
  );
}
