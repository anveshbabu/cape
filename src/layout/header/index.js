
import styles from './header.module.scss'
import {NavLink} from '@/components/common'
export const Header = () => {


    return (

        <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.customNavbar}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className={styles.brandImage} src='/logo.png'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${styles.navMenu}`}>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/aboutUs">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">Careers</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="/contactUs">Contact Us</NavLink>
                        </li>
                        
                    </ul>
                  
                </div>
            </div>
        </nav>
    )

}