
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
          desc: "A beautiful beach perfect for sunrise views.The beach offers broad stretches of sand, sea breeze, sunrises/sunsets, and is a key leisure spot for both locals and tourists.Try to catch the early morning or evening for the best light and cooler temperature",
          map: "https://www.google.com/maps?q=RK+Beach+Visakhapatnam",
          img: RKBeach,
        },
        {
          name: "Yarada Beach",
          desc: "Secluded beach surrounded by hills.The combination of sea + hills + greenery (coconut and banana plantations) makes for a nice visual setting.It’s on the coast of the Bay of Bengal , giving it feel compared with city beaches",
          map: "https://www.google.com/maps?q=Yarada+Beach",
          img: YaradaBeach,
        },
        {
          name: "Kailasagiri",
          desc: "Hilltop park with panoramic city views.Kailasagiri is a scenic hill-top park located in the city of Vizag.Kailasagiri is a scenic hill-top park located in the city of Visakhapatnam.There are large statues of Lord Shiva and Goddess Parvati which are a highlight.",
          map: "https://www.google.com/maps?q=Kailasagiri+Visakhapatnam",
          img: Kailasagiri,
        },
        {
          name: "INS Kurusura Museum",
          desc: "Submarine museum on beach road.The INS Kurusura (S20) was a diesel-electric submarine of the Indian Navy, commissioned in December 1969, decommissioned in February 2001 after about 31 years of service.Allowing visitors to go inside a real submarine.",
          map: "https://www.google.com/maps?q=INS+Kurusura+Museum",
          img: INSKurusura,
        },
        {
          name: "VUDA Park",
          desc: "Popular for evening walks & kids activities.VUDA Park (also known as Taraka Rama Park) is an urban recreational park in the city of Visakhapatnam.Big green spaces + sea-adjacent location give you a chance to unwind away from busy city roads.There are kids’ play-areas, small rides, lawn space for picnics.",
          map: "https://www.google.com/maps?q=VUDA+Park+Visakhapatnam",
          img: VUDAPark,
        },
        {
          name: "Simhachalam Temple",
          desc: "Ancient architectural marvel temple.Simhachalam is a hill-range and temple complex near the city of Visakhapatnam.The main temple is the Varaha Lakshmi Narasimha Temple, Simhachalam, dedicated to Lord Vishnu in his form as Varaha–Narasimha.The temple is among the key Narasimha (lion-man avatar of Vishnu) shrines in the region.",
          map: "https://www.google.com/maps?q=Simhachalam+Temple",
          img: Simhachalam,
        },
        {
          name: "Rushikonda Beach",
          desc: "Adventure sports and swimming hotspot.The beach lies along Beach Road, Rushikonda area, near Bheemili.It is known for golden sands, clear waters, and being more scenic and less hectic than some inner-city beaches.Rushikonda is described as having a “golden sand and tidy waves.",
          map: "https://www.google.com/maps?q=Rushikonda+Beach",
          img: Rushikonda,
        },
        {
          name: "Araku Valley Trip",
          desc: "Scenic train journey through Eastern Ghats.Araku Valley is a hill-station and scenic valley region located in the Eastern Ghats, in the state of Andhra Pradesh, India.Because of its elevation and valley location, Araku offers cooler temperatures than plains, green landscapes, mist, forest-covered hills.",
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
          desc: "World-famous Lord Venkateswara Temple.Tirumala is a hill town in the Tirupati district of Andhra Pradesh, IndiaIt is located on the hill range known as the Seshachalam Hills (or Seven Hills) and sits at an elevation of around 853 metres above sea level.The greenery, the cool hill environment, views from the hills.",
          map: "https://www.google.com/maps?q=Tirumala+Temple+Tirupati",
          img: TirumalaTemple,
        },
        {
          name: "Govindaraja Temple",
          desc: "Ancient temple near railway station.For devotees of Vishnu, temples like this provide a direct, peaceful place for worship and introspection.large pilgrimage sites, you may get a more relaxed visit, more time to absorb the architecture, rituals and ambience.Seek the main shrine, observe the rituals, and note the iconography of Govindaraja Swamy.",
          map: "https://www.google.com/maps?q=Govindaraja+Temple",
          img: GovindarajaTemple,
        },
        {
          name: "Kapila Theertham",
          desc: "Serene waterfall near the temple.Kapila Theertham is a sacred temple-and-waterfall complex located at the foot of the Seshachalam Hills, near Tirupati in Andhra Pradesh.The main shrine here is dedicated to Lord Shiva, worshipped as Kapileswara Swamy. The name “Kapila” comes from the sage Kapila Muni who—according to legend—performed penance here.",
          map: "https://www.google.com/maps?q=Kapila+Theertham",
          img: KapilaTheertham,
        },
        {
          name: "Silathoranam",
          desc: "Natural rock formation, unique geological feature.Silathoranam (also spelled “Sila Thoranam”) is a natural rock arch/bridge formation located in the Tirumala Hills.It provides visible evidence of huge spans of geological time, weathering and the Earth’s shaping processes—a point of interest for anyone curious about natural history.",
          map: "https://www.google.com/maps?q=Silathoranam",
          img: Silathoranam,
        },
        {
          name: "Chandragiri Fort",
          desc: "Historical fort with royal architecture.Chandragiri Fort is a historic fort located in the suburb of Chandragiri (near Tirupati) in the Tirupati district of Andhra Pradesh.It is perched on a rocky hill and offers sweeping views of the surrounding terrain.The name “Chandragiri” literally means “Hill of the Moon” (Chandra = moon, giri = hill), likely inspired by the shape/look of the hill.",
          map: "https://www.google.com/maps?q=Chandragiri+Fort",
          img: ChandragiriFort,
        },
        {
          name: "Talakona Waterfalls",
          desc: "Tallest waterfall in Andhra Pradesh.Talakona Waterfall is located in the Sri Venkateswara National Park (part of the Seshachalam Hills) in the Tirupati district.The waterfall drops dramatically into a forested valley, creating a scenic, tranquil setting.The waterfall is set in dense forest, rich biodiversity, and is somewhat off the beaten path compared to city attractions, offering a slice of nature.",
          map: "https://www.google.com/maps?q=Talakona+Waterfalls",
          img: TalakonaWaterfalls,
        },

        {
          name: "Srinivasa Mangapuram Temple",
          desc: " Sri Kalyana Venkateswara Swamy Temple (also referred to as Kalyana Venkateswara in Srinivasa Mangapuram).Popular lesser-known pilgrimage spot.According to belief, after the marriage of Lord Venkateswara (also called Srinivasa) with Goddess Padmavathi, the divine couple stayed here for six months before moving to the hills of Tirumala. This gives the temple its “kalyana” (marriage) association.",
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
          desc: "Ancient Sun temple dedicated to Surya.The Arasavalli Sun Temple (officially Arasavalli Sun Temple, also known as Sri Suryanarayana Swamy Temple) is located in Arasavalli village, about **1 km east of the town of Srikakulam in Srikakulam district.The temple is designed such that twice a year (around March and September/October) the early-morning sun’s rays fall directly onto the feet of the main Surya deity.",
          map: "https://www.google.com/maps?q=Arasavalli+Temple",
          img: ArasavalliTemple,
        },
        {
          name: "Srikurmam Temple",
          desc: "Tortoise-shaped temple.The temple has very ancient origins, with major reconstructions through the centuries.It is one of the very few temples devoted to the Kurma Avatara of Vishnu — making it quite rare in India.The temple displays Kalinga and Dravidian architectural features. It was converted from earlier patterns to a Vaishnava temple by the Eastern Ganga dynasty",
          map: "https://www.google.com/maps?q=Srikurmam+Temple",
          img: SrikurmamTemple,
        },
        {
          name: "Kalingapatnam Beach",
          desc: "Quiet beach with lighthouse.As part of the old Kalinga region with maritime trade, Kalingapatnam is interesting for those wanting to see coastal-heritage beyond just beaches.The beach at Kalingapatnam is relatively less developed than major tourist beaches, so it offers a more rustic coastal experience.one of the places where you can see the coast + river merge.",
          map: "https://www.google.com/maps?q=Kalingapatnam+Beach",
          img: KalingapatnamBeach,
        },
        {
          name: "Baruva Beach",
          desc: "Peaceful coastline away from crowds.Baruva Beach is described as a quieter, less-commercialised beach with golden sands, swaying trees and wide open coastline — great if you want a more relaxed outing.It’s gaining notice as a “marine tourism hotspot” in Andhra state, with development efforts for eco-tourism.It lies on the east coast along the Bay of Bengal, near where the Mahendratanaya (or Mahendra Tanya) River meets the sea.",
          map: "https://www.google.com/maps?q=Baruva+Beach",
          img: BaruvaBeach,
        },
        {
          name: "Salihundam Buddhist Site",
          desc: "Ancient Buddhist relics and stupas.Salihundam is a major archaeological & Buddhist heritage site. Excavations have revealed stupas, relic caskets, chaityas, viharas and sculptures spanning from roughly the 2nd century BCE to the 12th century CE.It reflects the evolution of Buddhism in the region — Theravāda, Mahāyāna and Vajrayāna traditions are all evidenced here,hilltop area with the remains of several Buddhist stupas.",
          map: "https://www.google.com/maps?q=Salihundam+Buddhist+Site",
          img: Salihundam,
        },
        {
          name: "Nagavali River",
          desc: "Scenic river flowing through the district.The Nagavali River basin supports agriculture, towns, and water supply in both Odisha and Andhra Pradesh—especially in the tribal-hilly uplands and also the coastal plains.From an environmental angle, studies highlight changes in land-use, water-quality, flood-risk and basin dynamics in the Nagavali basin — so it’s of interest for nature, hydrology and sustainable tourism.",
          map: "https://www.google.com/maps?q=Nagavali+River",
          img: NagavaliRiver,
        },
        {
          name: "Kotturu Fort",
          desc: "Historical fort and viewpoint.The fort is part of the regional story of Srikakulam district and bounds of Andhra’s older districts which link to rule across coastal and hill regions.The precise historical records of the fort are scarce; it likely served as a regional defensive structure given its location in the northeastern part of Andhra, near the Eastern Ghats and coastal zone",
          map: "https://www.google.com/maps?q=Kotturu+Fort",
          img: KotturuFort,
        },
        {
          name: "Srikakulam Beach Park",
          desc: "Recreational park near the coastline.Since the beaches are less crowded and less developed, they offer more peaceful walks, open skies, gentle sea breezes.: Being off the major tourist circuit means you’ll likely encounter more of the village/sea-fisher community, local coconut/cashew groves, and fewer “tourist shops.freedom to explore quietly, take photos, stroll without heavy commercial activity.",
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
      desc: "Stunning limestone caves.The caves are famous for their spectacular stalactite and stalagmite formations—many shapes evoke figures like Shiva–Parvati, animal forms, human faces.They are among the deepest and largest limestone caves in India, making them geologically significant.The environment inside is markedly cooler than outside—being in the hills and within limestone voids means more moderate temperature and unique atmosphere.",
      map: "https://www.google.com/maps?q=Borra+Caves",
      img: BorraCaves, // 👈 Added image import
    },
    {
      name: "Katiki Waterfalls",
      desc: "Scenic waterfall spot.Katiki Waterfalls (also spelled “Katika Waterfalls”) are located near the village of Katiki in the Eastern Ghats of Andhra Pradesh, in the Araku Valley region.The falls offer a beautiful drop of water, surrounded by lush green hills and forest pathways — a refreshing break from city life.Compared to many mainstream tourist spots, Katiki is relatively quieter, which means more peace and natural ambience",
      map: "https://www.google.com/maps?q=Katiki+Waterfalls",
      img: KatikiWaterfalls, // 👈 Added image import
    },
    {
      name: "Coffee Museum",
      desc: "Learn about coffee plantations.The Araku Coffee Museum is located in the hill-station region of Araku Valley.The museum was established in 2006 (though the site’s coffee house history goes back further) and is privately owned/operated by the family of one of the early founders.It’s designed around the theme of coffee — its cultivation, processing, history and cultural significance — especially with reference to the Araku region and its tribal coffee growers",
      map: "https://www.google.com/maps?q=Coffee+Museum+Araku",
      img: CoffeeMuseum, // 👈 Added image import
    },
    {
      name: "Ananthagiri Hills",
      desc: "Trekking and nature exploration.The hills provide lush greenery, hill-valley views, fresh air and a break from coastal/plain landscapes. The scenic vista is part of their appeal.The region is known for its coffee plantations and relaxed “hill station” feel, giving something beyond just the views.There are trails in the hills for gentle trekking, nature walks, viewpoint exploration.",
      map: "https://www.google.com/maps?q=Ananthagiri+Hills",
      img: AnanthagiriHills, // 👈 Added image import
    },
    {
      name: "Padmapuram Gardens",
      desc: "Beautiful botanical gardens.It spans about 26 acres and was originally built in 1942 to supply vegetables to soldiers during World War II.After the war, it was converted into a horticultural nursery and training center, and later developed as a landscaped garden with extra visitor attractions.It offers a refreshing green space in the hills, complete with flowerbeds, exotic trees.",
      map: "https://www.google.com/maps?q=Padmapuram+Gardens",
      img: PadmapuramGardens, // 👈 Added image import
    },
    {
      name: "Tribal Museum",
      desc: "Showcasing tribal art and culture.The museum gives you an authentic glimpse into the lives of the tribal communities of the Eastern Ghats — their tools, jewellery, daily life, culture and rituals.this museum adds cultural depth — you stroll through exhibits, dioramas, life-size statues depicting tribal life, and you also have a handicraft centre where local tribal artisans display their work",
      map: "https://www.google.com/maps?q=Tribal+Museum+Araku",
      img: TribalMuseum, // 👈 Added image import
    },
    {
      name: "Chaparai Waterfalls",
      desc: "Serene and less crowded waterfall.It lies along the Paderu-Araku Road, about 13-15 km from the main Araku Valley town.Rather than a huge vertical drop waterfall, it is more of a sloping rock stream where water flows over smooth rock surfaces — creating natural “slides” and pools.Surrounded by forest cover and hills, this spot offers a calm nature outing with the water flowing over exposed rock beds",
      map: "https://www.google.com/maps?q=Chaparai+Waterfalls",
      img: ChaparaiWaterfalls, // 👈 Added image import
    },
    {
      name: "Padmapuram Trek",
      desc: "Easy trekking trail with scenic views.The gardens span about 26 acres and include landscaped lawns, flower beds, orchard sections and tree-top “huts” (hanging cottages) which involve mild elevation changes.the tree-top huts and up into slightly elevated terrain within the gardens, giving a light‐trek feel rather than a steep mountain climb.The gardens span about 26 acres and include landscaped lawns.",
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
      desc: "Located on Indrakeeladri hill.According to legend, Goddess Durga took abode on the Indrakeeladri Hill after slaying the demon king Mahishasura. The hill’s name “Indrakeeladri” itself refers to Sage Indra-Keela who performed penance there Perched on a hill, the temple offers panoramic views of Vijayawada city and the Krishna river, adding visual/spiritual impact.", 
      map: "https://www.google.com/maps?q=Kanaka+Durga+Temple",
      img: KanakaDurga, // <-- ADDED
    },
    { 
      name: "Bhavani Island", 
      desc: "Water sports & boating activities.Bhavani Island is a large island (about 133 acres) located in the middle of the Krishna River,Being an island in a wide river, the surroundings offer calm water views, greenery, and a different vibe from the cityideal for relaxation.The island has garden areas, shaded spots, tree houses/hanging cottages.", 
      map: "https://www.google.com/maps?q=Bhavani+Island",
      img: BhavaniIsland, // <-- ADDED
    },
    { 
      name: "Prakasam Barrage", 
      desc: "Iconic river crossing over Krishna River.The idea of constructing a dam across the Krishna River dates back to 1798; subsequent plans by Captains Buckle, Best, Lake culminated in the old anicut (weir) by 1855.It has played a major role in transforming the coastal Andhra region by supporting large-scale irrigation— helping convert the Krishna delta into a more productive zone.", 
      map: "https://www.google.com/maps?q=Prakasam+Barrage",
      img: PrakasamBarrage, // <-- ADDED
    },
    { 
      name: "Undavalli Caves", 
      desc: "Ancient rock-cut architecture.The Undavalli Caves are a set of monolithic rock-cut cave temples located in the village of Undavalli, in the Guntur District of Andhra Pradesh.These caves are a fine example of ancient Indian rock-cut architecture—carved directly out of the hill side.The caves span multiple storeys, contain elaborate pillars, shrines and a large reclining-Vishnu (or similar deity) sculpture", 
      map: "https://www.google.com/maps?q=Undavalli+Caves",
      img: UndavalliCaves, // <-- ADDED
    },
    { 
      name: "Mangalagiri Temple", 
      desc: " It is considered one of the “Mahakshetras” (very sacred places) of Lord Vishnu/Narasimha in Andhra Pradesh and is part of the network of Narasimha‐shrines in the region.The hill temple (Panakala Narasimha) is famous for the offering of panakam (jaggery water) which the deity is believed to accept half of whatever is offered.There are three Narasimha Swamy temples in this area: one at the foot of the hill (Lakshmi Narasimha),  and another at the top of the hill.", 
      map: "https://www.google.com/maps?q=Mangalagiri+Temple",
      img: MangalagiriTemple, // <-- ADDED
    },
    { 
      name: "Gandhi Hill", 
      desc: "Hilltop monument and observation point.Gandhi Hill, located near the Vijayawada Railway Station, is a historic monument built in memory of Mahatma Gandhi, the Father of the Nation. Standing at about 500 feet above the city, the hill offers a stunning panoramic view of Vijayawada.The main attraction is the 60-foot Gandhi Stupa, one of the first memorials built after Gandhi’s assassination in 1948. There are seven stupas in total, symbolizing peace, unity, and Gandhi’s principles of non-violence.", 
      map: "https://www.google.com/maps?q=Gandhi+Hill",
      img: GandhiHill, // <-- ADDED
    },
    { 
      name: "Eluru Road Park", 
      desc: "Local park with leisure activities.Eluru Road Park is a refreshing urban park located along the busy Eluru Road in Vijayawada. It offers a peaceful environment for residents and travelers to relax, walk, and enjoy greenery in the heart of the city.Beautifully landscaped pathways, well-maintained lawns, and seating areas make it a perfect spot for morning walks, evening strolls, and family time. The park also features children’s play zones, exercise equipment, and colorful flower gardens that add to its charm.", 
      map: "https://www.google.com/maps?q=Eluru+Road+Park",


      img: EluruRoadPark, // <-- ADDED
    },
    { 
      name: "Krishna Riverfront", 
      desc: "Beautiful riverside walks and views.Krishna River Fort is a historic structure located along the scenic banks of the Krishna River. The fort once served as a strategic defense point, protecting the nearby regions and trade routes that flourished around the river. Its design reflects ancient architecture with stone walls, gateways, and watch areas that overlook the flowing waters of Krishna.Today, the fort is a popular tourist and photography spot, offering stunning riverside views — especially during sunrise and sunset.", 
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
      desc: "Boat rides through scenic hills.The Papi Hills (Papikondalu) are a scenic mountain-range / hill system along the course of the Godavari River in Andhra Pradesh, straddling the border areas of East Godavari, West Godavari, and Khammam districts.The name “Papikondalu” is said to come from the Telugu “Papidi Kondalu” meaning the partition of a woman’s hair, metaphorically referring to how the hills split the river.The hills form part of a gorge where the river winds between steep slopes, creating a narrow, dramatic valley.", 
      map: "https://www.google.com/maps?q=Papi+Hills",
      img: papiHills, // 👈 Added Image
    },
    { 
      name: "Dindi Backwaters", 
      desc: "Dindi is a village in the Dr. B. R. Ambedkar Konaseema district (formerly East Godavari) of Andhra Pradesh, India.Calm, scenic backwaters.The “backwaters” refer to the network of canals, lagoons, river branches and shoreline around Dindi, seated in the delta region of the Godavari River where palm and coconut groves fringe the water.The visual of lazy canals, calm water, green coconuts & palms stretching to the water’s edge makes it a peaceful escape.There are resorts and house-boat packages catering to visitors wanting to stay by the water, enjoy nature and relax.", 
      map: "https://www.google.com/maps?q=Dindi+Backwaters",
      img: dindiBackwaters, // 👈 Added Image
    },
    { 
      name: "Dowleswaram Barrage", 
      desc: "Engineering marvel on Godavari River.The Dowleswaram Barrage is a major irrigation and control structure built across the Godavari River near the town of Rajahmundry (formerly East Godavari district), Andhra Pradesh.It lies at a strategic point where the Godavari splits into its branches (Gautami and Vasistha) forming the delta.Being among the early large scale barrages in India and built in the mid-19th century, it stands as a piece of civil engineering history.The barrage enabled better water control and irrigation for the Godavari delta lands.", 
      map: "https://www.google.com/maps?q=Dowleswaram+Barrage",
      img: dowleswaramBarrage, // 👈 Added Image
    },
    { 
      name: "Annavaram Temple", 
      desc: "Famous hilltop temple.the Annavaram Temple—officially dedicated to Lord Veera Venkata Satyanarayana—stands as a vibrant blend of faith, legend, and natural serenity. Pilgrims ascend the hillside, drawn by the promise of darshan and the panoramic views that stretch over the lush valley below. Built and expanded through centuries, the temple seamlessly blends historical architecture with living tradition.The road winds through green elevation, and early morning visits offer a peaceful climb before the crowds arrive", 
      map: "https://www.google.com/maps?q=Annavaram+Temple",
      img: annavaramTemple, // 👈 Added Image
    },
    { 
      name: "Rajahmundry Boat Rides", 
      desc: "River cruise experience.A boat ride in Rajahmundry is one of the most memorable ways to experience the serene beauty of the Godavari River. As the boat glides over the calm waters, the cool breeze and peaceful river ambiance create a refreshing escape from the busy city life. The journey provides stunning views of lush green banks, small islands, and historic structures along the river. Many cruises also take travelers through the iconic Godavari bridges, making it a perfect moment for photography and relaxation", 
      map: "https://www.google.com/maps?q=Rajahmundry+Boat+Rides",
      img: rajahmundryBoatRides, // 👈 Added Image
    },
    { 
      name: "Kadiyam Gardens", 
      desc: "Beautiful botanical garden.Kadiyam Gardens in Rajahmundry is a colorful paradise filled with a wide variety of flowering plants, nurseries, and lush greenery. Known as the heart of horticulture in Andhra Pradesh, this place welcomes visitors with vibrant rows of roses, jasmine, marigolds, and countless other ornamental plants. Walking through the gardens feels refreshing as the air is filled with the gentle fragrance of blooming flowers. Many travelers come here not only to enjoy the beauty but also to explore plant nurseries and learn about cultivation", 
      map: "https://www.google.com/maps?q=Kadiyam+Gardens",
      img: kadiyamGardens, // 👈 Added Image
    },
    { 
      name: "Vasishta Godavari", 
      desc: "Sacred river confluence spot.Vasista Godavari is one of the sacred branches of the mighty Godavari River, flowing peacefully through the scenic landscapes near Rajahmundry. This river stream is deeply connected to ancient mythology, believed to be named after the revered sage Vasishta who performed penance along its banks. Surrounded by gentle hills, greenery, and tranquil villages, the Vasista Godavari offers a calm and divine atmosphere that attracts pilgrims and nature lovers alike. The riverbanks are home to temples and spiritual spots where visitors can relax, meditate, or simply enjoy the soothing sound of flowing wate ", 
      map: "https://www.google.com/maps?q=Vasishta+Godavari",
      img: vasishtaGodavari, // 👈 Added Image
    },
    { 
      name: "Papikonda National Park", 
      desc: "Wildlife and trekking experience.Papikonda National Park, located along the majestic Godavari River, is a treasure of untouched wilderness and breathtaking landscapes. Covered with dense forests and rolling hills, the park is a haven for rich wildlife, including tigers, leopards, spotted deer, and several rare bird species. The lush greenery, fed by the river and seasonal streams, makes the area scenic and vibrant throughout the year. Travelers often enjoy boat routes running adjacent to the park, giving them a unique chance to admire its beauty from the water while spotting animals near the riverbanks.", 
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
          desc: "18th-century historical fort and landmark.Vizianagaram Fort stands as a proud symbol of the region’s royal heritage and architectural brilliance. Built in the 18th century by the Vizianagaram rulers, the fort reflects a blend of traditional and military-style construction that once protected an entire kingdom. The massive entrance, known as the “Nagar Khana,” welcomes visitors with its grandeur while the surrounding walls still showcase strength and artistry from the past. Inside the fort complex, several historic structures, temples, and royal buildings tell stories of the rulers who shaped Vizianagaram’s culture and identity", 
          map: "https://www.google.com/maps?q=Vizianagaram+Fort",
          img: VizianagaramFort, // Assuming you import this
        },
        { 
          name: "Thatipudi Reservoir", 
          desc: "Picnic spot and dam on the Gosthani river.Thatipudi Reservoir is a peaceful retreat nestled in the scenic landscapes near Vizianagaram. Surrounded by rolling hills, calm waters, and fresh countryside air, it is the perfect destination for travelers seeking a relaxing getaway in nature. The reservoir was built across the Gosthani River, and today it not only supplies water to nearby regions but also serves as a favorite spot for picnics and weekend outings. Visitors can enjoy beautiful views of the lake, watch the sunset paint the sky with vibrant colors, and spend quiet moments by the water.", 
          map: "https://www.google.com/maps?q=Thatipudi+Reservoir",
          img: ThatipudiReservoir, // Assuming you import this
        },
        { 
          name: "Ramatheertham Temple", 
          desc: "Ancient hill temple with scenic views and Jain remnants.Ramatheertham Temple is a famous and sacred pilgrimage site located near Vizianagaram in Andhra Pradesh. Surrounded by the serene hills of the Eastern Ghats, the temple offers a peaceful atmosphere that beautifully blends spirituality with nature. The place holds great significance in the Ramayana, as it is believed that Lord Rama, Sita, and Lakshmana once stayed here during their exile. The temple on the Bodhikonda hill is dedicated to Lord Rama, while the nearby temples of Lord Shiva and Lord Vishnu add to its divine charm.", 
          map: "https://www.google.com/maps?q=Ramatheertham+Temple",
          img: RamatheerthamTemple, // Assuming you import this
        },
        { 
          name: "Ganta Stambham", 
          desc: "Iconic clock tower in the heart of Vizianagaram.Ganta Stambham, also known as the Clock Tower, is one of the most recognized landmarks in Rajahmundry, symbolizing the city’s rich heritage and timeless charm. Located at the heart of the town, this elegant structure stands proudly as a reminder of the city’s colonial past and cultural identity. The tower’s design and classic architecture attract visitors who love to explore historic sites and capture memorable photographs. It serves as a popular meeting point for locals and a starting spot for travelers exploring nearby attractions in the city", 
          map: "https://www.google.com/maps?q=Ganta+Stambham",
          img: GantaStambham, // Assuming you import this
        },
        { 
          name: "Kumili Fort", 
          desc: "Site of the erstwhile Vizianagaram Kingdom's first fort.Kumili Fort is a historic landmark that carries the legacy of the region’s ancient rulers. Surrounded by greenery and rocky landscapes, the fort stands as a reminder of the architectural strength and strategic importance it once held. Walking through the fort area, visitors can feel the echoes of past battles and royal life, making it a fascinating spot for history lovers and explorers. The old walls, gateways, and scenic views from the fort create a peaceful yet adventurous atmosphere. With its blend of nature and heritage.", 
          map: "https://www.google.com/maps?q=Kumili+Fort",
          img: KumiliFort, // Assuming you import this
        },
        { 
          name: "Govindapuram Hill", 
          desc: "Beautiful viewpoint and nature spot with a prominent temple.Govindapuram Hill is a peaceful getaway surrounded by nature, offering a refreshing escape from the busy routine of everyday life. As you travel up the hill, the cool breeze and greenery create a calming atmosphere that immediately relaxes the mind. The hill provides a beautiful view of the surrounding landscapes, especially during sunrise and sunset when the sky glows with vibrant colors. It is also a place where many visitors come to meditate, pray, and enjoy moments of quiet reflection", 
          map: "https://www.google.com/maps?q=Govindapuram+Hill",
          img: GovindapuramHill, // Assuming you import this
        },
        { 
          name: "Vizianagaram Museum", 
          desc: "Showcases local heritage, artifacts, and royal history.The Vizianagaram Museum is a wonderful place for anyone interested in history and heritage. Located in the royal town of Vizianagaram, the museum showcases the rich culture, traditions, and legacy of the region’s past rulers. Inside the halls, visitors can explore rare collections of weapons, coins, sculptures, paintings, and ancient manuscripts that reflect centuries of craftsmanship and knowledge. Many of the exhibits are linked to the Bobbili and Vizianagaram kingdoms, offering a deeper understanding of local valor, art, and royal lifestyle", 
          map: "https://www.google.com/maps?q=Vizianagaram+Museum",
          img: VizianagaramMuseum, // Assuming you import this
        },
        { 
          name: "Pydithalli Ammavaru Temple", 
          desc: "Famous temple known for the annual Sirimanu Utsavam festival.Pydithalli Ammavaru Temple in Vizianagaram is a sacred symbol of faith and culture, attracting thousands of devotees throughout the year. Dedicated to Goddess Pydithalli, who is believed to be the guardian deity of the region, this temple holds a special place in the hearts of locals. The atmosphere is filled with devotion as people gather to offer prayers and seek blessings for good health, prosperity, and protection from difficulties. The temple becomes even more vibrant during the famous Sirimanotsavam festival, when the entire town celebrates with grand rituals.", 
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
      desc: "Known as Grand Canyon of India.Gandikota Fort, often called the “Grand Canyon of India,” stands majestically on the banks of the Penna River in Andhra Pradesh. This ancient fort showcases a blend of natural beauty and historical grandeur, with massive stone walls, watchtowers, ancient temples, and the striking deep gorge that makes the place so iconic. As you walk through its grand gateways and old structures, you can feel the stories of powerful dynasties that once ruled here. The breathtaking view from the cliff, overlooking the dramatic canyon-like valley, makes Gandikota a paradise for photographers and adventure lovers", 
      map: "https://www.google.com/maps?q=Gandikota+Fort",
      img: GandikotaFort,
    },
    { 
      name: "Belum Caves", 
      desc: "Second-largest caves in India.Belum Caves in Andhra Pradesh is one of the largest and most fascinating underground cave systems in India, known for its stunning natural formations created over millions of years. Walking through the long passages and spacious chambers feels like entering a mysterious world with unique stalactites, stalagmites, and intricate limestone patterns. The caves are beautifully lit to highlight their natural beauty, and the cool temperature inside adds to the adventure.Visitors can explore interesting spots like Patalaganga, where a stream flows deep within the cave, and meditation halls once used by Buddhist monks.", 
      map: "https://www.google.com/maps?q=Belum+Caves",
      img: BelumCaves,
    },
    { 
      name: "Ameen Peer Dargah", 
      desc: "Symbol of communal harmony.Ameen Peer Dargah in Rajahmundry is a sacred and peaceful place known for its spiritual significance and centuries-old traditions. People of all faiths visit this holy site to seek blessings and pray for their wishes to come true. The Dargah is dedicated to the Sufi saints Peerullah Hussaini and Arifullah Hussaini, whose teachings of love and harmony continue to inspire devotees. The atmosphere here is calm and soulful, filled with the fragrance of incense, devotional music, and a deep sense of faith. Visitors often tie threads of hope and light candles as symbolic gestures of their prayers.", 
      map: "https://www.google.com/maps?q=Ameen+Peer+Dargah",
      img: AmeenPeerDargah,
    },
    { 
      name: "Vontimitta Temple", 
      desc: "Vijayanagara-style architecture temple.Vontimitta Temple, located in the serene town of Vontimitta in Andhra Pradesh, is a magnificent example of ancient South Indian temple architecture. Dedicated to Lord Sri Rama, the temple stands proudly with beautifully carved pillars and grand stone structures that reflect the craftsmanship of the 16th century. The calm surroundings and spiritual aura make it a peaceful place for devotees and visitors alike. According to local legends, the temple was built by two ardent devotees who crafted the structure with their devotion and skill. The temple is especially famous during Sri Rama Navami celebrations.", 
      map: "https://www.google.com/maps?q=Vontimitta+Temple",
      img: VontimittaTemple,
    },
    { 
      name: "Pushpagiri Temple", 
      desc: "Scenic temple with panoramic views.Pushpagiri Temple, located near Kadapa in Andhra Pradesh, is a sacred and ancient pilgrimage destination known for its historic temples and peaceful spiritual atmosphere. Situated beautifully on the banks of the Pennar River, this place carries a rich heritage dating back to the Chola period, with temples dedicated to Lord Shiva, Vishnu, and other deities. The architecture reflects detailed stone carvings, age-old sculptures, and traditional South Indian craftsmanship that reveal the devotion and artistry of the past. Pilgrims come here to seek blessings, enjoy the calm surroundings, and feel connected to divine energy.", 
      map: "https://www.google.com/maps?q=Pushpagiri+Temple",
      img: PushpagiriTemple,
    },
    { 
      name: "Siddhavattam Temple", 
      desc: "Ancient temple near river.Siddhavattam Temple, located on the banks of the Pennar River in Andhra Pradesh, is a peaceful and spiritually rich destination known for its ancient architecture and sacred atmosphere. Surrounded by natural rock formations and greenery, the temple offers a calm and divine setting that attracts devotees throughout the year. The main deity here is Lord Shiva, worshipped as Sri Kotilingeswara Swamy, and the temple’s stone carvings reflect the craftsmanship of early dynasties who once ruled the region. The river flowing beside the temple adds a serene charm, especially during mornings and festive days", 
      map: "https://www.google.com/maps?q=Siddhavattam+Temple",
      img: SiddhavattamTemple,
    },
    { 
      name: "Rayalaseema Barrage", 
      desc: "Popular local picnic spot.Rayalaseema Barrage, built across the majestic River Godavari, stands as a significant engineering marvel that supports irrigation and water supply across the region. Surrounded by scenic river views and peaceful natural landscapes, the barrage has become an inviting spot for visitors who enjoy leisurely walks and relaxing time by the water. During the evenings, the pleasant ambiance with cool breezes and the sight of flowing river water creates a perfect place to unwind with family and friends. The location also gives a glimpse of the region’s agricultural importance, showing how the barrage plays a key role in nurturing fertile lands and sustaining livelihoods", 
      map: "https://www.google.com/maps?q=Rayalaseema+Barrage",
      img: RayalaseemaBarrage,
    },
    { 
      name: "Kailasanatha Swamy Temple", 
      desc: "Historic hilltop temple.Kailasanatha Swamy Temple is a revered and ancient shrine dedicated to Lord Shiva, known for its peaceful spiritual ambiance and beautiful architecture. The temple’s intricate carvings and traditional design reflect the rich cultural heritage of the region, drawing visitors who seek both devotion and history. Surrounded by a calm environment, the temple offers devotees a space to pray, meditate, and feel connected to divinity. Festivals like Maha Shivaratri bring the temple to life with vibrant rituals and celebrations, showcasing the deep faith of the local community", 
      map: "https://www.google.com/maps?q=Kailasanatha+Swamy+Temple",
      img: KailasanathaSwamyTemple,
    },
  ],
},
  ]
// ... (rest of the cityData array)
    // ... rest of cityData (araku, vijayawada, godavari, vizianagaram, kadapa)
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
          style={{
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "black";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "white";
          }}
        >
          ← Back to Home
        </Button>

        <h2 className="mb-4 text-white fw-bold">{city.name} Places</h2>

        <Row>
          {city.places.map((place, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card 
                className="shadow-lg border-0 rounded-4 overflow-hidden"
                style={{
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }}
              >
                {/* ✅ Place Image Section */}
                <div
                  style={{
                    height: "200px",
                    backgroundImage: `url(${place.img || city.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    transition: "all 0.3s ease"
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
                      transition: "all 0.3s ease"
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
                    style={{
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#198754";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#198754";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
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