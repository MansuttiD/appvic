import Operations from "@/components/home/Operations";
import RecentAtivity from "@/components/home/RecentActivity";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <>
    <div className="bg-[#F8F8F6]">
      <div className="max-w-[370px] mx-auto sm:max-w-lg md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <Welcome/>
        <Operations/>
        <RecentAtivity/>
      </div>
    </div>
    </>
  );
}
