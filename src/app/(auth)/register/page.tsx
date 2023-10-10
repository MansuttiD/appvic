'use client';
import { GRAPHQL } from '@/app/models/graphql';

import ThanksMessageForm from '@/components/pli/ThanksMessageForm';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye } from 'react-icons/ai';
import { BiSolidPhone } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { FaRegEyeSlash, FaUserAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrMail } from 'react-icons/gr';
import { SiKeycdn } from 'react-icons/si';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import phonecode from '../../../libs/phonecode.json';

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

const MySwal = withReactContent(Swal);

const ThanksMessage = () => {
  MySwal.fire({
    html: <ThanksMessageForm />, // Renderiza tu formulario dentro de SweetAlert
    showCancelButton: false,
    showConfirmButton: false,
    width: 832,
    customClass: {
      popup: 'rounded-[22px]', // Clase CSS para el contenedor del popup
    },
  });
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    // reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (formData: FormData) => {

    try {
      const { data } = await createUser({
        variables: {
          input: {
            user:{
              email:formData.email,
              password:formData.password,
              userName:formData.userName,
            },
            profile:{
              firstName:formData.name,
              lastName:formData.lastname,
              phoneNumber:formData.countrycode + formData.phone.toString()
            }
          }
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

  const [passwordSingUp, setPasswordSingUp] = useState('password');

  const handlePasswordSingUp = () => {
    setPasswordSingUp('password');
  };

  const handlePasswordText = () => {
    setPasswordSingUp('text');
  };

  const [createUser, { data, loading, error }] = useMutation(GRAPHQL.mutation.CREATE_USER);

  if (loading) {
    return <h2>Cargando...</h2>;
  }
  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data)
  }

  return (
    <section className="bg-general_backgound ">
      <div className="p-4 flex justify-center items-center min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-100px)]">
        <div className="p-7 m-4 shadow-lg rounded-2xl bg-white sm:min-w-[500px] lg:min-w-[900px]">
          <div className="flex flex-col justify-center align-middle text-center">
            <h1 className="font-black text-dark_blue text-2xl">Sereno</h1>
            <p className="font-medium text-soft_blue text-base mb-4">
              Regístrate
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <section className="flex flex-col gap-3 md:flex-row md:justify-around">
                <div className="mb-4 flex flex-col">
                  <div className="pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1">
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

                <div className="mb-4 flex flex-col">
                  <div className=" pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1">
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
                <div className="pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1">
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
                      <option
                        value={country.codigo_numerico}
                        key={country.codigo}
                      >
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
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,4}$/,
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
                      message: "La clave debe tener minimo 6 caracteres"
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
                      val === watch('password') ||
                      'Las contraseñas son distintas',
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
              onClick={ThanksMessage}
                className="mb-8 w-full py-3 rounded-2xl font-semibold text-[18px] text-white bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-500 hover:bg-gradient-to-tl hover:from-blue-500 hover:via-blue-400 hover:to-blue-400 transition duration-300 transform hover:-translate-y-1"
                type="submit"
              >
                Regístrate
              </button>
            </form>

            <div className="flex justify-center align-middle gap-6">
              {/* Botón de Google */}
              <button className="border-[2px] border-solid border-[#E7E7E7] rounded-2xl p-2 flex items-center">
                <FcGoogle className="text-xl" />
                <span className="hidden md:block ml-2 text-[#9E9E9E]">
                  Continúa con Google
                </span>
              </button>

              {/* Botón de Facebook */}
              <button className="border-[2px] border-solid border-[#E7E7E7] rounded-2xl p-2 flex items-center">
                <BsFacebook className="text-[#3C5A9A] text-xl" />
                <span className="hidden md:block ml-2 text-[#9E9E9E]">
                  Continúa con Facebook
                </span>
              </button>

              {/* Botón de Email */}
              <button className="border-[2px] border-solid border-[#E7E7E7] rounded-2xl p-2 flex items-center">
                <GrMail className="text-[#9E9E9E] text-xl" />
                <span className="hidden md:block ml-2 text-[#9E9E9E]">
                  Continúa con Email
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
