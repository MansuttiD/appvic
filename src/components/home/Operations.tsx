import Image from "next/image";

const Operations = () => {
    return (
      <>
        <div className="flex flex-col justify-center mb-[35px] md:mb-[45px]">
          <h2 className="text-xl text-[#242C41] font-semibold mb-[25px]">Operaciones</h2>
          <ul className="flex flex-col text-[#242C41] gap-4 md:grid md:grid-cols-3">
            <li className="flex gap-4 items-center bg-[#FFF] rounded-3xl p-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="blue_gradient p-3 rounded-[15px]">
                <Image src="\images\home\reload.svg" alt="Reacargar" width={26} height={18}/>
              </div>
              <span className="font-semibold text-base">Recargar Saldo</span>
              </li>
              <li className="flex gap-4 items-center bg-[#FFF] rounded-3xl p-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="blue_gradient px-[13px] py-[9px] rounded-[15px]">
                <Image src="\images\home\send.svg" alt="Enviar" width={26} height={18}/>
              </div>
              <span className="font-semibold text-base">Enviar Saldo</span>
              </li>
              <li className="flex gap-4 items-center bg-[#FFF] rounded-3xl p-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="blue_gradient px-[13px] py-[9px] rounded-[15px]">
                <Image src="\images\home\remove.svg" alt="Retirar" width={26} height={18} />
              </div>
              <span className="font-semibold text-base">Retirar Saldo</span>
              </li>
          </ul>
        </div>
      </>
    );
  };
  
  export default Operations;
  