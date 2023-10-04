'use client';
import BankAccountForm from '@/components/pli/BankAccountForm';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function BankAccounts() {
  const openSweetAlert = () => {
    MySwal.fire({
      html: <BankAccountForm />, // Renderiza tu formulario dentro de SweetAlert
      showCancelButton: false,
      showConfirmButton: false,
      width: 832,
      customClass: {
        popup: 'rounded-[22px]', // Clase CSS para el contenedor del popup
      },
    });
  };

  return (
    <section className="h-screen pt-5 sm:pt-11">
      <div className="text-soft_blue mx-auto max-w-sm sm:max-w-6xl">
        <h1 className="text-xl font-semibold mb-5 sm:mb-10">
          Gestor de cuentas
        </h1>

        <section className="bg-white shadow-sm">
          <div className="sm:hidden ">
            <table className="bg-white rounded-3xl grid grid-cols-[2fr,2fr,1fr] px-6 py-4 mb-2 ">
              <thead>
                <tr className="h-full grid grid-rows-5 justify-evenly">
                  <th className="text-start">Banco</th>
                  <th className="text-start">Titular</th>
                  <th className="text-start">Dirección</th>
                  <th className="text-start">Balance</th>
                  <th className="text-start">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-full grid grid-rows-5 justify-evenly ">
                  <td className="text-start min-h-[35px]">Banesco</td>
                  <td className="text-start max-h-20">José Hernandez </td>
                  <td className="text-start">Vender</td>
                  <td className="text-start">$880</td>
                  <td className="text-start">Aprobada</td>
                </tr>
              </tbody>
              <BiDotsVerticalRounded className="text-[#D9D9D9] text-xl justify-self-end" />
            </table>
          </div>
          <div className="hidden sm:flex">
            <table className="flex flex-col w-full">
              <thead className="w-full mb-4">
                <tr className="bg-white w-full rounded-3xl grid grid-cols-6 pl-8 pr-3">
                  <th>Banco</th>
                  <th>Titular</th>
                  <th>Dirección</th>
                  <th>Balance</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody className="mb-2">
                <tr className="bg-white w-full rounded-3xl grid grid-cols-6 pl-8 pr-3 items-center justify-items-center">
                  <td>Banesco</td>
                  <td>José Hernandez </td>
                  <td>Vender</td>
                  <td>$880</td>
                  <td>Aprobada</td>
                  <BiDotsVerticalRounded className="text-[#D9D9D9] text-xl justify-self-end " />
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-3">
          <button
            onClick={openSweetAlert}
            className="blue_gradient w-full text-white rounded-3xl font-normal text-base py-3 sm:w-fit px-6"
          >
            Añadir Cuenta
          </button>
        </div>
      </div>
    </section>
  );
}
