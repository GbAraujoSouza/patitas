import { BackIconWrapper, BackLink } from "./style";
import { Icon } from "@iconify/react/dist/iconify.js";

interface BackButtonProps {
  to: string;
}

const BackButton = ({to}: BackButtonProps) => {
  return (
    <BackLink to={to}>
      <BackIconWrapper>
        <Icon icon="tabler:chevron-left" width="30" height="30" />
      </BackIconWrapper>
      <span>Voltar</span>
    </BackLink>
  );
}

export default BackButton