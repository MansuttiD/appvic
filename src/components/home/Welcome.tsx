const Welcome = () => {
  return (
    <>
      <div className=" grid grid-cols-1 gap-7 mb-[35px]  md:grid-cols-[2fr,1fr] md:grid-rows-[25%,75%] md:mb-[45px]">
        <h1 className="font-medium text-[40px] text-[#242C41] col-span-full hidden md:inline-block" >Bienvenido, <span className="font-black">Carlos Añez</span></h1>
        <section className="bg-[#FFF] bg-sereno bg-no-repeat bg-right-top py-6 px-11 rounded-3xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:flex md:flex-col md:justify-center">
            <h3 className="text-base font-semibold">Balance Total</h3>
            <p className="text-2xl font-black">USDT 10.635,950</p>

        </section>
        <section className="bg-[#FFF] rounded-3xl flex items-center justify-between p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:flex-col md:items-start">
            <h3 className="text-base font-semibold">Sube al tier 1</h3>
            <p className="hidden md:inline-block">Actualmente tu cuenta se encuentra en el tier 0</p>
            <button className="text-blue_500 text-sm font-normal cursor-s-resize rounded-xl max-w-[124px] bg-[#FFF] border-blue_500 border-2 border-solid py-2 px-5 ">Adquirir Plan</button>
        </section>
      </div>
    </>
  );
};

export default Welcome;
