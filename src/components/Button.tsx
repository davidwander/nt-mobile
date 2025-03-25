import { ComponentProps } from 'react';
import { Button as GluestackButton, Text, ButtonSpinner } from '@gluestack-ui/themed';

type Props = ComponentProps<typeof GluestackButton> & {
  title: string
  isLoading?: boolean
}

export function Button({ title,  isLoading, ...rest }: Props) {
  return (
    <GluestackButton 
      w="$full"
      h="$14"
      bg="$violet400"
      borderWidth="$0"
      borderColor="$purple400"
      rounded="$xl"
      $active-bg="$purple400"
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner color="$purple600" />
      ) : (
        <Text
        color="$white"
        fontFamily="$heading"
        fontSize="$sm"
      >
        {title}
      </Text>
      )}
      
    </GluestackButton>
  )
}