import {
  ImageLogo,
  Container,
  SearchBar,
  SearchInput,
  CategoryContainer,
  Category,
  ButtonLinkFidelidade,
} from './style';
import { Icon } from '@iconify/react/dist/iconify.js';
import NavBar from '../../components/NavBar';

const Search = () => {
  return (
    <>
      <Container>
        <ImageLogo
          src="/logo-pequena.png"
          alt="Logo Patitas"
          paddingBottom="1rem"
        />
        <SearchBar>
          <label htmlFor="search">
            <Icon icon="uil:search" width="24" height="24" />
          </label>
          <SearchInput
            type="search"
            name="search"
            id="search"
            placeholder="Procure seu produto"
          />
        </SearchBar>
        <CategoryContainer>
          <Category>Cachorro</Category>
          <Category>Gato</Category>
          <Category>Pássaro</Category>
          <Category>Peixe</Category>
          <Category>Jardim</Category>
          <Category>Répteil</Category>
          <Category>Acessório</Category>
          <Category>Alimento</Category>
        </CategoryContainer>
        <ButtonLinkFidelidade to={'/fidelidade'}>
          Assine noss programa de fidelidade
          <Icon icon="ei:chevron-right" width="30" height="30" />
        </ButtonLinkFidelidade>
      </Container>
      <NavBar currentPage="search"></NavBar>
    </>
  );
};

export default Search;
