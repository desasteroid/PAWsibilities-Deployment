import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Cards.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
    slide: {
      minHeight: 250,
      color: '#fff',
      padding: '10px'
    },
    slide1: {
      background: '#3F51B5',
    },
    slide2: {
      background: '#0288D1',
    },
    slide3: {
      background: '#43A047',
    },
  };

const CardQuotes = () => (
    <div className="cards-container">
  <AutoPlaySwipeableViews interval={4000} className="cards-swipeable" containerStyle={styles.containerStyle}>
    <div style={Object.assign({}, styles.slide, styles.slide1)} className="card card-body align-items-center d-flex justify-content-center" >
    “Until one has loved an animal, a part of one's soul remains unawakened.”<br/><br/><br/>~ Anatole France.
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)} className="card card-body align-items-center d-flex justify-content-center" >
    “Animals are such agreeable friends—they ask no questions; they pass no criticisms.”<br/><br/><br/>~ George Eliot
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)} className="card card-body align-items-center d-flex justify-content-center">
    “The better I get to know men, the more I find myself loving dogs.”<br/><br/><br/>~ Charles de Gaulle
    </div>
  </AutoPlaySwipeableViews>
  <AutoPlaySwipeableViews interval={4000} className="cards-swipeable" containerStyle={styles.containerStyle}>
    <div style={Object.assign({}, styles.slide, styles.slide1)} className="card card-body align-items-center d-flex justify-content-center">
    “A dog is the only thing on earth that loves you more than you love yourself.” <br/><br/><br/>~ Josh Billings
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)} className="card card-body align-items-center d-flex justify-content-center">
    “If having a soul means being able to feel love and loyalty and gratitude, then animals are better off than a lot of humans.”<br/><br/><br/>~ James Herriot
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)} className="card card-body align-items-center d-flex justify-content-center">
    “The greatness of a nation and its moral progress can be judged by the way its animals are treated.”<br/><br/><br/>~ Mahatma Gandhi
    </div>
  </AutoPlaySwipeableViews>
  <AutoPlaySwipeableViews interval={4000} className="cards-swipeable" containerStyle={styles.containerStyle}>
    <div style={Object.assign({}, styles.slide, styles.slide1)} className="card card-body align-items-center d-flex justify-content-center">
    “An animal’s eyes have the power to speak a great language.”<br/><br/><br/>~ Martin Buber
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)} className="card card-body align-items-center d-flex justify-content-center">
    “All of the animals except for man know that the principle business of life is to enjoy it.”<br/><br/><br/>~ Samuel Butler
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)} className="card card-body align-items-center d-flex justify-content-center">
    “I think I could turn and live with animals, they are so placid and self-contained, I stand and look at them long and long.”<br/><br/><br/>~ Walt Whitman
    </div>
  </AutoPlaySwipeableViews>
  </div>
);

export default CardQuotes;