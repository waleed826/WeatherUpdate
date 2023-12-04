import { StyleSheet, Text, View , ActivityIndicator, Image} from 'react-native'
import React, {useState,useEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Weathe = () => {
    const [data, setData] = useState([])
  
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    getDataFromApi()
  }, [])
  const  Api_key = 'd1247f1c74f28e2c96aaa5b263742b13'
  const getDataFromApi =()=>{
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=${Api_key}`)
    // return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${API_key}`)
    .then(response=> response.json())
    .then(json => {
      setData(json)
      console.log("🚀 ~ file: Weathe.js:18 ~ getDataFromApi ~ json:", json)
      setLoading(false)
    })
    .catch(error=>{
      console.error(error);
    })
  }
  return (
    <View style={{flex:1}}>
      <LinearGradient style={{flex:1}} colors={['orange','yellow',]}>
        {loading? 
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <ActivityIndicator size={'large'} color={'white'}/>
      </View>:
<>
      <Text>Weather Of Islamabad</Text>
      <Image  />
          <Text>wind speed:{'\n'} {data.wind.speed}</Text>
          <Text> feels like:{'\n'} {data.main.feels_like}</Text>
          <Text> dust:{'\n'} {data.wind.gust}</Text>
          <Text>Sunset:{'\n'} {data.sys.sunset}</Text>
          <Text>Presure:{'\n'} {data.main.pressure}</Text>
          <Text>Humidty:{'\n'} {data.main.humidity}</Text>
          </>
        }
        </LinearGradient>
    </View>
  )
}

export default Weathe

const styles = StyleSheet.create({})