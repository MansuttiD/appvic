import Banks from '@/components/pli/Banks';
import ExecutionPanel from '@/components/pli/ExecutionPanel';
import Transactions from '@/components/pli/Transactions';

export default function Pli() {
  return (
    <section className='bg-general_backgound min-h-screen'>
      <div className=" text-soft_blue pb-5 px-2 sm:pt-11 mx-auto sm:grid grid-cols-2 grid-rows-2 mdl:flex md:max-w-[1370px] justify-items-center ">
        <Banks />
        <ExecutionPanel />
        <Transactions />
      </div>
    </section>
  );
}
