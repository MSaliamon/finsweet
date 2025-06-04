import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Section6 from '../../components/Main/Section6/Section6'
import './Blog.scss'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
function Blog() {
  return (
    <>
      <Header />
      <main className="main">
        <Section1 />
        <Section2 />
        <Section6 />
      </main>
      <Footer />
    </>
  )
}

export default Blog