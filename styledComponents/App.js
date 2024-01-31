import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Container } from './src/components/Container/Container'
import { ButtonText, CountText, Title } from './src/components/Title/Title';
import { Botao1, Botao2 } from './src/components/Button/Button';
import { Count } from './src/count/count';


export default function App() {
  const [count, setCount] = useState(0)

  const incrementar = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <Container>

      <Count>
        <CountText> {count}</CountText>
      </Count>

      <Image
        source={require('./src/assets/mm.jpg')}
        style={{ width: 200, height: 150 }}
      />
      
      <Botao1 onPress={incrementar}>
        <ButtonText>Incrementar</ButtonText>
      </Botao1>

      <Botao2 onPress={decrementar}>
        <ButtonText>Decrementar</ButtonText>
      </Botao2>


    </Container>
  );
}

