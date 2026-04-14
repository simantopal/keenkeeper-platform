import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {

    const getStatusColor = (status) => {
        if (status === "on-track") return "bg-green-900 text-white";
        if (status === "almost due") return "bg-yellow-600 text-black";
        if (status === "overdue") return "bg-red-500 text-white";
    };

    return (
        <Link to={`/friendDetails/${friend.id}`} className="card bg-base-100 shadow-sm">
            <figure>
                <img
                src={friend.picture}
                alt="Friends" className='rounded-full mt-6' />
            </figure>
            <div className="card-body text-center items-center">
                <h2 className="card-title font-semibold text-xl">
                    {friend.name}</h2>
                <p>{friend.days_since_contact}d ago</p>
                <div className='flex gap-2'>
                    {
                        friend.tags.map((tag, ind) => (
                        <div key={ind} className="badge flex bg-green-300 text-black font-medium">{tag}</div>  
                        ))
                    }
                </div>               
                <div className={`badge rounded-full font-medium text-white ${getStatusColor(friend.status)}`}>
                    {friend.status}                
                </div>                              
            </div>
        </Link>
    );
};

export default FriendCard;