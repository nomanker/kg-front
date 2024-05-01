"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import G6 from "@antv/g6";
import { fetchGraph } from "@/lib/fetchdialog";

const rawData = {
  nodes: [
    { id: "1", label: "中国" },
    { id: "2", label: "沈阳飞机公司" },
    { id: "3", label: "歼-16战机" },
    { id: "4", label: "歼-11BS战机" },
    { id: "5", label: "AL-31F涡扇发动机" },
    { id: "6", label: "超音速" },
  ],
  edges: [
    { source: "2", target: "1", label: "位于" },
    { source: "3", target: "2", label: "生产于" },
    { source: "3", target: "5", label: "发动机是" },
    { source: "3", target: "6", label: "飞行速度" },
    { source: "3", target: "4", label: "升级自" },
  ],
};

const toLocalData = (nodes, edges) => ({
  nodes: nodes.map(({ labels, properties }) => ({
    id: `${properties.kid}`,
    label: properties.name,
  })),
  edges: edges.map(({ start_node, end_node, type }) => ({
    source: `${start_node}`,
    target: `${end_node}`,
    label: type,
  })),
});

const initGraph = (containerRef: React.MutableRefObject<null>) =>
  new G6.Graph({
    container: containerRef.current,
    width: 1000,
    height: 600,
    layout: {
      type: "force",
      preventOverlap: true,
      linkDistance: 100,
      nodeStrength: -200,
    },
    modes: {
      default: ["drag-canvas", "zoom-canvas", "drag-node", "click-select"],
    },
    defaultNode: {
      size: 40,
      type: "circle",
      style: {
        fill: "#DEE9FF",
        stroke: "#5B8FF9",
      },
      labelCfg: {
        style: {
          fill: "#000",
          fontSize: 10,
        },
      },
    },
    defaultEdge: {
      type: "line",
      style: {
        stroke: "#e2e2e2",
        lineWidth: 2,
        endArrow: true,
      },
      labelCfg: {
        autoRotate: true,
        style: {
          fill: "#777",
          fontSize: 10,
        },
      },
    },
  });

const KnowledgeGraph = ({ id }: { id: number }) => {
  const containerRef = useRef(null);
  let rendered = false;
  let data = { nodes: [], edges: [] };

  useLayoutEffect(() => {
    if (!containerRef.current || rendered) return;
    rendered = true;
    const graph = initGraph(containerRef)

    fetchGraph(id)
      .then(({ nodes, edges }) => toLocalData(nodes, edges))
      .then((d) => (data = d))
      .then(() => {
        graph.data(data);
        graph.render();
      })
      .catch((err) => (data = rawData));
  }, []);

  return <div ref={containerRef} />;
};

export default KnowledgeGraph;
