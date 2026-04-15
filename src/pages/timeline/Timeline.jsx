import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendProvider';
import { PiHandshakeBold, PiChatText, PiVideoCamera  } from 'react-icons/pi';

const Timeline = () => {

  const { storeFriends, texts, videos } = useContext(FriendContext);
  const [type, setType] = useState("all");

  const data = [
    ...storeFriends.map(i => ({ ...i, type: "call" })),
    ...texts.map(i => ({ ...i, type: "text" })),
    ...videos.map(i => ({ ...i, type: "video" })),
  ];

  const filtered =
    type === "all" ? data : data.filter(item => item.type === type);

  return (
    <div>
        <div className="container mx-auto my-20">
            <div className='mb-6'>
                <h2 className='font-bold text-5xl'>Timeline</h2>
            </div>
            {/* filter */}
            <select
                className="select select-bordered mb-6"
                onChange={(e) => setType(e.target.value)}
            >
                <option value="all">All</option>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="video">Video</option>
            </select>

            {/* timeline */}
            {filtered.map((item, ind) => (
                <div key={ind} className="card shadow-sm mb-6 bg-base-200">
                    <div className="p-4 flex items-start gap-3">
        
                        {/* icon by type */}
                        <div className="bg-gray-100 p-2 rounded-lg text-xl">
                            {item.type === "call" && <PiHandshakeBold className="text-yellow-500" />}
                            {item.type === "text" && <PiChatText className="text-blue-500" />}
                            {item.type === "video" && <PiVideoCamera className="text-purple-500" />}
                        </div>

                        {/* text */}
                        <div>
                            <p className="font-semibold text-gray-700">
                                <span className="font-bold text-teal-700">
                                {item.type === "call" && "Call"}
                                {item.type === "text" && "Text"}
                                {item.type === "video" && "Video Call"}
                                </span>{" "}with {item.name}
                            </p>

                            <p className="text-sm text-gray-400 mt-1">
                            {item.next_due_date}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Timeline;