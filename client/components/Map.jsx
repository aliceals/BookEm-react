import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';




class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coords: []
        }

    }

    componentDidMount() {
        this.setState({
            coords: this.props.coords
        })
    }

    render() {
        console.log(this.props.coords)
        console.log(this.state)


        return (


            <LeafletMap
                center={[-41.1115568, 174.8891837]} //make this usercity
                zoom={13}
                maxZoom={20}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >

                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={[-41.1115568, 174.8891837]}>
                    <Popup>
                        Lawn Mowing
                        09:00
                        {/* {this.props.description} */}
                    </Popup>
                </Marker>
            </LeafletMap>
        );
    }
}

export default Map