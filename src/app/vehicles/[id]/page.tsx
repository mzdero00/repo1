import Link from "next/link";
import type { Post } from "../_lib/api";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BookButton from "./components/BookButton";

export const metadata: Metadata = {
  title: "Vehicles",
};

type BlogPostProps = {
  params: { id: string };
};

async function getPost(id: string): Promise<Post> {
  const data = await fetch(`${process.env.BASE_API_URL}/posts/${id}`);
  return data.json();
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.id);
  const { id, title, body } = post; // Ensure your API returns these fields
  if (!id) {
    notFound();
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <article className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <Link
          href="/vehicles"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all vehicles
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Vehicle {id}
        </h1>
        <div className="flex flex-col items-center">
          {/* Car Image */}
          <img
            src={"@/images.jpg"} // Replace with a placeholder if image is not available
            alt={"marin"}
            className="w-full max-h-96 object-cover rounded-md mb-4"
          />
          {/* Vehicle Properties */}
          <div className="grid grid-cols-2 gap-4 mb-6 w-full text-gray-700">
            <div>
              <strong>Transmission:</strong> {"N/A"}
            </div>
            <div>
              <strong>Fuel:</strong> {"N/A"}
            </div>
            <div>
              <strong>Price:</strong> {"N/A"}
            </div>
          </div>
          {/* Book Now Button */}
          <BookButton vehicleId={id} />
        </div>
      </article>
    </main>
  );
}
