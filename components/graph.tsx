"use client";
import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';

const KnowledgeGraph = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const graph = new G6.Graph({
      container: containerRef.current,
      width: 1000,
      height: 600,
      layout: {
        type: 'force',
        preventOverlap: true,
        linkDistance: 100,
        nodeStrength: -200
      },
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
      },
      defaultNode: {
        size: 40,
        type: 'circle',
        style: {
          fill: '#DEE9FF',
          stroke: '#5B8FF9',
        },
        labelCfg: {
          style: {
            fill: '#000',
            fontSize: 10,
          },
        },
      },
      defaultEdge: {
        type: 'line',
        style: {
          stroke: '#e2e2e2',
          lineWidth: 2,
          endArrow: true,
        },
        labelCfg: {
          autoRotate: true,
          style: {
            fill: '#777',
            fontSize: 10,
          },
        },
      },
    });

    const data = {
      nodes: [
        { id: 'node1', label: '实体1' },
        { id: 'node2', label: '实体2' },
        { id: 'node3', label: '实体3' },
      ],
      edges: [
        { source: 'node1', target: 'node2', label: '关系A' },
        { source: 'node2', target: 'node3', label: '关系B' },
      ],
    };

    graph.data(data);
    graph.render();

    // 可以在这里添加更多的交互或事件监听器

  }, []);

  return <div ref={containerRef} />;
};

export default KnowledgeGraph;
