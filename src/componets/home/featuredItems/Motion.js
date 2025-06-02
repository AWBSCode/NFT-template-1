import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../../../css/featuredCollection.css'

export default function Motion() {
    const sliderRef = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth)
    }, [])

    return (
        <motion.div ref={sliderRef} className='slider'>
            <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className='collection-container'
            >
                <div className='img' style={{ '--data-src': `url(${process.env.PUBLIC_URL + '/imgs/nft1.jpg'})` }}></div>

                <div className='img' style={{ '--data-src': `url(${process.env.PUBLIC_URL + '/imgs/nft2.jpg'})` }}></div>

                <div className='img' style={{ '--data-src': `url(${process.env.PUBLIC_URL + '/imgs/nft3.jpg'})` }}></div>

                <div className='img' style={{ '--data-src': `url(${process.env.PUBLIC_URL + '/imgs/nft4.jpg'})` }}></div>

                <div className='img' style={{ '--data-src': `url(${process.env.PUBLIC_URL + '/imgs/nft5.jpg'})` }}></div>
            </motion.div>
        </motion.div>
    )
}
