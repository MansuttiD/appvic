'use client';
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye } from 'react-icons/ai';
import { BiSolidPhone } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { FaRegEyeSlash, FaUserAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrMail } from 'react-icons/gr';
import { SiKeycdn } from 'react-icons/si';
import phonecode from '../../libs/phonecode.json';

interface FormData {
  userName: string;
  password: string;
  name: string;
  phone: number;
  email: string;
  countrycode: string;
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (formData: FormData) => {
    console.log(typeof(formData.countrycode));
    
    try {
      const { data } = await createUser({
        variables: {
          input: {
            user:{
              email:formData.email,
              password:formData.password,
              pin:"12345",
              userName:formData.userName,
            },
            profile:{
              firstName:formData.name,
              lastName:formData.name,
              phoneNumber:formData.phone.toString()
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

  const REGISTER_USER = gql`
    mutation CreateUser($input: SignUpInput!) {
      user:signUp(input: $input) {
        token
      }
    }
  `;
  const [createUser, { data, loading, error }] = useMutation(REGISTER_USER);

  if (loading) {
    return <h2>Cargando...</h2>
  }
  if (error) {
    return console.log(error);
    
  }

  return (
    <section className="bg-[#FFFAFF] ">
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
              <section className="flex flex-col gap-3 md:flex-row">
                <div className="md:w-1/2 pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center mb-4 overflow-hidden gap-1">
                  <FaUserAlt className="text-[#9E9E9E] text-[18px]" />
                  <input
                    placeholder="Usuario"
                    className="h-12 w-full ml-2 outline-none"
                    type="text"
                    id="userName"
                    autoComplete="false"
                    {...register('userName', { required: true })}
                  />
                  {errors.userName && <span>{errors.userName.message}</span>}
                </div>

                <div className="md:w-1/2 pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center mb-4 overflow-hidden gap-1">
                  <FaUserAlt className="text-[#9E9E9E] text-[18px]" />
                  <input
                    placeholder="Nombre y Apellido"
                    className="h-12 w-full ml-2 outline-none"
                    type="text"
                    id="name"
                    autoComplete="false"
                    {...register('name', { required: true })}
                  />
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
              </section>

              <section className="flex flex-col gap-3 md:flex-row">
                <div className="md:w-1/2 pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center mb-4 overflow-hidden gap-1">
                  <BiSolidPhone className="text-[#9E9E9E] text-xl" />

                  <select className="h-12 outline-none border-none text-[#9E9E9E]">
                    {
                      phonecode.countrys.map((country) => (
                        <option 
                        key={country.codigo}
                        {...register('countrycode', { required: true })}
                        >
                          {country.codigo_numerico}
                          
                        </option>
                      ))
                    }
                  </select>

                  <input
                    placeholder="Teléfono"
                    className="h-12 w-full ml-2 outline-none"
                    type="number"
                    id="text"
                    autoComplete="false"
                    {...register('phone', { required: true })}
                  />

                  {errors.phone && <span>{errors.phone.message}</span>}
                </div>

                <div className="md:w-1/2 pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center mb-4 overflow-hidden gap-1">
                  <GrMail className="text-[#9E9E9E] text-md" />

                  <input
                    placeholder="Correo electrónico "
                    className="h-12 w-full ml-2 outline-none"
                    type="email"
                    id="email"
                    autoComplete="true"
                    {...register('email', { required: true })}
                  />

                  {errors.email && <span>{errors.email.message}</span>}
                </div>
              </section>

              <div className="pl-2 pr-5 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center mb-4 overflow-hidden gap-1">
                <SiKeycdn className="text-[#9E9E9E] text-xl" />
                <input
                  placeholder="Contraseña"
                  className="h-12 w-full ml-2 outline-none"
                  type={passwordSingUp}
                  id="password"
                  autoComplete="off"
                  {...register('password', { required: true })}
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

                {errors.phone && <span>{errors.phone.message}</span>}
              </div>

              <button
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
