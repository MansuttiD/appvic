'use client';

import Swal from "sweetalert2";

export default function MessageConfirm() {

const handleCloseModal=()=>{
    Swal.close()
}

  return (
    <div className="flex flex-col gap-5 px-5 py-2">
      <h3 className="text-md font-black text-soft_blue">Cuenat Aprobada</h3>
      <div className="flex flex-col"><h4 className="text-base font-black text-soft_blue">Nombre</h4><p>Sebastián Rojas</p></div>
      <div className="flex flex-col"><h4 className="text-base font-black text-soft_blue">Cuenta de tercero</h4><p>No</p></div>
      <div className="flex flex-col"><h4 className="text-base font-black text-soft_blue">Banco</h4><p>Banesco</p></div>
      <div className="flex flex-col"><h4 className="text-base font-black text-soft_blue">Dirección</h4><p>56784892389721</p></div>
      <button
      type="button"
      onClick={handleCloseModal}
       className="py-3 px-6 rounded-3xl blue_gradient text-white">Ver mis cuentas</button>
    </div>
  );
}
