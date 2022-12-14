import React,{useRef,useState} from 'react';
import styled from 'styled-components';
import PlanBar from '../../components/trip/plan/PlanBar';
import Map from '../../components/trip/Map';
import PlaceBar from '../../components/trip/place/PlaceBar';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
 
  margin-top: 0.5vh;
  /* overflow-y: hidden; */

  height: 88.3vh; 
`;


const PlanPage = () => {
  const mapRef = useRef(null);
  const [map,setMap] = useState(null)
  return (
   
      <Container>
        <PlanBar map={map} setMap={setMap} mapRef={mapRef}></PlanBar>
      
        <Map map={map} setMap={setMap} mapRef={mapRef}/>
       
        <PlaceBar map={map}></PlaceBar>
      </Container>
   
  );
};

export default PlanPage;
