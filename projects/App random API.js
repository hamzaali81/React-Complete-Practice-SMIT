import React from 'react'

const UserProfile= ({img,name,job})=>{
  // const {img,name,job}=props;
  // console.log(props);
  const url= `https://randomuser.me/api/portraits/men/${img}.jpg`
         return(
        <section>
       <img src={url} alt="userpic"/>
       <h1>{name}</h1>
       <h2>{job}</h2>
        </section>
      )
    }


export default function App() {
 const randomImage= Math.floor(Math.random() * 100) + 1;
 console.log(randomImage);
  return (
    <article>
<UserProfile img={randomImage} name="hamza" job="developer"/>
<UserProfile img={randomImage} name="ali" job="UX/UI"/>
<UserProfile img={randomImage} name="ahmed" job="designer"/>
    </article>
  )
}


