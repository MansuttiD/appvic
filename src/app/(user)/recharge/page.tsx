'use client';

import BankAccountRercharge from '@/components/recharge/BankAccountRecharge';
import SectionBank from '@/components/recharge/SectionBank';
import SectionCancelPli from '@/components/recharge/SectionCancelPli';
import SectionCancelTransaction from '@/components/recharge/SectionCancelTransection';
import SectionCounts from '@/components/recharge/SectionCounts';
import SectionTransaction from '@/components/recharge/SectionTransaction';
import PinModalRecharge from '@/components/sharedRechargeWithdraw/PinModalRecharge';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Recharge() {
  const [currency, setCurrency] = useState('');
  const [bankActive, setBankActive] = useState('');
  const [confirmBank, setConfirmBank] = useState(false);
  const [nameInCount, setNameInCount] = useState('');
  const [confirmCount, setConfirmCount] = useState(false);
  const [confirmPin, setConfirmPin] = useState('');
  const [cancelTransaction, setCancelTransaction] = useState(false);
  const [finishTransaction, setFinishTransaction] = useState(false);


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

  const handleReturnToHome = () => {
    router.push('./');
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
          {finishTransaction
            ? '¡Todo luce bien!'
            : cancelTransaction
            ? 'Transaccion Cancelada'
            : 'Cargar'}
        </h2>
        <SectionBank
          confirmBank={confirmBank}
          cancelTransaction={cancelTransaction}
          currency={currency}
          handleChange={handleChange}
          bankActive={bankActive}
          setBankActive={setBankActive}
          handleCancelReturn={handleCancelReturn}
          handleConfirmBank={handleConfirmBank}
        />

        <SectionCounts
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

        <SectionTransaction
          finishTransaction={finishTransaction}
          senderInfo={senderInfo}
          handleReturnToHome={handleReturnToHome}
        />

        <SectionCancelTransaction
          cancelTransaction={cancelTransaction}
          confirmCount={confirmCount}
          senderInfo={senderInfo}
          sernderTransaction={sernderTransaction}
          handleReturnToHome={handleReturnToHome}
        />

        <SectionCancelPli
          handleCancelReturn={handleCancelReturn}
          handleReturnToHome={handleReturnToHome}
        />
      </div>
    </section>
  );
}
