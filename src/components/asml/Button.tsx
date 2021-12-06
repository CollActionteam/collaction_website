import { ArrowSquareOut } from "phosphor-react";

export default function Button() {
  return (
    <button className="bg-accent text-white rounded-full p-3.5 w-72 boxShadow">
      <span className="align-middle">Participate</span>
      <ArrowSquareOut className="h-6 w-6 inline-block ml-4" />
    </button>
  );
}
