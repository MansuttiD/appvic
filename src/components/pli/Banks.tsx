'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BanksLittleMenu from './BanksLittleMenu';

const MySwal = withReactContent(Swal);

export default function Banks() {
  const [bankActive, setBankActive] = useState(null);

  const handleOpenBankActive = (id: any) => {
    Swal.close();
    if (bankActive == id) {
      setBankActive(null);
    } else {
      setBankActive(id);
    }
  };

  const handleBuyMinMenu = () => {
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
  };

  const handleSellMinMenu = () => {
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
        container: 'absolute bg-inherit sm:translate-x-2/3 translate-y-[40%]',
      },
    });
  };

  return (
    <section className=" mb-7 px-0 w-full max-w-[350px] mx-auto md:px-5  md:max-w-[335px]">
      <h2 className="text-soft_blue font-semibold text-md mdl:mb-8">
        Pares de intercamibio
      </h2>
      <div className="felx flex-col">
        <div
          id="conatinerBank1"
          className={`${
            bankActive ? 'gap-2' : ''
          } flex flex-col  mx-auto min-w-[212px] max-w-[350px] mb-2 relative`}
        >
          <div
            className={` transition-all duration-1000  ${
              bankActive ? '' : 'h-[76px]'
            } grid grid-cols-1 overflow-y-hidden p-4 blue_gradient-2  rounded-[25px]`}
          >
            <div
              className="grid  mb-7 grid-cols-5 cursor-pointer"
              onClick={() => handleOpenBankActive(1)}
            >
              <div className="flex col-start-1 col-end-5 gap-5 items-center">
                <div className="bg-white p-2 rounded-[14px] text-blue_500 font-semibold">
                  BBVA
                </div>
                <div className="py-[10px] text-white font-semibold">BBVA</div>
              </div>
              <div
                className={` ${
                  bankActive ? 'hidden' : ''
                } text-[#ffffff] text-[22px] justify-self-end self-center`}
              >
                <Image
                  src="/images/pli/arrowDawn.svg"
                  alt="Dawn"
                  width={15} // Añade el ancho de la imagen
                  height={15} // Añade la altura de la imagen
                />
              </div>
              <img
                className={` ${
                  bankActive ? '' : 'hidden'
                } text-[#ffffff] text-[22px] justify-self-end self-center`}
                src="\images\pli\arrowUp.svg"
                alt="UP"
              />
            </div>
            <ul className="text-white font-semibold grid grid-cols-5 col-start-1 col-end-5 row-start-2 gap-2 row-end-3">
              <li>Tipo</li>
              <li>PL</li>
              <li>#</li>
              <li>TD</li>
            </ul>
          </div>
          <div
            className={`overflow-y-hidden transition-all duration-300 ${
              bankActive ? 'py-2 px-4 mb-1' : 'h-0'
            }   grid grid-cols-5 blue_gradient-2  text-white rounded-[18px] relative`}
          >
            <p>Buy</p>
            <p>0.00</p>
            <p>0</p>
            <p>15</p>
            <BiDotsVerticalRounded
              className="text-white text-[18px] justify-self-end self-center cursor-pointer"
              onClick={handleBuyMinMenu}
            />
          </div>
          <div
            className={`overflow-y-hidden transition-all duration-300 ${
              bankActive ? 'py-2 px-4' : 'h-0'
            } grid grid-cols-5 bg-white text-blue_500  rounded-[18px]  `}
          >
            <p>Sell</p>
            <p>0.00</p>
            <p>0</p>
            <p>4</p>
            <BiDotsVerticalRounded
              onClick={handleSellMinMenu}
              className="text-blue_500 text-[18px] justify-self-end self-center cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
