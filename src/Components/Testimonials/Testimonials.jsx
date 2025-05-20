import React, { useRef } from 'react'
import './testimonials.css'
import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

const Testimonials = () => {
    const slider=useRef();
    let tx=0
    const moveForward = () => {
    if(tx>-50){
        tx-=25
    }

    slider.current.style.transform=`translateX(${tx}%)`
    }

    const moveBackward = () => {
        if(tx<0){
            tx+=25
        }
        console.log(tx)
        slider.current.style.transform=`translateX(${tx}%)`
        }
    
    return (
        <div className="testimonials">
            <img src={nextIcon} alt="" className='nextBtn' onClick={moveForward} />
            <img src={backIcon} alt="" className='backBtn' onClick={moveBackward} />

            <div className="slider">
                <ul ref={slider}>
                    <li><div className="slide">
                        <div className="userInfo">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Olivia Mitchell</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>User is a passionate learner and developer with a strong interest in programming, web development, and data structures. They are currently working on various projects, including a university website and a chat application.</p>

                    </div></li>
                    <li><div className="slide">
                        <div className="userInfo">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Jacob Anderson
                                </h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>User is a passionate learner and developer with a strong interest in programming, web development, and data structures. They are currently working on various projects, including a university website and a chat application.</p>

                    </div></li>

                    <li><div className="slide">
                        <div className="userInfo">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Rachel Lewis</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>User is a passionate learner and developer with a strong interest in programming, web development, and data structures. They are currently working on various projects, including a university website and a chat application.</p>

                    </div></li>

                    <li><div className="slide">
                        <div className="userInfo">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Jessica Taylor</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>User is a passionate learner and developer with a strong interest in programming, web development, and data structures. They are currently working on various projects, including a university website and a chat application.</p>

                    </div></li>


                </ul>

            </div>
        </div>
    )
}

export default Testimonials