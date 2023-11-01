'use client'
import SettingsBankAccountForm from '@/components/settings/SettingsBankAccountForm';
import { Select, SelectItem } from "@nextui-org/select";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);


const Userbanks = () => {

  const openSweetAlert = () => {
    MySwal.fire({
      html: <SettingsBankAccountForm />, // Renderiza tu formulario dentro de SweetAlert
      showCancelButton: false,
      showConfirmButton: false,
      width: 832,
      customClass: {
        popup: 'rounded-[22px]', // Clase CSS para el contenedor del popup
      },
    });
  };


  const banksoptions = [
    {
      value: 'Mercantil',
      label: 'Mercantil',
    },
    {
      value: 'BDV',
      label: 'BDV',
    },
    { 
      value: 'Provincial', 
      label: 'Provincial' 
    },
    { 
      value: 'BNC', 
      label: 'BNC' 
    },
    { 
      value: 'Bancol del Tesoro', 
      label: 'Bancol del Tesoro' 
    }
  ];

  const coinsoptions = [
    {
      value: 'Peso Colombiano',
      label: 'Peso Colombiano',
    },
    {
      value: 'Peso Argentino',
      label: 'Peso Argentino',
    },
    {
      value: 'Soles',
      label: 'Soles',
    },
    {
      value: 'Bolívar Digital',
      label: 'Bolívar Digital',
    },
    {
      value: 'Dólar EEUU',
      label: 'Dólar EEUU',
    },
  ]


  return (
    <section className='h-screen pt-5 sm:pt-11'>
    <div className="flex flex-col gap-3 mx-auto max-w-sm sm:max-w-6xl">
      <h2 className="font-semibold text-soft_blue text-xl">
        Cuentas Agregadas
      </h2>
      <section className="">

      <div className="flex flex-col gap-8 bg-white rounded-3xl shadow-sm p-6 xms:min-w-[450px] md:hidden">
          <div className="grid grid-cols-5 gap-5">
            <p className="col-span-2 font-black">Titular</p>
            <p className="col-span-3">Daniel Mansutti</p>
          </div>

          <div className="grid grid-cols-5 gap-5">
            <p className="col-span-2 font-black">Banco</p>
            <p className="col-span-3">Banesco</p>
          </div>

          <div className="grid grid-cols-5 gap-5">
            <p className="col-span-2 font-black">Moneda</p>
            <p className="col-span-3">Bolivar D.</p>
          </div>

          <div className="grid grid-cols-5 gap-5">
            <p className="col-span-2 font-black">Estado</p>
            <p className="col-span-3">Aprobada</p>
          </div>
        </div>

        <div className="hidden md:flex flex-col">
          <div className="grid grid-cols-4 items-start gap-6 m-2 bg-white rounded-3xl p-3 pl-16 shadow-sm">
            <p className="font-black">Titular</p>
            {/* <p className="font-black">Banco</p> */}
            <div className="">
                    <Select
                      placeholder="Banco"
                      aria-label="Banco"
                      items={banksoptions}
                      classNames={{
                        trigger:
                          'flex flex-row py-0 shadow-none items-center justify-between w-[140px] bg-general_backgound rounded-3xl',
                        label:
                          'text-white rounded-full mr-2 shadow-none',
                        listbox:
                          'text-[#8C909A] border-solid border-[1px]  border-blue_500 rounded-md bg-white',
                        selectorIcon: "static",
                        popover: "w-[200px]"
                      }}
                    >
                      {banksoptions.map((option:any) => (
                        <SelectItem
                        classNames={{base:'hover:blue_gradient hover:text-white'}}
                        key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  <div className="">
                    <Select
                      placeholder="Moneda"
                      aria-label="Banco"
                      items={coinsoptions}
                      classNames={{
                        trigger:
                          'flex flex-row py-0 shadow-none items-center justify-between w-[140px] bg-general_backgound rounded-3xl',
                        label:
                          'text-white rounded-full mr-2 shadow-none',
                        listbox:
                          'text-[#8C909A] border-solid border-[1px]  border-blue_500 rounded-md bg-white',
                        selectorIcon: "static",
                        popover: "w-[200px]"
                      }}
                    >
                      {coinsoptions.map((option:any) => (
                        <SelectItem
                        classNames={{base:'hover:blue_gradient hover:text-white'}}
                        key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  {/* <p className="font-black">Moneda</p> */}

            <p className="font-black">Estado</p>
          </div>

          <div className="grid grid-cols-4 items-start  gap-6 m-2 bg-white rounded-3xl p-3 pl-16 shadow-sm">
            <p>Daniel Mansutti</p>
            <p>Banesco</p>
            <p>Bolivar D.</p>
            <p>Aprobada</p>
          </div>
        </div>


      </section>

      <div className="mt-3">
        <button onClick={openSweetAlert} className="blue_gradient w-full text-white rounded-3xl font-normal text-base py-3 sm:w-fit px-6">
          Añadir Cuenta
        </button>
      </div>
    </div>
    </section>
  );
};

export default Userbanks;
