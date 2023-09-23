'use client';

const ExecutionPanel = () => {
  return (
    <div className="h-screen max-w-xs mx-auto">
      <header className="  mb-5  flex-col">
        <h1 className="font-semibold text-xl mb-6">Panel de ejecucion</h1>
        <div className="flex gap-4 font-normal text-sm mb-2">
          <p className="text-sm">Tomadas</p>
          <p className="text-sm">Completadas</p>
        </div>
        <div className="grid grid-cols-2 bg-white rounded-full">
          <input
            className="px-4 py-1 outline-none rounded-s-full"
            type="text"
            placeholder="Buscar"
          />
          <select className="blue_gradient-2 px-6 py-1 rounded-full text-white">
            <option value="">ID de Usuario</option>
            <option value="">ID de Usuario2</option>
          </select>
        </div>
      </header>
      <section className="flex flex-col gap-3">
        <table className="bg-white rounded-3xl grid grid-cols-[2fr,2fr,1fr] px-6 py-4 md:hidden">
          <thead>
            <tr className="h-full flex flex-col justify-evenly">
              <th className="text-start">Tipo</th>
              <th className="text-start">Fecha</th>
              <th className="text-start">Método</th>
              <th className="text-start">Monto</th>
              <th className="text-start">RSV</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-full flex flex-col justify-evenly gap-4">
              <td className="text-start">
                <span className="text-green-600 text-base font-[800]">+</span>
                Buy
              </td>
              <td className="text-start">26/08/23 - 18:05</td>
              <td className="text-start">Banesco</td>
              <td className="text-start">$880</td>
              <td className="text-start">880eUSD</td>
            </tr>
          </tbody>
          <div className="justify-self-end flex flex-col justify-between">
            <img className="" src=".\images\pli\clock.svg" alt="" />
            <img className="" src=".\images\pli\arrowDawn.svg" alt="" />
          </div>
        </table>
      </section>
    </div>
  );
};

export default ExecutionPanel;
