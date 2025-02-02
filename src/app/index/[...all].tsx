import PrimaryButton from "@/components/PrimaryButton";

export default function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="text-lg">Page Not Found</p>
      <PrimaryButton to="/">Go to Home Page</PrimaryButton>
    </div>
  );
}
