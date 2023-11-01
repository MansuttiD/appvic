import { HiOutlineClock } from 'react-icons/hi';

export default function Transaction() {
  return (
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
  );
}
