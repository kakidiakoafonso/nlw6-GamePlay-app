import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import Lista from '../../components/Lista'
import Listheader from '../../components/ListHeader'
import Partidas from '../../components/Partidas'
import { Container, ListContainer, Separador } from './styled'


const dados = [1,2,3,4,5]
export default function Home() {
    return (
        <SafeAreaView style={{ flex:1}}>
        
        <Container>
            <Header/>
            <Lista/>
            <Listheader/>

            <ListContainer>
                <FlatList data={dados}
                ItemSeparatorComponent={()=> <Separador/>}
                    keyExtractor={(item)=> String(item)} 
                    renderItem={()=><Partidas/>}
                />
            </ListContainer>
        </Container>

        </SafeAreaView>
    )
}
