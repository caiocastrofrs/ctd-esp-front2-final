import { useState } from "react";
import { NomesSimpsons, INFO_SIMPSONS } from "./constants";
import * as S from './styled';

const Bio = () => {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

  const onClick: (nome: NomesSimpsons) => void = (nome) =>
    setBioActive(INFO_SIMPSONS[nome]);

  const criarBotoes = () => {
    return Object.keys(INFO_SIMPSONS).map((nome: string) => (
      bioActive.id === nome ?
      <S.botaoBioActive 
      key={nome as string}
      onClick={() => onClick(nome as NomesSimpsons)}>
        {nome}
      </S.botaoBioActive>
      :
      <S.botaoBioInactive 
      key={nome as string}
      onClick={() => onClick(nome as NomesSimpsons)}>
        {nome}
      </S.botaoBioInactive>
    ));
  };

  return (
    <S.BioContainer>
      <S.containerBotoes>{criarBotoes()}</S.containerBotoes>
      <S.genericWrapper>
        <S.genericWrapper>
          <S.bioImage 
            src={bioActive.image}
            alt={bioActive.nome}
          />
        </S.genericWrapper>
        <S.genericWrapper>
          <S.bioNome>{bioActive.nome}</S.bioNome>
          <S.bioDescription>{bioActive.description}</S.bioDescription>
        </S.genericWrapper>
      </S.genericWrapper>
    </S.BioContainer>
  );
};

export default Bio;
