import './Section5.scss'
import Profile from '../../../assets/hompage/png/Profile.png'
import NextButtton from '../../../assets/hompage/svg/NextButton.svg'
import Backbutton from '../../../assets/hompage/svg/BackButton.svg'
import { useState } from 'react'

interface Slide {
  name: string
  place: string
  image: string
}

const slides: Slide[] = [
  {
    name: 'Jonathan Vallem',
    place: 'New york, USA',
    image: Profile,
  },
  {
    name: 'Jonathan Vallem1',
    place: 'New york, USA',
    image: Profile,
  },
]

function Section5() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % slides.length)
  }

  const handleBackClick = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
  }

  return (
    <section className="section5">
      <div className="section5-container1">
        <p className="section5-container1__sub-title">TESTIMONIALs</p>
        <h2 className="section5-container1__title">What people say about our blog</h2>
        <p className="section5-container1__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className="section5-container2">
        <p className="section5-container2__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="section5-slider">
          <div className="section5-slide">
            <img src={slides[currentIndex].image} alt="profile" className="section5-slide__img" />
            <div className="section5-slide__textbox">
              <p className="section5-slide__textbox-name">{slides[currentIndex].name}</p>
              <p className="section5-slide__textbox-place">{slides[currentIndex].place}</p>
            </div>
          </div>
          <div className="section5-buttons">
            <button className="section5-buttons__btn" onClick={handleBackClick}>
              <img src={Backbutton} alt="Backbutton" className="section5-buttons__btn-img" />
            </button>
            <button className="section5-buttons__btn" onClick={handleNextClick}>
              <img src={NextButtton} alt="NextButtton" className="section5-buttons__btn-img" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section5