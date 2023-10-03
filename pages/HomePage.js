import { View, Text, StatusBar, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import {data} from '../data/index';
import PostSingle from './PostSingle';

const HomePage = () => {
  const [post, setPost] = useState([]);
  const mediaRefs = useRef(null);
  useEffect(()=> {
    setPost(data);
  }, [])
  const height = Dimensions.get('window').height;

  const onViewableItemsChanged = useRef(({ changed }) => {
    changed.forEach(element => {
        const cell = mediaRefs.current[element.key]
        if (cell) {
            if (element.isViewable) {
                if (!profile) {
                    setCurrentUserProfileItemInView(element.item.creator)
                }
                cell.play()
            } else {
                cell.stop()
            }
        }

    });
  })

  const renderItem = ({item, index}) => {
    return (
        <View style={{ height: height-80, backgroundColor: 'black' }}>
            {/* <Text style={{color: '#FFF'}}>Hi</Text> */}
                <PostSingle item={item} ref={PostSingleRef => (mediaRefs.current[item.id] = PostSingleRef)} />
        </View>
    )
  }
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar backgroundColor='#FFF' barStyle='dark-content' />
      <FlatList 
        data={post}
        windowSize={4}
        // initialNumToRender={0}
        // maxToRenderPerBatch={2}
        // removeClippedSubviews
        viewabilityConfig={{
            itemVisiblePercentThreshold: 0
        }}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={item => item.id}
        decelerationRate={'normal'}
        // onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  )
}

export default HomePage