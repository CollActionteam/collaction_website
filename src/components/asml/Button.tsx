import { ArrowSquareOut } from "phosphor-react";

export default function Button() {
  return (
    <button className="bg-accent text-white rounded-full p-3.5 w-72 shadow fixed bottom-8 inset-x-0 mx-auto">
      <span className="align-middle">Participate</span>
      <ArrowSquareOut className="h-6 w-6 inline-block ml-4" />
    </button>
  );
}
