import React, { useState, useEffect } from 'react';
import './css/memo.css'; // CSS 파일을 임포트

const App = () => {
  const [data, setData] = useState([]);
  const [savedata, setSavedata] = useState([]); // 객체 배열로 유지
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null); // 수정할 항목의 ID
  const [isReloaded, setIsReloaded] = useState(false); // 불러온 데이터 여부

  // 로컬 스토리지에서 데이터 로드
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('memoData')) || [];
    const storedSavedData = JSON.parse(localStorage.getItem('savedData')) || [];
    setData(storedData);
    setSavedata(storedSavedData);
  }, []);

  // 로컬 스토리지에 데이터 저장
  const saveToLocalStorage = (memoData, savedData) => {
    localStorage.setItem('memoData', JSON.stringify(memoData));
    localStorage.setItem('savedData', JSON.stringify(savedData));
  };
  const saveToLocalStorage_memo = (memoData) => {
    localStorage.setItem('memoData', JSON.stringify(memoData));
  };

  // 데이터 추가 및 업데이트
  const addData = () => {
    if (editId !== null) {
      // 수정 모드
      const updatedData = data.map((item) =>
        item.id === editId ? { ...item, value: inputValue } : item
      );
      setData(updatedData);

      // 저장 데이터도 업데이트
      const updatedSavedata = savedata.map((item) =>
        item.id === editId ? { ...item, value: inputValue } : item
      );
      setSavedata(updatedSavedata);

      saveToLocalStorage(updatedData, updatedSavedata); // 수정된 데이터를 저장
      setEditId(null); // 수정 모드 종료
    } else {
      // 추가 모드
      const newItem = { id: Date.now(), value: inputValue };
      const updatedData = [...data, newItem];
      setData(updatedData);
      saveToLocalStorage(updatedData, savedata); // 새로운 데이터 저장
    }
    setInputValue(''); // 입력 필드 초기화
  };

  // 모든 데이터 삭제
  const deleteAllData = () => {
    setData([]);
    // setSavedata([]); // 저장 데이터도 삭제
    saveToLocalStorage_memo([]); // 빈 배열로 저장
  };

  // 데이터 편집
  const editData = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setInputValue(itemToEdit.value);
    setEditId(id); // 수정할 항목의 ID 설정
  };

  // 데이터 저장
  const saveData_localStorage = (id) => {
    const itemToSave = data.find((item) => item.id === id);
    const newSavedItem = { id: itemToSave.id, value: itemToSave.value }; // 동일한 ID 사용
    setSavedata((prevSavedata) => {
      const updatedSavedata = [...prevSavedata, newSavedItem];
      saveToLocalStorage(data, updatedSavedata); // 모든 데이터를 저장
      return updatedSavedata;
    });
    console.log('저장된 데이터:', itemToSave.value);
  };

  // 저장된 데이터 삭제
  const deleteSavedData = (id) => {
    const updatedSavedData = savedata.filter((item) => item.id !== id);
    setSavedata(updatedSavedData);
    saveToLocalStorage(data, updatedSavedData); // 모든 데이터를 저장
  };

  const reloadSaveData = (id) => {
    const itemToLoad = savedata.find((item) => item.id === id);
    
    if (itemToLoad) {
      setInputValue(itemToLoad.value);
      setEditId(itemToLoad.id); // 수정 모드로 전환
      setIsReloaded(true); // 불러온 데이터 상태 업데이트
    } else {
      alert('저장된 데이터가 없습니다.');
    }
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
      <button onClick={addData}>
        {editId === null || !isReloaded ? '추가하기' : '수정하기'}
      </button>
      <button onClick={deleteAllData}>기록 삭제</button>
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
            {savedata.map((item) => (
              <li key={item.id}>
                {item.value}
                <br />
                <button onClick={() => deleteSavedData(item.id)}>삭제하기</button>
                <button onClick={() => reloadSaveData(item.id)}>불러오기</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
