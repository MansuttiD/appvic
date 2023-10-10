import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
  pin1: string;
  pin2: string;
  pin3: string;
  pin4: string;
}

export default function ThanksMessageForm() {
  const { register, handleSubmit, watch } = useForm<FormData>();
  const [showButton, setShowButton] = useState(['']);
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  const pin1Ref = useRef<HTMLInputElement>(null);
  const pin2Ref = useRef<HTMLInputElement>(null);
  const pin3Ref = useRef<HTMLInputElement>(null);
  const pin4Ref = useRef<HTMLInputElement>(null);



  const handleKeyUp = (
    prevField:React.RefObject<HTMLInputElement>,
    actualField: React.RefObject<HTMLInputElement>,
    nextField: React.RefObject<HTMLInputElement>
  ) => {
    if (actualField.current && actualField.current.value.length == 1) {
      if (actualField.current.name == 'pin1') {
        setShowButton(['pin1'])
      } else if (actualField.current.name == 'pin2') {
        setShowButton(['pin1','pin2'])
      } else if (actualField.current.name == 'pin3') {
        setShowButton(['pin1','pin2','pin3'])
      } else if (actualField.current.name == 'pin4') {
        setShowButton(['pin1','pin2','pin3','pin4'])
      }

      if (nextField.current) {
        nextField.current.focus();
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
            ref={pin1Ref}
            onKeyUp={() => handleKeyUp(pin1Ref,pin1Ref, pin2Ref)}
          />
          <input
            {...register('pin2')}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
            ref={pin2Ref}
            onKeyUp={() => handleKeyUp(pin1Ref,pin2Ref, pin3Ref)}

          />
          <input
            {...register('pin3')}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
            ref={pin3Ref}
            onKeyUp={() => handleKeyUp(pin2Ref,pin3Ref, pin4Ref)}
          />
          <input
            {...register('pin4')}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
            ref={pin4Ref}
            onKeyUp={() => handleKeyUp(pin3Ref,pin4Ref, pin4Ref)}
          />
        </div>
        <section className="flex justify-start gap-6">
          <button className="blue_gradient w-full text-white rounded-3xl font-normal text-base py-2 px-4 sm:py-3 md:py-3 md:px-6">
            Regresar
          </button>

          <button
            className={`blue_gradient w-full text-white rounded-3xl font-normal text-base py-2 px-4 sm:py-3 md:py-3 md:px-6 ${
              showButton[0] && showButton[1] && showButton[2] && showButton[3] ? '' : 'hidden'
            }`}
          >
            Confirmar Pin
          </button>
        </section>
      </form>
    </div>
  );
}
