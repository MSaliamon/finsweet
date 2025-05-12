import './Section1.scss'
function Section1() {
  return (
    <section className="section1">
        <div className="section1-container">
            <p className="section1-container__sub-title">Posted on startup</p>
            <h1 className="section1-container__title">Step-by-step guide to choosing great font pairs</h1>
            <div className="section1-textbox">
                <p className="section1-textbox__text">By James West  |  May 23, 2022 </p>
                <p className="section1-textbox__text2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
        </div>
        <button className="section1-btn button">Read More</button>
    </section>
  )
}

export default Section1