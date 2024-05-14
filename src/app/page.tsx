import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-blue-950 box-border p-0 m-0">
      <section className="fixed bg-blue-900 w-full rounded-md p-12 font-comics text-center text-blue-200">
        <h1 className="text-4xl py-2">Steeven Vanachte</h1>
        <p className="text-base ">Portfolio</p>
      </section>
    </main>
  );
}
