import React, { useEffect, useState } from 'react';
import questionsData from '../data.json';
import { Helmet } from 'react-helmet';
import './instruct.css';
import { useNavigate } from "react-router-dom";

function Result({ score }) {
  const [result, setResult] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const findResult = (score) => {
      let checkResult = questionsData.results.filter(
        (item) => score >= item.range[0] && score <= item.range[1]
      );
      setResult(checkResult[0]);
    };
    findResult(score);
  }, [score]);

  useEffect(() => {
    // Function to set level in global scope
    window.setGlobalLevel = (level) => {
      // Access level here and do whatever you need with it
      console.log('Global level:', level);
    };
  }, [result]);

  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Test App" />
        <meta property="og:description" content="Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng" />
        <meta property="og:image" content="default_image.jpg" />
        <meta property="og:url" content="https://test-tool-rho.vercel.app/result" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="1384301575511797" /> {/* Replace with your actual Facebook App ID */}
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

        <button onClick={() => { navigate("/share", { state: { level: result.level } }) }}>Share</button>
      </div>
    </div>
  );
}

export default Result;
