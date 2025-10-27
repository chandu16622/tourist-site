
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import city and place images
// import visakhapatnam from "../images/visakhapatnam.jpg";
import tirupathi from "../images/tirupathi.jpg";
import srikakulam from "../images/srikakulam.jpg";
import araku from "../images/araku.jpg";
import vijayawada from "../images/vijayawada.jpg";
import godavari from "../images/godavari.jpg";
import vijayanagaram from "../images/vijayanagaram.jpg";
import kadapa from "../images/kadapa.jpg";
// import RKBeach from "../images/RK_Beach.jpg";
// import YaradaBeach from "../images/Yarada Beach.jpg";
import visakhapatnam from "../images/visakhapatnam.jpg";
import RKBeach from "../images/RK_Beach.jpg";
import YaradaBeach from "../images/yaradabeach.jpg";
import Kailasagiri from "../images/Kailasagiri.jpg";
import INSKurusura from "../images/INSKurusura.jpg";
import VUDAPark from "../images/vudapark.jpg";
import Simhachalam from "../images/simhachalam.jpg";
import Rushikonda from "../images/rusikonda.jpg";
import ArakuValley from "../images/arakuvalley.jpg";
import TirumalaTemple from "../images/tirumala.jpg";
import GovindarajaTemple from "../images/GovindarajaTemple.jpg";
import KapilaTheertham from "../images/KapilaTheertham.jpg";
import Silathoranam from "../images/Silathoranam.jpg";
import ChandragiriFort from "../images/ChandragiriFort.jpg";
import TalakonaWaterfalls from "../images/TalakonaWaterfalls.jpg";
import MangapuramTemple from "../images/MangalagiriTemple.jpg";

import ArasavalliTemple from "../images/Arasavalli.jpg";
import SrikurmamTemple from "../images/SrikurmamTemple.jpg";
import KalingapatnamBeach from "../images/KalingapatnamBeach.jpg";
import BaruvaBeach from "../images/BaruvaBeach.jpg";
import Salihundam from "../images/SalihundamBuddhistSite.jpg";
import NagavaliRiver from "../images/NagavaliRiver.jpg";
import KotturuFort from "../images/KotturuFort.jpg";
import SrikakulamBeachPark from "../images/SrikakulamBeachPark.jpg";
 import BorraCaves from "../images/BorraCaves.jpg";
import KatikiWaterfalls from "../images/KatikiWaterfalls.jpg";
import CoffeeMuseum from "../images/CoffeeMuseum.jpg";
import AnanthagiriHills from "../images/AnanthagiriHills.jpg";
import PadmapuramGardens from "../images/PadmapuramGardens.jpg";
import TribalMuseum from "../images/TribalMuseum.jpg";
import ChaparaiWaterfalls from "../images/ChaparaiWaterfalls.jpg";
import PadmapuramTrek from "../images/PadmapuramTrek.jpg";  // ... existing imports ...

// Import Vijayawada Place Images
import KanakaDurga from "../images/KanakaDurgaTemple.jpg";
import BhavaniIsland from "../images/BhavaniIsland.jpg";
import PrakasamBarrage from "../images/PrakasamBarrage.jpg";
import UndavalliCaves from "../images/UndavalliCaves.jpg";
import MangalagiriTemple from "../images/MangalagiriTemple.jpg";
import GandhiHill from "../images/GandhiHill.jpg";
import EluruRoadPark from "../images/EluruRoadPark.jpg";
import KrishnaRiverfront from "../images/KrishnaRiverfront.jpg";


import papiHills from "../images/PapiHills.jpg";
import dindiBackwaters from "../images/DindiBackwaters.jpg";
import dowleswaramBarrage from "../images/DowleswaramBarrage.jpg";
import annavaramTemple from "../images/AnnavaramTemple.jpg";
import rajahmundryBoatRides from "../images/RajahmundryBoatRides.jpg";
import kadiyamGardens from "../images/KadiyamGardens.jpg";
import vasishtaGodavari from "../images/VasishtaGodavari.jpg";
import papikondaNationalPark from "../images/PapikondaNationalPark.jpg";

