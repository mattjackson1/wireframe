import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        LOADING RESULTS...
      </main>
      <Footer />
    </>
  );
}
