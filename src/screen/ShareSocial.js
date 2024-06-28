import { Helmet } from "react-helmet"
import level1Image from '../image/level1.jpg';
import level2Image from '../image/level2.jpg';
import level3Image from '../image/level3.jpg';
import level4Image from '../image/level4.jpg';
import level5Image from '../image/level5.jpg';

import {useLocation  } from "react-router-dom";

function ShareCocial() {
    const location = useLocation();
    const level = location.state?.level||0
    const handleFacebookShare = () => {
        window.location.href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftest-tool-rho.vercel.app%2F&src=sdkpreparse";
      };
    return (
        <div>
            <Helmet>
                <meta property="og:title" content="Test App" />
                <meta property="og:description" content="Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng" />
                <meta property="og:image" content={
                    level === 1 ? level1Image :
                    level === 2 ? level2Image :
                    level === 3 ? level3Image :
                    level === 4 ? level4Image :
                    level5Image
                } />                <meta property="og:url" content="https://test-tool-rho.vercel.app/result" />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="1384301575511797" /> {/* Replace with your actual Facebook App ID */}
            </Helmet>
            <div className="share">
                <h3>Chia sẻ kết quả</h3>
                <h5>Đây là một số cách bạn có thể chia sẻ với đồng nghiệp của mình</h5>
                <h1>{level}</h1>
                <div className="btnshare">
                    <button className="btnshare__social"
                        data-href="https://test-tool-rho.vercel.app/result"
                        data-layout="button"
                        data-size="large" onClick={handleFacebookShare}>
                    Chia sẻ qua facebook</button>
                    <button className="btnshare__social">Chia sẻ qua email</button>
                    <button className="btnshare__social">Sao chép đường link đến trang kết quả</button>
                </div>
                <a href="/result" className="cancel">Hủy</a>
            </div>
        </div>
    )
}
export default ShareCocial