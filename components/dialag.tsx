'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 定义数据类型
interface HistoryItem {
  question: string;
  answer: string;
  create_time: {
    _DateTime__date: {
      _Date__year: number;
      _Date__month: number;
      _Date__day: number;
    };
    _DateTime__time: {
      _Time__hour: number;
      _Time__minute: number;
      _Time__second: number;
    };
  };
}

// 帮助函数：解析日期时间
const parseDateTime = (dateObj: any, timeObj: any): Date => {
  const { _Date__year, _Date__month, _Date__day } = dateObj;
  const { _Time__hour, _Time__minute, _Time__second } = timeObj;
  return new Date(
    _Date__year,
    _Date__month - 1,
    _Date__day,
    _Time__hour,
    _Time__minute,
    _Time__second,
  );
};

const DialogueComponent = (id:{id:string}) => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [question, setQuestion] = useState<string>(''); // 新状态来存储用户问题

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://20.25.141.251:8000/dialogue/all';
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJub21hbmtlciIsImV4cCI6MTcxMTY1NjAxM30.1XJ1EntFH7-2HTwaPqPq4XqZzgAzUhn-Xy-cFBqXZ-U'; // 替换为实际的token
      try {
        const response = await axios.get(url, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setHistory(response.data[0].history); // 假设API响应的直接是Dialogue数组
      } catch (error) {
        console.error('请求失败:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // 阻止表单默认提交行为
    const url = `http://20.25.141.251:8000/dialogue/?question=${encodeURIComponent(
      question,
    )}&database=equipment_zh&did=0`;
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJub21hbmtlciIsImV4cCI6MTcxMTY1NjAxM30.1XJ1EntFH7-2HTwaPqPq4XqZzgAzUhn-Xy-cFBqXZ-U'; // 使用实际的token

    try {
      const response = await axios.put(
        url,
        {},
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // 假设响应包含更新后的对话列表
      console.log(response.data);
      setHistory((prev) => [...prev, response.data]);
      setQuestion(''); // 清空输入框
    } catch (error) {
      console.error('发送问题失败:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {' '}
        {/* 设置滚动区域 */}
        {history.map((item, idx) => (
          <div key={idx} className="mt-2 p-2 bg-white rounded-md shadow-sm">
            <p className="text-sm font-medium text-gray-900">
              <span className="font-bold">Q:</span> {item.question}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <span className="font-bold">A:</span> {item.answer}
            </p>
            <p className="text-right text-xs text-gray-500 mt-2">
              Time:{' '}
              {parseDateTime(
                item.create_time._DateTime__date,
                item.create_time._DateTime__time,
              ).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* 输入框固定在底部 */}
      <form className="p-4 sticky bottom-0 bg-white" onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder="输入问题..."
        />
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-600 font-medium py-2 px-4 rounded"
        >
          发送
        </button>
      </form>
    </div>
  );
};

export default DialogueComponent;
