import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoMdArrowDropup } from 'react-icons/io';

export default function Banks() {
  return (
    <section className="general_backgound mb-7">
        <div className="flex flex-col px-5 gap-2">
          <div className="grid grid-cols-1 p-4 blue_gradient-2 shadow-faqbox  rounded-[25px]">
            <div className="grid  mb-7 grid-cols-5">
              <div className="flex col-start-1 col-end-5 gap-5 items-center">
                <div className="bg-white p-2 rounded-[14px] text-blue_500 font-semibold">
                    BBVA
                </div>
                <div className="py-[10px] text-white font-semibold">BBVA</div>
              </div>
              <IoMdArrowDropup className="text-[#ffffff] text-[22px] justify-self-end self-center" />
            </div>
            <ul className="text-white font-semibold grid grid-cols-5 col-start-1 col-end-5 row-start-2 row-end-3">
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
          <div className="grid grid-cols-5  text-blue_500  rounded-[18px] py-2 px-4 shadow-dadada">
          <p>Buy</p>
            <p>0.00</p>
            <p>0</p>
            <p>4</p>
            <BiDotsVerticalRounded className="text-blue_500 text-[18px] justify-self-end self-center" />
          </div>
        </div>
    </section>
  );
}
