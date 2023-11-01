export default function ButtonBlue({ text, trigger, type ,value}: any) {
  return (
    <button
      type={type}
      onClick={trigger}
      className={`${
        value ? '' : 'hidden'
      } px-6 py-3 text-white blue_gradient rounded-3xl border-solid border-[1px] border-[#808080] w-full xs:w-auto xs:max-w-[228px]`}
    >
      {text}
    </button>
  );
}
