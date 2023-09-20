import Banks from "@/components/pli/Banks";
import Transactions from "@/components/pli/Transactions";

export default function Pli() {
  return (
    <section className='general_backgound'>
      <div className="pb-5">
        <Banks/>
        <Transactions/>
      </div>
    </section>
  );
}
