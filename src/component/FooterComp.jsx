import './Footer.css';

function FooterComp() {
    return (
        <footer className="footer" >

            <div className="footer-container" data-aos="flip-left">
                <h2>Biz bilan bog‘laning</h2>
                <p>Yangiliklar va takliflardan xabardor bo‘lish uchun obuna bo‘ling!</p>
                <p>+1234567890</p>

                <div className="social-icons">
                    <a href="t.me/mars_1140"><img src="./telegram.png" alt="Facebook" /></a>
                    <a href="https://www.instagram.com/reel/DA0dwz8O4g5/?igsh=MWUzZ3BlZWhxemw0cA%3D%3D"><img src="./inst.png" alt="Instagram" /></a>
                    <a href="https://youtu.be/Pjc3Bd9m7_k?si=QhK9arBFB6oTj82Y"><img src="./yotbe.png" alt="YouTube" /></a><br />
                </div> 
            </div>   
        </footer>
    );
}

export default FooterComp;
