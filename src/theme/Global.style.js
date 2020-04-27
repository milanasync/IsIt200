import Colors from './Colors.styles';

const spacing = (unit = 1) => unit * 8;

export default {
  statusBar: {
    barStyle: 'dark-content',
    backgroundColor: Colors.white,
  },
  mainContainer: {
    padding: spacing(2),
    flex: 1,
    backgroundColor: Colors.white,
  },
  input: {
    padding: spacing(2),
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  activeInput: {
    padding: spacing(2),
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  text: {
    color: Colors.grey,
  },
  errorText: {
    color: Colors.danger,
  },
  button: {
    padding: spacing(2),
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: spacing(2),
  },
  buttonBottom: {
    padding: spacing(2),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonBottomOutlineSm: {
    padding: spacing(1),
    marginTop: spacing(1),
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: spacing(0.1),
  },
  buttonBottomOutlineText: {
    color: Colors.primary,
  },
  buttonBottomFloat: {
    borderRadius: 40,
    padding: spacing(2),
    margin: spacing(2),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  listItem: {
    padding: spacing(2),
    marginVertical: spacing(1),
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  listItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: "wrap",
    alignItems: 'center',
  },
  listItemRowAround:{
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  nintyPercent: {
    width: '90%',
  },
  tenPercent: {
    width: '10%',
  },
  list: {},
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing(4),
  },
  loading: {
    height: spacing(10),
    width: spacing(10),
  },
  listLoading: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 1000,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.tranparent
  },
};
