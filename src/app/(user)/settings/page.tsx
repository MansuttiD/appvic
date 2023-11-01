'use client';
import SettingsOption from '@/components/settings/OptionBox';
import UpTier from '@/components/settings/UpTier';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCheck } from 'react-icons/ai';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface FormDataPin {
  pin1: string;
  pin2: string;
  pin3: string;
  pin4: string;
  pin5: string;
  pin6: string;
  pin7: string;
  pin8: string;
}

interface FormDataPass {
  password: string;
  confirmpassword: string;
  newpassword: string;
}

const Settings = () => {
  const [sideBox, setSideBox] = useState('tier');
  const [options, setOptions] = useState('principal');
  const [passwordSingUp, setPasswordSingUp] = useState('password');

  const registerpin = useForm<FormDataPin>();

  const { register, handleSubmit, watch, setFocus } = useForm<FormDataPass>();

  const onSubmitPin = (data: FormDataPin) => {
    if (
      data.pin1 == data.pin5 &&
      data.pin2 == data.pin6 &&
      data.pin3 == data.pin7 &&
      data.pin4 == data.pin8
    ) {
      console.log('correcto');
    } else {
      console.log('distintos');
    }
  };

  const onSubmitPassword = (data: FormDataPass) => {
    console.log(data);
  };

  const openSweetAlert = () => {
    MySwal.fire({
      html: <UpTier />, // Renderiza tu formulario dentro de SweetAlert
      showCancelButton: false,
      showConfirmButton: false,
      width: 832,
      customClass: {
        popup: 'rounded-[22px]', // Clase CSS para el contenedor del popup
      },
    });
  };

  const pin1ValueReg = registerpin.watch('pin1');
  const pin2ValueReg = registerpin.watch('pin2');
  const pin3ValueReg = registerpin.watch('pin3');
  const pin4ValueReg = registerpin.watch('pin4');
  const pin5ValueReg = registerpin.watch('pin5');
  const pin6ValueReg = registerpin.watch('pin6');
  const pin7ValueReg = registerpin.watch('pin7');
  const pin8ValueReg = registerpin.watch('pin8');

  useEffect(() => {
    registerpin.setFocus('pin1');
  }, []);

  const handleKeyUp = (e: any) => {
    if (e.code == 'Backspace') {
      if (e.target.value.length == 0 && e.target.name == 'pin4') {
        registerpin.setFocus('pin3');
      }
      if (e.target.value.length == 0 && e.target.name == 'pin3') {
        registerpin.setFocus('pin2');
      }
      if (e.target.value.length == 0 && e.target.name == 'pin2') {
        registerpin.setFocus('pin1');
      }
    } else {
      if (e.target.value.length > 0 && e.target.name == 'pin1') {
        registerpin.setFocus('pin2');
      }
      if (e.target.value.length > 0 && e.target.name == 'pin2') {
        registerpin.setFocus('pin3');
      }
      if (e.target.value.length > 0 && e.target.name == 'pin3') {
        registerpin.setFocus('pin4');
      }
    }
  };

  const handleKeyUpConfirm = (e: any) => {
    if (e.code == 'Backspace') {
      if (e.target.value.length == 0 && e.target.name == 'pin8') {
        registerpin.setFocus('pin7');
      }
      if (e.target.value.length == 0 && e.target.name == 'pin7') {
        registerpin.setFocus('pin6');
      }
      if (e.target.value.length == 0 && e.target.name == 'pin6') {
        registerpin.setFocus('pin5');
      }
    } else {
      if (e.target.value.length > 0 && e.target.name == 'pin5') {
        registerpin.setFocus('pin6');
      }
      if (e.target.value.length > 0 && e.target.name == 'pin6') {
        registerpin.setFocus('pin7');
      }
      if (e.target.value.length > 0 && e.target.name == 'pin7') {
        registerpin.setFocus('pin8');
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-100px)]">
      <div
        className={`${
          options == 'principal' ? 'flex' : 'hidden'
        } pt-10 flex-col p-4 mx-auto max-w-[1200px]`}
      >
        <div className="flex">
          <h1 className="text-xl font-semibold mb-6">Ajustes</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <section className="flex flex-col gap-3 w-full max-w-[750px] lg:min-w-[750px]">
            <SettingsOption
              title="Subier de Tier"
              sideBox={sideBox}
              setSideBox={setSideBox}
              active="tier"
            />
            <Link href="/settings/userbanks">
            <SettingsOption
              title="Cuentas Agregadas"
              sideBox={sideBox}
              setSideBox={setSideBox}
              active="counts"
            />
            </Link>
            <SettingsOption
              title="Cambiar PIN"
              sideBox={sideBox}
              setSideBox={setSideBox}
              active="pin"
            />
            <SettingsOption
              title="Cambiar Contraseña"
              sideBox={sideBox}
              setSideBox={setSideBox}
              active="pass"
            />
            <SettingsOption
              title="Límites de la cuenta"
              sideBox={sideBox}
              setSideBox={setSideBox}
              active="limit"
            />
          </section>

          <section
            className={`${
              sideBox == 'tier' ? '' : 'hidden'
            } bg-white rounded-[22px] p-7 shadow-md flex flex-col gap-12`}
          >
            <div>
              <h3 className="font-semibold text-base">Tier 1</h3>
              <h4 className="text-popup_text text-[13px] mb-4">Adquirir</h4>

              <div className="  text-popup_text ml-2">
                <ul className="flex flex-col gap-2 min-w-[240px] max-w-[288px]">
                  <li className="flex">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    Depositar en distintas Monedas.
                  </li>
                  <li className="flex">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    Retirar donde sea, con un límite de {'\n'}$25000 mensuales.
                  </li>
                  <li className="flex">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    Recibir depositos de Terceros.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center m-auto blue_gradient w-[92%] text-white rounded-3xl font-normal text-base py-[14px]">
              <button onClick={openSweetAlert}>Subir a Tier 1</button>
            </div>
          </section>



          <form
            onSubmit={registerpin.handleSubmit(onSubmitPin)}
            className={`${
              sideBox == 'pin' ? '' : 'hidden'
            } flex flex-col gap-8`}
          >
            <div className="flex flex-col gap-6 bg-white rounded-[22px] p-7 px-12 shadow-md h-[153px]">
              <h4 className="flex justify-start font-black text-soft_blue">
                Escribe tu PIN
              </h4>
              <div className="flex flex-col">
                <div className="flex gap-4 mb-6 mx-auto">
                  <input
                    {...registerpin.register('pin1')}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
                    onKeyUp={handleKeyUp}
                  />
                  <input
                    {...registerpin.register('pin2')}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
                    onKeyUp={handleKeyUp}
                  />
                  <input
                    {...registerpin.register('pin3')}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
                    onKeyUp={handleKeyUp}
                  />
                  <input
                    {...registerpin.register('pin4')}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
                    onKeyUp={handleKeyUp}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 bg-white rounded-[22px] p-7 shadow-md h-[200px]">
              <h4 className="flex justify-start font-black text-soft_blue">
                Repite tu PIN
              </h4>
              <div className="flex flex-col">
                <div className="flex gap-3 mb-6 mx-auto">
                  <input
                    {...registerpin.register('pin5')}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
                    onKeyUp={handleKeyUpConfirm}
                  />
                  <input
                    {...registerpin.register('pin6')}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
                    onKeyUp={handleKeyUpConfirm}
                  />
                  <input
                    {...registerpin.register('pin7')}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
                    onKeyUp={handleKeyUpConfirm}
                  />
                  <input
                    {...registerpin.register('pin8')}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    className="w-10 h-10 appearance-none outline-none bg-transparent border-2 rounded-md text-center"
                    onKeyUp={handleKeyUpConfirm}
                  />
                </div>
                <button className="blue_gradient w-full text-white rounded-3xl font-normal text-base py-2 px-4 sm:py-3 md:py-3 md:px-6">
                  Confirmar
                </button>
              </div>
            </div>
          </form>

          <form
            onSubmit={handleSubmit(onSubmitPassword)}
            className={`${
              sideBox == 'pass' ? '' : 'hidden'
            } flex flex-col gap-8 min-w-[364px]`}
          >
            <div className="flex flex-col gap-4 bg-white rounded-[22px] p-7 shadow-md h-[153px]">
              <h4 className="flex justify-start font-black text-soft_blue mb-3">
                Introduce contraseña actual
              </h4>
              <div className="flex flex-col">
                <input
                  placeholder="Contraseña"
                  className="h-8 w-full outline-none rounded-3xl border border-gray-300 px-2"
                  type={passwordSingUp}
                  id="password"
                  autoComplete="off"
                  {...register('password', {
                    required: true,
                    minLength: {
                      value: 6,
                      message: 'La clave debe tener un mínimo de 6 caracteres',
                    },
                  })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 bg-white rounded-[22px] p-7 shadow-md">
              <div className="flex flex-col">
                <div className="flex flex-col gap-3">
                  <h4 className="flex justify-start font-black text-soft_blue mb-3">
                    Introduce tu nueva contraseña
                  </h4>
                  <input
                    placeholder="Nueva contraseña"
                    className="h-8 w-full outline-none rounded-3xl border border-gray-300 px-2"
                    type={passwordSingUp}
                    id="password"
                    autoComplete="off"
                    {...register('newpassword', {
                      required: {
                        value: true,
                        message: 'La contraseña es requerida',
                      },
                    })}
                  />
                  <div>
                    <h4 className="flex justify-start font-black text-soft_blue mb-3">
                      Introduce tu nueva contraseña
                    </h4>
                    <input
                      placeholder="Nueva contraseña"
                      className="h-8 w-full outline-none rounded-3xl border border-gray-300 px-2"
                      type={passwordSingUp}
                      id="password"
                      autoComplete="off"
                      {...register('confirmpassword', {
                        required: {
                          value: true,
                          message: 'La contraseña es requerida',
                        },
                      })}
                    />
                  </div>
                  <button className="blue_gradient w-full text-white rounded-3xl font-normal text-base py-2 px-4 sm:py-3 md:py-3 md:px-6">
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </form>

          <section
            className={`${
              sideBox == 'limit' ? '' : 'hidden'
            } bg-white rounded-[22px] p-7 shadow-md flex flex-col gap-12`}
          >
            <div>
              <h3 className="font-semibold text-base">Tier 1</h3>
              <h4 className="text-popup_text text-[13px] mb-4">Adquirir</h4>

              <div className="  text-popup_text ml-2">
                <ul className="flex flex-col gap-2 min-w-[240px] max-w-[288px]">
                  <li className="flex">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    Depositar en distintas Monedas.
                  </li>
                  <li className="flex">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    Retirar donde sea, con un límite de {'\n'}$25000 mensuales.
                  </li>
                  <li className="flex">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    Recibir depositos de Terceros.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center m-auto blue_gradient w-[92%] text-white rounded-3xl font-normal text-base py-[14px]">
              <button>Subir a Tier 1</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
