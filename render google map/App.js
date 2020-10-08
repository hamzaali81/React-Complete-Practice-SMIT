import React,{ Component,useState } from 'react';
import './App.css';


// // import { Provider } from 'react-redux';
// // import store from './Redux/store';
// // import Judge from './Judge';
// // import Kids from './Kids';

// // console.log(store);
// // console.log(store.subscribe());

// import { GoogleMap,withScriptjs,withGoogleMap } from 'react-google-maps'

// function Map(){
//   return(
//     <GoogleMap defaultZoom={10} defaultCenter={{lat: 24.860735, lng: 67.001137}}/>
//   )
// }

// const WrapMap = withScriptjs(withGoogleMap(Map));



// class App extends Component 
// {
//   render() {
//     return (
//       // <Provider store={store}>


//       <div style={{width: '100vw', height: '100vh'}}>
//         <h1><WrapMap 
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key={process.env.REACT_API_GOOGLE_KEY}`}
//         loadingElement={<div style={{height: "100%"}}/>}
//         containerElement={<div style={{height: "100%"}}/>}
//         mapElement={<div style={{height: "100%"}}/>}
        
//         />
        
//         </h1>
//         {/* <Judge />
//         <Kids /> */}


//       </div>

//       // {/* </Provider> */}
//     );
//   }
// }

// export default App;







// Google Map Rendering




import { Map, TileLayer, Marker, Popup, Circle } from 'react-leaflet'

const App = () => {

const state = {
    lat: 24.871940,
    lng: 66.988060,
    zoom: 15,
}

const yesAnswer =[
  {
    center: [24.871940,66.988060],
    color: "green"
  },
  {
    center: [24.871940,66.988060],
    color: "green"
  }
]
const noAnswer =[
  {
    center: [24.871960,66.988060],
    color: "red"
  },
  {
    center: [24.871920,66.988060],
    color: "red"
  }
]

const [circles,setCircles] = useState(yesAnswer)


// const circlePosition = [24.871940,66.988060]


  const position = [state.lat, state.lng]
  return (
    <div>
      <h1>Hello</h1>
      <h2>React</h2>
      <div className="spanDiv"></div>
      <Map center={position} zoom={state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Marker>
        {circles.map((circle,index)=>{
         return <Circle 
          color={circle.color}
          radius={50}
          key={index}
          center={circle.center}
          />
        })}
        {/* <Circle radius={50} center={circlePosition} /> */}
      </Map>
      <br/>
      <button onClick={()=> setCircles(yesAnswer)}>Yes Answer</button>
      <button onClick={()=> setCircles(noAnswer)}>No Answer</button>
    </div>
  );
}

export default App;















