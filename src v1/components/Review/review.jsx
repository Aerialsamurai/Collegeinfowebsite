import React, { useRef } from 'react'
import './review.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'


const Review = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='reviews'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                      
                        <div>
                            <h3>Vivek</h3>
                            <p className="stars">★★★★★</p>
                          
                        </div>
                    </div>
                    <p>IIT Delhi is truly an exceptional institution that has left an indelible mark on my academic and professional journey. The faculty's expertise and passion for teaching are unparalleled, and the infrastructure is state-of-the-art. The rigorous academic environment fosters innovation, creativity, and growth, pushing students to excel in their chosen fields.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        
                        <div>
                            <h3>Will</h3>
                            <p className="stars">★★★★</p>
                          
                        </div>
                    </div>
                    <p>Getting admission here is a dream for millions in India, but only a select few achieve it. I envy those top achievers who make it. I finally visited IIT Delhi for some technical training sponsored by my work organization. The professors are highly knowledgeable and teach exceptionally well</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        
                        <div>
                            <h3>Emily</h3>
                            <p className="stars">★★★★★</p>
                          
                        </div>
                    </div>
                    <p>Lots of students cycling or walking around, and you'll find cafes, libraries, hostels, and research centers spread across the campus. It's well-organized and clean. The atmosphere feels very academic and inspiring.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        
                        <div>
                            <h3>William</h3>
                            <p className="stars">★★★★</p>
                          
                        </div>
                    </div>
                    <p>If you're considering IIT Delhi, I highly recommend it. The institute's commitment to academic excellence, research, and innovation makes it an ideal platform for students to pursue their passions and achieve their goals. With its rich history, esteemed faculty, and talented student body, IIT Delhi is a hub for learning, growth, and success.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Review
