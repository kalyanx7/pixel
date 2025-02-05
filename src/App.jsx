import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';  // Importing Navbar component
import Carousel from './Components/Carousel'; // Import the Carousel component
import Cards from './Components/Cards';
import Google from './Components/google';
import Both from './Components/Both';
import Both1 from './Components/Both1';
import Both2 from './Components/Both2';
import Video from './Components/video';
import Footer from './Components/footer';
import CardSection from './Components/CardSection';
import Contact from './Components/Contact';
import Carousel1 from './Components/Carousel1';
import Grid from './Components/Grid';



  
const App = () => {
  return (
    <div className="App">
      <Navbar />
     <Carousel />
      <h1 style={{ marginTop: "30px", color: "black" }}>GET YOUR GOOGLE PIXEL</h1>
      <Cards />
      <Google />
      <Both />
      <Both1 />
      <Both2 />
       <CardSection /> 
       <Grid />
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playwrite+AU+SA:wght@100..400&display=swap');
        `}
      </style>
      <h1 style={{ color: "black", fontSize: "100px", fontFamily: "Playwrite AU SA, sans-serif" }}>
        AI inside
      </h1>
      <Video />
      <Carousel1 />
      
     <Contact />

      <Footer />
      
      
    </div>
  );
};

export default App;
