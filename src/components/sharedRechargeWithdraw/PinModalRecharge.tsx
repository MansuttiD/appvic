import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

interface FormData {
  pin1: string;
  pin2: string;
  pin3: string;
  pin4: string;
}

export default function PinModalRecharge({setConfirmPin,confirmPin}:any) {
  const { register, handleSubmit, watch, setFocus } = useForm<FormData>();



  const onSubmit = (data: FormData) => {
    if (data.pin1 == '1' && data.pin2 == '2' && data.pin3 == '3' && data.pin4 == '4') {
         setConfirmPin('correct')
         Swal.close()
    }else{

      setConfirmPin('incorrect')
    }
 
  };

  const pin1ValueReg = watch('pin1');
  const pin2ValueReg = watch('pin2');
  const pin3ValueReg = watch('pin3');
  const pin4ValueReg = watch('pin4');

  useEffect(() => {
    setFocus('pin1');
  }, []);

  const handleKeyUp = (e: any) => {
    if (e.code == 'Backspace') {
      if (e.target.value.length == 0 && e.target.name == 'pin4') {
        setFocus('pin3');
      }
      if (e.target.value.length == 0 && e.target.name == 'pin3') {
        setFocus('pin2');
      }
      if (e.target.value.length == 0 && e.target.name == 'pin2') {
        setFocus('pin1');
      }
    } else {
      if (e.target.value.length > 0 && e.target.name == 'pin1') {
        setFocus('pin2');
      }
      if (e.target.value.length > 0 && e.target.name == 'pin2') {
        setFocus('pin3');
      }
      if (e.target.value.length > 0 && e.target.name == 'pin3') {
        setFocus('pin4');
      }
    }
  };

  const hanldeClosePinModal=()=>{
    Swal.close()
  }


  return (
    <div className="flex flex-col gap-7">
      <h4 className="flex justify-start font-black text-soft_blue">
        Introduce tu PIN
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex gap-3 mb-6 mx-auto">
          <input
            {...register('pin1')}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className={`${confirmPin == 'incorrect' ? 'border-[#BA0000]' : 'appearance-none '} w-10 h-10  outline-none  bg-transparent border-2 border-solid rounded-md text-center`}
            onKeyUp={handleKeyUp}
          />
          <input
            {...register('pin2')}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className={`${confirmPin == 'incorrect' ? 'border-[#BA0000]' : 'appearance-none'} w-10 h-10  outline-none bg-transparent border-2 border-solid rounded-md text-center`}
            onKeyUp={handleKeyUp}
          />
          <input
            {...register('pin3')}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className={`${confirmPin == 'incorrect' ? 'border-[#BA0000]' : 'appearance-none'} w-10 h-10  outline-none bg-transparent border-2 border-solid rounded-md text-center`}
            onKeyUp={handleKeyUp}
          />
          <input
            {...register('pin4')}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className={`${confirmPin == 'incorrect' ? 'border-[#BA0000]' : 'appearance-none'} w-10 h-10  outline-none bg-transparent border-2 border-solid rounded-md text-center`}
            onKeyUp={handleKeyUp}
          />
        </div>
        <p className='text-base'>¿No recuerdas tu PIN? Haz click aquí</p>
        <section className="flex justify-start gap-6">
          <button
          type='button'
          onClick={hanldeClosePinModal}
          className="blue_gradient w-full text-white rounded-3xl font-normal text-base py-2 px-4 sm:py-3 md:py-3 md:px-6">
            Regresar
          </button>

          <button
          type='submit'
            className={`blue_gradient w-full text-white rounded-3xl font-normal text-base py-2 px-4 sm:py-3 md:py-3 md:px-6 ${
              pin1ValueReg && pin2ValueReg && pin3ValueReg && pin4ValueReg
                ? ''
                : 'hidden'
            }`}
          >
            Confirmar Pin
          </button>
        </section>
      </form>
    </div>
  );
}
