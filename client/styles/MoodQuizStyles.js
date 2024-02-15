<<<<<<< HEAD
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  question: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  moodButton: {
    width: '48%',
=======
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#eedaf3',
  },
  question: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  qbody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10, 
    borderTopLeftRadius: 10,
    backgroundColor: "white",
    width: "85%",
    marginHorizontal: "7.5%",
    marginTop: 20,
  },
  thoughtBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    width: "85%",
    marginHorizontal: "7.5%",
    marginTop: 20,
    padding: 10,
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '85%', // Set the width to match the qbody width
    marginHorizontal: '7.5%', // Adjust the horizontal margin to match the qbody
  },
  moodButton: {
    flexBasis: '29%',
>>>>>>> mood_quiz
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e8e6e1',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '2%',
  },
  selectedMoodButton: {
    backgroundColor: '#FFCC80',
    borderColor: 'black',
    borderWidth: 2,
  },
  moodButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    width: '100%',
    maxWidth: 250,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  submitButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  sliderContainer: {
    width: '100%',
    alignItems: 'center',
<<<<<<< HEAD
    marginTop: 10,
=======
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
    width: '85%', // Set the width to match the qbody width
    marginHorizontal: '7.5%', // Adjust the horizontal margin to match the qbody
    borderBottomRightRadius: 10, 
    borderBottomLeftRadius: 10,
>>>>>>> mood_quiz
  },
  slider: {
    width: '50%',
    height: 40,
  },
<<<<<<< HEAD
=======
  sliderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
>>>>>>> mood_quiz
  sliderValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
<<<<<<< HEAD
=======

  finalThoughts: {
  marginHorizontal: "7.5%",

  }
>>>>>>> mood_quiz
});