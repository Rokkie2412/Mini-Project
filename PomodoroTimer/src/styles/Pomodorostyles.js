import {StyleSheet,Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#222831',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Header: {
    color: '#EEEEEE',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    margin: 20,
  },
  HelpIcon: {
    color: '#00ADB5',
    fontSize: 33,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    padding: 10,
    marginVertical: 15,
  },
  TimerSection: {
    flex: 1,
    justifyContent: 'center',
  },
  timeSection: {
    backgroundColor: '#00ADB5',
    marginHorizontal: 15,
    borderRadius: 30,
    paddingVertical: 40,
    maxWidth: windowWidth*0.95,
    maxHeight: windowHeight*0.45,
  },
  showsection: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    color: '#393E46',
    fontWeight: 'bold',
  },
  time: {
    textAlign: 'center',
    color: '#EEEEEE',
    fontSize: 59,
    fontWeight: 'bold',
    paddingVertical: 60,
    marginHorizontal: '5%',
    borderRadius: 30,
  },
  iconSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: '#393E46',
    padding: 24,
    fontSize: 35,
    color: '#fff',
    margin: 10,
    borderRadius: 50,
    marginTop: 15,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    color: '#EEEEEE',
    backgroundColor: '#393E46',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
  },
  cycle: {
    fontWeight: 'bold',
    color: '#EEEEEE',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
  },
});
