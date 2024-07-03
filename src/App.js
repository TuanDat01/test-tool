import Home from "./screen/HomeLogin";
import Instruct from "./screen/Instruct";
import { Link,Routes,Route ,useNavigate, useLocation} from "react-router-dom";
import Question from "./screen/Question";
import Result from "./screen/Result";
import { useEffect, useState } from "react";
import ShareCocial from "./screen/ShareSocial";
function App() {
  const navigate = useNavigate();
  const [id,setId] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idnew = parseInt(searchParams.get("id"));
  const [score,setScore] = useState(0)

  const StartQuestion=()=>{
    navigate(`/question?id=${id}`)
  }

  const NextQuestion=()=>{
    setId(idnew); 
    if(idnew+1===11)
      {
        navigate("/result")
      }
    else
      navigate(`/question?id=${idnew+1}`)

  }
  
  const PreviousQuestion=()=>{
    setId(idnew);
    if(idnew-1===0)
      {
        navigate("/instruct")
      }
    else
      navigate(`/question?id=${idnew-1}`)


  }
  const Calculate=(check)=>{
    setScore(prevScore => prevScore + check);
    console.log(score);
}
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/instruct" element={<Instruct StartQuestion={StartQuestion} />}/>
      <Route path="/question" element={<Question id={id} NextQuestion={NextQuestion} PreviousQuestion={PreviousQuestion} Calculate={Calculate}/>}/>
      <Route path="/result" element={<Result score={score}/>}/>
      <Route path ="/share" element={<ShareCocial/>}/>
    </Routes>
  )
}

export default App;
