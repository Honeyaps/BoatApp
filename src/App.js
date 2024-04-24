import { BrowserRouter, Routes,Route }from 'react-router-dom';
import Deals from './Daily deals/Deals';
import MyNavbar from './Component/Navbar';
import DarkVariantExample from './Component/Crousel';
import Airpode161 from './Cards inner page/Airpode161'
import Footer from './Component/Footer';
import Airpode131 from './Cards inner page/Airpode131'
import Lunnar from './Cards inner page/Lunnar'
import Immortal from './Cards inner page/Immortal'
import Rockerz from './Cards inner page/Rockerz'
import Avantebar from './Cards inner page/Avantebar'
import Stone52 from './Cards inner page/Stone52'
import Stone105 from './Cards inner page/Stone105'
import Partypal200 from './Cards inner page/Partypal200'
import Partypal185 from './Cards inner page/Partypal185'
import Partypal195 from './Cards inner page/Partypal195'
import Partypal390 from './Cards inner page/Partypal390'
import Avantebar500 from './Cards inner page/Avantebar500'
import Avanterythem from './Cards inner page/Avanterythem'
import Avantebar1150 from './Cards inner page/Avantebar1150';
import Avantebar490 from './Cards inner page/Avantebar490';
import Social from './Social responsibility/Social';





export default function App(){
    return(
        <BrowserRouter>
        <MyNavbar/>
        <Routes>

            <Route path="/deal" element={<Deals />}></Route>
            <Route path="/social" element={<Social />}></Route>
            <Route path="/*" element={<DarkVariantExample />}></Route>
            <Route path="/Airpode161" element={<Airpode161/>}></Route> 
            <Route path="/Airpode131" element={<Airpode131/>}></Route>
            <Route path="/Lunnar" element={<Lunnar/>}></Route>  
            <Route path="/Immortal" element={<Immortal/>}></Route> 
            <Route path="/Rockerz" element={<Rockerz/>}></Route> 
            <Route path="/Avantebar" element={<Avantebar/>}></Route> 
            <Route path="/Stone52" element={<Stone52/>}></Route> 
            <Route path="/Stone105" element={<Stone105/>}></Route> 
            <Route path="/Partypal200" element={<Partypal200/>}></Route> 
            <Route path="/Partypal185" element={<Partypal185/>}></Route> 
            <Route path="/Partypal195" element={<Partypal195/>}></Route> 
            <Route path="/Partypal390" element={<Partypal390/>}></Route> 
            <Route path="/Avantebar500" element={<Avantebar500/>}></Route> 
            <Route path="/Avanterythem" element={<Avanterythem/>}></Route> 
            <Route path="/Avantebar1150" element={<Avantebar1150/>}></Route> 
            <Route path="/Avantebar490" element={<Avantebar490/>}></Route> 
          


        </Routes>
        <Footer/>
        </BrowserRouter>
);
}

