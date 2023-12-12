import './App.css';
import OpenAI from "openai";
import { AIConnect } from './openai-test.js'; 
import TableComponent from './Components/table.jsx';
import SnowEffect from './Components/snowEffect';
// export const key = process.env['OPENAI_API_KEY'];

const openai = new OpenAI(
  {apiKey: 'UPDATE ME',
dangerouslyAllowBrowser: true}
);

const response = await AIConnect(openai, 'come up with a winter/christmas themed name for a helpful service', .9);

  // Sample data
  const data = [
    {
      title: "The Bodily Indignities of the Space Life",
      short_description: "This article explores the challenges that the human body faces in space, including variable gravity and radiation exposure. It discusses the limited knowledge we have due to small sample sizes and the need for more research to ensure the safety of future space travelers.",
      full_description: "As an incubator of life, Earth has a lot going for it, something we often fail to appreciate fully from within its nurturing bounds. Merely sending probes and rovers to the moon and Mars won't do. For various reasons, adventure, apocalypse, commerce, we insist upon taking our corporeal selves off world too. Multiple private companies have announced plans to put hotels in space soon. NASA is aiming to threed print lunar neighborhoods within a couple of decades. And while it will probably take longer than that to build and populate an out Coast on Mars, preparations are being made. This summer, 4 NASA crew members began a 378 day stay in simulated Martian housing at the Johnson Space Center in Houston. When you look at the renderings of these cozy dwellings, it's easy to lose sight of how hostile space is to Earthlings. As a reminder, consider what would happen if you found yourself in low Earth orbit or on Mars or the Moon without a space suit on. You would pass out from a lack of oxygen within a matter of seconds, a condition known as hypoxia and die soon thereafter. In the brief meantime all the gases inside your body including any air still in your lungs would expand in the absence of external pressure. Depressurization would also cause your internal fluids to bubble. Not because they're heating up, but because they are transmogrifying into their gaseous state. The temperature wouldn't be much of a problem, at least, even though thermometers in low Earth orbit produce readings from minus 85 degrees to 257°F depending on whether they are in shadow or in light. Space as a near vacuum has very little mass to conduct heat to or away from you, so you are not likely to feel instantly hot or cold. While hypoxia is potentially a real threat, should your space vessel or extraterrestrial habitat leak, it's a manageable one. Assuming you haven't leaped naked out of your space capsule or off-world dwelling. But 2 other major challenges confront our fragile bodies when we leave our planet, neither of which has been entirely solved yet. Even indoors. Variable gravity. And radiation. Gravity is determined by the mass of objects and their distance from one another. Because Earth is so big, it is impossible, while on it, to escape its gravity for any serious length of time. As a result, we don't know very much about what our lives would be like without or under some diminished influence of this omnipresent attraction. On the moon and on Mars, which are smaller than our world, the gravitational tug will be much less, a sixth and a third respectively of what it is here. Conversely, radiation exposure intensifies with elevation because there's less atmosphere above you to block it. And to incur a much larger dose if you get beyond the protective bubble of Earth's ozone and magnetosphere, the magnetic field that stretches roughly 40,000 miles out at its most compressed point. The solar and galactic radiation that washes over Mars, which at its closest is 34 million miles away, will potentially be 700 times as great as what passes through our magnetic defenses. Space travelers beyond low Earth orbit will also be bombarded with high-energy atomic nuclei from exploding stars throughout the galaxy, which are normally deflected by the magnetosphere from reaching the surface of our planet. Those particles are so heavy and moving so fast that they penetrate spaceships, space suits, and skin, banging into other particles in their path and damaging any attendant cells in ways researchers are only beginning to understand. So far, most of what we know about the effects on the human body of these threats comes from astronauts in low Earth orbit. And because safety is a paramount concern, we don't send many of them up there. And we don't let them stay for long when we do. 6 months is the average length of a visit to the International Space Station and fewer than 300 people have made the 250 mile voyage. While that collective experience is enough to have taught us how the body responds when gravity's pull is substantially reduced, The magnetosphere still shields the ISS and only the 24 astronauts who flew in the Apollo program have gone beyond it. The moon orbits an average of more than 238,000 miles away. Though these 2 dozen astronauts spent little more than a week at a time without its protection, They have died of cardiovascular disease at a rate 4 to 5 times as high as that of their counterparts who stayed in low Earth orbit or never entered orbit at all, which suggests that exposure to cosmic radiation might have damaged their arteries, veins, and capillaries. We can't send people to Mars or to live on the moon until we can be reasonably confident that they'll survive getting and residing there. But the space-based medical science needed to make that possible has been hindered by small sample sizes that aren't representative of the general population. All of the Apollo astronauts were white men born between 1,928 and 1936. Space tourism, though, promises to offer opportunities to study the effects of radiation and low gravity on a much broader demographic than really well selected super people, as Doree Donnaville, the director of the Translational Research Institute for Space Health. Trish at the Baylor College of Medicine describes those who have historically qualified to leave the planet. Old, young, pre-existing health conditions, we are starting to gather a knowledge base that in the future will be essential even for NASA. Doneville told me. Because we have to learn about the edge cases to really understand what is going on in our bodies to adapt to a hostile environment. You don't learn as much from people who are healthy. It's when people get sick that you understand how people get sick and how to prevent it. Epidemiologists face the same predicament on Earth. Before they can figure out how to protect the population, they must wait for harm to come to enough people to expose the causes. Less rigorous medical screening allows more tourists to reach space, the chances increase significantly that someone will get hurt or have a health emergency there. Aerospace Medicine is one of 3 specialties certified by the American Board of Preventive Medicine because surgeons for a given flight",
      tags: ["space", "human body", "gravity", "radiation", "astronauts", "Mars", "moon", "NASA"],
      dates: []
    },
    {
      title: "Argentina's New President and His Radical Economic Plan",
      short_description: "This episode discusses the election of Argentina's new president, Javier Millay, and his radical plan to overhaul the country's economy.",
      full_description: "In this episode, the hosts discuss the surprising election of Javier Millay as Argentina's new president. Millay, a right-wing populist with controversial views, has promised a libertarian overhaul of the government and a drastic shrinkage of its size. He plans to privatize state-owned companies and reshape the Argentine government according to his libertarian ideology. The episode also highlights the economic crisis in Argentina, with skyrocketing inflation and a devalued currency. The hosts explore the reasons behind the desperation of Argentines and their desire for change. Overall, the episode provides insights into the political and economic situation in Argentina and the potential impact of Millay's radical economic plan.",
      tags: ["Argentina", "president", "economic plan", "libertarian", "populist", "inflation", "currency devaluation", "privatization", "government overhaul"],
      dates: ["December eleventh", "inauguration"]
    },{
      title: "Ukraine's Critical Point in the War",
      short_description: "The war in Ukraine has reached a critical point as the counteroffensive fails to achieve its objectives. The US funding for Ukraine hangs in the balance, putting the safety of democracy and the future of the war at stake.",
      full_description: "Democracy is at stake as states pass voter suppression laws that target black communities. With an on-the-ground presence in all 50 states, DC and Puerto Rico, the ACLU is taking these attacks head-on. Ukraine's president, Vladimir Zelensky, has made a rare trip to Washington this week, pleading his case for American military aid. The counteroffensive in Ukraine has failed to take back major territory from Russia, and the Ukrainian troops were stretched too thin. Russia improved its defenses and used drones to gain an advantage. The US has poured billions of dollars into Ukraine, but the funding is now in doubt. The Ukrainians need to adapt their war strategy to turn the tide in their favor.",
      tags: ["Ukraine", "war", "counteroffensive", "Russia", "US funding", "democracy", "voter suppression", "ACLU"],
      dates: ["December 12", "2 years ago", "last week"]
    },
    // Add more data objects as needed
  ];

function App() {
  return (
    <div className="App app-background">
      
      <h1>{response}</h1>
      <TableComponent data={data} />
      <SnowEffect />
    </div>
  );
}

export default App;
