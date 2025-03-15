import './App.css';
/*import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Home from './pages/Home';
*/

function App() {
  return (
    /*<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={< />} />
        <Route path="/" element={< />} />
        <Route path="/" element={< />} />

      </Routes>
    </BrowserRouter>*/
    
    <div className="App">
      <header className="App-header">
       <p>
         왼쪽- 이름 or / 아이콘 오른쪽- 탭메뉴
       </p>
       
      </header>
   
      <div className="App-slide">
        <p>
          슬라이드화면
        </p>
      </div>

      <div className="App-content">
        <p>
             
        </p>
        <div className="search-box">
          <p>
             검색박스
          </p>
        
        </div>

  
      
  <div className="button-container">
    <button className="square-btn">공지사항</button>
    <button className="square-btn">학사일정</button>
    <button className="square-btn">학교소식</button>
    <button className="square-btn">캠퍼스 안내</button>
    <button className="square-btn">연락처 안내</button>
    <button className="square-btn">자주 묻는 질문</button>
  </div>


      </div>
     
      </div>


  );
}

export default App;
