import { StyleSheet, Text, View,FlatList, ActivityIndicator, Image,TextInput, TouchableOpacity } from 'react-native'
import React, {useState,useEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const WeatherHome = () => {
  const [weatherData, setWeatherData] = useState([])
  const [currentData, setCurrentData] =useState([])
  const [loading, setLoading] = useState(true)
  const [input, setInput] = useState('')
  const [txt, setTxt] = useState('Lahore')
  useEffect(() => {
    getDataFromApi()
    getCurrentData()
  }, [])
  const Pressed = ()=>{
  getDataFromApi()
 }
    const  Api_key = 'd1247f1c74f28e2c96aaa5b263742b13'
    // const  Api_key = 'd1247f1c74f28e2c96aaa5b263742b13'

    const getDataFromApi = () => {
      return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${txt}&appid=${Api_key}&units=metric`)
        .then(response => response.json())
        .then(json => {
          // // console.log("🚀 ~ file: WeatherHome.js:35 ~ getMoviesFromApi ~ json:", json)
          setWeatherData(json.list)
          setLoading(false)
        })
        .catch(error => {
          console.error(error);
        });
    };
    const getCurrentData = () => {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${txt}&appid=${Api_key}&units=metric`)
        .then(response => response.json())
        .then(json => {
          // // console.log("🚀 ~ file: WeatherHome.js:36 ~ getCurrentData ~ json:", json)
          // // console.log("🚀 ~ file: WeatherHome.js:35 ~ getMoviesFromApi ~ json:", json)
          setCurrentData(json)
          // setLoading(false)
        })
        .catch(error => {
          console.error(error);
        });
    };
    
  return (
    <LinearGradient style={{flex:1}} colors={['orange','yellow',]}>
      
      <TextInput
      styles={{backgroundColor:'gray'}}
      value={txt}
      placeholder='Search Country'
      onChangeText={setTxt}
      style={{borderRadius:3,borderWidth:1,margin:10}}
      />
      <View style={{alignItems:'center'}}>
      <TouchableOpacity style={{backgroundColor:'rgba(0,0,255,0.9)',padding:10,width:'80%',borderBottomLeftRadius:30,borderTopRightRadius:30}} onPress={()=>Pressed()}>
        <Text style={{color:'white',textAlign:'center'}}>press for search</Text>
      </TouchableOpacity>
      </View>
      {loading ? 
       <View>
      <ActivityIndicator color={'red'} size={'large'}/>
    </View> :
    <>
    <View style={{margin:10}}>
      <Text style={{fontSize:25,}}>{currentData.name} </Text>
    <MaterialIcons name='location-pin' />
    </View>
        <View style={{}} >
<View style={{}}>
<Text style={{color:'black',fontSize:35,textAlign:'center'}}>{currentData.main.temp}°</Text>
<View style={{flexDirection:'row'}}>
<View style={styles.fixView}>  
            <Text style={{color:'black'}}>Air speed{'\n'}{currentData.wind.speed}{'\n'}km/h</Text>
</View>
<View style={styles.fixView}>  
            <Text style={{color:'black'}}>Air pressure{'\n'}{currentData.main.pressure} hPa</Text>
</View>
<View style={styles.fixView}>  
<Text style={{color:'black'}}>atmos {'\n'}{currentData.weather[0].main}</Text>
</View>
</View>
<View style={{flexDirection:'row'}}>
<View style={styles.fixView}>  
            <Text style={{color:'black'}}>min/max{'\n'}temp{'\n'}{currentData.main.temp_min}/{currentData.main.temp_max} </Text>
</View>
<View style={styles.fixView}>  
<Image style={{height:50,width:39}} source={{uri : `http://openweathermap.org/img/w/${currentData.weather[0].icon}.png`}} />
</View>
<View style={styles.fixView}>  
<Text style={{color:'black'}}>Humidty{'\n'}{currentData.main.humidity} </Text>
</View>
</View>
            {/* <Text style={{color:'black'}}>{dt_txt}</Text> */}
</View>
        
         <FlatList
        data={weatherData}
        // horizontal
        numColumns={2}
        renderItem={({ item, index }) => {
          // console.log('sdasdas')
          return (
            <TouchableOpacity style={{borderRadius:30,justifyContent:'space-between',margin:10,borderWidth:1,borderColor:'gray',padding:10}}>
              
            <Text style={{color:'black'}}>temprature: {item.main.temp}°</Text>
            <Text style={{color:'black'}}>Wind Speed: {item.wind.speed}</Text>
            <Text style={{color:'black'}}>atmos:  {item.weather[0].main}</Text>
            <Text style={{color:'black'}}>Date: {item.dt_txt.slice(0,10)}</Text>
            <Text style={{color:'black'}}>Time: {item.dt_txt.slice(10,16)}</Text>
            <Image style={{height:50,width:39, alignSelf:'center'}} source={{uri : `http://openweathermap.org/img/w/${item.weather[0].icon}.png`}} />
          
        </TouchableOpacity>
            
          )
        }}
      />
</View>
</>
  }
   
      
    </LinearGradient>
  )
}

export default WeatherHome

const styles = StyleSheet.create({
  fixView:{
    backgroundColor:'rgba(0,0,255,0.1)',
    height:90,
    width:90,
    margin:10,
    padding:10,
    borderRadius:20,
  }
})