import VizianagaramFort from "../images/VizianagaramFort.jpg";
import ThatipudiReservoir from "../images/ThatipudiReservoir.jpg";
import RamatheerthamTemple from "../images/RamatheerthamTemple.jpg";
import GantaStambham from "../images/GantaStambham.jpg";
import KumiliFort from "../images/KumiliFort.jpg";
import GovindapuramHill from "../images/GovindapuramHill.jpg";
import VizianagaramMuseum from "../images/VizianagaramMuseum.jpg";
import Pydithalliammavaru from "../images/Pydithalliammavaru.jpg";

// Add these imports to the list at the top of CityDetails.js
import GandikotaFort from "../images/GandikotaFort.jpg";
import BelumCaves from "../images/BelumCaves.jpg";
import AmeenPeerDargah from "../images/AmeenPeerDargah.jpg";
import VontimittaTemple from "../images/VontimittaTemple.jpg";
import PushpagiriTemple from "../images/PushpagiriTemple.jpg";
import SiddhavattamTemple from "../images/SiddhavattamTemple.jpg";
import RayalaseemaBarrage from "../images/RayalaseemaBarrage.jpg";
import KailasanathaSwamyTemple from "../images/KailasanathaSwamyTemple.jpg";

import "../App.css";

function CityDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const cityData = [
    {
      id: 1,
      name: "Visakhapatnam",
      img: visakhapatnam,
      places: [
        {
          name: "RK Beach",
          desc: "A beautiful beach perfect for sunrise views.",
          map: "https://www.google.com/maps?q=RK+Beach+Visakhapatnam",
          img: RKBeach,
        },
        {
          name: "Yarada Beach",
          desc: "Secluded beach surrounded by hills.",
          map: "https://www.google.com/maps?q=Yarada+Beach",
          img: YaradaBeach,
        },
        {
          name: "Kailasagiri",
          desc: "Hilltop park with panoramic city views.",
          map: "https://www.google.com/maps?q=Kailasagiri+Visakhapatnam",
          img: Kailasagiri,
        },
        {
          name: "INS Kurusura Museum",
          desc: "Submarine museum on beach road.",
          map: "https://www.google.com/maps?q=INS+Kurusura+Museum",
          img: INSKurusura,
        },
        {
          name: "VUDA Park",
          desc: "Popular for evening walks & kids activities.",
          map: "https://www.google.com/maps?q=VUDA+Park+Visakhapatnam",
          img: VUDAPark,
        },
        {
          name: "Simhachalam Temple",
          desc: "Ancient architectural marvel temple.",
          map: "https://www.google.com/maps?q=Simhachalam+Temple",
          img: Simhachalam,
        },
        {
          name: "Rushikonda Beach",
          desc: "Adventure sports and swimming hotspot.",
          map: "https://www.google.com/maps?q=Rushikonda+Beach",
          img: Rushikonda,
        },
        {
          name: "Araku Valley Trip",
          desc: "Scenic train journey through Eastern Ghats.",
          map: "https://www.google.com/maps?q=Araku+Valley",
          img: ArakuValley,
        },
      ],
    },

    {
      id: 2,
      name: "Tirupati",
      img: tirupathi,
      places: [
        {
          name: "Tirumala Temple",
          desc: "World-famous Lord Venkateswara Temple.",
          map: "https://www.google.com/maps?q=Tirumala+Temple+Tirupati",
          img: TirumalaTemple,
        },
        {
          name: "Govindaraja Temple",
          desc: "Ancient temple near railway station.",
          map: "https://www.google.com/maps?q=Govindaraja+Temple",
          img: GovindarajaTemple,
        },
        {
          name: "Kapila Theertham",
          desc: "Serene waterfall near the temple.",
          map: "https://www.google.com/maps?q=Kapila+Theertham",
          img: KapilaTheertham,
        },
        {
          name: "Silathoranam",
          desc: "Natural rock formation, unique geological feature.",
          map: "https://www.google.com/maps?q=Silathoranam",
          img: Silathoranam,
        },
        {
          name: "Chandragiri Fort",
          desc: "Historical fort with royal architecture.",
          map: "https://www.google.com/maps?q=Chandragiri+Fort",
          img: ChandragiriFort,
        },
        {
          name: "Talakona Waterfalls",
          desc: "Tallest waterfall in Andhra Pradesh.",
          map: "https://www.google.com/maps?q=Talakona+Waterfalls",
          img: TalakonaWaterfalls,
        },

        {
          name: "Srinivasa Mangapuram Temple",
          desc: "Popular lesser-known pilgrimage spot.",
          map: "https://www.google.com/maps?q=Srinivasa+Mangapuram+Temple",
          img: MangapuramTemple,
        },
      ],
    },
    {
      id: 3,
      name: "Srikakulam",
      img: srikakulam,
      places: [
        {
          name: "Arasavalli Temple",
          desc: "Ancient Sun temple dedicated to Surya.",
          map: "https://www.google.com/maps?q=Arasavalli+Temple",
          img: ArasavalliTemple,
        },
        {
          name: "Srikurmam Temple",
          desc: "Tortoise-shaped temple.",
          map: "https://www.google.com/maps?q=Srikurmam+Temple",
          img: SrikurmamTemple,
        },
        {
          name: "Kalingapatnam Beach",
          desc: "Quiet beach with lighthouse.",
          map: "https://www.google.com/maps?q=Kalingapatnam+Beach",
          img: KalingapatnamBeach,
        },
        {
          name: "Baruva Beach",
          desc: "Peaceful coastline away from crowds.",
          map: "https://www.google.com/maps?q=Baruva+Beach",
          img: BaruvaBeach,
        },
        {
          name: "Salihundam Buddhist Site",
          desc: "Ancient Buddhist relics and stupas.",
          map: "https://www.google.com/maps?q=Salihundam+Buddhist+Site",
          img: Salihundam,
        },
        {
          name: "Nagavali River",
          desc: "Scenic river flowing through the district.",
          map: "https://www.google.com/maps?q=Nagavali+River",
          img: NagavaliRiver,
        },
        {
          name: "Kotturu Fort",
          desc: "Historical fort and viewpoint.",
          map: "https://www.google.com/maps?q=Kotturu+Fort",
          img: KotturuFort,
        },
        {
          name: "Srikakulam Beach Park",
          desc: "Recreational park near the coastline.",
          map: "https://www.google.com/maps?q=Srikakulam+Beach+Park",
          img: SrikakulamBeachPark,
        },
      ],
    },
    {
  id: 4,
  name: "Araku Valley",
  img: araku, // Assumed to be imported as 'araku'
  places: [
    {
      name: "Borra Caves",
      desc: "Stunning limestone caves.",
      map: "https://www.google.com/maps?q=Borra+Caves",
      img: BorraCaves, // 👈 Added image import
    },
    {
      name: "Katiki Waterfalls",
      desc: "Scenic waterfall spot.",
      map: "https://www.google.com/maps?q=Katiki+Waterfalls",
      img: KatikiWaterfalls, // 👈 Added image import
    },
    {
      name: "Coffee Museum",
      desc: "Learn about coffee plantations.",
      map: "https://www.google.com/maps?q=Coffee+Museum+Araku",
      img: CoffeeMuseum, // 👈 Added image import
    },
    {
      name: "Ananthagiri Hills",
      desc: "Trekking and nature exploration.",
      map: "https://www.google.com/maps?q=Ananthagiri+Hills",
      img: AnanthagiriHills, // 👈 Added image import
    },
    {
      name: "Padmapuram Gardens",
      desc: "Beautiful botanical gardens.",
      map: "https://www.google.com/maps?q=Padmapuram+Gardens",
      img: PadmapuramGardens, // 👈 Added image import
    },
    {
      name: "Tribal Museum",
      desc: "Showcasing tribal art and culture.",
      map: "https://www.google.com/maps?q=Tribal+Museum+Araku",
      img: TribalMuseum, // 👈 Added image import
    },
    {
      name: "Chaparai Waterfalls",
      desc: "Serene and less crowded waterfall.",
      map: "https://www.google.com/maps?q=Chaparai+Waterfalls",
      img: ChaparaiWaterfalls, // 👈 Added image import
    },
    {
      name: "Padmapuram Trek",
      desc: "Easy trekking trail with scenic views.",
      map: "https://www.google.com/maps?q=Padmapuram+Trek",
      img: PadmapuramTrek, // 👈 Added image import
    },
  ],
}, {
  id: 5,
  name: "Vijayawada",
  img: vijayawada, // This is the main city background image
  places: [
    { 
      name: "Kanaka Durga Temple", 
      desc: "Located on Indrakeeladri hill.", 
      map: "https://www.google.com/maps?q=Kanaka+Durga+Temple",
      img: KanakaDurga, // <-- ADDED
    },
    { 
      name: "Bhavani Island", 
      desc: "Water sports & boating activities.", 
      map: "https://www.google.com/maps?q=Bhavani+Island",
      img: BhavaniIsland, // <-- ADDED
    },
    { 
      name: "Prakasam Barrage", 
      desc: "Iconic river crossing over Krishna River.", 
      map: "https://www.google.com/maps?q=Prakasam+Barrage",
      img: PrakasamBarrage, // <-- ADDED
    },
    { 
      name: "Undavalli Caves", 
      desc: "Ancient rock-cut architecture.", 
      map: "https://www.google.com/maps?q=Undavalli+Caves",
      img: UndavalliCaves, // <-- ADDED
    },
    { 
      name: "Mangalagiri Temple", 
      desc: "Famous nearby temple pilgrimage.", 
      map: "https://www.google.com/maps?q=Mangalagiri+Temple",
      img: MangalagiriTemple, // <-- ADDED
    },
    { 
      name: "Gandhi Hill", 
      desc: "Hilltop monument and observation point.", 
      map: "https://www.google.com/maps?q=Gandhi+Hill",
      img: GandhiHill, // <-- ADDED
    },
    { 
      name: "Eluru Road Park", 
      desc: "Local park with leisure activities.", 
      map: "https://www.google.com/maps?q=Eluru+Road+Park",
      img: EluruRoadPark, // <-- ADDED
    },
    { 
      name: "Krishna Riverfront", 
      desc: "Beautiful riverside walks and views.", 
      map: "https://www.google.com/maps?q=Krishna+Riverfront",
      img: KrishnaRiverfront, // <-- ADDED
    },
  ],
},
 // ... (in your cityData array)

{
  id: 6,
  name: "Godavari",
  img: godavari, // Assuming 'godavari' is the city-level image import
  places: [
    { 
      name: "Papi Hills", 
      desc: "Boat rides through scenic hills.", 
      map: "https://www.google.com/maps?q=Papi+Hills",
      img: papiHills, // 👈 Added Image
    },
    { 
      name: "Dindi Backwaters", 
      desc: "Calm, scenic backwaters.", 
      map: "https://www.google.com/maps?q=Dindi+Backwaters",
      img: dindiBackwaters, // 👈 Added Image
    },
    { 
      name: "Dowleswaram Barrage", 
      desc: "Engineering marvel on Godavari River.", 
      map: "https://www.google.com/maps?q=Dowleswaram+Barrage",
      img: dowleswaramBarrage, // 👈 Added Image
    },
    { 
      name: "Annavaram Temple", 
      desc: "Famous hilltop temple.", 
      map: "https://www.google.com/maps?q=Annavaram+Temple",
      img: annavaramTemple, // 👈 Added Image
    },
    { 
      name: "Rajahmundry Boat Rides", 
      desc: "River cruise experience.", 
      map: "https://www.google.com/maps?q=Rajahmundry+Boat+Rides",
      img: rajahmundryBoatRides, // 👈 Added Image
    },
    { 
      name: "Kadiyam Gardens", 
      desc: "Beautiful botanical garden.", 
      map: "https://www.google.com/maps?q=Kadiyam+Gardens",
      img: kadiyamGardens, // 👈 Added Image
    },
    { 
      name: "Vasishta Godavari", 
      desc: "Sacred river confluence spot.", 
      map: "https://www.google.com/maps?q=Vasishta+Godavari",
      img: vasishtaGodavari, // 👈 Added Image
    },
    { 
      name: "Papikonda National Park", 
      desc: "Wildlife and trekking experience.", 
      map: "https://www.google.com/maps?q=Papikonda+National+Park",
      img: papikondaNationalPark, // 👈 Added Image
    },
  ],
},

{
      id: 7,
      name: "Vizianagaram",
      img: vijayanagaram, // Ensure this image is imported correctly
      places: [
        { 
          name: "Vizianagaram Fort", 
          desc: "18th-century historical fort and landmark.", 
          map: "https://www.google.com/maps?q=Vizianagaram+Fort",
          img: VizianagaramFort, // Assuming you import this
        },
        { 
          name: "Thatipudi Reservoir", 
          desc: "Picnic spot and dam on the Gosthani river.", 
          map: "https://www.google.com/maps?q=Thatipudi+Reservoir",
          img: ThatipudiReservoir, // Assuming you import this
        },
        { 
          name: "Ramatheertham Temple", 
          desc: "Ancient hill temple with scenic views and Jain remnants.", 
          map: "https://www.google.com/maps?q=Ramatheertham+Temple",
          img: RamatheerthamTemple, // Assuming you import this
        },
        { 
          name: "Ganta Stambham", 
          desc: "Iconic clock tower in the heart of Vizianagaram.", 
          map: "https://www.google.com/maps?q=Ganta+Stambham",
          img: GantaStambham, // Assuming you import this
        },
        { 
          name: "Kumili Fort", 
          desc: "Site of the erstwhile Vizianagaram Kingdom's first fort.", 
          map: "https://www.google.com/maps?q=Kumili+Fort",
          img: KumiliFort, // Assuming you import this
        },
        { 
          name: "Govindapuram Hill", 
          desc: "Beautiful viewpoint and nature spot with a prominent temple.", 
          map: "https://www.google.com/maps?q=Govindapuram+Hill",
          img: GovindapuramHill, // Assuming you import this
        },
        { 
          name: "Vizianagaram Museum", 
          desc: "Showcases local heritage, artifacts, and royal history.", 
          map: "https://www.google.com/maps?q=Vizianagaram+Museum",
          img: VizianagaramMuseum, // Assuming you import this
        },
        { 
          name: "Pydithalli Ammavaru Temple", 
          desc: "Famous temple known for the annual Sirimanu Utsavam festival.", 
          map: "https://www.google.com/maps?q=Pydithalli+Reservoir",
          img: Pydithalliammavaru, // Assuming you import this
        },
      ],
    }, {
  id: 8,
  name: "Kadapa",
  img: kadapa, // assuming 'kadapa' city image is already imported
  places: [
    { 
      name: "Gandikota Fort", 
      desc: "Known as Grand Canyon of India.", 
      map: "https://www.google.com/maps?q=Gandikota+Fort",
      img: GandikotaFort,
    },
    { 
      name: "Belum Caves", 
      desc: "Second-largest caves in India.", 
      map: "https://www.google.com/maps?q=Belum+Caves",
      img: BelumCaves,
    },
    { 
      name: "Ameen Peer Dargah", 
      desc: "Symbol of communal harmony.", 
      map: "https://www.google.com/maps?q=Ameen+Peer+Dargah",
      img: AmeenPeerDargah,
    },
    { 
      name: "Vontimitta Temple", 
      desc: "Vijayanagara-style architecture temple.", 
      map: "https://www.google.com/maps?q=Vontimitta+Temple",
      img: VontimittaTemple,
    },
    { 
      name: "Pushpagiri Temple", 
      desc: "Scenic temple with panoramic views.", 
      map: "https://www.google.com/maps?q=Pushpagiri+Temple",
      img: PushpagiriTemple,
    },
    { 
      name: "Siddhavattam Temple", 
      desc: "Ancient temple near river.", 
      map: "https://www.google.com/maps?q=Siddhavattam+Temple",
      img: SiddhavattamTemple,
    },
    { 
      name: "Rayalaseema Barrage", 
      desc: "Popular local picnic spot.", 
      map: "https://www.google.com/maps?q=Rayalaseema+Barrage",
      img: RayalaseemaBarrage,
    },
    { 
      name: "Kailasanatha Swamy Temple", 
      desc: "Historic hilltop temple.", 
      map: "https://www.google.com/maps?q=Kailasanatha+Swamy+Temple",
      img: KailasanathaSwamyTemple,
    },
  ],
},

// ... (rest of the cityData array)
    // ... rest of cityData (araku, vijayawada, godavari, vizianagaram, kadapa)
  ];

  const city = cityData.find((c) => c.id === parseInt(id));

  if (!city) {
    return (
      <Container className="text-center mt-5 text-white">
        <h2>City not found</h2>
        <Button onClick={() => navigate("/")}>Go Back</Button>
      </Container>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px 0",
        backgroundImage: `url(${city.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Button
          variant="outline-light"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          ← Back to Home
        </Button>

        <h2 className="mb-4 text-white fw-bold">{city.name} Places</h2>

        <Row>
          {city.places.map((place, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                {/* ✅ Place Image Section */}
                <div
                  style={{
                    height: "200px",
                    backgroundImage: `url(${place.img || city.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                  className="rounded-top-4"
                >
                  {/* Dark overlay for readability */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                    }}
                  ></div>

                  {/* Place name text */}
                  <h3
                    className="text-white fw-bold text-center px-3"
                    style={{
                      fontSize: "1.5rem",
                      textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
                      position: "absolute",
                      bottom: "10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: 1,
                    }}
                  >
                    {place.name}
                  </h3>

                  {/* Icon / Emoji */}
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      fontSize: "2rem",
                      opacity: 0.7,
                      zIndex: 1,
                    }}
                  >
                    {place.name.toLowerCase().includes("beach") ? "🏖️" :
                      place.name.toLowerCase().includes("temple") ? "🛕" :
                        place.name.toLowerCase().includes("fort") ? "🏰" :
                          place.name.toLowerCase().includes("waterfall") || place.name.toLowerCase().includes("falls") ? "💧" :
                            place.name.toLowerCase().includes("museum") ? "🏛️" :
                              place.name.toLowerCase().includes("park") || place.name.toLowerCase().includes("garden") ? "🌳" :
                                place.name.toLowerCase().includes("hill") ? "⛰️" :
                                  place.name.toLowerCase().includes("cave") ? "🕳️" :
                                    "📍"}
                  </div>
                </div>

                <Card.Body className="bg-white">
                  <Card.Text className="text-muted mb-3">
                    {place.desc}
                  </Card.Text>
                  <Button
                    variant="outline-success"
                    className="w-100"
                    onClick={() => window.open(place.map, "_blank")}
                  >
                    📍 View on Google Maps
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CityDetails;
