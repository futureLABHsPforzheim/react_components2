import React from 'react';
import ReactWebComponent from 'react-web-component';
import './index.css';
import App from './App';
import SpeechRecognition from './SpeechRecognition';
import registerServiceWorker from './registerServiceWorker';


ReactWebComponent.create(<App />, 'my-component');
registerServiceWorker();

ReactWebComponent.create(<SpeechRecognition />, 'speech-component-react');
registerServiceWorker();

