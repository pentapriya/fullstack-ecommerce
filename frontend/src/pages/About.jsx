import React from 'react'
import Title from '../components/Title'
import about from '../assets/about.png'

const About = () => {
  return (
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'About'} text2={'Us'}/>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-[60%]' src={about} alt=''/>
        <div className="flex flex-col gap-6 text-gray-600 text-sm">
          <p>Shopsy a multinational technology company that focuses on e-commerce, cloud computing, and digital streaming. It operates as a large online retailer, selling a wide variety of products, and also provides cloud computing services through Amazon Web Services. Amazon is known as "the everything store" due to the vast range of items it offers</p>
          <p>Shopsy is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We strive to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to be Earth's most customer-centric company, Earth's best employer, and Earth's safest place to work</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'Why'} text2={' Choose Us'}/>
      </div>
      <div className="flex flex-row text-sm mb-20">
        <div className="border px-10 py-8 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-800'>We meticulously select and vet each product to ensure it meets our stringent quality standards</p>
        </div>
        <div className="border px-10 py-8 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-800'>With our user friendly interfaces and hassle free ordering process, shopping has never been easier</p>
        </div>
        <div className="border px-10 py-8 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-800'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority</p>
        </div>
      </div>
    </div>
  )
}
export default About