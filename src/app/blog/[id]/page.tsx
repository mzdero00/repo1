import Link from "next/link";
import { BASE_API_URL } from "../page";
import type { vehicle } from "../page";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

type VehicleProps = {
  params: { id: string };
};

async function getVehicle(id: string): Promise<vehicle> {
  const data = await fetch(`${BASE_API_URL}/vehicles/${id}`);
  return data.json();
}

export default async function Vehicle({ params }: VehicleProps) {
  const vehicle = await getVehicle(params.id);
  const { id, title, body } = vehicle;
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <article className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all vehicles
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          vehicle {id}: {title}
        </h1>
        <p>{body}</p>
      </article>
    </main>
  );
}
