import { Element } from 'react-scroll'
import { features, details } from '../content/index'
import Button from '../components/Button'

const Features = () => {
  return (
    <section>
        <Element name='features'>
            <div className="container">
                <div className='relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3'>
                    {
                        features.map(feat => (
                                <div key={feat.id} className='relative z-2 md:px-10 px-5 md:py-10 py-5 flex-50 max-md:g7 max-md:border-s3 max-md:rounded-3xl max-md:flex-320'>
                                    <img src={feat.icon} alt={feat.title} className='size-28 object-contain' />
                                    <div className='caption '>{feat.caption}</div>
                                    <h2 className='h3 max-w-400 mb-6 font-bold text-p4 max-lg:mb-7 max-lg:h4 max-md:mb-4 max-md:text-5xl max-md:leading-12'>{feat.title}</h2>
                                    <p className='max-w-440 mb-14 body-1 max-md:mb-10'>{feat.text}</p>
                                    <Button icon={feat.button.icon}>{feat.button.title}</Button>
                                </div>
                            )
                        )
                    }
                    <ul className='relative flex justify-around flex-grow px-[5%] border-t-2 border-s3 rounded-7xl max-md-heddin'>
                        {
                            details.map(item => (
                                <li key={item.id} className='relative pt-16 px-4 pb-14 flex flex-col gap-4 justify-center items-center'>
                                    <img src={item.icon} alt={item.title} className='size-24 object-contain' />
                                    <p className="uppercase">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Features
