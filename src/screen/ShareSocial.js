import { useLocation } from "react-router-dom";

function ShareCocial() {
    const location = useLocation();
    const level = location.state?.level || 0
    const handleFacebookShare = () => {
        window.open(
            "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftest-tool-rho.vercel.app%2Fresult&amp;src=sdkpreparse"
        );    };
    return (
        <div>
            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v20.0&appId=1384301575511797" nonce="N1lcFgSv"></script>
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