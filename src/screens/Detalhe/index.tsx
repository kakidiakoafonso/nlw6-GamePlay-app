import React ,{useState} from 'react'
import { View, Text, StatusBar, FlatList, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon'
import HeaderCustom from '../../components/HeaderCustom'
import Listheader from '../../components/ListHeader'
import Players from '../../components/Players'
import { Jogadores,JogadoresProps } from '../../data/Jogadores'
import { theme } from '../../global/style/theme'
import { Separador } from '../Home/styled'
import { BannerContainer, BannerContentText, BannerText, Container, ScrollContainer,  } from './styled'


const Infos = 
[
    {id:1,nome:"",disponibilida:1},
    {id:2,nome:"",disponibilida:1},
    {id:3,nome:"",disponibilida:1},
]
export default function Detalhe() 
{
    const img:string = 'https://m.media-amazon.com/images/M/MV5BMWQ0ODdkOGMtZjYxZC00NjE2LTg3ZWUtNjY3YmQ5ZWI1ZDM2XkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg'
    const [showModal, setshowModal] = useState<boolean>(false)
    
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={theme.colors.secondary40}/>
            
            <HeaderCustom share/>

            <Container>
                <BannerContainer source={{ uri:img  }}
                    resizeMode='stretch'
                >

                <BannerText>
                    League of legends
                </BannerText>

                <BannerContentText>
                    Another fundamental part of creating programs in 
                    JavaScript for webpages and servers alike is working 
                    with textual data. As in other languages,
                </BannerContentText>  

                </BannerContainer>
                <Listheader titulo='Jogadores' qtd={5}/>
                
                {/* <FlatList
                style={{ width:'100%' }}
                    data={Jogadores}
                    keyExtractor={(item)=>String(item)}
                    ItemSeparatorComponent={()=> <Separador/>}
                    renderItem={(item:JogadoresProps)=><Players Dados={item} />}
                />  */}
                
                <ScrollContainer>
                <ScrollView style={{ width:'100%' }}>
                    <Players nome='Kakidiako Afonso' disponibilidade={1}/>
                    <Players nome='Albertina Kiavuvu' disponibilidade={2}/>
                    <Players nome='Andre Pedro' disponibilidade={3}/>
                    <Players nome='Andre Pedro' disponibilidade={3}/>
                    <Players nome='Andre Pedro' disponibilidade={3}/>
                    <Players nome='Andre Pedro' disponibilidade={3}/>
                </ScrollView>
                </ScrollContainer>

                <ButtonIcon texto='Entrar no servidor da discord'/>
            </Container>

        </SafeAreaView>
    )
}
