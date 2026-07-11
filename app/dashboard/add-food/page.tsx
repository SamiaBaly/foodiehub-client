import AddFoodForm from "@/components/AddFoodForm";

const AddFoodPage = () => {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Add New Food
      </h1>

      <AddFoodForm />
    </main>
  );
};

export default AddFoodPage;