'use client';
import { GRAPHQL } from '@/app/models/graphql';
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaRegEyeSlash, FaUserAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrMail } from 'react-icons/gr';
import { SiKeycdn } from 'react-icons/si';
import Swal from 'sweetalert2';

interface FormData {
  user: string;
  password: string;
}

export default function LoginForm() {
  const [passwordSingUp, setPasswordSingUp] = useState('password');
  const { refetch } = useQuery(GRAPHQL.querys.SING_IN, { skip: true });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();

  const onSubmit = async (formData: FormData) => {
    try {
      const { data } = await refetch({
        input: {
          email: formData.user,
          password: formData.password,
        },
      });

      if (data) {
        Cookies.set('sereno_auth', data.signIn.token);
        router.push('./')
      }
    } catch (error) {
      if (error) {
        console.log(error)
        Swal.fire({
          title: 'Error',
          text: 'Credenciales Invalidas.',
          icon: 'error',
        });
      }
    }
  };

  const handlePasswordSingUp = () => {
    setPasswordSingUp('password');
  };

  const handlePasswordText = () => {
    setPasswordSingUp('text');
  };

  return (
    <section className="bg-general_backgound">
      <div className="p-4 flex justify-center items-center min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-100px)]">
        <div className="p-7 m-4 shadow-lg rounded-2xl bg-white sm:min-w-[600px] lg:min-w-[900px]">
          <div className="flex flex-col justify-center align-middle text-center">
            <h1 className="font-black text-dark_blue text-2xl">Sereno</h1>
            <p className="font-medium text-soft_blue text-base mb-4">
              Loguéate
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 flex flex-col">
              <div className="pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1">
                <FaUserAlt className="text-[#9E9E9E] text-md" />
                <input
                  placeholder="Nombre o Correo"
                  className="h-12 w-full outline-none ml-2"
                  type="text"
                  id="user"
                  {...register('user', {
                    required: {
                      value: true,
                      message: 'Nombre o correo requerido',
                    },
                  })}
                />
              </div>
              {errors.user && (
                <span
                  style={{
                    color: 'red',
                    fontSize: '12px',
                  }}
                >
                  {errors.user.message}
                </span>
              )}
            </div>
            <div className="mb-4 flex flex-col">
              <div className="pl-2 pr-5 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center overflow-hidden gap-1">
                <SiKeycdn className="text-[#9E9E9E] text-xl" />
                <input
                  placeholder="Contraseña"
                  className="h-12 w-full outline-none ml-2"
                  type={passwordSingUp}
                  id="password"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Contraseña requerida',
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

            <button
              className="mb-6 w-full py-3 rounded-2xl font-semibold text-[18px] text-white bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-500 hover:bg-gradient-to-tl hover:from-blue-500 hover:via-blue-400 hover:to-blue-400 transition duration-300 transform hover:-translate-y-1"
              type="submit"
            >
              Log in
            </button>
            <div className="flex flex-col gap-3 text-[#9E9E9E] mb-6">
              <p>¿Olvidaste tu contraseña?</p>
              <span>
                ¿No estas registrado?{' '}
                <Link href="/register" className="underline">
                  Crea una cuenta
                </Link>
              </span>
            </div>
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
    </section>
  );
}
