import Image from "next/image";

export default function ArrowContainer() {

    return (
        <div className="bg-white w-11 h-11 flex justify-center items-center rounded-2xl rotate-90 md:rotate-0 ">
        <Image
          src={'./images/recharge/reverse.svg'}
          height={20}
          width={20}
          alt="reverse"
        />
      </div>
    );
  }
  