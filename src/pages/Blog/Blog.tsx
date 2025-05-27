import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Blog.scss'
import Section1 from './Section1/Section1'
function Blog() {
  return (
    <>
      <Header />
      <main className="main">
        <Section1 />
      </main>
      <Footer />
    </>
  )
}

export default Blog