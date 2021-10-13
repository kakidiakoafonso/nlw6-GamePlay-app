import React,{useState} from 'react'
import { Text } from 'react-native'
import { Card, Container, Dot, ScrollCard, Titulo } from './styled'
import { categorias } from '../../global/consts/Games'
import { theme } from '../../global/style/theme'

const tamanho = 45
export default function Lista() 
{
    const [selecionado, setselecionado] = useState('')
    return (
        <Container>
            <ScrollCard horizontal showsHorizontalScrollIndicator={false}>
                {
                   categorias.map(({Icon,id,titulo})=>(
                        <Card key={id} activeOpacity={0.6} 
                            style={{ backgroundColor: selecionado === String(id) ? theme.colors.secondary50:null }}
                            onPress={()=> setselecionado(String(id))}>
                                <Dot style={{ backgroundColor: selecionado === String(id) ? theme.colors.primary:null }}>
                                </Dot>
                            <Icon width={tamanho} height={tamanho}/>
                           <Titulo>
                               {titulo}
                           </Titulo>
                        </Card>
                    ))
                }
            </ScrollCard>
        </Container>
    )
}
