/**
 * @format
 */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#393E46',
    margin: 'auto',
    marginVertical: '25%',
    marginHorizontal: '5%',
    borderRadius: 30,
    position: 'absolute',
    width: '90%',
    height: '75%',
  },
  CloseContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  closeIcon: {
    fontSize: 30,
    color: '#EEEE',
    margin: 10,
  },
  Header: {
    fontSize: 30,
    color: '#EEEE',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TextContainer: {
    backgroundColor: '#222831',
    width: '92%',
    height: '71%',
    alignSelf: 'center',
    margin: 12,
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  textStruct: {
    flexDirection: 'row',
  },
  text1: {
    color: '#EEEE',
    fontSize: 17,
    paddingVertical: 17,
    paddingLeft: 6,
  },
  text2: {
    color: '#EEEE',
    paddingHorizontal: 12,
    paddingVertical: 17,
    fontSize: 16,
  },
  CloseSction: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  close: {
    color: '#EEEE',
    fontWeight: 'bold',
    fontSize: 22,
    padding: 10,
    backgroundColor: '#00ADB5',
    borderRadius: 50,
  },
});
