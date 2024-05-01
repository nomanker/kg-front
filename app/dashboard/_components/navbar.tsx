"use client";
import DialoguesList from "./dialogList";
import { UserButton } from "@clerk/nextjs";
import GraphList from "./graphList";

const NavigationBar: React.FC = () => {
  return (
    <div className="flex flex-col w-48 justify-between bg-gray-800 text-white p-4 rounded-lg">
      <div className="space-y-2">
        <DialoguesList />
        <GraphList />
      </div>
      <div className="pt-4">
        <UserButton />
        <div className="mt-2">nomanker</div>
      </div>
    </div>
  );
};

export default NavigationBar;
