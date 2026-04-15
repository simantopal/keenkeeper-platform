// import React, { use } from 'react';
import { useContext } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FiArchive } from 'react-icons/fi';
import { PiBellZBold, PiChatText, PiVideoCamera } from 'react-icons/pi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { FriendContext } from '../../context/FriendProvider';


const FriendDetails = () => {
    const {id:friendParamsId} = useParams();
    console.log(friendParamsId, "friendParamsId")
    const friends = useLoaderData();
    const expectedFriend = friends.find(friend => friend.id == friendParamsId)
    const {id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date} = expectedFriend;
    const {handleAsCall, handleAsText, handleAsVideo} = useContext(FriendContext)


    const getStatusColor = (status) => {
        if (status === "on-track") return "bg-green-900 text-white";
        if (status === "almost due") return "bg-yellow-600 text-black";
        if (status === "overdue") return "bg-red-500 text-white";
    };

    
    return (
        <div className="bg-base-200">
            <div className="card container mx-auto py-10 lg:py-20 flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-80 space-y-4">
                    <div className="card bg-base-100 shadow-sm pt-6">
                        <figure>
                        <img
                            src={picture}
                            alt="Friends"
                            className="rounded-full w-20 h-20 mx-auto"
                        />
                        </figure>

                        <div className="card-body text-center items-center">
                            <h2 className="card-title font-semibold text-xl">{name}</h2>
                            <p>{days_since_contact}d ago</p>

                            <div className={`badge rounded-full font-medium text-white ${getStatusColor(status)}`}>{status}</div>

                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                {tags.map((tag, ind) => (
                                <div key={ind} className="badge bg-green-300 text-black font-medium">{tag}</div>
                                ))}
                            </div>

                            <p className="font-medium">{bio}</p>
                            <p className="text-sm">Preferred: {email}</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <button className="btn bg-base-100 w-full font-medium"><PiBellZBold /> Snooze 2 weeks</button>
                        <button className="btn bg-base-100 w-full font-medium"><FiArchive /> Archive</button>
                        <button className="btn bg-base-100 w-full text-red-500 font-medium"><RiDeleteBinLine /> Delete</button>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body text-center">
                                <h2 className="text-3xl font-semibold mt-6">{days_since_contact}</h2>
                                <p className="mb-6 text-lg">Days Since Contact</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body text-center">
                                <h2 className="text-3xl font-semibold mt-6">{goal}</h2>
                                <p className="mb-6 text-lg">Goal (Days)</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body text-center">
                                <h2 className="text-3xl font-semibold mt-6">{next_due_date}</h2>
                                <p className="mb-6 text-lg">Next Due</p>
                            </div>
                        </div>

                    </div>

                    <div className="card bg-base-100 shadow-sm mb-6">
                        <div className="card-body">
                            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center">
                                <p className="font-medium text-xl text-green-950">Relationship Goal</p>
                                <button className="btn w-fit">Edit</button>
                            </div>
                            <p>Connect every {goal} days</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-sm mb-6">
                        <div className="card-body">
                            <h2 className="text-xl font-semibold">Quick Check-In</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                                <button className="btn flex flex-col h-24 text-lg" onClick={()=> handleAsCall(expectedFriend)}><BiPhoneCall className="text-2xl" />Call</button>
                                <button className="btn flex flex-col h-24 text-lg" onClick={()=> handleAsText(expectedFriend)}><PiChatText className="text-2xl" />Text</button>
                                <button className="btn flex flex-col h-24 text-lg" onClick={()=> handleAsVideo(expectedFriend)}><PiVideoCamera className="text-2xl" />Video</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:items-center">
                                <h2 className="text-xl font-semibold text-green-950">Recent Interactions</h2>
                                <button className="btn btn-sm w-fit">Full History</button>
                            </div>

                            <div className="mt-4 space-y-3">
                                {[
                                { type: "Text", desc: "Asked for career advice", icon: <PiChatText /> },
                                { type: "Call", desc: "Industry conference meetup", icon: <BiPhoneCall /> },
                                { type: "Video", desc: "Asked for career advice", icon: <PiVideoCamera /> },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-gray-100 p-2 rounded-lg">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="font-medium">{item.type}</p>
                                                <p className="text-sm text-gray-500">{item.desc}</p>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-400 mt-2 sm:mt-0 whitespace-nowrap">Jan 28, 2026</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;