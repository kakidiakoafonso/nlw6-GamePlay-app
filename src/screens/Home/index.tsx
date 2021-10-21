import { useNavigation } from '@react-navigation/core'
import React,{useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import HomeModal from '../../components/HomeModal'
import Lista from '../../components/Lista'
import Listheader from '../../components/ListHeader'
import Partidas from '../../components/Partidas'
import { Container, ListContainer, Separador } from './styled'


const dados = [1,2,3,4,5]
export default function Home() 
{
    const [showLogoutModal, setshowLogoutModal] = useState<boolean>(false)
    const nav = useNavigation()
    const handleClick = () => 
    {
        console.log('AAA');
        nav.navigate('Detalhe')
        
    }
    const handleLogOutClick = () => 
    {
        setshowLogoutModal(!showLogoutModal)    
    }
    return (
        <SafeAreaView style={{ flex:1}}>
        
        <Container>
            <Header handleClick={handleLogOutClick}/>
            <Lista/>
            <Listheader qtd={6} titulo="Partidas agendadas"/>

            <ListContainer>
                <FlatList data={dados}
                ItemSeparatorComponent={()=> <Separador/>}
                    keyExtractor={(item)=> String(item)} 
                    renderItem={()=><Partidas handleClick={handleClick}/>}
                />
            </ListContainer>
        </Container>
        <HomeModal handleClick={handleLogOutClick} visivel={showLogoutModal}/>
        </SafeAreaView>
    )
}
