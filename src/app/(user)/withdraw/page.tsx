'use client';

import BankAccountRercharge from '@/components/recharge/BankAccountRecharge';
import PinModalRecharge from '@/components/sharedRechargeWithdraw/PinModalRecharge';
import SectionBankW from '@/components/withdraw/SectionBankW';
import SectionCountsW from '@/components/withdraw/SectionCountsW';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Withdraw() {
  const [currency, setCurrency] = useState('');
  const [bankActive, setBankActive] = useState('');
  const [confirmBank, setConfirmBank] = useState(false);
  const [cancelTransaction, setCancelTransaction] = useState(false);
  const [finishTransaction, setFinishTransaction] = useState(false);
  const [confirmCount, setConfirmCount] = useState(false);
  const [nameInCount, setNameInCount] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const router = useRouter();

  const MySwal = withReactContent(Swal);

  const handleChange = (value: any) => {
    if (value.target.value) {
      setCurrency(value.target.value);
    } else {
      setCurrency('');
    }
  };

  const handleCancelReturn = () => {
    if (bankActive) {
      setBankActive('');
    } else {
      router.push('./');
    }
  };

  const handleConfirmBank = () => {
    setConfirmBank(!confirmBank);
  };

  const handleBankAccount = () => {
    MySwal.fire({
      html: <BankAccountRercharge />,
      showCancelButton: false,
      showConfirmButton: false,
      width: 832,
      customClass: {
        popup: 'rounded-[22px]',
      },
    });
  };

  const handleCancelReturn2 = () => {
    if (confirmPin == 'correct') {
      MySwal.fire({
        title: 'Cancelar Carga de Fondos',
        text: '¿Deseas cancelar la carga de fondos?Ten en cuenta que, si ya enviaste los fondos, podria aplicarse un timepo de espera de 24h para la acreditación en tu balance',
        confirmButtonText: 'Confirmar',
        buttonsStyling: false,
        customClass: {
          title: 'text-soft_blue font-black text-md',
          container: 'text-base font-normal text-popup_text',
          popup: 'rounded-[22px] w-[630px]',
          confirmButton:
            'rounded-[50px] px-[25px] py-[14px] text-white blue_gradient  w-[200px] sm:w-[500px] text-base font-normal',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          setCancelTransaction(true);
        }
      });
    } else if (nameInCount) {
      setNameInCount('');
    } else {
      setConfirmBank(!bankActive);
    }
  };

  const handleConfirmCount = () => {
    if (confirmPin) {
      setFinishTransaction(true);
    } else if (confirmCount) {
      MySwal.fire({
        html: (
          <PinModalRecharge
            setConfirmPin={setConfirmPin}
            confirmPin={confirmPin}
          />
        ),
        showCancelButton: false,
        showConfirmButton: false,

        customClass: {
          popup: 'rounded-[22px] min-w-[250px] w-full max-w-[384px]',
        },
      });
    } else {
      setConfirmCount(true);
    }
  };

  const senderInfo = {
    name: 'Julio Zambrano',
    id: 'V13456789',
    numberCount: '0015492250123554879',
    typeCount: 'Corriente',
    bank: 'Banco de Venezuela',
  };

  const sernderTransaction = '84987456464564';

  return (
    <section className="min-h-screen p-3 max-w-7xl mx-auto ">
      <div className="flex flex-col">
        <h2 className="text-[40px] font-medium text-soft_blue mb-7 mt-11">
          Retirar
        </h2>
        <SectionBankW
          confirmBank={confirmBank}
          cancelTransaction={cancelTransaction}
          currency={currency}
          handleChange={handleChange}
          bankActive={bankActive}
          setBankActive={setBankActive}
          handleCancelReturn={handleCancelReturn}
          handleConfirmBank={handleConfirmBank}
        />
        <SectionCountsW
          confirmBank={confirmBank}
          cancelTransaction={cancelTransaction}
          finishTransaction={finishTransaction}
          confirmCount={confirmCount}
          setNameInCount={setNameInCount}
          nameInCount={nameInCount}
          handleBankAccount={handleBankAccount}
          confirmPin={confirmPin}
          senderInfo={senderInfo}
          sernderTransaction={sernderTransaction}
          handleCancelReturn2={handleCancelReturn2}
          handleConfirmCount={handleConfirmCount}
        />
      </div>
    </section>
  );
}
