import Operations from "@/components/home/Operations";
import RecentAtivity from "@/components/home/RecentActivity";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <>
    <div className="bg-[#F8F8F6] min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-100px)]">
      <div className="max-w-[370px] mx-auto sm:max-w-lg md:max-w-4xl lg:max-w-6xl xl:max-w-7xl pt-10">
        <Welcome/>
        <Operations/>
        <RecentAtivity/>
      </div>
    </div>
    </>
  );
}
