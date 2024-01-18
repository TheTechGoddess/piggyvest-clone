import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-3xl font-bold items-center justify-between p-24">
      <Link href="/dashboard">Welcome to Piggyvest Clone</Link>
    </main>
  );
}
