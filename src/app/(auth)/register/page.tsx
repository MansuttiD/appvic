'use client';

import { GRAPHQL } from '@/app/models/graphql';
import FormRegister from '@/components/register/FormRegister';
import { useMutation } from '@apollo/client';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { GrMail } from 'react-icons/gr';

export default function RegisterForm() {

  const [createUser] = useMutation(GRAPHQL.mutation.CREATE_USER);

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
            <FormRegister createUser={createUser} />

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
