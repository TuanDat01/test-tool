import questionsData from '../data.json'
import { Link,Routes,Route,useNavigate  } from "react-router-dom";
import './instruct.css'
import { useEffect, useState } from 'react';
function Result({score}){

  // const StartQuestion=()=>{
  //     navigate("/question/id=1",1)
  // }
  const [result,setResult] = useState({})
  useEffect(()=>{
    const Find=(score)=>{
        let checkResult = questionsData.results.filter(item=>
            score>=item.range[0]&&score<=item.range[1]
        );
        setResult(checkResult[0])
        console.log(checkResult[0].name)
    }
    Find(score)
  },[score])
  return (
    <div>
        <h3 className='header__title'>{questionsData.title}</h3>
        <div className='main'>
            <div className='main__result'>
                <img className='main__result__image' src="https://assets.filum.ai/assessments/voc-level3.svg"/>
                <div className='main__result__title'>
                    <h3>VOICE OF THE CUSTOMER - CẤP ĐỘ {result.level}</h3>
                    <h1>{result.name}</h1>
                </div>
            </div>
            {result && result.description && (
          <h5>{result.description.text}</h5>
        )}
        <h2>{score}</h2>
        <h4>score</h4>
      </div>
    </div>
  )
}
export default Result