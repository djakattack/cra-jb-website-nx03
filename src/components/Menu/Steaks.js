import React from 'react';
// import ribeye from '../../assets/images/006087-1.png.jpeg';
// import chop from '../../assets/images/Chop-Steak-918x568.jpg';
// import sirloin from '../../assets/images/images.jpeg';
// import prime from '../../assets/images/Prime-Rib-6.jpg';
// import filet from '../../assets/images/images-2.jpeg';
const Steaks = () => {
    return(
        <div className="container">
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
                    <h2>Chopped Steak</h2>
                    {/* <img src={chop} alt="chop"/> */}
                    <p>High quality marinated ground beef, cooked to taste and smothered in satuéed mushroom and onions.</p>
                    <ul>
                        <li>8oz <span>$13.99</span></li>
                        <li>12oz <span>$15.99</span></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Sirloin (Our leanest steak)</h2>
                    {/* <img src={sirloin} alt="sirloin"/> */}
                    <p>Flavorful, premium choice grade filet of sirloin</p>
                    <ul>
                        <li>6oz <span>$17.99</span></li>
                        <li>8oz <span>$19.99</span></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Ribeye (Our most flavorful steak)</h2>
                    {/* <img src={ribeye} alt="ribeye"/> */}
                    <p>Premium choice grade ribeye loin trimmed, aged, seasoned, cut to order, and cooked to perfection.</p>
                    <ul>
                        <li>8oz <span>$24.99</span></li>
                        <li>10oz <span>$26.99</span></li>
                        <li>12oz <span>$28.99</span></li>
                        <li>16oz <span>$36.99</span></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Filet (Our most tender steak)</h2>
                    {/* <img src={filet} alt="filet"/> */}
                    <p>Premium choice grade tenderloin filet.</p>
                    <p>8oz <span>$36.99</span></p>
                </div>
                <div className="card">
                    <h2>Prime Rib (Our richest steak)</h2>
                    {/* <img src={prime} alt="prime"/> */}
                    <p>Premium choic ribeye, rubbedx, marinated, slow cooked, cut to order, and served with Au Jus.</p>
                    <ul>
                        <li>10oz Heifer Cut <span>$30.99</span></li>
                        <li>12oz Bull Cut <span>$32.99</span></li>
                        <li>16oz Cowboy Cut <span>$40.99</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Steaks;