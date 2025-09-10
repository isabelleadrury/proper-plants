import Plants from "./Plant";
import "./plants.css";

export default function PlantGrid({ plants, addToCart }) {
  return (
    <section className="plant-grid">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <Plants key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </section>
  );
}
