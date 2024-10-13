import React, { useState } from 'react';
import uml1 from './resource/umlImage1.png';
import uml2 from './resource/umlimage2.png';

const UMLDiagramGenerator = () => {
const [umlCode, setUmlCode] = useState(''); // 초기값을 빈 문자열로 설정
const [umlImageUrl, setUmlImageUrl] = useState('');
const [error, setError] = useState(''); // 에러 상태 추가

const generateUml = async () => {
    try {
        const apiUrl = `http://localhost:8080/api/UML/generate-uml/app?appUrl=${encodeURIComponent(umlCode)}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // 서버에서 생성된 UML 코드를 가져옵니다.
        const umlCodeResponse = await response.text(); // UML 코드를 문자열로 가져옵니다.
        const imageUrl = await generatePlantUMLImage(umlCodeResponse); // UML 코드로부터 이미지 URL을 생성합니다.
        setUmlImageUrl(imageUrl); // 생성된 이미지 URL을 상태에 저장
        setError(''); // 에러 초기화
    } catch (error) {
        console.error('Error generating UML:', error);
        setError('Error generating UML: ' + error.message); // 에러 메시지 설정
    }
};

const generatePlantUMLImage = async (umlCode) => {
    const proxyUrl = 'http://localhost:5000/generate-uml'; // 프록시 서버 URL

    try {
        const response = await fetch(proxyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ umlCode }), // UML 코드를 JSON 형식으로 전송
        });

        if (!response.ok) {
            throw new Error('Failed to generate UML image');
        }

        // 응답으로 받은 Blob 데이터를 URL로 변환
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);
        return imageUrl; // 생성된 이미지 URL 반환
    } catch (error) {
        console.error('Error generating PlantUML image:', error);
        throw error; // 에러 발생 시 재던지기
    }
};

return (
    <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ flex: 1, borderRight: '1px solid #ccc', padding: '10px', position: 'relative' }}>
             <button
                style={{
                                position: 'absolute',
                                left: '97%',
                                top: '3%',
                                transform: 'translate(-50%, -50%)',
                                padding: '10px 10px', // 상하, 좌우 패딩
                                fontSize: '18px', // 글자 크기
                                backgroundColor: '#007bff', // 배경색
                                color: '#fff', // 글자색
                                border: 'none', // 테두리 없앰
                                borderRadius: '15px', // 모서리 둥글게
                                cursor: 'pointer' // 커서 모양 변경

                            }}
                onClick={() => window.location.href = '/choisungrim.io'} // 홈으로 이동하는 기능
             >
                홈
            </button>
            <h1>UML Diagram Generator</h1>
            <textarea
                rows={10}
                cols={50}
                value={umlCode}
                onChange={(e) => setUmlCode(e.target.value)}
                placeholder="http://localhost:8080/api/UML/api/application-context"
            />
            <br />
            <button onClick={generateUml}>Generate UML</button>
            {umlImageUrl && (
                <div>
                    <h2>Generated UML Diagram</h2>
                    <img src={umlImageUrl} alt="UML Diagram" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
            {umlCode && (
                <div>
                    <h2>Entered UML Code</h2>
                    <pre>{umlCode}</pre> {/* UML 코드를 화면에 표시 */}
                </div>
            )}
            {error && <div style={{ color: 'red' }}>{error}</div>} {/* 에러 메시지 표시 */}
        </div>
        <div style={{ borderRight: '1px solid #ccc', padding: '10px' }}>
            <h1>Example REST</h1>
            <pre>
                http://localhost:8080/api/UML/generate-uml/app?appUrl=http://localhost:8080/api/UML/api/application-context
            </pre>
            <h1>Example Code (@PlantUML)</h1>
            <pre style={{ fontSize: '9px'}}>
            {`@GetMapping("/api/application-context")
            public Map<String, Object> getApplicationContextInfo() {
                Map<String, Object> contextInfo = new HashMap<>();
                String[] beanNames = applicationContext.getBeanDefinitionNames();
                for (String beanName : beanNames) {
                    Class<?> beanClass = applicationContext.getBean(beanName).getClass();
                    if (beanClass.isAnnotationPresent(PlantUML.class)) {
                        Map<String, Object> beanInfo = new HashMap<>();
                        beanInfo.put("className", beanClass.getName());
                        Field[] fields = beanClass.getDeclaredFields();
                        Map<String, String> fieldInfo = new HashMap<>();
                        for (Field field : fields) {
                            fieldInfo.put(field.getName(), field.getType().getSimpleName());
                        }
                        beanInfo.put("fields", fieldInfo);
                        Method[] methods = beanClass.getDeclaredMethods();
                        Map<String, String> methodInfo = new HashMap<>();
                        for (Method method : methods) {
                            methodInfo.put(method.getName(), method.getReturnType().getSimpleName());
                        }
                        beanInfo.put("methods", methodInfo);
                        Class<?>[] interfaces = beanClass.getInterfaces();
                        Map<String, String> interfaceInfo = new HashMap<>();
                        for (Class<?> iface : interfaces) {
                            interfaceInfo.put(iface.getSimpleName(), iface.getName());
                        }
                        beanInfo.put("interfaces", interfaceInfo);
                        contextInfo.put(beanName, beanInfo);
                    }
                }
                return contextInfo; // 빈 정보를 JSON 형태로 반환
            }`}
                            </pre>
                            <h1> Example Result </h1>
                            <img src={uml1} alt="uml1" style={{ width: '300px', height: '200px' }} />
                            <img src={uml2} alt="uml2" style={{ width: '300px', height: '200px' }} />

            </div>

        </div>
    );
};

export default UMLDiagramGenerator;
