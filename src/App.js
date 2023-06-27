import React from 'react'
import Navbar from './components/Navbar';
import ContactBar from './components/ContactBar';
import styles from './style';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Subscription from './components/Subscription';
import Feature from './components/Feature';
import Quality from './components/Quality';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-[120px]'>
        <Navbar/>
      </div>
      <Hero/>
      <Services/>
      <Subscription/>
      <Quality/>
      <Feature/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App