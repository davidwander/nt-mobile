import { ComponentProps } from 'react';
import { Button as GluestackButton, Text, ButtonSpinner } from '@gluestack-ui/themed';

type Props = ComponentProps<typeof GluestackButton> & {
  title: string
  variant?: "solid" | "outline"
  isLoading?: boolean
}

export function Button({ 
  title, variant = "solid",  
  isLoading = false, 
  ...rest 
}: Props) {
  return (
    <GluestackButton 
      w="$full"
      h="$14"
      bg={variant === "outline" ? "transparent" : "$violet400"}
      borderWidth={variant === "outline" ? "$1" : "$0"}
      borderColor="$purple400"
      rounded="$xl"
      $active-bg={variant === "outline" ? "$violet300" : "$purple400"}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner color="$purple600" />
      ) : (
        <Text
        color={variant === "outline" ? "$purple400" : "$white"}
        fontFamily="$heading"
        fontSize="$sm"
      >
        {title}
      </Text>
      )}
      
    </GluestackButton>
  )
}