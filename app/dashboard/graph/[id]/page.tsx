import KnowledgeGraph from "@/components/graph";


const Graph = ({params}:{params:{id:number}}) => {
  return <KnowledgeGraph id={params.id} />;
};

export default Graph;
