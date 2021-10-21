import React ,{useState} from 'react'
import { View, Text, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderCustom from '../../components/HeaderCustom'
import Lista from '../../components/Lista'
import ModalCustomizado from '../../components/Modals/Modal'
import { theme } from '../../global/style/theme'
import { ButtonAgendar, Container, ImageContainer, Inputs, ItensWrapper, ServerButton, TextArea, TextButtonAgendar, TextContainer, Texto, TextServer, Titulo, TituloDescricao, Wrapper } from './styled'

export default function Agendar() 
{
    const [showModal, setshowModal] = useState<boolean>(false)
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={theme.colors.secondary40}/>
            
            <HeaderCustom share/>
            <KeyboardAvoidingView>
            <ScrollView>
            <Container>
                
                <Titulo>
                    Categoriasa
                </Titulo>
                <Lista/>
                <ServerButton onPress={()=> setshowModal(true)}>
                    <ImageContainer></ImageContainer>
                    <TextServer>
                        Selecione o servidor
                    </TextServer>
                </ServerButton>

                <Wrapper>
                    <ItensWrapper>
                        <Texto>Dia e mes</Texto>
                        <Inputs placeholder='dd/mm'
                        placeholderTextColor={theme.colors.highlight}
                        />
                    </ItensWrapper>
                    <ItensWrapper>
                        <Texto>Dia e mes</Texto>
                        <Inputs placeholder='dd/mm'
                        placeholderTextColor={theme.colors.highlight}/>
                    </ItensWrapper>
                </Wrapper>
                <TextContainer>
                    <TituloDescricao>Descricao</TituloDescricao>
                    <Texto>Max 100 caracteres</Texto>
                </TextContainer>
                <TextArea
                    multiline
                    maxLength={100}
                    autoCorrect={false}
                    keyboardAppearance='dark'
                />
                <ButtonAgendar>
                    <TextButtonAgendar>
                        Agendar
                    </TextButtonAgendar>
                </ButtonAgendar>
                <ModalCustomizado visivel={showModal} closeModal={()=>setshowModal(false)}/>
            </Container>
                 </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
