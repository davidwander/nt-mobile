import { VStack, Image } from '@gluestack-ui/themed';

import BackgroundImg from '@assets/photo01.png';

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray400">
      <Image 
        w="$full"
        h={624}
        source={BackgroundImg} 
        defaultSource={BackgroundImg}
        alt="Carrossel de imagens"
      />
    </VStack>
  )
}