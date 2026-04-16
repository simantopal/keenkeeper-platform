import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  const addTimeline = (friend, type) => {
    const newItem = {
      ...friend,
      type,
      uniqueId: Date.now(),
      createdAt: new Date()
    };

    setTimeline(prev => [newItem, ...prev]);
  };

  const handleAsCall = (friend) => {
    addTimeline(friend, "call");
    toast.success(`Call with ${friend.name}`);
  };

  const handleAsText = (friend) => {
    addTimeline(friend, "text");
    toast.success(`Text with ${friend.name}`);
  };

  const handleAsVideo = (friend) => {
    addTimeline(friend, "video");
    toast.success(`Video call with ${friend.name}`);
  };

  return (
    <FriendContext.Provider
      value={{
        timeline,
        handleAsCall,
        handleAsText,
        handleAsVideo
      }}
    >
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;