import './Section1.scss'
import men from '../../../assets/blog/png/man.png'
function Section1() {
  return (
    <section className="section1-blog">
      <div className="section1-blog__container">
        <p className="section1-blog__container-sub-title">Featured Post</p>
        <div className="section1-box">
          <h1 className="section1-box__title">Step-by-step guide to choosing great font pairs</h1>
          <p className="section1-box__text1">By John Doe   l   May 23, 2022 </p>
          <p className="section1-box__text2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
        <button className="section1-blog__container-btn button">Read More</button>
      </div>
      <img src={men} alt="men" className="section1-blog__img" />
    </section>
  )
}

export default Section1