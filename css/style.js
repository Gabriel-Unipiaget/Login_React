import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageBackground:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerHeader:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogo:{
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderTopRightRadius: 0,
    },
    imageLogo:{
        width: 48,
        height: 48,
    },
    containerMain:{
        flex: 3,
        width: '100%',
        alignItems: 'center',
        justifyContent:'space-around',
        backgroundColor: '#fff',
        borderTopLeftRadius: 100,
    },
    textTitle:{
        fontSize: 40,
    },
    containerForm:{
        height: 250,
        width: '70%',
        justifyContent: 'space-around',
    },
    containerInputs:{
        width: '100%',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    input:{
        width: '100%',
    },
    button:{
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,
        borderTopRightRadius: 0,
    },
    textButton:{
        color: '#fff',
    },
});

export default styles;