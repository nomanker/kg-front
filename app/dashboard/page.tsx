import { UserButton, auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const user = await clerkClient.users.getUser(userId);

  return (
    <div>
      {user && (
        <>
          主界面
        </>
      )}
    </div>
  );
}