import { animals } from "./animals";

function AnimalFacts() {
  const title = "";

  const showBackground = true;

  const background = (
    <img
      className="background"
      src="https://image.freepik.com/free-photo/summer-background-sea-water_64049-160.jpg"
      alt="ocean"
    />
  );

  const images = [];

  for (const animal in animals) {
    images.push(
      <img
        key={animal}
        className="animal"
        alt={animal}
        src={animals[animal].image}
        ariaLabel={animal}
        role="button"
        onClick={displayFact}
      />
    );
  }

  function displayFact(e) {
    const selectedAnimal = e.target.alt;
    const animalInfo = animals[selectedAnimal];
    const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

    const funFact = animalInfo.facts[optionIndex];
    document.getElementById("fact").innerHTML = funFact;
  }

  const animalFacts = (
    <div>
      <h1>{title || "Click an animal for a fun fact"}</h1>
      {showBackground && background}
      <p id="fact"></p>
      <div className="animals">{images}</div>
    </div>
  );

  return <div className="AnimalFacts">{animalFacts}</div>;
}

export default AnimalFacts;
