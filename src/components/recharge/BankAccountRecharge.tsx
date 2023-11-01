import { Controller, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import MessageConfirm from './MessageConfirm';

interface FormData {  
  accountHolder: string;  
  file1: any|undefined;  
  file2: any|undefined;  
  address: string;  
  banks: string;
  thirtaccount: string;
}

export default function BankAccountRercharge() {
  const { register, handleSubmit, watch, control } = useForm<FormData>();

  const picture1 = watch('file1');
  const picture2 = watch('file2');

  const watchAllFields = watch();
  const allFieldsFilled =
    Object.values(watchAllFields).every((field) => field) &&
    picture1?.[0] &&
    picture2?.[0];

    const MySwal = withReactContent(Swal);

  const onSubmit = (formData: FormData) => {
    console.log(formData);

    // Swal.fire({
    //   title: 'Estado Pendiente',
    //   text: 'Sus documentos fueron recibidos satisfactoriamente, el estado de su cuenta será confirmado entre 24 y 48 horas hábiles.',
    //   confirmButtonText: 'Confirmar',
    //   buttonsStyling: false,
    //   customClass: {
    //     title:'text-base font-semibold',
    //     popup: 'rounded-[22px]',
    //     confirmButton: 'blue_gradient text-white rounded-3xl px-36 py-3', 
    //   },
    // });

    MySwal.fire({
        html:<MessageConfirm/>,
        showConfirmButton:false,
        customClass:{
            popup:'rounded-3xl max-w-[384px]'
        }
    })
  };  

  const closeButton = () => {
    Swal.close();
  };

  return (
    <section className="general_backgound mb-7 pt-5 flex flex-col gap-3.5 ">
      <h2 className="font-black text-dark_blue text-md text-left">
        Añadir cuenta nueva
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <section className="flex flex-col gap-3 md:flex-row">
          <div className="md:w-1/2 mb-4 flex flex-col">
            <label
              className="text-left font-black text-dark_blue text-base mb-1"
              htmlFor="accountHolder"
            >
              Nombre del titular
            </label>
            <div className="pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center gap-1">
              <input
                placeholder="Titular de la cuenta"
                className="h-8 w-full outline-none ml-2"
                type="text"
                id="accountHolder"
                {...register('accountHolder', {})}
              />
            </div>
          </div>

          <div className="md:w-1/2 mb-4 flex flex-col">
            <label className="text-left font-black text-dark_blue text-base mb-1">
              ¿Es una cuenta de tercero?
            </label>
            <Controller
              name="thirtaccount"
              control={control}
              defaultValue="No"
              render={({ field }) => (
                <select
                  {...field}
                  className="text-grey_medium pl-2 h-[39px] flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1"
                >
                  <option className="text-left font-black text-base" value="no">
                    No
                  </option>
                  <option
                    className="text-left font-black  text-base"
                    value="si"
                  >
                    Si
                  </option>
                </select>
              )}
            />
          </div>
        </section>

        <label className="text-left font-black text-dark_blue text-base mb-1">
          Banco
        </label>
        <Controller
          name="banks"
          control={control}
          defaultValue="Banesco"
          render={({ field }) => (
            <select
              {...field}
              className="text-grey_medium pl-2 h-[39px] flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1"
            >
              <option
                className="text-left font-black text-base"
                value="Banesco"
              >
                Banesco
              </option>
              <option
                className="text-left font-black  text-base"
                value="Mercantil"
              >
                Mercantil
              </option>
            </select>
          )}
        />

        <div className="w-full mb-4 flex flex-col">
          <label
            className="text-left font-black text-dark_blue text-base mb-1"
            htmlFor="address"
          >
            Dirección
          </label>
          <div className="pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1">
            <input
              placeholder="658496502145635520"
              className="h-12 w-full ml-2 outline-none"
              type="number"
              id="address"
              autoComplete="off"
              {...register('address', {})}
            />
          </div>
        </div>


        <section className="flex flex-col gap-3 md:flex-row">
          <div className="md:w-1/2 mb-4 flex flex-col relative">
            <label
              className="text-left font-black text-dark_blue text-base mb-1"
              htmlFor="file1"
            >
              Documento de identidad
            </label>
            <div className="rounded-3xl p-1 flex items-center">
              <input
                type="file"
                id="file1"
                {...register('file1')}
                className="hidden"
              />
              <label
                htmlFor="file1"
                className=" text-[#808080] border-[1px] border-[#808080] px-4 py-2 rounded-[20px] mr-2"
              >
                Subir
              </label>
              <span>{`${
                picture1 && picture1[0] ? picture1[0].name : 'Sube imagen'
              }`}</span>
            </div>
          </div>

          <div className="md:w-1/2 mb-4 flex flex-col relative ">
            <label
              className="text-left font-black text-dark_blue text-base mb-1"
              htmlFor="filePic2"
            >
              Rif
            </label>
            <div className="rounded-3xl p-1 flex items-center">
              <input
                type="file"
                id="filePic2"
                {...register('file2')}
                className="hidden"
              />

              <label
                htmlFor="filePic2"
                className=" text-[#808080] border-[1px] border-[#808080] px-4 py-2 rounded-[20px] mr-2"
              >
                Subir
              </label>
              <span>{`${
                picture2 && picture2[0] ? picture2[0].name : 'Sube imagen'
              }`}</span>
            </div>
          </div>
        </section>

        <section className="flex justify-start gap-6">
          <button
            onClick={closeButton}
            type="button"
            className="w-full text-[#808080] border-[1px] border-[#808080] rounded-3xl font-normal text-base py-2 sm:py-3 sm:px-5 md:py-4 sm:w-fit md:px-6"
          >
            Cancelar
          </button>
          {allFieldsFilled && (
            <button
              className="blue_gradient w-full text-white rounded-3xl font-normal text-base py-1 px-3 xs:py-2 xs:px-4 sm:py-3 md:py-4 sm:w-fit md:px-6"
              type="submit"
            >
              Confirmar Cuenta
            </button>
          )}
        </section>
      </form>
    </section>
  );
}
