import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <Header />
      <main className="flex flex-col p-6 mb-3">
        LOADING RESULTS...
      </main>
      <Footer />
    </>
  );
}
