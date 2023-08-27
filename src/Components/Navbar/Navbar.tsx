import '../Navbar/Navbar.css';
import Logo from './Logo';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Search,Envelope, Apple } from "react-bootstrap-icons";

function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='Navbar'>
            <div className="container p-3">
                <div className="row d-md-flex justify-content-between">
                    <div className="col-md-9 col-lg-8 d-flex gap-3">
                        <Logo />
                        <form className="d-flex position-relative" role="search">
                            <Search className='position-absolute sign-icons' />
                            <input className="form-control" type="search" placeholder="Search for Movies,Events,plays,sports and Activities" aria-label="Search" />
                        </form>
                    </div>
                    <div className='col-md-3 d-flex gap-2'>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Chennai
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title className='ms-auto fs-6 fw-semibold'>Get Started</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
                                        <div className='signin-fields position-relative'>
                                            <img src="https://in.bmscdn.com/webin/common/icons/googlelogo.svg" className='position-absolute' alt="" />
                                            <p className='sign-socials'>Continue With Google</p>
                                        </div>
                                        <div className='signin-fields position-relative'>
                                            <Envelope className='position-absolute' />
                                            <p className='sign-socials'>Continue With Email</p>
                                        </div>
                                        <div className='signin-fields position-relative'>
                                            <Apple className='position-absolute' />
                                            <p className='sign-socials'>Continue With Apple</p>
                                        </div>
                                        <p className='text-center p-4'>OR</p>
                                    </div>
                                    <form action="">
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <img src='https://in.bmscdn.com/webin/common/icons/indianflag.svg' alt="" />
                                            <span>+91</span>
                                            <input type="tel" className='w-50 signin-number' placeholder='Continue With mobile number' />
                                        </div>
                                    </form>
                                    <div className='terms-conditions'>
                                        <p>I agree to the <a href="" className='text-dark'>Terms & conditions</a> &<a href="" className='text-dark'>privacy policy</a></p>
                                    </div>
                                </Modal.Body>
                            </Modal>
                            <button type="button" onClick={handleShow} className="btn btn-danger signin">Sign in</button>
                        </div>
                        <div>
                            <nav className="navbar">
                                <div className="container-fluid">
                                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                        <div className="offcanvas-header">
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Link</a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Dropdown
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li>
                                                            <hr className="dropdown-divider" />
                                                        </li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;