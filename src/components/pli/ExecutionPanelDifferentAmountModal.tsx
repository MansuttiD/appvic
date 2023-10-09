import { useState } from 'react';
import Swal from 'sweetalert2';

export default function ExecutionDifferentAmountModal() {
  const [modalDifferentAmount, setModalDifferentAmount] = useState('No');
  const [differentAmount, setDifferentAmount] = useState('');

  const handleCloseModal = () => {
    Swal.close();
  };

  const handleConfirModal = () => {
    Swal.fire({
      title: 'Confirmar Monto',
      color: '#242C41',
      text: `¿El monto que el usuario envió fue (${differentAmount} Bs D.) y el que tenía que recibir era de (3.200,00 Bs D.)?`,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Confirmar Transacción',
      cancelButtonText: 'Cancelar',
      buttonsStyling: false,
      reverseButtons: true,
      customClass: {
        popup: 'rounded-3xl',
        htmlContainer: '',
        confirmButton: 'blue_gradient text-white px-6 py-4 rounded-3xl',
        cancelButton:
          'px-6 py-4 rounded-3xl border-solid border-[1px] border-[#808080] text-[#808080]',
        actions: 'w-full flex gap-6',
      },
    });
  };

  return (
    <div className="px-3 flex flex-col gap-5 ">
      <h3 className="font-semibold text-xl text-soft_blue">Monto Distinto</h3>
      <div className="felx flex-col gap-7">
        <label
          className="text-soft_blue font-semibold text-base mb-2"
          htmlFor=""
        >
          ¿Recibió un monto distinto al que el usuario envió?
        </label>
        <select
          defaultValue={'No'}
          className=" outline-none flex flex-col w-full py-1 px-4 rounded-3xl border-solid border-[1px] border-[#E7E7E7]"
          name=""
          id=""
          onChange={(e) => {
            setModalDifferentAmount(e.target.value);
          }}
        >
          <option value="No">No</option>
          <option value="Si">Si</option>
        </select>
      </div>
      <form
        className={`${
          modalDifferentAmount === 'Si' ? '' : 'hidden'
        } felx flex-col`}
      >
        <label
          className="text-soft_blue font-semibold mb-2 text-base"
          htmlFor=""
        >
          Introduzca el monto exacto recibido en moneda FIAT
        </label>
        <input
          className="outline-none w-full py-1 px-4 rounded-3xl border-solid border-[1px] border-[#E7E7E7] appearance-none"
          type="text"
          inputMode="decimal"
          pattern="[0-9]*"
          onChange={(e) => {
            setDifferentAmount(e.target.value);
          }}
        />
      </form>
      <div className="flex gap-4 justify-center">
        <button
          type="button"
          onClick={handleCloseModal}
          className="px-6 py-3 border-solid rounded-3xl border-[1px] border-[#808080] text-[#808080]"
        >
          Cancelar
        </button>
        <button
          type="button"
          className={`${
            modalDifferentAmount === 'Si' ? '' : 'hidden'
          } px-6 py-3 rounded-3xl blue_gradient text-white`}
          onClick={handleConfirModal}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
