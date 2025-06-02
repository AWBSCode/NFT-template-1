import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <footer className='outer-footer text-white'>
            <div className="container d-flex justify-content-center py-4">
                <div className="row footer-content-container">
                    <div className="col-md-4">
                        <h1>Logo</h1>
                        <br />
                        <p>
                            © Company Name 2023, All Right Reserved
                        </p>
                        <ul className='d-flex gap-3'>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-twitter"></i></li>
                            <li><i className="fa-brands fa-linkedin"></i></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>About</h4>
                        <br />
                        <ul>
                            <li>Contact Us</li>
                            <li>Community</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Resources</h4>
                        <br />
                        <ul>
                            <li>Blog</li>
                            <li>NFT Collection</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}
