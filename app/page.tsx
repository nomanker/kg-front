import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/dashboard')
  return (
    <div>
      <UserButton />
    </div>
  );
}
