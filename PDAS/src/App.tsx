import './index.css';
import ProfileCard from "./ProfileCard";

// to import images create index.d.ts in the images diretory
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


const App = () => {
  return (
    <>
      <div className='hero'>
        <p>Personal Digital Assitants</p>
      </div>

      <div className="container">
        <ProfileCard 
          title="Alexa" 
          handle="@alexa99" 
          image={AlexaImage}
          description="Alexa was created by Amazon and helps you to buy things."
        />
        <ProfileCard  
          title="Cortana" 
          handle="@cortana32" 
          image={CortanaImage}
          description="Cortana was created by Microsoft. Who knows what it does?"
          />
        <ProfileCard 
          title="Siri" 
          handle="@siri01" 
          image={SiriImage}
          description="Siri was made by Apple and is being phased out."
        />
      </div>
    </>
  )
}

export default App;