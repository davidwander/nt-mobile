import { useState, useEffect, useRef } from 'react';
import { VStack } from '@gluestack-ui/themed';
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
          position: "absolute"
        }}
        source={images[currentIndex]}
        defaultSource={images[currentIndex]}
        alt="Carrossel de imagens"
      />
    </VStack>
  );
}
