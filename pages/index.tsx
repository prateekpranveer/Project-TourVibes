import type { NextPage } from 'next'
import Header from '../components/Header'
import Banner from '../components/banner/Banner'
import Search from '../components/search/Search'
import SearchByCategory from '../components/search/SearchByCategory'
import MustVisit from '../components/MustVisit'
import WriteBanner from '../components/blog/WriteBanner'
import Footer from '../components/footer/Footer'


const Home: NextPage = () => {

  return (
    <div className='max-w-9xl px-4 m-auto'>
      <Header />
      <div className='mt-2'>
        <Search />
      </div>
      <div className='mt-2'>
        <SearchByCategory />
      </div>
      <div className='mt-20'>
        <Banner />
      </div>
      <div>
        <MustVisit />
      </div>

      <div className='mt-10'>
        <WriteBanner />
      </div>
      <div className='footer mt-12'><Footer /></div>
    </div>
  )
}

export default Home
