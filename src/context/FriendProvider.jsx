import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addTimelineToLocalDB, getAllTimelineFromLocalDB } from '../utilites/localDB';

export const FriendContext = createContext();

const FriendProvider = ({children}) => {
    const [calls, setCalls] = useState(()=> getAllTimelineFromLocalDB());
    const [texts, setTexts] = useState(()=> getAllTimelineFromLocalDB());
    const [videos, setVideos] = useState(()=> getAllTimelineFromLocalDB());


    const handleAsCall = (currentFriend) => {
        addTimelineToLocalDB(currentFriend);

        const isExistFriend = calls.find(
            (friend) => friend.id === currentFriend.id)

            if(isExistFriend){
                toast.error("The friend is already called")
            }else{
                setCalls([...calls, currentFriend]);
                toast.success(`${currentFriend.name} is Call`);
            }
            console.log(currentFriend, calls, 'friend')
    }
    const handleAsText = (currentFriend) => {
        addTimelineToLocalDB(currentFriend);

        const isExistFriend = texts.find(
            (friend) => friend.id === currentFriend.id)

            if(isExistFriend){
                toast.error("The friend is already text")
            }else{
                setTexts([...texts, currentFriend]);
                toast.success(`${currentFriend.name} is Text`);
            }
            console.log(currentFriend, calls, 'friend')
    }
    const handleAsVideo = (currentFriend) => {
        addTimelineToLocalDB(currentFriend);

        const isExistFriend = videos.find(
            (friend) => friend.id === currentFriend.id)

            if(isExistFriend){
                toast.error("The friend is already video")
            }else{
                setVideos([...videos, currentFriend]);
                toast.success(`${currentFriend.name} is video`);
            }
            console.log(currentFriend, calls, 'friend')
    }


    const data = {
        calls, setCalls, handleAsCall, texts, setTexts, handleAsText, videos, setVideos, handleAsVideo
    }

    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;