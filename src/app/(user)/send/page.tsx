'use client';

import SendSecondSection from '@/components/send/SendSecondSection';
import SendSectionMain from '@/components/send/SendSectionMain';
import PinModalRecharge from '@/components/sharedRechargeWithdraw/PinModalRecharge';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Send() {
  const [section, setSection] = useState('main');
  const [confirmPin, setConfirmPin] = useState('');
  const [lastSend, setLastSend] = useState({
    id: '',
    image: '',
    name: '',
    email: '',
  });
  const router = useRouter();
  const MySwal = withReactContent(Swal);

  const handleCancelReturn = () => {
    router.push('./');
  };

  const handleChangeSection = () => {
    setSection('secondSection');
  };

  const handleConfirmPayment = () => {
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
  };

  return (
    <section className="min-h-screen p-3 max-w-7xl mx-auto ">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-11">
          <h2 className="font-medium text-[40px] text-soft_blue">
            Enviar fondos
          </h2>
          <div className="bg-white rounded-3xl max-w-sm w-full flex gap-4 py-3 pl-5">
            <Image
              src={'./images/recharge/magnifyingGlass.svg'}
              alt=""
              width={20}
              height={20}
            />
            <input
              className="outline-none"
              type="text"
              placeholder="@etiqueta"
            />
          </div>
        </div>
        <SendSectionMain
          section={section}
          setLastSend={setLastSend}
          lastSend={lastSend}
          handleCancelReturn={handleCancelReturn}
          handleChangeSection={handleChangeSection}
        />
        <SendSecondSection
          section={section}
          lastSend={lastSend}
          handleCancelReturn={handleCancelReturn}
          handleConfirmPayment={handleConfirmPayment}
        />
      </div>
    </section>
  );
}
