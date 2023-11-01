'use client';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Bank from './Bank';
import BanksLittleMenu from './BanksLittleMenu';

const MySwal = withReactContent(Swal);

export default function ExchangePairs() {
  const [bankActive, setBankActive] = useState(null);
  const [sellMenuActive, setSellMenuActive] = useState(false);
  const [buyMenuActive, setBuyMenuActive] = useState(false);

  const handleOpenBankActive = (id: any) => {
    Swal.close();
    if (bankActive == id) {
      setBankActive(null);
    } else {
      setBankActive(id);
    }
  };

  useEffect(() => {
    if (sellMenuActive) {
      MySwal.close();
      MySwal.fire({
        html: <BanksLittleMenu />,
        target: '#conatinerBank1',
        showCancelButton: false,
        showConfirmButton: false,
        width: 200,
        backdrop: false,
        timer: 15000,
        position: 'bottom-end',
        background: '#F8F8F6',
        customClass: {
          container:
            'absolute bg-inherit sm:translate-x-2/3 translate-y-10 overflow-y-hidden',
          popup: 'overflow-y-hidden',
        },
      });
      setSellMenuActive(false); // Restablece el estado después de abrir el menú
    }
  }, [sellMenuActive]);

  useEffect(() => {
    if (buyMenuActive) {
      MySwal.close();
      MySwal.fire({
        html: <BanksLittleMenu />,
        target: '#conatinerBank1',
        showCancelButton: false,
        showConfirmButton: false,
        width: 200,
        backdrop: false,
        timer: 15000,
        position: 'bottom-end',
        background: '#F8F8F6',
        customClass: {
          container:
            'absolute bg-inherit sm:translate-x-2/3 translate-y-10 overflow-y-hidden',
          popup: 'overflow-y-hidden',
        },
      });
      setBuyMenuActive(false); // Restablece el estado después de abrir el menú
    }
  }, [buyMenuActive]);

  return (
    <section className=" mb-7 px-0 w-full max-w-[350px] mx-auto md:px-5  md:max-w-[335px]">
      <h2 className="text-soft_blue font-semibold text-md mdl:mb-8">
        Pares de intercamibio
      </h2>
      <Bank
        bankActive={bankActive}
        handleOpenBankActive={handleOpenBankActive}
        setBuyMenuActive={setBuyMenuActive}
        setSellMenuActive={setSellMenuActive}
      />
    </section>
  );
}
