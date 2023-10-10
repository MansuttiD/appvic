import { useState } from 'react';
import Swal from 'sweetalert2';

const closeButton = () => {
  Swal.close();
};

export default function MyBankAccount() {
  const [boxClicked, setBoxClicked] = useState(false);
  const [showAcceptButton, setShowAcceptButton] = useState(false);

  const handleBoxClick = () => {
    setBoxClicked(!boxClicked);
    setShowAcceptButton(!showAcceptButton);
  };

  const boxClassName = `rounded-3xl p-5 text ${
    boxClicked ? 'bg-blue-500 text-white' : 'bg-white shadow-shadowBanks'
  }`;

  return (
    <div className="text-left text-soft_blue max-w-sm sm:max-w-6xl">
      <h1 className="text-xl  mb-5">
        Mis cuentas <span className="font-semibold">Banesco</span>
      </h1>

      <section className="flex flex-col gap-4 p-4">
        <div onClick={handleBoxClick} className={boxClassName}>
          <span className="font-semibold">Cuenta Banesco</span>
          <div>Cuenta de mi mama</div>
        </div>

        <div className='flex gap-5'>

        <button
          onClick={closeButton}
          type="button"
          className="w-full text-[#808080] border-[1px] border-[#808080] rounded-3xl font-normal text-base py-2 sm:py-3 sm:px-5 md:py-3 sm:w-fit md:px-14"
        >
          Cancelar
        </button>

        {showAcceptButton && (
          <button
            onClick={closeButton}
            type="button"
            className="blue_gradient text-white rounded-3xl font-normal text-base px-3 xs:py-2 xs:px-10 md:py-4"
          >
            Confirmar Cuenta
          </button>
        )}

        </div>




      </section>
    </div>
  );
}
