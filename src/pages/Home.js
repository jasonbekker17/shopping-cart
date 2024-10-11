import React from 'react'
import Card  from '../components/Card'
import Apple  from "../Assets/images/APPLE Airpods Max Bluetooth Headset.jpg"
import Boat from "../Assets/images/boat Rockets 450.avif"
import jbl from "../Assets/images/JBL Tune 760NC.webp"
import Logi from "../Assets/images/Logitech H111 Wired.jpeg"
import Sony from "../Assets/images/Sony Wh-Ch510 Bluetooth Wireless.jpg"
import Zebro from "../Assets/images/ZEBRONICS Zeb-Thunder Wired.jpg"
import useTitle from '../Hooks.js/useTitle'
function Home({title}) {
  useTitle(`${title}`)
  return (
    <main>
         <section className='max-w-7xl mx-auto py-7 mt-20'>
    <div className='flex justify-center  flex-wrap other:justify-around'>
          
            <Card img={Apple} title="APPLE Airpods Max Bluetooth Headset" price={149}/>
            <Card img={Boat} title="boat Rockets 450"price={49}/>
            <Card img={jbl} title="JBL Tune 760NC"price={179}/>
            <Card img={Logi} title="Logitech H111 Wired"price={39}/>
            <Card img={Sony} title="Sony Wh-Ch510 Bluetooth Wireless"price={49}/>
            <Card img={Zebro} title="images/ZEBRONICS Zeb-Thunder Wired"price={29}/>
    </div>
    </section>
    </main>
 
  )
}

export default Home
