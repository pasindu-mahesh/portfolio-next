import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Stack } from "@/components/stack";
import { LogoAnimation } from "@/components/logoAnimation";
import { Portfolio } from "@/components/portfolio";
import { KeyMetrics } from "@/components/keyMetrics";
import { Services } from "@/components/services";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Stack/>
      <LogoAnimation/>
      <Portfolio/>
      <KeyMetrics/>
      <Services/> 
    </>
  );
}
