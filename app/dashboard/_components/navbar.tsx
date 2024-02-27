"use client";
import Link from "next/link";
import DialoguesList from "./dialogList";
import { UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

const NavigationBar: React.FC = () => {
  function addDialog(){
    console.log("对话添加成功");
  }
  return (
    <div className="flex flex-col w-48 justify-between bg-gray-800 text-white p-4 rounded-lg">
      <div className="space-y-2">
        {/* 使用正确的Link用法 */}
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer">
          <Link href="/dashboard/chat">
            <div className="text-white">问答系统</div>
          </Link>
        </div>
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer">
          <Link href="/dashboard/kg">
            <div className="text-white">知识图谱</div>
          </Link>
        </div>
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer flex justify-between items-center">
          <Link href="/dashboard/dialog">
            <div className="text-white">对话列表</div>
          </Link>
          <Plus  onClick={addDialog}/>
        </div>

        <DialoguesList />
      </div>
      <div className="pt-4">
        <UserButton />
        <div className="mt-2">nomanker</div>
      </div>
    </div>
  );
};

export default NavigationBar;
