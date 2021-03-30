import React from 'react'
import '/home/levin/Documents/Entwicklung/hello-world/src/Projects.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pic1 from '/home/levin/Documents/Entwicklung/hello-world/src/homepage.jpg';
import pic2 from '/home/levin/Documents/Entwicklung/hello-world/src/android.jpg';

const useStylesReactP = makeStyles({
        rootReactP: {
          maxWidth: 1300,
        },
        mediaReactP: {
          height: 420,
        },
      });
      

const useStylesAP = makeStyles({
        rootAP: {
          maxWidth: 1300,
        },
        mediaAP: {
          height: 420,
        },
      });

      export default function MediaCard() {
        const classesReactP = useStylesReactP();
        const classesAP = useStylesAP();

    return (
        <>
        <div className='cardReactP'>
      <Card className={classesReactP.rootReactP}>
        <CardActionArea>
          <CardMedia
            className={classesReactP.mediaReactP}
            image={pic1}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              React Web Application
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <ul className='auflistung'>
                  <ul><b>Funktionsumfang</b></ul>
                  <li>Übersicht über aktuelle Projekte</li>
                  <li>Fahrtkostenrechner mit Kartendarstellung</li>
                  <li>"About Me" Seite</li>
                  <br></br>
                  <ul><b>Komponenten</b></ul>
                  <li>Basis: React</li>
                  <li>UI Elemente: Material UI</li>
                  <li>API: OpenCage Geocoder, Openrouteservice, Leaflet (Openstreetmap)</li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      <div className='cardAP'>
      <Card className={classesAP.rootAP}>
        <CardActionArea>
          <CardMedia
            className={classesAP.mediaAP}
            image={pic2}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Android Application with Node.js Backend
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <ul className='auflistung'>
                  <ul><b>Funktionsumfang</b></ul>
                  <li>Authentifizierungsprozess (Login/Logout)</li>
                  <li>Kalender erstellen</li>
                  <li>Eingeloggte Nutzer können Termine eines gewählten Kalenders ansehen</li>
                  <li>Eingeloggte Nutzer können Termine zu innerhalb eines Kalenders erstellen</li>
                  <br></br>
                  <ul><b>Komponenten</b></ul>
                  <li>Android Anwendung (Java)</li>
                  <li>Backend (Node.js)</li>
                  <li>UI: Material UI</li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      </>
    )
}

