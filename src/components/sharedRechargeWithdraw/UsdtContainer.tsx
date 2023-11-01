export default function UsdtContainer({title}:any) {

  return (
    <div className="flex  flex-col rounded-3xl gap-4 bg-white pt-10 pl-11 pb-12 max-w-xl w-full">
    <h3 className="text-base font-semibold text-soft_blue">
    {title}
    </h3>
    <p className="text-2xl font-black text-soft_blue">USDT</p>
  </div>
  );
}
