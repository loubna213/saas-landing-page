import { useState } from 'react'
import { Element } from 'react-scroll'
import CountUp from 'react-countup'
import { plans } from '../content'
import Button from '../components/Button'

const Pricing = () => {
    const [monthly, setMonthly] = useState(true)
    return (
        <section>
            <Element name='pricing'>
                <div className="container">
                    <div className='max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16'>
                        <h3 className='h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm'>Flexible pricing for teams of all sizes</h3>
                        <div className='relative z-4 flex gap-2 mx-auto w-[375px] border-2 border-s3/25 bg-s1/50 rounded-3xl p-2 backdrop-blur-[6px] max-md:w-[310px]'>
                            <div className={`g4 pricing-head_btn_before absolute top-2 left-2 ${monthly ? '' : 'translate-x-full'} h-[calc(100%-16px)] w-[calc(50%-8px)] before:h-100 rounded-14 overflow-hidden shadow-400 transition-transform duration-500`} />
                            <button className={`pricing-head_btn ${monthly && 'text-p4'}`} onClick={() => setMonthly(true) }>Monthly</button>
                            <button className={`pricing-head_btn ${monthly && 'text-p4'}`} onClick={() => setMonthly(false) }>Annual</button>
                        </div>
                    </div>

                    <div className='scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6'>
                        {
                            plans.map((plan, index) => (
                                <div key={plan.id} className='pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)] flex flex-col justify-center items-center'>
                                    <img src={plan.logo} alt={plan.title} className={`mt-[-4.5rem] object-contain drop-shadow-2xl ${index === 1 ? 'size-[120px]' : 'size-[88px]'}`} />
                                    <div className={`relative flex flex-col items-center ${index === 1 ? 'pt-24': 'pt-12'}`}>
                                        <div className={`small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase ${index === 1 ? 'border-p3 text-p3': 'border-p1 text-p1'}`}>{plan.title}</div>
                                        <div className='relative z-2 flex justify-center items-center'>
                                            <div className={`h-num flex items-start ${index === 1 ? 'text-p3': 'text-p4'}`}>
                                                <CountUp start={plan.priceMonthly} end={monthly ? plan.priceMonthly : plan.priceYearly} duration={0.4} useEasing={false} preserveValue />
                                            </div>
                                            <p className='small-1 relative top-3 ml-1 uppercase'>\mo</p>
                                        </div>
                                        <p className={`body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4 ${index === 1 && 'border-b'}`}>{plan.caption}</p>
                                        <ul className='mw-auto space-y-4 xl:px-7'>
                                            {
                                                plan.features.map((item, index) => <li key={index} className='flex relative items-center gap-5'>
                                                    <img src="/images/check.png" alt="check" className='size-10 object-contain' />
                                                    <p className='flex-1'>{item}</p>
                                                </li>)
                                            }
                                        </ul>
                                        <div className='mt-10 flex justify-center w-full'>
                                            <Button icon={plan.icon}>get started</Button>
                                        </div>
                                        {index === 1 && <p className='small-compact mt-9 text-center text-p3'>- limited time offer -</p>}
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </Element>
        </section>
    )
}
        

export default Pricing
