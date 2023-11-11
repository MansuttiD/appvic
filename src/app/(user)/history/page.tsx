import BodyTableHistory from "@/components/history/BodyTableHistory";


export default function History() {

  return (
    <section className="max-w-[370px]  mx-auto sm:max-w-lg md:max-w-4xl lg:max-w-6xl xl:max-w-7xl pt-10">
    <h2 className="text-xl font-semibold mb-[25px]">Historial</h2>
    <ul className="flex flex-col gap-[10px] md:hidden">
        <li className="bg-[#FFF] rounded-[22px] px-[24px] py-[18px] flex justify-between items-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="text-[#242C41]">
            <h6 className="text-base font-normal">John Miguel</h6>
            <p className="text-xs font-normal opacity-50">18 ago. - Fondos enviados</p>
          </div>
          <p className="text-[#242C41]">+ 2,504 USDC</p>
        </li>
    </ul>
    <table className="hidden mb-[15px] md:flex md:flex-col md:gap-[15px]">
      <thead className="bg-[#FFF] rounded-3xl py-[14px] px-[33px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <tr className="grid grid-cols-5 ">
      <th>Transación</th>
      <th>Cantidad</th>
      <th>Metodo</th>
      <th>Fecha</th>
      <th>Estado</th>
    </tr>
      </thead>
      <BodyTableHistory/>
      <BodyTableHistory/>
    </table>
</section>
  );
}
