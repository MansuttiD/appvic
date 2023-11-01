
export default function LabelBank({bank,bankActive,setBankActive}:any) {

  return (
    <div
    key={bank.id}
    onClick={()=>{setBankActive(bank.id)}} 
    className={`${bankActive == bank.id ? 'blue_gradient text-[#fff]' : 'bg-white text-soft_blue' }  flex max-w-sm w-full justify-between rounded-3xl pl-8 pr-6 py-6`}>
      <p className="text-base font-semibold ">{bank.name}</p>
      <p className="text-base font-normal ">{bank.quantity} {bank.coin}</p>
    </div>
  );
}
