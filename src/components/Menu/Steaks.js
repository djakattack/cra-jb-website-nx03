import React from 'react';
import ribeye from '../../assets/images/006087-1.png.jpeg';
import chop from '../../assets/images/Chop-Steak-918x568.jpg';
import sirloin from '../../assets/images/images.jpeg';
import prime from '../../assets/images/Prime-Rib-6.jpg';
import filet from '../../assets/images/images-2.jpeg';
const Steaks = () => {
    return(
        <div>
            <div id="steaks"></div>
            <h1>Steaks</h1>
            <p>
                Steak entrées include your choice of baked potato, sweet potato, steamed vevggies, or french fries, soup, or salad bar and Texas Toast.
            </p>
            <p>
                Upgrade your side to Onion Rings or Sweet Potato Waffle Fries for <span>$1</span> more.
            </p>
            <div className="cards">
                <div className="card">
                        Chopped Steak<br/>
                        <img src={chop} alt="chop"/>
                </div>
                <div className="card">
                        Sirloin<br/>
                        <img src={sirloin} alt="sirloin"/>
                </div>
                <div className="card">
                        Ribeye<br/>
                        <img src={ribeye} alt="ribeye"/>
                </div>
                <div className="card">
                    <div>
                        Filet<br/>
                        <img src={filet} alt="filet"/>
                    </div>
                </div>
                <div className="card">
                    <div>
                        Prime Rib<br/>
                        <img src={prime} alt="prime"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steaks;