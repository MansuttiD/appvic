import Image from 'next/image';

export default function LastSend({ last, setLastSend, lastSend }: any) {
  return (
    <div
      onClick={() => {
        setLastSend(last);
      }}
      className={`${
        lastSend.id == last.id ? 'blue_gradient ' : 'bg-white'
      }  rounded-3xl p-3 flex gap-4`}
    >
      <Image alt="" src={last.image} width={44} height={44} />
      <p
        className={`${
          lastSend.id == last.id ? 'text-white' : 'text-grey_button'
        } flex flex-col text-sm font-normal `}
      >
        <span
          className={`${
            lastSend.id == last.id ? 'text-white' : 'text-soft_blue'
          } font-semibold text-base`}
        >
          {last.name}
        </span>
        {last.email}
      </p>
    </div>
  );
}
