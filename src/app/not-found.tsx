import Image from 'next/image'

export default function NotFound() {
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-full bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-24">
          <Image
            className="max-h-[48px] h-max w-auto mx-auto sm:max-h-[64px]"
            src="/assets/img/sereno/logos/blue.svg"
            alt="Sereno Logo"
            width={32}
            height={32}
          />
          <p className=" text-lg font-semibold mt-2 tracking-tight text-gray-900 sm:text-xl">
            Tu Hub para remesas en Moneda Estable.
          </p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-indigo-600 sm:text-8xl">404</p>
          <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-base text-gray-600">
            {`Sorry, we couldn’t find the page you’re looking for.`}
          </p>
        </div>
      </main>
    </>
  )
}
