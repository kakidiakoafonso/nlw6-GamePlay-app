import React from 'react'
import { Modal } from 'react-native'
import { ButtomContainer, Button, ButtonText, Close,
     Container, Flex, GameText, RedText, 
     WarningContainer, WarningText, ButtonNo } from './styled'

type Props = {
    visivel: boolean,
    handleClick:()=>void
}
export default function HomeModal({handleClick,visivel}:Props) 
{
   
    return (
        <Modal visible={visivel} statusBarTranslucent 
            transparent animationType='slide' >
            <Flex>
                <Close onPress={()=>handleClick()}/>
                <Container>
                    <WarningContainer>
                        <WarningText>
                            Deseja sair do ,
                        </WarningText>
                        <GameText>Game</GameText>
                        <RedText>Play</RedText>
                        <GameText>?</GameText>
                    </WarningContainer>
                    <ButtomContainer>
                        <ButtonNo onPress={()=>handleClick()}>
                            <ButtonText>Nao</ButtonText>
                        </ButtonNo>
                        <Button onPress={()=>handleClick()}>
                            <ButtonText>Sim</ButtonText>
                        </Button>
                    </ButtomContainer>
                </Container>
            </Flex>
        </Modal>
    )
}
