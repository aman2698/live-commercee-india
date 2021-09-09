import Image from './../image/about.jpg'

const About = ({ data }) => {
  return (
    <div id='about'>
      <div
        className='container mx-auto px-3 mt-5'
        style={{ backgroundColor: '#f4f5f7' }}
      >
        <h1 className='text-center text-5xl font-bold'>About Us</h1>
        <div className='grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center  mt-2'>
          <span className='section-title ml-5'> </span>
        </div>
        <div className='grid-flow-col flex justify-space'>
          <img src={Image} alt='' />

          <div class='bg-green-500 rounded-lg m-4 h-12'>
            <p>{data ? data.paragraph : 'loading...'}</p>
            <br />
            <br />
            <h1 className='text-2xl font-bold'>Why Choose Us?</h1>
            <div className='list-style'>
              <div className='grid-col-6 gap-4'>
                <ul>
                  {data
                    ? data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                    : 'loading'}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
