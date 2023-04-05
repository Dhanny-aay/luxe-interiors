import Advert from '@/comps/advert';
import Category from '@/comps/categories';
import Feats from '@/comps/feats';
import Footer from '@/comps/footer';
import Hero from '@/comps/hero';
import Navbar from '@/comps/navbar';
import Recog from '@/comps/recog';
import Update from '@/comps/update';
import styles from '@/styles/Home.module.css';
import TableProvider from '@/contexts/tableContext';



export default function Home() {
  return (
    <>
    <TableProvider>
      <Navbar/>
      <Hero/>
      <Category/>
      <Advert/>
      <Feats/>
      <Update/>
      <Recog/>
      <Footer/>
    </TableProvider>
    </>
  )
}
