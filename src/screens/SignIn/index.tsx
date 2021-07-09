import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar
} from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.container}>
      {/* Mudamos nossa status bar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* Chamamos uma imagem que já tem seu tipo definido no @types */}
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {/* Dar espaçamento no react native */}
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus jogos {`\n`}favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com o discord"
          activeOpacity={0.7}
        />

      </View>
    </View>
  )
}