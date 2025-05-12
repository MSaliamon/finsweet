import './Section2.scss'
import home from '../../../assets/hompage/png/white-concrete-building-1838640.png'

function Section2() {
  return (
    <section className="section2">
        <div className="section2-container1">
            <h2 className="section2-container1__title">Featured Post</h2>
            <div className="section2-box">
                <img src={home} alt="home" className="section2-box__img" />
                <div className="section2-box__cont">
                    <p className="section2-box__cont-text1">By John Doe   l   May 23, 2022</p>
                    <p className="section2-box__cont-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <p className="section2-box__cont-text3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
                <button className="section2-box__btn button">Read More</button>
            </div>
        </div>
        <div className="section2-container2">
            <div className="section2-box1">
                <h2 className="section2-box1__title">All Posts</h2>
                <a href="#" className="section2-box1__link">View All</a>
            </div>
            <div className="section2-box2">
                <div className="section2-cont">
                    <p className="section2-cont__text1">By John Deo   l   Aug 23, 2021 </p>
                    <p className="section2-cont__text2">8 Figma design systems that you can download for free today.</p>
                </div>
                <div className="section2-cont">
                    <p className="section2-cont__text1">By John Deo   l   Aug 23, 2021 </p>
                    <p className="section2-cont__text2">8 Figma design systems that you can download for free today.</p>
                </div>
                <div className="section2-cont">
                    <p className="section2-cont__text1">By John Deo   l   Aug 23, 2021 </p>
                    <p className="section2-cont__text2">8 Figma design systems that you can download for free today.</p>
                </div>
                <div className="section2-cont">
                    <p className="section2-cont__text1">By John Deo   l   Aug 23, 2021 </p>
                    <p className="section2-cont__text2">8 Figma design systems that you can download for free today.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2