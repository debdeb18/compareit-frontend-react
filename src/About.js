import React from 'react';
import "./component/App.css";
import Footer from './component/Footer';
import NavBar from './component/NavBar';

class About extends React.Component{
    render(){
        return(
            <>
            <div class="header">
                <div class="container">
                    <NavBar />
                    <div class="row">
                        <div class="col-2">
                            <h1> ABOUT PAGE </h1>
                            <p> this is rubbish talking please change this when udah mau di kumpul ya.ato pas mau
                            di check juga boleh di ganti gitu lala gua gtau mau type apa lagi tapi
                            biar bagus aja kyk tulisanny banyak gitu ok bye. </p>
                        </div>
                        <div class="col-2">
                            <img src="https://www.pngkey.com/png/full/115-1157788_jordan-1-retro-high-air-jordan-1-bred.png" alt=" " />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default About;