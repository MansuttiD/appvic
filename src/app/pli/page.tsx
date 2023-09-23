import ExecutionPanel from "@/components/pli/ExecutionPanel";

export default function Pli() {
  return (
    <section className='bg-general_backgound'>
      <div className="pb-5">
        {/* <Banks/>
        <Transactions/> */}
        <ExecutionPanel/>
      </div>
    </section>
  );
}
