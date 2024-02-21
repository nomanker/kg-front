// src/Chat.tsx
"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Message {
  type: 'question' | 'answer';
  text: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim()) return;

    const newMessages = messages.concat({ type: 'question', text: query });
    setMessages(newMessages);

    setTimeout(() => {
      const fakeResponse = { answer: `模拟回答: ${query}` };
      setMessages(prevMessages => prevMessages.concat({ type: 'answer', text: fakeResponse.answer }));
    }, 500);

    setQuery('');
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <ul className="space-y-2">
        {messages.map((message, index) => (
          <li key={index} className={`p-2 rounded-lg ${message.type === 'answer' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'} self-end`}>
            {message.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          发送
        </button>
      </form>
    </div>
  );
};

export default Chat;
