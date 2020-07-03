import React from 'react';
import logo from './logo.svg';
import './App.css';

import { CardSlide } from 'react-card-slide/dist';

function App() {
  return (
    <CardSlide items={[{
          cardName: 'About Me',
          cardDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          showBodyImage: true,
          bodyImage: 'https://via.placeholder.com/950x350'
        },{
          cardName: 'Card Name 2',
          cardDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          showBodyImage: true,
          bodyImage: 'https://via.placeholder.com/950x350'
        },{
          cardName: 'Carde Name 3',
          cardDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          showBodyImage: true,
          bodyImage: 'https://via.placeholder.com/950x350'
        }]}/>
  );
}

export default App;
