import { useNavigation } from '@react-navigation/core'
import { Icon } from 'native-base'
import React from 'react'
import { View, Text, TouchableOpacity,ViewProps ,Alert,Share} from 'react-native'
import { theme } from '../../global/style/theme'

type Props = ViewProps & {
    share?:boolean
}
export default function HeaderCustom({share}:Props) 
{
    const nav = useNavigation()


    const onShare = async () => 
    {
        try {
          const result = await Share.share({
            message:
              'GamePlay | Partilhar o link da Discord',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          console.log(error.message);
        }
    }

    return (
        <View style={{ backgroundColor:theme.colors.secondary40,flexDirection:'row',
            height: 50,justifyContent:'space-between',paddingHorizontal:10,alignItems:'center'}}>
           <View style={{ width:'67%',flexDirection:'row',justifyContent:'space-between' }}>
           <TouchableOpacity onPress={()=>nav.goBack()}>
                <Icon type="Feather" name="arrow-left"  style={{ color:theme.colors.heading }}/>
           </TouchableOpacity>
            <Text style={{ color:theme.colors.heading,
            fontWeight:'bold',fontSize:16 }}>
                Agendar partida
            </Text>
           </View>
           { share && 
                <TouchableOpacity onPress={()=> onShare()}>
                     <Icon type="Entypo" name="share"  style={{ color:theme.colors.heading }}/>
                </TouchableOpacity>
            }
        </View>
    )
}
