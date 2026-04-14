import React, { use } from 'react';
import FriendCard from '../ui/FriendCard';

const friendsPromise = fetch('/friends.json').then(res => res.json())

const AllFriends = () => {
    const friends = use(friendsPromise)
    console.log(friends, 'friends')
    return (
        <div className='pt-10 pb-20 container mx-auto'>
            <h2 className='font-semibold text-2xl mb-4'>Your Friends</h2>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                friends.map((friend, ind) => {
                    return (
                        <FriendCard key={ind} friend={friend}></FriendCard>
                    )
                })
            }
            </div>
        </div>
    );
};

export default AllFriends;