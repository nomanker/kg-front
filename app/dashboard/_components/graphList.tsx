import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAllGraphs } from "@/lib/fetchdialog";
import { Plus } from "lucide-react";

interface TGraph {
    id: number,
    title: string
}

const GraphList = () => {
  const [graphs, setGraphs] = useState<TGraph[]>([]);

  useEffect(() => {
    fetchAllGraphs()
      .then((graphs) => graphs.map(({ gid, title }) => ({ id: gid, title })))
      .then(setGraphs);
  }, []);

  const handelAdd = () => {
    console.log(1);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">知识图谱</h2>
      <div className="w-full max-w-md">
        {graphs.map((graph) => (
          <Link
            key={graph.id}
            href={`/dashboard/graph/${graph.id}`}
            passHref
            className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 text-center"
          >
            {graph.title === "" ? "no title" : graph.title}
          </Link>
        ))}
        <Link
          key="+"
          href={`#`}
          passHref
          className="block bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 text-center"
          onClick={handelAdd}
        >
          新图谱 <Plus className="inline -translate-y-0.5" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default GraphList;
