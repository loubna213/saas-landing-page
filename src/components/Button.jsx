import Marker from './Marker'

const Button = ({ children, icon, href, onClick, markerFill }) => {

    const Inner = () => (
        <>
            <span className='relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>
                <span className='absolute -left-[1px]'><Marker markerFill={markerFill}/></span>
                { icon &&
                    <img className="size-10 mr-5 object-contain z-10" src={icon} alt="icon" /> 
                }
                <span className='relative z-2 font-poppins base-bold uppercase text-p1'>{ children }</span>
            </span>
        </>
    )

  return href ? (
    <a href={href} className="relative p-0.5 g5 rounded-2xl shadow-500 group uppercase">
        <Inner />
    </a>
  ) : (
    <button onClick={onClick} className="relative p-0.5 g5 rounded-2xl shadow-500 group uppercase">
        <Inner />
    </button>
  )
}

export default Button
