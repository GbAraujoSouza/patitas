import { BenefitCardConteiner, BenefitText } from './style';

interface BenefitCardProps {
  name: string;
  imgSrc: string;
}

const BenefitCard = ({ name, imgSrc }: BenefitCardProps) => {
  return (
    <BenefitCardConteiner>
      <img src={imgSrc} alt={`icone ${name}`} />
      <BenefitText>{name}</BenefitText>
    </BenefitCardConteiner>
  );
};

export default BenefitCard;
