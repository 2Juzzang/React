import { Route } from 'react-router-dom';
import PostWrite from '../pages/PostWrite';
import { useHistory } from 'react-router-dom';

import Home from '../pages/Home';
import './App.css';

function App() {
  const history = useHistory();
  return (
      // 컨테이너
      <div style={{width:"360px", height:"100%", margin:"auto"}}>
        <div style={{backgroundColor:"#EEEEEE", height:"100%"}}>

            {/* 헤더 */}
            <div style={{fontSize:"20px", fontWeight:"bold" , padding:"8px", display:"flex", justifyContent:"space-between", textAlign:"center"}}>
              {/* 홈 화면으로 이동 */}
              <div style={{marginTop:"auto"}} onClick={()=>{history.push("/")}}>Hello</div>
                <div>
                <span>로그인</span>  <span>회원가입</span>
                </div>
            </div>

            <Route path="/" exact component={Home} />
            <Route path="/write" exact component={PostWrite} />
            <Route path="/write/:id" exact component={PostWrite} />

        </div>
      </div>
  );
}


export default App;
