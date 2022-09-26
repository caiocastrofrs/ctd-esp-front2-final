import * as S from "../styled";
import { AssinarImage, CloseButton as Close } from "../../../assets";

type NewsModalProps = {
    image: string,
    titulo: string,
    description: string,
    changeModalStatus: () => void,
}

const NewsModal = ({image, titulo, description, changeModalStatus}: NewsModalProps) => {
    return(
        <S.ContainerModal>
        <S.CardModal>
            <S.CloseButton onClick={() => changeModalStatus()}>
                <img src={Close} alt="close-button" />
            </S.CloseButton>
            <S.ImageModal src={image} alt="news-image" />
            <S.ContainerTexto>
                <S.TituloModal>{titulo}</S.TituloModal>
                <S.DescriptionModal>{description}</S.DescriptionModal>
            </S.ContainerTexto>
        </S.CardModal>
        </S.ContainerModal>
    );
}

export default NewsModal;