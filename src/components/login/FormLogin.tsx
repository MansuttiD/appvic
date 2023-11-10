import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegEyeSlash, FaUserAlt } from 'react-icons/fa';
import { SiKeycdn } from 'react-icons/si';
import Swal from 'sweetalert2';

interface FormData {
  user: string;
  password: string;
}

export default function FormLogin({ refetch }: any) {
  const [passwordSingUp, setPasswordSingUp] = useState('password');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();

  const handlePasswordSingUp = () => {
    setPasswordSingUp('password');
  };

  const handlePasswordText = () => {
    setPasswordSingUp('text');
  };

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
        router.push('./');
      }
    } catch (error: any) {
      if (error) {
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
        });
      }
    }
  };

  return (
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
  );
}
