import React, { useState, useEffect } from 'react';
import './css/memo.css'; // CSS 파일을 임포트

const App = () => {
  const [data, setData] = useState([]);
  const [savedata, setSavedata] = useState([]); // 문자열 배열로 유지
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null); // 인덱스 대신 id 사용

  // 로컬 스토리지에서 데이터 로드
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('memoData')) || [];
    setData(storedData);
  }, []);

  // 로컬 스토리지에 데이터 저장
  const saveToLocalStorage = (data) => {
    localStorage.setItem('memoData', JSON.stringify(data));
  };

  // 데이터 추가 및 업데이트
  const addData = () => {
    if (editId !== null) {
      const updatedData = data.map((item) =>
        item.id === editId ? { ...item, value: inputValue } : item
      );
      setData(updatedData);
      
      const updatedSavedata = savedata.map((item) =>
        item === data.find(item => item.id === editId).value ? inputValue : item
      );
      setSavedata(updatedSavedata);

      saveToLocalStorage(updatedData);
      setEditId(null);
    } else {
      const newItem = { id: Date.now(), value: inputValue };
      const updatedData = [...data, newItem];
      setData(updatedData);
      saveToLocalStorage(updatedData);
    }
    setInputValue('');
  };

  // 데이터 삭제
  const deleteData = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    saveToLocalStorage(updatedData);
  };

  // 데이터 편집
  const editData = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setInputValue(itemToEdit.value);
    setEditId(id);
  };

  // 데이터 저장
  const saveData_localStorage = (id) => {
    const itemToSave = data.find((item) => item.id === id);
    setSavedata((prevSavedata) => [...prevSavedata, itemToSave.value]);
    saveToLocalStorage([...savedata, itemToSave]);
    console.log('저장된 데이터:', itemToSave.value);
  };

  // 저장된 데이터 삭제
  const deleteSavedData = (value) => {
    const itemToDelete = data.find(item => item.value === value);
    if (itemToDelete) {
      deleteData(itemToDelete.id);
    }
    const updatedSavedData = savedata.filter((item) => item !== value);
    setSavedata(updatedSavedData);
    saveToLocalStorage(updatedSavedData);
  };

  return (
    <div className="app-container">
      <h1>메모장</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={addData}>{editId !== null ? 'Update' : 'Add'}</button>
      <br />
      <div className="records-container">
        <div className="record-section">
          <h2>추가한 기록</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.value}
                <br />
                <button onClick={() => saveData_localStorage(item.id)}>저장하기</button>
                <button onClick={() => editData(item.id)}>수정하기</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="saved-section">
          <h2>저장된 정보</h2>
          <ul>
            {savedata.map((item, index) => (
              <li key={index}>
                {item}
                <br />
                <button onClick={() => deleteSavedData(item)}>삭제하기</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
