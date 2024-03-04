import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import style from "../slider/slider.module.scss"
import { filterSliderImages } from "../../helpers/filterSliderImages"

export const Slider = () => {

    const images = useFetch ('http://localhost:4000/imagelist')
    const [slideIndex, setSlideIndex] = useState(0)
    const filteredImages = filterSliderImages(images)
    //console.log(images);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % filteredImages.length)
        }, 100000) // 3000 images changes every 3sec
        return () => clearTimeout(timer)
    }, [slideIndex, filteredImages])


    useEffect(() => {
        console.log('Filtered Images:', filteredImages);
    }, [filteredImages]);

    return (
        <div className={style.sliderContainer}>
            {filteredImages.map((image, index) => (
                <div key={image.id || index} className={
                    `${style.slides} 
                    ${style.fade} 
                    ${index === slideIndex ? style.display: ''}`}>

                        <img src={image.filename} alt={image.title}  />
                </div>
            ) )}
        </div>
    )
}