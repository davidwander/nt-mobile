import { ComponentProps } from 'react';
import { Input as GluestackInput, InputField } from '@gluestack-ui/themed';

type Props = ComponentProps<typeof InputField>

export function Input({...rest}: Props) {
  return (
    <GluestackInput 
      borderWidth="$0" 
      bg="$gray600" 
      px="$2" 
      h="$14" 
      borderRadius="$xl"
      $focus={{
        borderWidth: 1,
        borderColor: "$violet300",
      }}
    >
      <InputField 
        color="$white" 
        fontFamily="$body"
        placeholderTextColor="$gray300"
      {...rest} />
    </GluestackInput>

  )
}