import { AnimalCategoryContainer, AnimalType, RoundImage } from "./style";

interface AnimalCategoryProps {
  type: string;
  imgSrc: string;
}

const AnimalCategory = ({type, imgSrc}: AnimalCategoryProps) => {
  return (
    <AnimalCategoryContainer>
      <RoundImage src={imgSrc}/>
      <AnimalType>{type}</AnimalType>
    </AnimalCategoryContainer>
  )
}

export default AnimalCategory