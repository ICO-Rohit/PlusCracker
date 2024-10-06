import { IoLogoYoutube } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-yellow-400 w-full pl-10'>
            <p className='text-xl'>Contacts</p>
            <div className='flex gap-5'>
                <a href="https://www.youtube.com/@pluscracker-h" target="_blank" rel="noopener noreferrer">
                    <IoLogoYoutube size={50} />
                </a>
                <a href="https://t.me/LaxRam0" target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane size={50} />
                </a>
            </div>
        </div>
    )
}

export default Footer
