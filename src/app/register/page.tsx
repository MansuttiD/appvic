'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrMail } from 'react-icons/gr';

interface FormData {
  user: string;
  username: string;
  password: string;
  name: string;
  phone: number;
  email: string;
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormData>();

  //   const submit = (data: any) => {
  //     const mutation = `
  //     mutation SignUpForWaitList($data: SignUpForWaitListInput!) {
  //     signUpWaitList(data: $data) {
  //       country
  //       email
  //       message
  //       name
  //     }
  //   }
  // `;
  const onSubmit = (data: FormData) => {
    // Aquí puedes manejar la lógica de inicio de sesión con los datos del formulario
    console.log(data);
  };

  const [passwordSingUp, setPasswordSingUp] = useState('password');

  const handlePasswordSingUp = () => {
    setPasswordSingUp('password');
  };

  const handlePasswordText = () => {
    setPasswordSingUp('text');
  };

  return (
    <section className="bg-[#f8f8f6] ">
      <div className="p-4 flex justify-center items-center min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-100px)]">
        <div className="p-7 m-4 shadow-lg rounded-2xl bg-white sm:min-w-[500px] lg:min-w-[900px]">
          <div className="flex flex-col justify-center align-middle text-center">
            <h1 className="font-black text-dark_blue text-2xl">Sereno</h1>
            <p className="font-medium text-soft_blue text-base mb-4">
              Regístrate
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-2">
                <input
                  placeholder="Usuario"
                  className="h-12 w-full border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-4 outline-none mb-2"
                  type="text"
                  id="user"
                  autoComplete="false"
                  {...register('user', { required: true })}
                />
                {errors.user && <span>{errors.user.message}</span>}
              </div>

              <div className="md:w-1/2 md:pl-2">
                <input
                  placeholder="Nombre"
                  className="h-12 w-full border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-4 outline-none mb-2"
                  type="text"
                  id="username"
                  autoComplete="false"
                  {...register('username', { required: true })}
                />
                {errors.username && <span>{errors.username.message}</span>}
              </div>
            </section>

            <section className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-2">
                <input
                  placeholder="Teléfono"
                  className="h-12 w-full border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-4 outline-none mb-2"
                  type="number"
                  id="phone"
                  autoComplete="false"
                  {...register('phone', { required: true })}
                />

                {errors.phone && <span>{errors.phone.message}</span>}
              </div>

              <div className="md:w-1/2 pl-2 flex border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-[0.15rem] items-center mb-4 overflow-hidden gap-1">
                <GrMail className="text-[#9E9E9E] text-xl" />

                <input
                  placeholder="Correo electrónico "
                  className="h-12 w-full   outline-none "
                  type="email"
                  id="email"
                  autoComplete="true"
                  {...register('email', { required: true })}
                />

                {errors.email && <span>{errors.email.message}</span>}
              </div>
            </section>

            <div className="relative flex justify-between items-center">
              <input
                placeholder="Contraseña"
                className="h-12 w-full border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-4 outline-none mb-4"
                type={passwordSingUp}
                id="password"
                autoComplete="off"
                {...register('password', { required: true })}
              />
              <AiOutlineEye
                onClick={handlePasswordText}
                className={`absolute right-5 -translate-y-1/2 text-md top-[38%] ${
                  passwordSingUp == 'text' ? 'hidden' : ''
                }`}
              />
              <FaRegEyeSlash
                onClick={handlePasswordSingUp}
                className={`absolute right-5 -translate-y-1/2 text-md top-[38%] ${
                  passwordSingUp == 'password' ? 'hidden' : ''
                }`}
              />

              {errors.password && <span>{errors.password.message}</span>}
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
    </section>
  );
}
