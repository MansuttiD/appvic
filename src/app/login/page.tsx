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
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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
        <div className="p-7 m-4 shadow-lg rounded-2xl bg-white lg:min-w-[900px]">
          <div className="flex flex-col justify-center align-middle text-center">
            <h1 className="font-black text-2xl">Sereno</h1>
            <p className="font-medium text-base mb-4">Loguéate</p>
          </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  placeholder="Nombre o Correo"
                  className="h-12 w-full border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-4 outline-none mb-2"
                  type="text"
                  id="user"
                  {...register('user', { required: true })}
                />
              </div>
              <div className="relative flex justify-between items-center">
                <input
                  placeholder="Contraseña"
                  className="h-12 w-full border-[1px] border-solid border-[#E7E7E7] rounded-[20px] p-4 outline-none mb-4"
                  type={passwordSingUp}
                  id="password"
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

              </div>
              <button
                className="mb-4 w-full py-3 rounded-2xl font-semibold text-[18px] text-white bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-500 hover:bg-gradient-to-tl hover:from-blue-500 hover:via-blue-400 hover:to-blue-400 transition duration-300 transform hover:-translate-y-1"
                type="submit"
              >
                Log in
              </button>
            </form>

          <div className="flex justify-center align-middle gap-6">
            <button className="border-[2px] border-solid boder-[#E7E7E7] rounded-2xl p-2">
              <FcGoogle className="text-xl" />
            </button>
            <button className="border-[2px] border-solid boder-[#E7E7E7] rounded-2xl p-2">
              <BsFacebook className="text-[#3C5A9A] text-xl" />
            </button>
            <button className="border-[2px] border-solid boder-[#E7E7E7] rounded-2xl p-2">
              <GrMail className="text-[#9E9E9E] text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
