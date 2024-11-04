import { AdventuresRail } from "@/components/AdventuresRail";
import CruiseCardDisplay from "@/components/CruiseCardDisplay";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="wrapper bg-white text-black w-screen h-screen">
    <Header/>
    <AdventuresRail/>
    <CruiseCardDisplay/>
    </div>
);
}
