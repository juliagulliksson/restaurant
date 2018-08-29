import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
    render() {
        return (
            <Map style={{ height: '300px', width: '100%' }} google={this.props.google} zoom={20} >
                <Marker />
                <InfoWindow onClose={this.onInfoWindowClose}>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
})(MapContainer)
