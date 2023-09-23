'use client';

const ExecutionPanel = () => {
  return (
    <div className="h-screen max-w-sm mx-auto sm:max-w-5xl">
      <header className="mb-5 sm:flex justify-between items-center sm:pt-11">
        <h1 className="font-semibold text-xl mb-6 sm:mb-0">
          Panel de ejecucion
        </h1>
        <div className="flex gap-4 font-normal text-sm mb-2 sm:mb-0">
          <p className="text-sm">Tomadas</p>
          <p className="text-sm">Completadas</p>
        </div>
        <div className="grid grid-cols-2 bg-white rounded-full">
          <input
            className="px-4 py-1 outline-none rounded-s-full"
            type="text"
            placeholder="Buscar"
          />
          <select className="blue_gradient-2 px-6 py-1 rounded-full text-base text-white">
            <option value="">ID de Usuario</option>
            <option value="">ID de Usuario2</option>
          </select>
        </div>
      </header>
      <section className="flex flex-col gap-3">
        <table className="bg-white rounded-3xl grid grid-cols-[2fr,2fr,1fr] px-6 py-4 md:hidden">
          <thead>
            <tr className="h-full flex flex-col justify-evenly gap-2 justify-items-center items-start">
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Método</th>
              <th>Monto</th>
              <th>RSV</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-full flex flex-col justify-evenly gap-2 justify-items-center">
              <td>
                <span className="text-green-600 text-base font-[800]">+</span>
                Buy
              </td>
              <td>26/08/23 - 18:05</td>
              <td>Banesco</td>
              <td>$880</td>
              <td>880eUSD</td>
            </tr>
          </tbody>
          <div className="justify-self-end flex flex-col justify-between">
            <img className="" src=".\images\pli\clock.svg" alt="" />
            <img className="" src=".\images\pli\arrowDawn.svg" alt="" />
          </div>
        </table>
        <div className="hidden sm:flex">
          <table className="flex flex-col w-full">
            <thead className="w-full mb-4 ">
              <tr className="bg-white w-full rounded-3xl grid grid-cols-6 pl-8 pr-3 py-3">
                <th>Tipo</th>
                <th>Fecha</th>
                <th>Método</th>
                <th>Monto</th>
                <th>RSV</th>
              </tr>
            </thead>
            <tbody className="mb-3">
              <tr className="bg-white w-full rounded-3xl grid grid-cols-6 pl-8 pr-3 items-center justify-items-center py-2">
                <td>
                  <span className="text-green-600 text-base font-[800]">+</span>
                  Buy
                </td>
                <td>26/08/23 - 18:05</td>
                <td>Banesco</td>
                <td>$880</td>
                <td>880eUSD</td>
                <td className="w-full flex justify-around items-center">
                  <span className="py-1 px-6 rounded-3xl white_grey_gradient">05:00</span>
                  <img className="" src=".\images\pli\arrowDawn.svg" alt="" />
                </td>
              </tr>
            </tbody>
            <tbody className="mb-3">
              <tr className="bg-white w-full rounded-3xl grid grid-cols-6 pl-8 pr-3 items-center justify-items-center py-2">
                <td>
                  <span className="text-green-600 text-base font-[800]">+</span>
                  Buy
                </td>
                <td>26/08/23 - 18:05</td>
                <td>Banesco</td>
                <td>$880</td>
                <td>880eUSD</td>
                <td className="w-full flex justify-around items-center">
                  <span className="py-1 px-6 rounded-3xl white_grey_gradient">05:00</span>
                  <img className="" src=".\images\pli\arrowDawn.svg" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ExecutionPanel;
