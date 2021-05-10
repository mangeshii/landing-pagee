import "./second-page.css";
import officeimg from "./img3.png";
const SecondPage = () => {
    return (
        <>
            <div className="second-page-wrapper">
                <div className="left-section">
                    <div className="header">
                        <h1>Syntra Digital Agency</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Et, natus soluta! Sequi quibusdam iure nihil.
                            Soluta laudantium corrupti consequatur molestiae!
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quam, iure.
                        </p>
                    </div>
                    <div className="subheader">
                        <div className="sub-header1">
                            <h3>Expert Team</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Porro doloribus ea earum
                                debitis totam, recusandae sequi velit non.
                            </p>
                        </div>
                        <div className="sub-header2">
                            <h3>Business Anayltics</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Porro doloribus ea earum
                                debitis totam, recusandae sequi velit non.
                            </p>
                        </div>
                    </div>
                    <div className="quote-wrapper">
                        <div className="quote-container">
                           <p>
                           <i>We build thoughtful identities and experiences to
                            evalute and empower organizations</i>
                           </p>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <img src={officeimg} alt="efw" />
                </div>
            </div>
        </>
    );
};

export default SecondPage;