import { motion } from 'framer-motion'
import '../../../css/about.css';

function About() {
    return (
        <section className='about'>
            {/* Content */}
            <main className='content'>
                <motion.div className='line up' whileInView={{ right: '100%', opacity: [1, 0] }} />
                <h1 className='text-gradient'>About Us</h1>
                <motion.div className='line down' whileInView={{ left: '100%', opacity: [1, 0] }} />
                <p className='text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </main>

            {/* Waves */}
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </section>
    );
}

export default About;
