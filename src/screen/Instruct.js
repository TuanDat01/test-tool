import questionsData from '../data.json'
import './instruct.css'
function Instruct({StartQuestion}){
  return (
    <div>
        <h3 className='header__title'>{questionsData.title}</h3>
      <div className='main'>
        <li>Hướng dẫn trả lời</li>
        <h2>Hãy dựa vào những hướng dẫn sau đây để trả lời câu hỏi: </h2>
        <ul>
            <li>Chọn "Có": nếu câu đó phản ánh  hiện trạng  đang có và được thực hiện một cách nhất quán (ít nhất 80% thời gian)</li>
            <li>Chọn "Không có": nếu hoàn toàn chưa từng thực hiện</li>
            <li>Chọn "Không rõ vấn đề này":nếu không chắc chắn đã thực hiện hay chưa</li>
        <div className='login'>
        <button onClick={StartQuestion} className='login__start'>Bắt đầu <img className="login__img" alt ="start-icon" height="15" width="15" color="white"src="https://img.icons8.com/?size=100&id=J0vlEGlfBR7h&format=png&color=000000"/></button>
      </div>


        </ul>
      </div>
    </div>
  )
}
export default Instruct