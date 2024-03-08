import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import style from "../slider/slider.module.scss"
import forrestTrash from "../../assets/images/slideshow/affald-skov-1.jpg"
import beachTrash from "../../assets/images/slideshow/affald-strand-2.jpg"
import paintCans from "../../assets/images/slideshow/malerspande.jpg"
//import prevArrow from '../../assets/images/layout/icon-arrow-left.svg'
//import nextArrow from '../../assets/images/layout/icon-arrow-right.svg'


export const Slider = () => {
    //predefined imgs for the slider
    const images = [
        {id: 1, filename: forrestTrash, title: 'trash in forrest'},
        {id: 2, filename: beachTrash, title: 'trash on beach'},
        {id: 3, filename: paintCans, title: 'painting cans outside'}
    ]
    //state for keeping track of currelt slideindex
    const [slideIndex, setSlideIndex] = useState(0)

    //effect to cycle through slides every 5 sec (originally timer was made for the mobile version instead of arrows)
    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % images.length)
        }, 5000) //heres the seconds set
        return () => clearTimeout(timer) //cleanup timer
    }, [slideIndex, images])

    //go to next slide
    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    //go to previous slide
    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex -1 + images.length) % images.length)
    }

    return (
        <div className={style.sliderContainer}>
            {/* maps through imgs to display them */}
            {images.map((image, index) => (
                <div key={image.id} className={
                    `${style.slides} 
                    ${style.fade} 
                    ${index === slideIndex ? style.display: ''}`}>

                        <img src={image.filename} alt={image.title}  />
                </div>
            ) )}
            <button onClick={prevSlide} className={style.prev}>
                {/* <img src={prevArrow} alt="arrow pointing left" /> */}
            </button>
            <button onClick={nextSlide} className={style.next}>
                {/* <img src={nextArrow} alt="arrow pointing right" /> */}
            </button>
        </div>
    )
}