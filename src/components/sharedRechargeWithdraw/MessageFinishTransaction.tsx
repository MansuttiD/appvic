'use client';

import Swal from 'sweetalert2';

export default function MessageFnishTransaction({title}:any) {
  const handleCloseModal = () => {
    Swal.close();
  };

  return (
    <div className="flex flex-col gap-5 px-5 py-2">
      <div className='text-start'>
        <h3 className="text-md font-black text-soft_blue">
          {title}
        </h3>
        <h4 className="text-2xl font-black text-soft_blue">USDT 545,00</h4>
      </div>
      <div className="flex flex-col text-start">
        <h4 className="text-base font-black text-soft_blue">Fecha</h4>
        <p>08/09/2023</p>
      </div>
      <div className="flex flex-col text-start">
        <h4 className="text-base font-black text-soft_blue">
          ID de Transacción Interna
        </h4>
        <p>84987456464564</p>
      </div>
      <div className="flex flex-col text-start">
        <h4 className="text-base font-black text-soft_blue">Referencia del Pago</h4>
        <p>84987456464564</p>
      </div>
      <div className="flex flex-col text-start">
        <h4 className="text-base font-black text-soft_blue">Tasa</h4>
        <p>33,22 Bs.D</p>
      </div>
      <div className="flex flex-col text-start">
        <h4 className="text-base font-black text-soft_blue">Monto</h4>
        <p>18.530,00 Bs.D</p>
      </div>
      <button
        type="button"
        onClick={handleCloseModal}
        className="py-3 px-6 rounded-3xl blue_gradient text-white"
      >
        Ver Balance
      </button>
    </div>
  );
}
