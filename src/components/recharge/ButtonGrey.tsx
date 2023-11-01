export default function ButtonGrey({ text, trigger, type }: any) {
    return (
      <button
        type={type}
        onClick={trigger}
        className="py-3 px-6 text-grey_button border-solid border-[1px] border-grey_button rounded-3xl"
      >
        {text}
      </button>
    );
  }
  