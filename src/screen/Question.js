import questionsData from '../data.json'
import { useLocation,useNavigate } from 'react-router-dom';

import './instruct.css'
import { useEffect, useState } from 'react';
function Question({NextQuestion,PreviousQuestion,Calculate}){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const [question,setQuestion] = useState({})
    const [activeButton, setActiveButton] = useState(null);

    useEffect(()=>{
    const Filter=()=>{
        let list = questionsData.questions.filter(item=>item.id==id);
        setQuestion(list[0])
        }
        
    Filter()
   },[id])
   useEffect(()=>{
    setActiveButton(null)
   },[id])
    const screenWidth = window.innerWidth;
    const CheckClick=(index)=>{
        setActiveButton(index)
    }
  return (
    <div>
        <h3 className='header__title'>{questionsData.title}</h3>
        <div className='main'>
        <li>Câu hỏi {id}/10</li>
        <h2 style={{maxWidth:`${screenWidth*0.25}px`}}>{question.title}</h2>
        <div className='ans'>
          {question.options && question.options.length > 0 && question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => CheckClick(index)}
              className={`ans__btn ${activeButton === index ? 'ans__btn--active' : ''}`}
            >
              {option.text}
            </button>
          ))}
        </div>
        <div className='change'>
            <button onClick={PreviousQuestion}className='change__previous'>Quay lại</button>
            <button onClick={() => {
            if (activeButton !== null) {
              Calculate(question.options[activeButton].score);
            }
            NextQuestion();
          }} className='change__next'>Tiếp theo</button>
        </div>
      </div>
    </div>
  )
}
export default Question