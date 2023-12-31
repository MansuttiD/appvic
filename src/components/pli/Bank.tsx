import Image from 'next/image';
import { BiDotsVerticalRounded } from 'react-icons/bi';

export default function Bank({
  bankActive,
  handleOpenBankActive,
  setBuyMenuActive,
  setSellMenuActive,
}: any) {
  return (
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
            <Image
              className={` ${
                bankActive ? '' : 'hidden'
              } text-[#ffffff] justify-self-end self-center`}
              src="\images\pli\arrowUp.svg"
              alt="UP"
              width={15}
              height={16}
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
            onClick={() => setBuyMenuActive(true)}
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
            onClick={() => setSellMenuActive(true)}
            className="text-blue_500 text-[18px] justify-self-end self-center cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
