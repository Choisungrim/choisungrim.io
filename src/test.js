import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // 로컬 스토리지에서 데이터 로드
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('memoData')) || [];
    setData(storedData);
  }, []);

  // 로컬 스토리지에 데이터 저장
  const saveToLocalStorage = (data) => {
    localStorage.setItem('memoData', JSON.stringify(data));
  };

  // 데이터 추가
  const addData = () => {
    if (editIndex !== null) {
      const updatedData = data.map((item, index) =>
        index === editIndex ? inputValue : item
      );
      setData(updatedData);
      saveToLocalStorage(updatedData); // 데이터 업데이트 후 저장
      setEditIndex(null);
    } else {
      const updatedData = [...data, inputValue];
      setData(updatedData);
      saveToLocalStorage(updatedData); // 데이터 추가 후 저장
    }
    setInputValue('');
  };

  // 데이터 삭제
  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    saveToLocalStorage(updatedData); // 데이터 삭제 후 저장
  };

  // 데이터 편집
  const editData = (index) => {
    setInputValue(data[index]);
    setEditIndex(index);
  };

  // 데이터 저장 (로컬 스토리지에 저장하는 부분)
  const saveData = (index) => {
    const itemToSave = data[index];
    console.log('저장된 데이터:', itemToSave);
    // 필요에 따라 추가 로직을 구현할 수 있습니다.
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
            <br/>
            <button onClick={() => saveData(index)}>저장하기</button>
            <button onClick={() => editData(index)}>수정하기</button>
            <button onClick={() => deleteData(index)}>삭제하기</button>
          </li>
        ))}
      </ul>
        
      <div>
        <h2>저장된 정보</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    
  );
};

export default App;
