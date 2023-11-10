export default function ThanksMessageForm({handleCloseMessage}:any) {

  return (
    <div className="flex flex-col gap-5 px-5 py-2">
      <div className="mx-auto">
        <h2 className="font-black text-md">¡Gracias por registrarte en Sereno!</h2>
      </div>
      <div className="flex flex-col text-start gap-5 text-popup_text">
        <p>
          Para garantizar la seguridad de tu cuenta y recibir actualizaciones
          importantes de tu perfil, te pedimos que verifiques tu dirección de
          correo electrónico. Por favor, sigue estos pasos:
        </p>

        <h3>Abre tu bandeja de entrada de correo electrónico.</h3>

        <ol className="flex flex-col place-items-start gap-3 list-decimal list-inside ml-6">
          <li>
            Busca un mensaje de{' '}
            <span className="font-semibold">&quot;Sereno&quot;</span> con el
            asunto de{' '}
            <span className="font-semibold">
              &quot;Verificación de Correo Electrónico&quot;.
            </span>
          </li>
          <li>
            Haz clic en el enlace de verificación que se encuentra en el correo
            electrónico. Esto confirmará que tu dirección de correo electrónico
            es válida.
          </li>
          <li>
            Una vez que hayas completado estos pasos, deberas validar tu número
            de telefono y configurar tu PIN CODE.
          </li>
          <li>
            Si no encuentras el correo electrónico de verificación en tu bandeja
            de entrada, asegúrate de revisar tu carpeta de correo no deseado o
            spam.
          </li>
        </ol>

        <h3>¡Gracias por confiar en Sereno!</h3>
        <p>
          Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en
          contacto con nuestro equipo de soporte.
        </p>

        <div className="flex justify-center">
  <button
  onClick={handleCloseMessage}
    className="blue_gradient w-full text-white rounded-3xl font-normal text-base py-2 px-4 sm:py-3 md:py-3 md:px-6"
    type="submit"
  >
    Confirmar
  </button>
</div>

      </div>
    </div>
  );
}
