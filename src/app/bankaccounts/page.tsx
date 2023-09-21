'use client';
import { AiOutlineMore } from 'react-icons/ai';

export default function BankAccounts() {
  return (
    <section className="bg-[#F8F8F6] h-screen">
      <div className="text-soft_blue mx-auto max-w-sm">
        <h1 className="text-xl font-semibold">Gestor de cuentas</h1>
        <table className="bg-white rounded-3xl grid grid-cols-[2fr,2fr,1fr] px-6 py-4">
          <thead>
            <tr className="h-full flex flex-col justify-evenly gap-4">
              <th className="text-start">Banco</th>
              <th className="text-start">Titular</th>
              <th className="text-start">Dirección</th>
              <th className="text-start">Balance</th>
              <th className="text-start">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-full flex flex-col justify-evenly gap-4 ">
              <td className="text-start">Banesco</td>
              <td className="text-start">José Hérnandez</td>
              <td className="text-start">Vender</td>
              <td className="text-start">$880</td>
              <td className="text-start">Aprobada</td>
            </tr>
          </tbody>
          <div className='text-[#D9D9D9] text-xl '>
            <AiOutlineMore />
          </div>
        </table>
        <div>
          <button className='blue_gradient w-full text-white rounded-3xl font-normal text-base py-3'>
            Añadir Cuenta
          </button>
        </div>
      </div>
    </section>
  );
}
