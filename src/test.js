import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // 데이터 추가
  const addData = () => {
    if (editIndex !== null) {
      const updatedData = data.map((item, index) =>
        index === editIndex ? inputValue : item
      );
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, inputValue]);
    }
    setInputValue('');
  };

  // 데이터 삭제
  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  // 데이터 편집
  const editData = (index) => {
    setInputValue(data[index]);
    setEditIndex(index);
  };

  const saveData = (index) => {
    setInputValue(data[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>메모장 테스트</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={addData}>{editIndex !== null ? 'Update' : 'Add'}</button>
      <br />

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <br />
            <button onClick={() => saveData(index)}>저장하기</button>
            <button onClick={() => editData(index)}>수정하기</button>
            <button onClick={() => deleteData(index)}>삭제하기</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
