import React from 'react'
import WelcomeItem from '/home/levin/Documents/Entwicklung/hello-world/src/WelcomeItem.js'
import '/home/levin/Documents/Entwicklung/hello-world/src/Welcome.css';
//Image Import
import pic1 from '/home/levin/Documents/Entwicklung/hello-world/src/Free Chocolate Ice Cream (1).png'
import pic2 from '/home/levin/Documents/Entwicklung/hello-world/src/Free Chocolate Ice Cream.png'

function Welcome() {
    return (
        <div className="Welcome">
            <div className="Welcome__container">
                <div className="Welcome__wrapper">
                    <ul className="Welcome__items">
                        <div className='boxiReserve'>
                        <WelcomeItem className="box1"
                        src={pic1}
                        text="Entwicklungsstart einer Android Anwendung die eine Verwaltung von 'shared spaces' ermöglichen soll. Hierbei wird Node.js als Backend eingesetzt."
                        label="Aktuelles"
                        path="/Aktuelles"
                        />
                        </div>
                        <div className='fahrtkostenrechner'>
                         <WelcomeItem className="box3"
                        src={pic2}
                        text="Fuel Cost Calculator: Eine Web Anwendung die eine Berechnung der Gesamntkosten für eine Fahrtstrecke ermöglicht."
                        label="Fahrtkostenrechner"
                        path="/Fahrtkostenrechner"
                        />
                        </div>
                    </ul> 
                </div>
            </div>
        </div>
    );
}

export default Welcome;
