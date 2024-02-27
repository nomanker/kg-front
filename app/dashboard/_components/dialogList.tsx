"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

// 假设的对话数据
// const dialogues = [
//   { id: 0, title: "对话 0" },
//   { id: 1, title: "对话 1" },
//   { id: 2, title: "对话 2" },
//   // 可以根据需要添加更多对话
// ];
interface Dialogue {
  id: string; // 或者 number，根据实际情况使用
  title: string;
}

const DialoguesList = () => {
  const [dialogues, setDialogues] = useState<Dialogue[]>([]);
  const [size, setSize] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://20.25.141.251:8000/dialogue/all`;
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJub21hbmtlciIsImV4cCI6MTcxMTY1NjAxM30.1XJ1EntFH7-2HTwaPqPq4XqZzgAzUhn-Xy-cFBqXZ-U";
      try {
        const response = await axios.get(url, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.length);
        const updatedDialogues = response.data.map(
          (dialogue: { did: string; title: string}) => ({
            id: dialogue.did, // 根据你API响应数据的实际结构调整
            title: dialogue.title,
          })
        );
        setDialogues(updatedDialogues);
      } catch (error) {
        console.error("请求失败:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">对话列表</h2>
      <div className="w-full max-w-md">
        {dialogues.map((dialogue) => (
          <Link
            key={dialogue.id}
            href={`/dashboard/dialog/${dialogue.id}`}
            passHref
            className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 text-center"
          >
            {dialogue.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DialoguesList;
