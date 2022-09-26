import * as S from "../styled";

type NewsCardProps = {
    image: string,
    titulo: string,
    date: string | number,
    descriptionCurto: string | undefined,
    changeModalStatus: () => void,
}

const NewsCard = ({image, titulo, date, descriptionCurto, changeModalStatus}: NewsCardProps) => {

    return(
        <S.CardNoticia>
            <S.ImageCardNoticia src={image} />
            <S.TituloCardNoticia>{titulo}</S.TituloCardNoticia>
            <S.DateCardNoticia>{date}</S.DateCardNoticia>
            <S.DescriptionCardNoticia>
              {descriptionCurto}
            </S.DescriptionCardNoticia>
            <S.BotaoLeitura onClick={changeModalStatus}>Ver más</S.BotaoLeitura>
        </S.CardNoticia>
    )

}

export default NewsCard;