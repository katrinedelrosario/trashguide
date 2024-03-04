import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import style from "../slider/slider.module.scss"
import forrestTrash from "../../assets/images/slideshow/affald-skov-1.jpg"
import beachTrash from "../../assets/images/slideshow/affald-strand-2.jpg"
import paintCans from "../../assets/images/slideshow/malerspande.jpg"
//import prevArrow from '../../assets/images/layout/icon-arrow-left.svg'
//import nextArrow from '../../assets/images/layout/icon-arrow-right.svg'


export const Slider = () => {

    const images = [
        {id: 1, filename: forrestTrash, title: 'trash in forrest'},
        {id: 2, filename: beachTrash, title: 'trash on beach'},
        {id: 3, filename: paintCans, title: 'painting cans outside'}
    ]

    const [slideIndex, setSlideIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % images.length)
        }, 5000)
        return () => clearTimeout(timer)
    }, [slideIndex, images])

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex -1 + images.length) % images.length)
    }

    return (
        <div className={style.sliderContainer}>
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