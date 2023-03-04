import React from 'react';
import {Button, Modal, StyleProp, StyleSheet, Text, TouchableWithoutFeedback, View, ViewStyle} from 'react-native';

interface ModalProps {
  visible: boolean,
  title: string,
  message: string,
  onConfirm: () => void,
  onCancel: () => void,
  onDismiss: () => void,
  contentStyle?: StyleProp<ViewStyle>;
}

function PopupModal(props: ModalProps) {
  const {
    title,
    message,
    visible,
    onCancel,
    onConfirm,
    onDismiss,
    contentStyle
  } = props;
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={() => onDismiss()}>
        <View style={[styles.modalContainer, contentStyle]}>
          {/* Dialog view start here*/}
          <View style={styles.dialogContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.messageText}>{message}</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title={"Confirm"} onPress={onConfirm}/>
              </View>
              <View style={styles.button}>
                <Button title={"Cancel"} onPress={onCancel}/>
              </View>
            </View>
          </View>
          {/* Dialog view end here*/}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  dialogContainer: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    backgroundColor: 'white',
    elevation: 4,
    padding: 16,
    width: '90%',
    shadowOpacity: 0.25,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
    lineHeight: 24,
  },
  messageText: {
    fontSize: 16,
    padding: 8,
    lineHeight: 18,
  },
  buttonContainer: {
    marginTop: 32,
    flexDirection: 'row-reverse',
  },
  button: {
    marginLeft: 12,
  }
});
export default PopupModal;
