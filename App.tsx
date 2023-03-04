import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from "react";
import PopupModal from "./components/PopupModal"

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const toggleModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Alert Dialog Popup Example'}</Text>
      <PopupModal
        visible={modalIsVisible}
        title={"Alert Dialog example"}
        message={"This way you can customize Popup Modal"}
        onCancel={() => toggleModal()}
        onConfirm={() => toggleModal()}
        onDismiss={() => toggleModal()}
      />
      <Button
        title="Show dialog Modal"
        onPress={toggleModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    padding: 16,
  }
});
