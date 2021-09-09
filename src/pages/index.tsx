import { NextPage } from 'next'
import Header from '../components/admin/Header'

type Props = {}

const Home: NextPage<Props> = () => {
  return (
    <div className="">
      <Header />
      Home
    </div>
  )
}
export default Home
