import { HiOutlineClock } from 'react-icons/hi';

export default function Transactions() {
  return (
    <section className="max-w-xs row-start-1 row-end-2 col-start-2 col-end-3 mx-auto">
      <div className="flex flex-col align-middle px-5 gap-2 mb-5">
        <h2 className="text-soft_blue font-semibold text-md mdl:mb-5"> Transacciones</h2>
        <section className="bg-[#FFF] bg-sereno bg-no-repeat bg-right-top py-6 px-11 rounded-3xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:flex md:flex-col md:justify-center">
          <h3 className="text-base font-semibold">Disponible</h3>
          <p className="text-2xl font-black">$20,80</p>
          <p className="text-base font-medium">$135,950 Total</p>
        </section>
        <section className="flex flex-col bg-[#FFF] rounded-3xl justify-between p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:flex-col md:items-start">
          <div className="flex justify-between">
            <h3 className="text-base font-semibold">Mercantil</h3>
            <HiOutlineClock className="text-[#1277DD] text-[24px]" />
          </div>
          <h4>
            <span className="text-[#00BA07]">Buy</span> $9446,3
          </h4>
          <h4>VOTCs Available, Ocucupied</h4>
        </section>

        <section className="flex flex-col bg-[#FFF] rounded-3xl justify-between p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:flex-col md:items-start">
          <div className="flex justify-between">
            <h3 className="text-base font-semibold">Mercantil</h3>
            <HiOutlineClock className="text-[#1277DD] text-[24px]" />
          </div>
          <h4>
            <span className="text-[#BA0000]">Sell</span> $9446,3
          </h4>
          <h4>VOTCs Available, Ocucupied</h4>
        </section>
      </div>
    </section>
  );
}
