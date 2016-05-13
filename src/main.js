 import React from 'react';
 import {
   View,
   Text,
   StyleSheet
 } from 'react-native';

import Parse from 'parse/react-native';
import Signin from './components/authentication/signin';

 module.exports = React.createClass({
   componentWillMount: function() {
     Parse.initialize("NyAyKsHGNuNNqOopoUjkxGxInMS5pWOM3EkPEEy5", "Q3QuXWRzsCWWwqlJYtt4YvFBbwfI4rcHqasm8B2I");
   },
   render: function() {
     return (
       <View style={styles.container}>
         <Signin />
       </View>
     )
   }
 });

 var styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
   }
 });
