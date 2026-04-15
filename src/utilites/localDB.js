const getAllTimelineFromLocalDB = () => {
    const allTimeline = localStorage.getItem("Timeline");
    

    if(allTimeline) return JSON.parse(allTimeline);

    return [];
}

const addTimelineToLocalDB = (friend) => {
    const allFriends = getAllTimelineFromLocalDB();
    const isAlreadyExist = allFriends.find(fnd => fnd.id === friend.id)
    if(!isAlreadyExist){
        allFriends.push(friend);
        localStorage.setItem("Timeline", JSON.stringify(allFriends))
    }
}

export {getAllTimelineFromLocalDB, addTimelineToLocalDB};