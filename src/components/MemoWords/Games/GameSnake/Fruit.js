import { FruitDot } from './Fruit.styles';

const Fruit = ({ fruitCoords }) => {
  return (
    <FruitDot
      style={{
        left: `${fruitCoords[0]}%`,
        top: `${fruitCoords[1]}%`,
      }}
    />
  );
};
export default Fruit;
