import { useState, useEffect, useRef } from 'react';
import { Center, VStack, Image, Heading, Text } from '@gluestack-ui/themed';
import { Animated } from 'react-native';

// Imagens do carrossel
import Image1 from '@assets/photo01.png';
import Image2 from '@assets/photo02.png';
import Image3 from '@assets/photo03.png';
import Image4 from '@assets/photo04.png';
import Image5 from '@assets/photo05.png';
import Image6 from '@assets/photo06.png';
import Image7 from '@assets/photo07.png';
import Image8 from '@assets/photo08.png';
import Image9 from '@assets/photo09.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];

export function SignIn() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 800, 
        useNativeDriver: true,
      }).start(() => {
       
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800, 
          useNativeDriver: true,
        }).start();
      });
    }, 8000); 

    return () => clearInterval(interval);
  }, [fadeAnim]);

  return (
    <VStack flex={1} bg="$gray400">
      <Animated.Image
        style={{ 
          width: '100%', 
          height: 550, 
          opacity: fadeAnim,
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.993)" 
        }}
        source={images[currentIndex]}
        defaultSource={images[currentIndex]}
        alt="Carrossel de imagens"
      />

      <VStack flex={1} px="$10" pb="$16">
        <Center my="$24">
          <Image 
            source={
              require("../assets/nt-logo.png")}
              alt="Logo"
              mt={-200}
              mb={-30}
              w={400} 
              h={400}
          />
        </Center>

        <Center gap="$2">
          <Heading color="$purple400">Acessar conta</Heading>

          <Input 
            placeholder="E-mail" 
            keyboardType="email-address" 
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>

        <Center 
          flex={1}
          justifyContent="flex-end"
          mt="$4"
        >
          <Text
            color="$violet300"
            fontSize="$sm"
            mb="$3"
            fontFamily="$body"
          >
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outline" />
        </Center>
      </VStack>
    </VStack>
  );
}
