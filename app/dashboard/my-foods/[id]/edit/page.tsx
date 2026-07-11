import EditFoodForm from "@/components/EditFoodForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditFoodPage({
  params,
}: Props) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/foods/${id}`,
    {
      cache: "no-store",
    }
  );

  const result = await response.json();
  const food = result.data;

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <EditFoodForm food={food} />
      </div>
    </main>
  );
}