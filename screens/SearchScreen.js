import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TextInput, Alert } from 'react-native';
import axios from 'axios';

// import styles from './HomeScreen.js';

const API_KEY = 'acd666a097ef45beda28cd655bf36c1e';

const styles = StyleSheet.create({
    form: {
      padding: 10
    },
    label: {
      fontWeight: 'bold'
    },
    searchInput: {
      height: 40,
    }
});


class SearchScreen extends React.Component {
    constructor() {
      super()
      this.state = {
        track: '',
        artist: '',
        results: [],
        loading: false
      }
    }
  
    _search() {
      if (this.state.artist === '' || this.state.track === '' || this.loading) return
  
      this.setState({loading: true})
      axios.get('http://ws.audioscrobbler.com/2.0/', {
        params: {
          method: 'track.getsimilar',
          format: 'json',
          artist: this.state.artist,
          track: this.state.track,
          api_key: API_KEY
        }
      }).then(response => {
        const {data} = response
  
        console.log(data)
  
        this.setState({
          results: data.similartracks.track,
          loading: false
        })
      }).catch(() => {
        console.log('error...')
        Alert,alert.apply('Vish', 'Ocorreu um erro na pesquisa')
        this.setState({
          results: [],
          loading: false
        })
      })
    }
  
    _keyExtractor(item, index) {
      return index
    }
  
    _renderItem({item}) {
      return (
        <Text>{item.name} - {item.artist.name}</Text>
      )
    }
  
    render() {
      return (
        <View>
          <View style={styles.form}>
            <Text style={styles.label}>Artista</Text>
            <TextInput 
              onBlur={() => this._search()}
              onChangeText={(text) => this.setState({artist: text})}
              style={styles.searchInput} />
            <Text style={styles.label}>Música</Text>
            <TextInput 
              onBlur={() => this._search()}
              onChangeText={(text) => this.setState({track: text})}
              style={styles.searchInput} />
          </View>
          { this.state.loading 
            ? <ActivityIndicator />
            : <FlatList 
                data={this.state.results}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
              />
          }
        </View>
      )
    }
  }

/*

class SearchScreen extends React.Component {

    constructor() {
        super()

        this.state = {
            artist: '',
            track: '',
            results: [],
        }
    }

    render = () => {
        return (
            <View style={{flex: 1}}>
                <Text style={styles.label}>Artista</Text>
                <TextInput onChangeText={(text) => this.setState({
                    artist: text
                })} />
                <Text style={styles.label}>Música</Text>
                <TextInput onChangeText={(text) => this.setState({
                    track: text
                })} />
            </View>
            <Text style={styles.text}>Hello from Search</Text>
            { this.state.loading ? 
                <ActivityIndicator /> : 
                <FlatList 
                    data = {this.state.results},
                    renderItem = 
                /> 
            }
        )
    }
}

*/

export default SearchScreen;