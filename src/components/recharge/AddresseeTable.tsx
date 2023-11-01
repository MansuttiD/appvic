export default function AddresseeTable({value,info,currency,quantity}: any) {
    return (
      <table
      className={`${
        value == 'correct' ? 'grid md:flex' : 'hidden'
      }  grid-cols-2  md:flex-col `}
    >
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
      <tfoot className="flex  flex-col items-center col-span-full mt-3 border-b-[1px] border-solid pb-2 border-[#e1dede]">
        <tr>
          <th>Monto</th>
        </tr>
        <tr>
          <td>{`${currency} ${quantity}`}</td>
        </tr>
      </tfoot>
    </table>
    );
  }
  