import { sleep } from "@/libs/utils";
import { HomeContent } from "./content";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";

export default async function LandingPage() {
  await sleep(1300);
  return (
    <>
      <Header />
      <HomeContent />
      <Footer />
    </>
  );
}
