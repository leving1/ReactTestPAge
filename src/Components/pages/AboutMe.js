import React from 'react'
import '/home/levin/Documents/Entwicklung/hello-world/src/AboutMe.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pic1 from '/home/levin/Documents/Entwicklung/hello-world/src/Bewerbungsfoto.png';
import pic2 from '/home/levin/Documents/Entwicklung/hello-world/src/Edu.jpg';
import pic3 from '/home/levin/Documents/Entwicklung/hello-world/src/dev.png'
import pic4 from '/home/levin/Documents/Entwicklung/hello-world/src/work.jpg';

const useStylesInt = makeStyles({
    rootInt: {
      maxWidth: 345,
    },
    mediaInt: {
      height: 480,
    },
  });
  

const useStylesEdu = makeStyles({
  rootEdu: {
    maxWidth: 600,
  },
  mediaEdu: {
    height: 150,
  },
});

const useStylesProj = makeStyles({
  rootProj: {
    maxWidth: 600,
  },
  mediaProj: {
    height: 200,
  },
});

const useStylesCom = makeStyles({
  rootCom: {
    maxWidth: 600,
  },
  mediaCom: {
    height: 150,
  },
});

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

  export default function MediaCard() {
    const classesInt = useStylesInt();
    const classesEdu = useStylesEdu();
    const classesProj = useStylesProj();
    const classesCom = useStylesCom();
  
    return (
        <>
        <div className='cardInt'>
      <Card className={classesInt.rootInt}>
        <CardActionArea>
          <CardMedia
            className={classesInt.mediaInt}
            image={pic1}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Levin Gorgs
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <ul className='auflistung'>
                  <ul><b>Aktuell</b></ul>
                  <li>Masterstudent @ Universität Mannheim</li>
                  <li>Entwicklung iRserve Android Anwendung</li>
                  <br></br>
                  <ul><b>Softwareentwicklung</b></ul>
                  <li>Java Entwicklung</li>
                  <li>Node.js Entwicklung</li>
                  <li>React Native Anwendungsentwicklung</li>
                  <li>Python Entwicklung (Tkinter)</li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => openInNewTab('https://www.linkedin.com/in/levin-gorgs/')} >
            LinkedIn
          </Button>
        </CardActions>
      </Card>
      </div>
      <div className='cv'>
      </div>
      <div className='cardEdu'>
      <Card className={classesEdu.rootEdu}>
        <CardActionArea>
          <CardMedia
            className={classesEdu.mediaEdu}
            image={pic2}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Bildung
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <ul className='auflistung'>
                  <ul><b>Aktuell</b></ul>
                  <li>Master @ Universiät Mannheim Economic Computer Science</li>
                  <br></br>
                  <ul><b>Bachelor of Science</b></ul>
                  <li>Bachelor @ Hochschule Furtwangen Economic Computer Science</li>
                  <br></br>
                  <ul><b>Abitur</b></ul>
                  <li>Wirtschaftsgymnasium Lörrach</li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      <div className='cv'>
      </div>
      <div className='cardProj'>
      <Card className={classesProj.rootProj}>
        <CardActionArea>
          <CardMedia
            className={classesProj.mediaProj}
            image={pic3}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Projekte
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <ul className='auflistung'>
                  <ul><b>Aktuell</b></ul>
                  <li>iReserve MERN Stack Application:</li>
                  Eine Anwendung die eine flexible Planung eines Ortes zulässt. Nutzer Authentifizeren sich durch ein Login und greifen auf einen gemeinsamen Kalender zu. Hier können dann Termien gebucht werden, die jeweils von allen anderen Nutzern gesehen werden.
                  <br></br>
                  <br></br>
                  <ul><b>React Hompage</b></ul>
                  <li>Umfasst eine Seite auf der aktuelle sowie bisherige Projekte detailiert vorgestellt werden. Weiterhin wurde diese "Aboute Me" Seite implementiert.</li>
                  <br></br>
                  <ul><b>Fahrtkostechrechner (React)</b></ul>
                  <li>Ermöglicht es Anwender die Kosten pro KM für eine Route zu berechnen. Die Route wird anschließend Grafisch dargestellt, sowie die Gesamntkosten angeben.</li>
                  <br></br>
                  <ul><b>Fahrtkostechrechner (Python Tkinter)</b></ul>
                  <li>Prototyp des Fahrtkostenrechners, hier wurden die verschiedenen APIs implementiert und getestet. Weiterhin wurde eine UI mit Tkinter implementiert.</li>
                  <br></br>
                  <ul><b>Reishunger.de React-Native Anwendung</b></ul>
                  <li>Entwicklung eines MVP für Reishunger.de, die Entwicklung fand im Rahmen eines Studierendenprojektes statt. Die Anwendung wird unter dem Reiter "Projects" näher vorgestellt.</li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      <div className='cardCom'>
      <Card className={classesCom.rootCom}>
        <CardActionArea>
          <CardMedia
            className={classesCom.mediaCom}
            image={pic4}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Berufserfahrung
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <ul className='auflistung'>
                  <ul><b>Star Cooperation GmbH: Werkstudent Business Intelligence</b></ul>
                  <li>PowerBI Berichtserstellung</li>
                  <li>ETL Tasks</li>
                  <li>Unterstützung bei Kundenprojekten</li>
                  <br></br>
                  <ul><b>Daimler AG: Praktikant Supply Chain Management</b></ul>
                  <li>Priorisierung WLTP Fahrzeuge</li>
                  <li>Unterstützung der WLTP Taksforce</li>
                  <li>Analyse/Auswertung Bauteile/Baugruppen</li>
                  <li>VBA Entwicklung</li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      </>
    );
  }