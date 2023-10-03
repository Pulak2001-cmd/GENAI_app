import { Video } from 'expo-av'
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { View, Text } from 'react-native'
import PostSingleOverlay from './PostSingleOverlay'

/**
 * This component is responsible for displaying a post and play the 
 * media associated with it.
 * 
 * The ref is forwarded to this component so that the parent component
 * can manage the play status of the video.
 */
export const PostSingle = forwardRef(({ item }, parentRef) => {
    const ref = useRef(null);

    return (
        <>
            <PostSingleOverlay user={null} post={item} />
            <Video
                ref={ref}
                style={{flex: 1}}
                resizeMode="cover"
                shouldPlay={true}
                isLooping
                usePoster
                posterSource={{ uri: item.poster }}
                posterStyle={{ resizeMode: 'cover', height: '100%' }}
                source={{ uri: item.video }} />
        </>
    )
})

export default PostSingle