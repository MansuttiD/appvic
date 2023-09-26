'use client';

import { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';

export default function Banks() {
  const [bankActive, setBankActive] = useState(null);

  const handleOpenBankActive = (id: any) => {
    setBankActive(id);
  };

  const handleCloseBankActive = () => {
    setBankActive(null);
  };

  return (
    <section className=" mb-7 px-5 w-full max-w-[335px]">
      <h2 className="text-soft_blue font-semibold text-md mb-2">
        Pares de intercamibio
      </h2>
      <div>
        <div
          className={`transition-all duration-500 ${
            bankActive ? 'h-full' : 'h-[70px]'
          } flex flex-col  gap-2 mx-auto min-w-[212px] max-w-[289px] overflow-y-hidden mb-2`}
        >
          <div
            className={`transition-all duration-500 ${
              bankActive ? 'h-full' : 'h-[70px]'
            } grid grid-cols-1  p-4 blue_gradient-2 shadow-faqbox  rounded-[25px]`}
          >
            <div className="grid  mb-7 grid-cols-5">
              <div className="flex col-start-1 col-end-5 gap-5 items-center">
                <div className="bg-white p-2 rounded-[14px] text-blue_500 font-semibold">
                  BBVA
                </div>
                <div className="py-[10px] text-white font-semibold">BBVA</div>
              </div>
              <img
                onClick={() => handleOpenBankActive(1)}
                className={`${
                  bankActive ? 'hidden' : ''
                } text-[#ffffff] text-[22px] justify-self-end self-center`}
                src="\images\pli\arrowDawn.svg"
                alt="Dawn"
              />
              <img
                onClick={handleCloseBankActive}
                className={`${
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
          <div className="grid grid-cols-5 blue_gradient-2  text-white rounded-[18px] py-2 px-4 mb-1">
            <p>Buy</p>
            <p>0.00</p>
            <p>0</p>
            <p>15</p>
            <BiDotsVerticalRounded className="text-white text-[18px] justify-self-end self-center" />
          </div>
          <div className="grid grid-cols-5 bg-white text-blue_500  rounded-[18px] py-2 px-4 ">
            <p>Buy</p>
            <p>0.00</p>
            <p>0</p>
            <p>4</p>
            <BiDotsVerticalRounded className="text-blue_500 text-[18px] justify-self-end self-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
