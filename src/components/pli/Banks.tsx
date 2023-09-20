import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoMdArrowDropup } from 'react-icons/io';
import { RiArrowDownSFill } from 'react-icons/ri';

export default function Banks() {
  return (
    <section className="general_backgound mb-7">
      <div className="flex flex-col align-middle px-5 gap-2 mb-5">
        <h2 className="text-soft_blue font-semibold text-md">
          Pares de cambio
        </h2>
        <div className="flex flex-row p-[13px] shadow-faqbox justify-between rounded-[13px] items-center">
          <div className="flex gap-5">
            <div className="blue_gradient-2 p-2 rounded-[13px] text-white">
              BNC
            </div>
            <div className="py-[10px] text-blue_500">BNC</div>
          </div>
          <RiArrowDownSFill className="text-[#1277DD] text-[18px]" />
        </div>
      </div>

      {/* <div>
        <div className="flex flex-col align-middle px-5 gap-2">
          <div className="flex flex-col p-4 blue_gradient-2 shadow-faqbox  rounded-[25px] items-center">
            <div className="flex flex-row items-center mb-7">
              <div className="flex flex-row gap-5 items-center">
                <div className="bg-white p-2 rounded-[14px] text-blue_500 font-semibold">
                    BBAVA
                </div>
                <div className="py-[10px] text-white font-semibold">BBAVA</div>
              </div>
              <IoMdArrowDropup className="text-[#ffffff] text-[22px]" />
            </div>
            <div className="grid grid-cols-5 text-white font-semibold">
              <span>Tipo</span>
              <span>PL</span>
              <span>#</span>
              <span>TD</span>
            </div>
          </div>

          <div className="flex flex-row blue_gradient-2 align-middle text-white rounded-[18px] py-2 justify-around mb-1">
            <p>Buy</p>
            <p>0.00</p>
            <p>0</p>
            <p>15</p>
            <BiDotsVerticalRounded className="text-white text-[18px]" />
          </div>
          <div className="flex flex-row align-middle text-blue_500  rounded-[18px] py-2 justify-around shadow-dadada">
          <p>Buy</p>
            <p>0.00</p>
            <p>0</p>
            <p>4</p>
            <BiDotsVerticalRounded className="text-blue_500 text-[18px]" />
          </div>
          
        </div>
      </div> */}



        <div className="flex flex-col px-5 gap-2">
          <div className="grid grid-rows-2 p-4 blue_gradient-2 shadow-faqbox  rounded-[25px] items-center">
            <div className="grid items-center mb-7 grid-cols-5">
              <div className="flex flex-row col-start-1 col-end-5 gap-5 items-center">
                <div className="bg-white p-2 rounded-[14px] text-blue_500 font-semibold">
                    BBAVA
                </div>
                <div className="py-[10px] text-white font-semibold">BBAVA</div>
              </div>


              <IoMdArrowDropup className="text-[#ffffff] text-[22px] " />

            </div>
            <ul className="text-white font-semibold grid grid-cols-4 col-start-1 col-end-5 row-start-2 row-end-3">
              <li>Tipo</li>
              <li>PL</li>
              <li>#</li>
              <li>TD</li>
            </ul>
          </div>

          <div className="flex flex-row blue_gradient-2 align-middle text-white rounded-[18px] py-2 justify-around mb-1">
            <p>Buy</p>
            <p>0.00</p>
            <p>0</p>
            <p>15</p>
            <BiDotsVerticalRounded className="text-white text-[18px]" />
          </div>
          <div className="flex flex-row align-middle text-blue_500  rounded-[18px] py-2 justify-around shadow-dadada">
          <p>Buy</p>
            <p>0.00</p>
            <p>0</p>
            <p>4</p>
            <BiDotsVerticalRounded className="text-blue_500 text-[18px]" />
          </div>
          
        </div>

    </section>
  );
}
