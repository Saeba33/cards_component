import StyledCardOne from "@/components/StyledCardOne";
import StyledCardThree from "@/components/StyledCardThree";
import StyledCardTwo from "@/components/StyledCardTwo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StyledCardOne />
      <StyledCardTwo />
      <StyledCardThree />
    </main>
  );
}
