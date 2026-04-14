import React, { use, useEffect, useState } from 'react';
import FriendCard from '../ui/FriendCard';
import { BeatLoader } from 'react-spinners';

const friendsPromise = fetch('/friends.json').then(res => res.json())

const AllFriends = () => {
    
    const friends = use(friendsPromise)
    console.log(friends, 'friends')

    const [friend, setFriend] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            
                setFriend(data)
                setLoading(false)
            }
            fetchData();
    }, []);

    console.log(friend, "friend")
    console.log(loading, "loading")

    return (
        <div className='pt-10 pb-20 container mx-auto'>
            <h2 className='font-semibold text-2xl mb-4'>Your Friends</h2>
            
            {loading ? (<div className='flex justify-center items-center'><BeatLoader color='#244D3F' /></div>) : (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                friends.map((friend, ind) => {
                    return (
                        <FriendCard key={ind} friend={friend}></FriendCard>
                    )
                })
            }
            </div>)}
        </div>
    );
};

export default AllFriends;