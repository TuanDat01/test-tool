import { Helmet, HelmetProvider } from 'react-helmet-async';
import questionsData from '../data.json';
import level1Image from '../image/level1.jpg';
import level2Image from '../image/level2.jpg';
import level3Image from '../image/level3.jpg';
import level4Image from '../image/level4.jpg';
import level5Image from '../image/level5.jpg';
import './Page.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Result({ score }) {
  const [result, setResult] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const Find = (score) => {
      let checkResult = questionsData.results.filter(
        (item) => score >= item.range[0] && score <= item.range[1]
      );
      setResult(checkResult[0]);
    };
    Find(score);
  }, [score]);

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [result]);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
        <meta property="og:image" content={
            result.level === 1 ? level1Image :
              result.level === 2 ? level2Image :
                result.level === 3 ? level3Image :
                  result.level === 4 ? level4Image :
                    level5Image
          } />
          <meta property="og:title" content="Test App Version 2" />
          <meta property="og:description" content="Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng" />
          <meta property="og:url" content="https://test-tool-rho.vercel.app/result" />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content="1384301575511797" />
        </Helmet>
        <h3 className="header__title">{questionsData.title}</h3>
        <div className="main">
          <div className="main__result">
            <img
              className="main__result__image"
              src="https://assets.filum.ai/assessments/voc-level3.svg"
              alt="Result"
            />
            <div className="main__result__title">
              <h3>VOICE OF THE CUSTOMER - CẤP ĐỘ {result.level}</h3>
              <h1>{result.name}</h1>
            </div>
          </div>
          {result && result.description && <h5>{result.description.text}</h5>}
          <h2>{score}</h2>
          <h4>score</h4>
          <button className='btnshare__social' onClick={() => { navigate("/share", { state: { level: result.level } }) }}>Share</button>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Result;