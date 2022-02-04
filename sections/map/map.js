import {mapStyle} from "./map.constants";
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

export default function Map() {

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const center = {lat: 41.3559809, lng: 1.97556};

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                options={{
                    styles: mapStyle,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    zoomControl: false
                }}
                zoom={13}>
                <Marker position={center} icon={'/assets/images/map-icon.png'}/>
            </GoogleMap>
        </LoadScript>
    )
}
