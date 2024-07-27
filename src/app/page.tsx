import Header from "@/app/components/header/header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-200">
      <Header isSignedIn={false}/>
    </main>
  );
}
