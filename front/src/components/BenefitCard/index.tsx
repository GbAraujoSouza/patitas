import { BenefitCardConteiner, BenefitText } from './style';

interface BenefitCardProps {
  name: string;
}

const BenefitCard = ({ name }: BenefitCardProps) => {
  return (
    <BenefitCardConteiner>
      <img src={`/src/assets/icons/${name}.svg`} alt={`icone ${name}`} />
      <BenefitText>{name}</BenefitText>
    </BenefitCardConteiner>
  );
};

export default BenefitCard;
