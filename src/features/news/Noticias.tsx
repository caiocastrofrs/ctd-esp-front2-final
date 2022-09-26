import { useEffect, useState } from "react";
import { AssinarImage, CloseButton as Close } from "../../assets";
import { obterNoticias } from "./fakeRest";
import * as S from "./styled";
import { firstCharToUpperCase } from "../../utils";
import NewsCard from "./NewsCard/NewsCard";
import NewsModalPremium from "./NewsModalPremium/NewsModalPremium";
import NewsModal from "./NewsModal/NewsModal";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  description: string;
  date: number | string;
  premium: boolean;
  image: string;
  descriptionCurto?: string;
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    const obterInformacoes = async () => {
      const resposta = await obterNoticias();

      const data = resposta.map((noticia) => {
        const titulo = firstCharToUpperCase(noticia.titulo);

        const hora = new Date();
        const minutosDecorrido = Math.floor(
          (hora.getTime() - noticia.date.getTime()) / 60000
        );

        return {
          id: noticia.id,
          titulo,
          description: noticia.description,
          date: `Faz ${minutosDecorrido} minutos`,
          premium: noticia.premium,
          image: noticia.image,
          descriptionCurto: noticia.description.substring(0, 100),
        };
      });

      setNoticias(data);
    };

    obterInformacoes();
  }, []);

  const changeModalStatus = (n: INoticiasNormalizadas | null) => setModal(n);

  return (
    <S.ContainerNoticias>
      <S.TituloNoticias>Noticias dos Simpsons</S.TituloNoticias>
      <S.ListaNoticias>
        {noticias.map((noticia) => (
          <NewsCard 
            key={noticia.id}
            image={noticia.image}
            titulo={noticia.titulo}
            date={noticia.date}
            descriptionCurto={noticia.descriptionCurto}
            changeModalStatus={() => changeModalStatus(noticia)}
          />
        ))}

        {modal ? (
          modal.premium ? (
            <NewsModalPremium 
              changeModalStatus={() => changeModalStatus(null)}
            />
          ) : (
            <NewsModal 
            image={modal.image}
            titulo={modal.titulo}
            description={modal.description}
            changeModalStatus={() => changeModalStatus(null)}
            />
          )
        ) : null}
      </S.ListaNoticias>
    </S.ContainerNoticias>
  );
};

export default Noticias;
