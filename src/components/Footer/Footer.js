
import { AiFillInstagram, AiFillTwitterCircle  } from 'react-icons/ai'
import './Footer.css';


export const Footer = () => {
    return (

        <footer className="Footer">
            <div className="Footer__socials">
                <a href="https://www.instagram.com/bnmjoyas/" className="nav-link"  ><AiFillInstagram/></a>
                <a href="https://twitter.com/bnmJoyas" className="nav-link"><AiFillTwitterCircle/></a>
            </div>
        </footer>

    )      
}