import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({children}) => {
    const [storeFriends, setStoreFriends] = useState([]);
    const [texts, setTexts] = useState([]);
    const [videos, setVideos] = useState([]);


    const handleAsCall = (currentFriend) => {
        const isExistFriend = storeFriends.find(
            (friend) => friend.id === currentFriend.id)

            if(isExistFriend){
                toast.error("The friend is already called")
            }else{
                setStoreFriends([...storeFriends, currentFriend]);
                toast.success(`${currentFriend.name} is Call`);
            }
            console.log(currentFriend, storeFriends, 'friend')
    }
    const handleAsText = (currentFriend) => {
        const isExistFriend = texts.find(
            (friend) => friend.id === currentFriend.id)

            if(isExistFriend){
                toast.error("The friend is already text")
            }else{
                setTexts([...texts, currentFriend]);
                toast.success(`${currentFriend.name} is Text`);
            }
            console.log(currentFriend, storeFriends, 'friend')
    }
    const handleAsVideo = (currentFriend) => {
        const isExistFriend = videos.find(
            (friend) => friend.id === currentFriend.id)

            if(isExistFriend){
                toast.error("The friend is already video")
            }else{
                setVideos([...videos, currentFriend]);
                toast.success(`${currentFriend.name} is video`);
            }
            console.log(currentFriend, storeFriends, 'friend')
    }


    const data = {
        storeFriends, setStoreFriends, handleAsCall, texts, setTexts, handleAsText, videos, setVideos, handleAsVideo
    }

    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;