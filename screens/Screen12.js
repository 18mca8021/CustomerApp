import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput,TouchableOpacity,SafeAreaView,StatusBar} from 'react-native';

const Screen12 = ({navigation}) => {

    const Separator = () => (
        <View style={styles.separator} />
      );

    return (
        <>
        <SafeAreaView >
            <Image style={styles.direct} source={require('../images/back2.png')} onPress={() => navigation.navigate('Screen9')}/>
              <Separator/>
              <Separator/>

            <StatusBar backgroundColor='#f1f1f1' barStyle='dark-content'/>

              <Image style={{alignSelf:'center', margin: 10,top:17,height:200,width:200}} source={require('../images/ticklogo.png')}/>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 25, fontWeight: '900', position: 'absolute', margin: 10, top: 310,alignSelf:'center' }}>Your Services has</Text>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 25, fontWeight: '900', position: 'absolute', margin: 10, top: 335,alignSelf:'center' }}>been booked</Text>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: 'bold', position: 'absolute', margin: 10, top: 380,alignSelf:'center' }}>Orizon team will accept your booking for</Text>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: 'bold', position: 'absolute', margin: 10, top: 400,alignSelf:'center' }}>confirmation.</Text>

        <View style={styles.fixToText}>
            <TouchableOpacity style={{
      backgroundColor:"#f2994a",
      borderRadius:15,
      paddingVertical:30,
      paddingHorizontal:12,
      margin: 20,
      width:230,
      left:-5,
      top:10,
      marginTop:40,
      marginBottom:150,}} 
      onPress={() => navigation.navigate('Screen11')}>
        <Text style={{textTransform: 'capitalize', fontSize: 18,color: 'white',fontWeight: 'bold',top:17,position: 'absolute',alignSelf:'center'}}>Show Bookings</Text>  
        </TouchableOpacity>
        </View>

        <View style={styles.fixToText}>
            <TouchableOpacity style={{
                backgroundColor:"#f2994a",
                borderRadius:15,
                paddingVertical:30,
                paddingHorizontal:12,
                margin: 20,
                width:230,
                left:-5,
                top:90,
                marginTop:40,
                marginBottom:150,
            }} onPress={() => navigation.navigate('Screen13')}>
            <Text style={{textTransform: 'none', fontSize: 18,color: 'white',fontWeight: 'bold',top:17,position: 'absolute',alignSelf:'center'}}>Back to Home</Text>  
            </TouchableOpacity>
        </View>


        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
    
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    fixToText: {
      justifyContent:'center',
      alignSelf:'stretch'
    },
    direct: {
       alignSelf:'flex-start',
       height:30,
       width:30,
       left:20,
       top:8
    },
    separator: {
        marginVertical: 8,
        borderBottomColor:'transparent',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      appButtonText:{
        fontSize:18,
        color:"white",
        fontWeight:"bold",
        alignSelf:"center",
        textTransform:'capitalize',
        
      },
    appButtonContainer:{
      //elevation:8,
      backgroundColor:"#f2994a",
      borderRadius:15,
      paddingVertical:30,
      paddingHorizontal:12,
      margin: 20,
      width:290,
      left:-35,
      top:30,
      marginTop:40,
      marginBottom:60,
  },
  boundary:{
    borderWidth:1,
    borderColor:'#000',
    backgroundColor:'#ffffff',
    borderRadius:50,
  },
  fixToText: {
    justifyContent:'center',
    alignSelf:'flex-end',
    position:'absolute',
    bottom:40,
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:12,
    top:50,
    //elevation:8,
    left:40,
    height:140,
    width:430,
    right:170,
    padding:50,   
    marginTop:420
  },
});

export default Screen12;
