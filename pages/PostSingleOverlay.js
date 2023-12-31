import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core';
import { Dimensions, StyleSheet } from 'react-native'

/**
 * Function that renders a component meant to be overlapped on
 * top of the post with the post info like user's display name and avatar
 * and the post's description
 *
 * @param {Object} user that created the post
 * @param {Object} post object
 */
export default function PostSingleOverlay({ user, post }) {
  const navigation = useNavigation()
  const [currentLikeState, setCurrentLikeState] = useState({
    state: false,
    counter: 4,
  });


  /**
   * Handles the like button action.
   *
   * In order to make the action more snappy the like action
   * is optimistic, meaning we don't wait for a response from the
   * server and always assume the write/delete action is successful
   */
  const handleUpdateLike = ()=> {
    
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.displayName}>{"Pulak"}</Text>
        <Text style={styles.description}>{"post.description"}</Text>
      </View>

      <View style={styles.leftContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('profileOther', { initialUserId: user?.uid })}>
          <Image style={styles.avatar} source={{ uri: "user?.photoURL" }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleUpdateLike(currentLikeState)}
        >
          <Ionicons
            color="white"
            size={40}
            name={currentLikeState.state ? "heart" : "heart-outline"}
          />
          <Text style={styles.actionButtonText}>
            {currentLikeState.counter}
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => dispatch(openCommentModal(true, post))}
        >
          <Ionicons
            color="white"
            size={40}
            name={"chatbubble"}
          />
          <Text style={styles.actionButtonText}>
            {5}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        position: 'absolute',
        zIndex: 999,
        bottom: 0,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    displayName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    description: {
        marginTop: 10,
        color: 'white',
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
        marginBottom: 30
    },
    leftContainer: {
        alignItems: 'center'
    },
    actionButton: {
        paddingBottom: 16
    },
    actionButtonText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 4
    }
})

