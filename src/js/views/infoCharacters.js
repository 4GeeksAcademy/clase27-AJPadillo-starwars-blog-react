import React from "react";
import { useLocation } from "react-router-dom";

export const InfoCharacters = () => {
    const location = useLocation();
    const item = location.state;

    const imageMapCharactersInfo = {
        "Luke Skywalker": "https://media.revistagq.com/photos/5da6ca93750933000885e046/4:3/w_3600,h_2700,c_limit/star-wars-the-last-jedi-is-luke-dead.jpg",
        "C-3PO": "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536",
        "R2-D2": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/08/r2-d2.jpg",
        "Darth Vader": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B0BDA09845AA575291C38D21E462571A6E07AC34899505FA6F6D615137B15EDF/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
        "Leia Organa": "https://hips.hearstapps.com/es.h-cdn.co/hares/images/cultura/ocio/princesa-leia-que-el-feninismo-te-acompane/2732668-3-esl-ES/princesa-leia-que-el-feminismo-te-acompane.jpg?crop=1xw:0.9469790382244143xh;center,top&resize=1200:*",
        "Owen Lars": "https://i.blogs.es/36d486/joel-edgerton-owen-lars-01/1366_2000.jpeg",
        "Beru Whitesun lars": "https://clonecorridor.com/wp-content/uploads/2015/09/beru-lars-6.jpg",
        "R5-D4": "https://www.slashfilm.com/img/gallery/is-r5-d4-the-same-droid-from-star-wars-a-new-hope-an-investigation/l-intro-1678268003.jpg",
        "Biggs Darklighter": "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878",
        "Obi-Wan Kenobi": "https://static1.srcdn.com/wordpress/wp-content/uploads/2017/10/obi-wan-kenobi-ewan-mcgregor.jpg"
    };

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-around align-items-center">
                <div className="col-md-6">
                    <img src={imageMapCharactersInfo[item.name]} className="img-fluid img-thumbnail"/>
                </div>
                <div className="col-md-6">
                    <h1>{item.name}</h1>
                    <p className="fs-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
            <div style={{ height: '5px' }} className="border m-5 bg-danger"></div>
            <div className="row d-flex align-items-center justify-content-center text-danger">
                <div className="col-md-2">
                    <p>Name:</p>
                    <p>{item.name}</p>
                </div>
                <div className="col-md-2">
                    <p>Hair color:</p>
                    <p>{item.hair_color}</p>
                </div>
                <div className="col-md-2">
                    <p>Height:</p>
                    <p>{item.height}</p>
                </div>
                <div className="col-md-2">
                    <p>Gender:</p>
                    <p>{item.gender}</p>
                </div>
                <div className="col-md-2">
                    <p>Eye color:</p>
                    <p>{item.eye_color}</p>
                </div>
            </div>
        </div>
    );
}
