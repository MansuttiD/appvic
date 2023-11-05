'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface FormDataPin {
  pin1: string;
  pin2: string;
  pin3: string;
  pin4: string;
}

interface FormDataRegister {
  dataRegister: {
    userName: string;
    password: string;
    name: string;
    phone: number;
    email: string;
    countrycode: string;
    lastname: string;
    confirmpassword: string;
  };
}

export default function PinModal({ dataRegister, createUser }: any) {
  const { register, handleSubmit, watch, setFocus } = useForm<FormDataPin>();
  const onSubmit = async (dataPin: FormDataPin) => {

    try {
      const { data } = await createUser({
        variables: {
          input: {
            profile: {
              firstName: dataRegister.name,
              lastName: dataRegister.lastname,
              phoneNumber: dataRegister.phone.toString(),
            },
            user: {
              email: dataRegister.email,
              password: dataRegister.password,
              pin:
                dataPin.pin1.toString() +
                dataPin.pin2.toString() +
                dataPin.pin3.toString() +
                dataPin.pin4.toString(),
              userName: dataRegister.userName,
            },
          },
        },
      });

      // Muestra la respuesta en la consola
      console.log('Respuesta de la API GraphQL:', data);

      // Hacer algo con los datos de la respuesta, por ejemplo, redireccionar o mostrar un mensaje de éxito
    } catch (error) {
      // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
      console.error('Error al llamar a la API GraphQL:', error);
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
            className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
            onKeyUp={handleKeyUp}
          />
          <input
            {...register('pin2')}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
            onKeyUp={handleKeyUp}
          />
          <input
            {...register('pin3')}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
            onKeyUp={handleKeyUp}
          />
          <input
            {...register('pin4')}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
            onKeyUp={handleKeyUp}
          />
        </div>
        <section className="flex justify-start gap-6">
          <button
            type="button"
            className="blue_gradient w-full text-white rounded-3xl font-normal text-base py-2 px-4 sm:py-3 md:py-3 md:px-6"
          >
            Regresar
          </button>

          <button
            type="submit"
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
