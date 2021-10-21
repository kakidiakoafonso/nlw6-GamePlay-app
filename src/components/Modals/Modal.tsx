import React from 'react'
import { Modal,ModalProps } from 'react-native'
import { Servidores,ServerType } from '../../data/servers'
import { Separador } from '../../screens/Home/styled'
import ServerItens from '../ServerItens/ServerItens'
import { Container, Flex,FlatList, Close, Line } from './styled'


type Props = ModalProps & {
visivel?: boolean
closeModal: ()=>void
}
export default function ModalServers({visivel=false,closeModal}:Props) 
{
    return (
        <Modal visible={visivel} statusBarTranslucent transparent>
            <Flex>
            <Close onPress={()=>closeModal()}/>
            <Container>
                <Line/>
                <FlatList
                    data={Servidores}
                    keyExtractor={( item:ServerType )=> String(item.id)}
                    renderItem={({item})=> <ServerItens 
                        id={item.id} img={item.img} nome={item.nome} slogan={item.slogan}
                        />}
                    ItemSeparatorComponent={()=><Separador/>}
                />
            </Container>
            </Flex>
        </Modal>
    )
}
