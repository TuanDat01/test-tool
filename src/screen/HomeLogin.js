import questionsData from '../data.json'
import { Link,Routes,Route,useNavigate  } from "react-router-dom";
import './home.css'
function Home(){
  const navigate = useNavigate();
  const screenWidth = window.innerWidth;
  console.log(screenWidth)
  const StartClick=()=>{
    navigate('/instruct');

  }
  return (
    <div>
      <div className='header'>
        <h3 className='header__title'>{questionsData.title}</h3>
        <h1 style={{maxWidth:`${screenWidth*0.25}px`}}>Công ty bạn trưởng thành như thế nào trong việc lắng nghe khách hàng?</h1>
        <h3 style={{maxWidth:`${screenWidth*0.25}px`}}> Đánh giá khả năng của bạn trong việc lắng nghe, hiểu và đáp ứng các tín hiệu từ khách hàng </h3>
      </div>
      <div className='login'>
        <input className='login__email' placeholder='Địa chỉ email của bạn'/>
        <button onClick={StartClick} className='login__start'>Bắt đầu<img className="login__img" alt ="start-icon" height="15" width="15" color="white"src="https://img.icons8.com/?size=100&id=J0vlEGlfBR7h&format=png&color=000000"/></button>
      </div>
      <div className='image'>
        <img alt="img1" className="image__avatar image__avatar--top" height="95" width="175" src="https://img.pikbest.com/ai/illus_our/20230424/526a788f261e27159dd85660bce1a9b1.jpg!w700wp" />
        <img alt="img2" className="image__avatar image__avatar--bottom" height="95" width="175" src="https://img.pikbest.com/ai/illus_our/20230424/9aed3004e9a28793fb5954155f45257d.jpg!w700wp" />
      </div>
    </div>
    
  )
}
export default Home