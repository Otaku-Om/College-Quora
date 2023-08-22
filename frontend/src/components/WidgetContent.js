import React from 'react'
import "./css/WidgetContent.css"
function WidgetContent() {
  return (
    <div className='widget__contents'>
      <div className="widget__content">
        <img
          src="https://w7.pngwing.com/pngs/54/428/png-transparent-person-holding-smartphone-computer-icons-mobile-app-development-icon-design-business-mobile-apps-electronics-gadget-text.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Space</p>
        </div>
      </div>

      <div className="widget__content">
        <img
          src="https://lh3.googleusercontent.com/IskHw8UsqhAv860_z4neeHrH1ZF8JpRy-KEqpygwhAoA0-Sw4FbQ62TgkgP42ORkDZDDzYhF4hTenR0PBKPk_a91pezQ2DHqinb_UO4"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Technology Trends</h5>
          <p>Discover the latest advancements and trends in the tech industry.</p>
        </div>
      </div>

      <div className="widget__content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvxtx4j3lz7jbqB_Xwk9H3BSVGUYYUrtllQ&usqp=CAU"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Artificial Intelligence
</h5>
          <p>A space to discuss use and effect of Artificial Intelligence in our daily lives!</p>
        </div>
      </div>

      <div className="widget__content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2165/2165674.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Hacking</h5>
          <p>Sharing knowledge and awareness regarding Computer and Network Security, Hacking.</p>
        </div>
      </div>
    </div>
  )
}

export default WidgetContent
