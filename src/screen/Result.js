import React, { useEffect, useState } from 'react';
import questionsData from '../data.json';
import level1Image from '../image/level1.jpg';
import { Helmet } from 'react-helmet';
import './instruct.css';

function Result({ score }) {
  const [result, setResult] = useState({});

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
    <div>
      <Helmet>
      <meta property="og:title" content={questionsData.title} />
        <meta property="og:description" content={result.description ? result.description.text : ''} />
        <meta property="og:image" content="https://i.ytimg.com/vi/eJEP5X0uC2E/maxresdefault.jpg" /> {/* Ensure this is the correct image variable */}
        <meta property="og:url" content="https://test-tool-rho.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="87741124305" /> {/* Replace with your actual Facebook App ID */}
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
        <div className="fb-share-button" 
          data-href="https://test-tool-rho.vercel.app/" 
          data-layout="button" 
          data-size="large">
          <a target="_blank" 
             href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftest-tool-rho.vercel.app%2F&amp;src=sdkpreparse" 
             className="fb-xfbml-parse-ignore">
            Chia sẻ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Result;
