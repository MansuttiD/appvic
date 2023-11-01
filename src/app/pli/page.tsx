import ExchangePairs from '@/components/pli/ExchangePairs.';
import ExecutionPanel from '@/components/pli/ExecutionPanel';
import Transactions from '@/components/pli/Transactions';

export default function Pli() {
  return (
    <section className='bg-general_backgound min-h-screen'>
      <div className=" text-soft_blue pb-5 px-2 sm:pt-11 mx-auto sm:grid grid-cols-2 grid-rows-[1fr,2fr] mdl:flex md:max-w-[1500px] justify-items-center ">
        <ExchangePairs />
        <ExecutionPanel />
        <Transactions />
      </div>
    </section>
  );
}
