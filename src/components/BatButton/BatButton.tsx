import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import * as clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';

import { BatTextInput } from '../BatTextInput/BatTextInpu';
import generatePass from '../../services/paswwordService';

export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerationButton(){
    let generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton(){
    clipboard.setStringAsync(pass)
  }

  return (
    <>
      <BatTextInput 
        pass={pass}
      />  

      <Pressable style={styles.containerButton} onPress={handleGenerationButton}>
        <Text style={styles.gen}>⚡ GENERATE </Text>
      </Pressable>

      <Pressable style={styles.containerButton} onPress={handleCopyButton}>
        <Text style={styles.copy}>⚡ COPY </Text>
      </Pressable>
    </>
  );
}