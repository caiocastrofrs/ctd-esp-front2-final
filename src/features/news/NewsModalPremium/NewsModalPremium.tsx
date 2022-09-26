import * as S from "../styled";
import { AssinarImage, CloseButton as Close } from "../../../assets";

type NewsModalPremiumProps = {
    changeModalStatus: () => void,
}

const NewsModal = ({changeModalStatus}: NewsModalPremiumProps) => {


    return(
        <S.ContainerModal>
            <S.CardModal>
            <S.CloseButton onClick={() => changeModalStatus()}>
                <img src={Close} alt="close-button" />
            </S.CloseButton>
            <S.ImageModal src={AssinarImage} alt="mr-burns-excelent" />
            <S.ContainerTexto>
                <S.TituloModal>Assine a nossa newsletter</S.TituloModal>
                <S.DescriptionModal>
                Assine nossa newsletter e receba novidades de nossos
                personagens favoritos
                </S.DescriptionModal>
                <S.BotaoAssinar
                onClick={() =>
                    setTimeout(() => {
                    alert("Suscripto!");
                    changeModalStatus();
                    }, 1000)
                }
                >
                Assinar
                </S.BotaoAssinar>
            </S.ContainerTexto>
            </S.CardModal>
        </S.ContainerModal>
    )
};

export default NewsModal;