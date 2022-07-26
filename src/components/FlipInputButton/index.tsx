import { useRef, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Colors from '../../constants/Colors'
import { height, width } from '../../constants/responsive'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Input } from '../Input'
import { Text } from '../Text'
import { iProps } from './types'

export const FlipInputButton = ({onPress, buttonText, arrowTextTrigger, titleWithTimer}:iProps) => { 
  const [isFlipped, setIsFlipped] = useState(false)
  const [textContent, setTextContent] = useState('')
  
  const onConfirm = () => {
    setIsFlipped(true)
  }

if (titleWithTimer) {
    setTimeout(() => { 
  
 setIsFlipped(true)
  
    }
    , titleWithTimer)
}
  


  return (
    <View style={{width:width(70), position:'absolute', zIndex:1}}>
      {!isFlipped ? <Button theme='white' onPress={onConfirm} title={buttonText} /> :
        <Input
          backgroundColor='white'
          textColor={Colors.dark}
           onChangeText={setTextContent}
        />
    
      }
      {
        textContent === `${arrowTextTrigger}` &&
        <TouchableOpacity style={{
          position: 'absolute',
          top: width(10),
          left: width(62),
          }}
        onPress={onPress}>
          
        <Icon fill='dark' name='ArrowForward' />
        </TouchableOpacity>
      }
  
 
    </View>
  )
}