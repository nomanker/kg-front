import axios from 'axios';

const fetchData = async () => {
  const url = 'http://20.25.141.251:8000/dialogue/all';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJub21hbmtlciIsImV4cCI6MTcwODA0OTU2Nn0.m4x14YDj6Y1IfGWcYKE_USNUGpPmvQN-1w-lpeKhhF4';
  
  try {
    const response = await axios.get(url, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log(response.data); // 处理响应数据
    return response.data; // 返回响应数据
  } catch (error) {
    console.error('请求失败:', error);
    return null; // 处理错误情况
  }
};

export default fetchData;
