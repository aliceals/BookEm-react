// import React from 'react'
// import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';




// class Map extends React.Component {
//     constructor(props) {
//         super(props)

//     }

//     componentDidMount() {
//         console.log(this.props.coords)
//     }

//     render() {

//         let firstAddress = this.props.coords
//         console.log(firstAddress)


//         return (


//             <LeafletMap
//                 center={[-41.1115568, 174.8891837]} //make this usercity
//                 zoom={13}
//                 maxZoom={20}
//                 attributionControl={true}
//                 zoomControl={true}
//                 doubleClickZoom={true}
//                 scrollWheelZoom={true}
//                 dragging={true}
//                 animate={true}
//                 easeLinearity={0.35}
//             >

//                 <TileLayer
//                     url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//                 />
//                 <Marker position={[-41.1115568, 174.8891837]}>
//                     <Popup>
//                         Lawn Mowing
//                         09:00
//                         {/* {this.props.description} */}
//                     </Popup>
//                 </Marker>
//             </LeafletMap>
//         );
//     }
// }

// export default Map