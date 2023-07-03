import React from "react";
import "./Aarti.css";
import Singh from "./Singh";
function Aarti() {
 const[img,setimg]=React.useState("https://res.cloudinary.com/dvcap6b9a/image/upload/v1688373469/aarti_pic_hpr4g2.jpg");
 const[img2,setimg2]=React.useState("https://res.cloudinary.com/dvcap6b9a/image/upload/v1688376603/a4_mgw5ml.jpg");
 const[img3,setimg3]=React.useState("https://img1.picmix.com/output/pic/normal/3/1/8/0/10120813_af74b.gif");
 function enter2(){
  setimg2("https://res.cloudinary.com/dvcap6b9a/image/upload/v1688376565/a3_tybrva.jpg")
 }
 function leave2(){
  setimg2("https://res.cloudinary.com/dvcap6b9a/image/upload/v1688376603/a4_mgw5ml.jpg");
 }
 function enter3(){
  setimg3("https://www.funimada.com/assets/images/cards/big/19th-birthday-48.gif")
 }
 function leave3(){
  setimg3("https://img1.picmix.com/output/pic/normal/3/1/8/0/10120813_af74b.gif");
 }

function enter(){
  setimg("https://res.cloudinary.com/dvcap6b9a/image/upload/v1688373504/a2.p_dc4zkh.jpg")
}
function leave(){
  setimg("https://res.cloudinary.com/dvcap6b9a/image/upload/v1688373469/aarti_pic_hpr4g2.jpg")
}
 return (
  <div className="singh">
    <div className="inner4">
        "<p>Happy birthday to my lovely sister, the sunshine in my life! You radiate kindness, beauty, and warmth wherever you go. On your special day, I want you to know how much you mean to me.
        </p>
        <p> You are not just my sister but also my best friend, and I'm grateful for the bond we share.
          May this birthday be the beginning of a new chapter filled with love, success, and endless blessings.
          </p>
          <p>
           Here's to celebrating you and all the wonderful moments we've shared together. Happy birthday, dear sister! You deserve the world."
           </p>





    </div> 

    
      
      <div className='outerdiv'>
         <div className='innerdiv3'onMouseEnter={enter2} onMouseLeave={leave2}>
            <img className="aarti" src={img2}/>
          </div>
          <div className='innerdiv1'onMouseEnter={enter3} onMouseLeave={leave3}>
             <img className="aarti" src={img3}/>
          </div>
          <div className='innerdiv2' onMouseEnter={enter} onMouseLeave={leave}>
            <img className="aarti" src={img}/>
          </div>
         
      </div>
    <div>
      <Singh/>
      
    </div>
      </div>

  );
}

export default Aarti;
