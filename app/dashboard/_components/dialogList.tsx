"use client";
import { fetchAllDialogue } from "@/lib/fetchdialog";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Dialogue {
  id: string; // 或者 number，根据实际情况使用
  title: string;
}

const DialoguesList = () => {
  const [dialogues, setDialogues] = useState<Dialogue[]>([]);

  useEffect(() => {
    fetchAllDialogue()
      .then((data) =>
        data.map((dialogue: { did: string; title: string }) => ({
          id: dialogue.did,
          title: dialogue.title,
        }))
      )
      .then(setDialogues);
  }, []);

  const handelAdd = () => {
    console.log(1);
  };

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
        <Link
          key="+"
          href={`#`}
          passHref
          className="block bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 text-center"
          onClick={handelAdd}
        >
          新对话 <Plus className="inline -translate-y-0.5" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default DialoguesList;
