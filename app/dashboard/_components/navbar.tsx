"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // 确保路径是正确的
import { UserButton, auth, clerkClient } from '@clerk/nextjs';

// 如果你有用户类型的详细定义，可以替换这个
interface User {
  firstName: string|null;
  // 添加其他需要的属性
}
const dialogs = [
  { id: '1', title: '对话 1' },
  { id: '2', title: '对话 2' },
  { id: '3', title: '对话 3' },
  // 添加更多对话...
];

const NavigationBar: React.FC = () => {
  // const router = useRouter();
  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { userId } = auth();
  //     if (!userId) {
  //       router.push('/');
  //       return;
  //     }
  //     const userData = await clerkClient.users.getUser(userId);
  //     setUser({ firstName: userData.firstName }); // 根据你的实际情况调整
  //   };

  //   fetchUser();
  // }, [router]);

  // if (!user) return null;

  return (
    <div className="flex flex-col w-48 justify-between bg-gray-800 text-white p-4 rounded-lg">
      <div className="space-y-2">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/dashboard/chat" className="text-white">
            问答系统
          </Link>
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/dashboard/kg" className="text-white">
            知识图谱
          </Link>
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/dashboard/dialog" className="text-white">
            对话列表
          </Link>
        </Button>
      </div>
      <div className="pt-4">
        <UserButton className="py-2 px-4" />
        <div className="mt-2">nomanker</div>
      </div>
    </div>
  );
};

export default NavigationBar;
