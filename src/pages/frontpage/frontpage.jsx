import { Slider } from "../../components/slider/slider"
import style from '../frontpage/frontpage.module.scss'
import { Card } from "../../components/highlightCard/card"
import trashBig from '../../assets/images/too-much-trash.png'
import trashBins from '../../assets/images/colored-trashbins.png'
import { Button } from "../../components/button/button"
import bgWave from '../../assets/images/layout/bg-wave-1.svg'
export const Frontpage = () => {

    return (
        <>
            <Slider />
            <div className={style.boxContainer}>
                <div className={style.box}>
                    <h2>Find og anmeld genbrugsstationer</h2>
                    <div className={style.buttons}>
                        <button className={style.findBtn}>Find station</button>
                        <button className={style.loginBtn}>Login</button>
                    </div>
                </div>
            </div>

            <div className={style.cards}>
                <div className={style.cardPrimary}>
                <Card
                    image={trashBig}
                    title={<h2>
                    Din <span>guide til</span>
                     <span >sortering </span>
                    </h2>}
                    text='Her kan du se hvordan du skal sortere og hvad der skal i hvilke beholdere. Du får også tips og tricks til, hvordan du gør det nemt at sortere hjemme hos dig.'
                    reversed={false}
                    alt='Trash in front of trash can'
                    action={(
                        <>
                        <Button
                            text='Se affaldsguide'
                            className={style.buttonPrimary}
                            to='/sorting'
                        />
                        <Button
                            text='Bestil storskrald'
                            className={style.buttonSecond}
                            to='/order'
                        />
                        </>

                    )}
                />

                </div>
                <div className={style.cardSecond} style={{marginLeft:"-10em!important"}} >
                <Card
                    image={trashBins} 
                    title={<h2>
                        Bestil <span>din nye</span>
                        <span>affaldsbeholder</span>
                        </h2>}
                    text='when an unknown printer took a galley of type and scramble it to make a type specimen book. It has survived not only'
                    alt='line up of colored trashbins'
                    reversed={true}
                    action= {(
                        <>
                        <Button
                            text='Bestil nu'
                            className={style.buttonPrimary}
                            to='/order'
                        />
                        
                        </>
                    )}
                />
                </div>
            </div>

         
                <img src={bgWave}className={style.wave} alt="green wave" />
            
        </>
    )
}