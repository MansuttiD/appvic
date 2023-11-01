import Transaction from './Transaction';

export default function Transactions() {
  return (
    <section className="max-w-[350px] w-full row-start-1 row-end-2 col-start-2 col-end-3 mx-auto">
      <div className="flex flex-col align-middle md:px-5 px-0 gap-2 mb-5">
        <h2 className="text-soft_blue font-semibold text-md mdl:mb-5">
          {' '}
          Transacciones
        </h2>
        <section className="bg-[#FFF] bg-sereno bg-no-repeat bg-right-top py-6 px-11 rounded-3xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:flex md:flex-col md:justify-center">
          <h3 className="text-base font-semibold">Disponible</h3>
          <p className="text-2xl font-black">$20,80</p>
          <p className="text-base font-medium">$135,950 Total</p>
        </section>
        <div className="flex flex-col gap-2">
          <Transaction />
          <Transaction />
        </div>
      </div>
    </section>
  );
}
