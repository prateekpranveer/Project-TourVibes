import type { NextPage } from 'next'
import Header from '../components/Header'


const Home: NextPage = () => {

  const newUser = {
    name: "PiKACHU",
    emailId: "sk@gmail.com",
    password: "2380",
    userName: "diablopendes",
    userLevel: 2,
    rating: 4,
    phone: 8227956933
  }

  // Testing redux dataLayer
  
  // const data = async () => {
  //   await axios.post('/user/reg', newUser);
  // }

  // data()

  return (
    <div className='max-w-9xl px-4 m-auto'>
      <Header />

      {/* <h1>Hello World Count = {count}</h1>
        <button onClick={
        () => dispatch(decrement())
      } className={`${btnr} hover:bg-red-800`}>Decrement</button>
      <button onClick={
        () => dispatch(increment())
      } className='px-4 py-2 bg-green-500 hover:bg-green-600 font-jost-400 rounded-md font-sm text-white'>Increment</button> */}
    </div>
  )
}

export default Home
