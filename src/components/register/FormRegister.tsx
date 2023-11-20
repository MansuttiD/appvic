import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye } from 'react-icons/ai';
import { BiSolidPhone } from 'react-icons/bi';
import { FaRegEyeSlash, FaUserAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { SiKeycdn } from 'react-icons/si';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import phonecode from '../../libs/phonecode.json';
import PinModal from './PinModal';

export default function FormRegister({ createUser }: any) {
  interface FormData {
    userName: string;
    password: string;
    name: string;
    phone: number;
    email: string;
    countrycode: string;
    lastname: string;
    confirmpassword: string;
  }

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [passwordSingUp, setPasswordSingUp] = useState('password');

  const handlePasswordSingUp = () => {
    setPasswordSingUp('password');
  };

  const handlePasswordText = () => {
    setPasswordSingUp('text');
  };

  const password = watch('password');
  const confirmpassword = watch('confirmpassword');

  const MySwal = withReactContent(Swal);

  const handleCloseMessage = () => {
    reset({
      userName: '',
      password: '',
      name: '',
      phone: 0,
      email: '',
      countrycode: '+54',
      lastname: '',
      confirmpassword: '',
    });
    Swal.close();
  };

  const onSubmit = (formData: FormData) => {
    if (password === confirmpassword) {
      MySwal.fire({
        html: (
          <PinModal
            dataRegister={formData}
            createUser={createUser}
            handleCloseMessage={handleCloseMessage}
          />
        ),
        showCancelButton: false,
        showConfirmButton: false,
        customClass: {
          popup: 'rounded-[22px] w-[300px]',
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="flex flex-col gap-3 md:flex-row md:justify-between">
        

        <div className="mb-4 flex flex-col">
          <div className=" pl-6 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1">
            <FaUserAlt className="text-[#9E9E9E] text-[18px]" />
            <input
              placeholder="Nombre"
              className="h-12 w-full ml-2 outline-none"
              type="text"
              id="name"
              autoComplete="false"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Nombre es requerido',
                },
                minLength: {
                  value: 3,
                  message: 'El nombre debe tener al menos 3 letras',
                },
                maxLength: {
                  value: 45,
                  message: 'El nombre debe tener maximo 40 letras',
                },
              })}
            />
          </div>
          {errors.name && (
            <span
              style={{
                color: 'red',
                fontSize: '12px',
              }}
            >
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <div className="pl-6 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1">
            <FaUserAlt className="text-[#9E9E9E] text-[18px]" />
            <input
              placeholder="Apellido"
              className="h-12 w-full ml-2 outline-none"
              type="text"
              id="lastname"
              autoComplete="false"
              {...register('lastname', {
                required: {
                  value: true,
                  message: 'Apellido es requerido',
                },
                minLength: {
                  value: 3,
                  message: 'El apellido debe tener al menos 3 letras',
                },
                maxLength: {
                  value: 45,
                  message: 'El apellido debe tener maximo 40 letras',
                },
              })}
            />
          </div>
          {errors.lastname && (
            <span
              style={{
                color: 'red',
                fontSize: '12px',
              }}
            >
              {errors.lastname.message}
            </span>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <div className="pl-6 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1">
            <FaUserAlt className="text-[#9E9E9E] text-[18px]" />
            <input
              placeholder="Usuario"
              className="h-12 w-full ml-2 outline-none"
              type="text"
              id="userName"
              autoComplete="false"
              {...register('userName', {
                required: {
                  value: true,
                  message: 'Usuario es requerido',
                },
                minLength: {
                  value: 4,
                  message: 'Usuario debe tener al menos 4 caracteres',
                },
                maxLength: {
                  value: 20,
                  message: 'Usuario debe tener maximo 20 caracteres',
                },
              })}
            />
          </div>
          {errors.userName && (
            <span
              style={{
                color: 'red',
                fontSize: '12px',
              }}
            >
              {errors.userName.message}
            </span>
          )}
        </div>

      </section>

      <section className="flex flex-col gap-3 md:flex-row">
        <div className="md:w-1/2 mb-4 flex flex-col">
          <div className="pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center gap-1">
            <BiSolidPhone className="text-[#9E9E9E] text-xl" />

            <select
              size={1}
              {...register('countrycode')}
              className="appearance-none outline-none bg-transparent text-[#9E9E9E]"
            >
              {phonecode.countrys.map((country) => (
                <option value={country.codigo_numerico} key={country.codigo}>
                  {country.codigo_numerico}
                </option>
              ))}
            </select>

            <input
              placeholder="Teléfono"
              className="h-12 w-full ml-2 outline-none"
              type="tel"
              id="phone"
              autoComplete="false"
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Número telefónico requerido',
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Numero invalido',
                },
              })}
            />
          </div>
          {errors.phone && (
            <span
              style={{
                color: 'red',
                fontSize: '12px',
              }}
            >
              Ingresa solo números en el campo de teléfono.
            </span>
          )}
        </div>

        <div className="md:w-1/2 mb-4 flex flex-col">
          <div className="pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1">
            <GrMail className="text-[#9E9E9E] text-md" />

            <input
              placeholder="Correo electrónico "
              className="h-12 w-full ml-2 outline-none"
              type="email"
              id="email"
              autoComplete="true"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Correo es requerido',
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,4}$/,
                  message: 'Correo no válido',
                },
              })}
            />
          </div>
          {errors.email && (
            <span
              style={{
                color: 'red',
                fontSize: '12px',
              }}
            >
              {errors.email.message}
            </span>
          )}
        </div>
      </section>

      <div className="mb-4 flex flex-col">
        <div className="pl-2 pr-5 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1">
          <SiKeycdn className="text-[#9E9E9E] text-xl" />
          <input
            placeholder="Contraseña"
            className="h-12 w-full ml-2 outline-none"
            type={passwordSingUp}
            id="password"
            autoComplete="off"
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'La clave debe tener minimo 6 caracteres',
              },
            })}
          />
          <AiOutlineEye
            onClick={handlePasswordText}
            className={`text-md text-[#9E9E9E] ${
              passwordSingUp == 'text' ? 'hidden' : ''
            }`}
          />
          <FaRegEyeSlash
            onClick={handlePasswordSingUp}
            className={`text-md text-[#9E9E9E] ${
              passwordSingUp == 'password' ? 'hidden' : ''
            }`}
          />
        </div>

        {errors.password && (
          <span
            style={{
              color: 'red',
              fontSize: '12px',
            }}
          >
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="mb-4 flex flex-col">
        <div className="pl-2 pr-5 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1">
          <SiKeycdn className="text-[#9E9E9E] text-xl" />
          <input
            placeholder="Confirme su contraseña"
            className="h-12 w-full ml-2 outline-none"
            type={passwordSingUp}
            id="confirmpassword"
            autoComplete="off"
            {...register('confirmpassword', {
              required: {
                value: true,
                message: 'La contraseña es requerida',
              },
              validate: (val: string) =>
                val === watch('password') || 'Las contraseñas son distintas',
            })}
          />

          <AiOutlineEye
            onClick={handlePasswordText}
            className={`text-md text-[#9E9E9E] ${
              passwordSingUp == 'text' ? 'hidden' : ''
            }`}
          />
          <FaRegEyeSlash
            onClick={handlePasswordSingUp}
            className={`text-md text-[#9E9E9E] ${
              passwordSingUp == 'password' ? 'hidden' : ''
            }`}
          />
        </div>
        {errors.confirmpassword && (
          <span
            style={{
              color: 'red',
              fontSize: '12px',
            }}
          >
            {errors.confirmpassword.message}
          </span>
        )}
      </div>

      <button
        onClick={handleSubmit(onSubmit)}
        className="mb-8 w-full py-3 rounded-2xl font-semibold text-[18px] text-white bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-500 hover:bg-gradient-to-tl hover:from-blue-500 hover:via-blue-400 hover:to-blue-400 transition duration-300 transform hover:-translate-y-1"
        type="submit"
      >
        Regístrate
      </button>
    </form>
  );
}
