import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendProvider';
import { PiChatText, PiVideoCamera } from 'react-icons/pi';
import { BiPhoneCall } from 'react-icons/bi';

const Timeline = () => {

  const { timeline } = useContext(FriendContext);
  const [type, setType] = useState("all");

  const filtered =
    type === "all"
      ? timeline
      : timeline.filter(item => item.type === type);

  const orderedData = [...filtered].sort((a, b) => b.uniqueId - a.uniqueId);

  return (
    <div className="container mx-auto my-20">

      <h2 className="font-bold text-5xl mb-6">Timeline</h2>

      <select
        className="select select-bordered mb-6"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      {filtered.length === 0 ? (
        <div className="h-[30vh] bg-base-200 flex items-center justify-center rounded-lg">
          <h2 className="font-bold text-2xl text-gray-500">
            No data in this Timeline
          </h2>
        </div>
      ) : (
        orderedData.map((item) => (
          <div
            key={item.uniqueId}
            className="card shadow-sm mb-6 bg-base-200"
          >
            <div className="p-4 flex items-start gap-3">

              <div className="bg-gray-100 p-2 rounded-lg text-xl">
                {item.type === "call" && (
                  <BiPhoneCall className="text-yellow-500" />
                )}
                {item.type === "text" && (
                  <PiChatText className="text-blue-500" />
                )}
                {item.type === "video" && (
                  <PiVideoCamera className="text-purple-500" />
                )}
              </div>

              <div>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold text-teal-700">
                    {item.type === "call" && "Call"}
                    {item.type === "text" && "Text"}
                    {item.type === "video" && "Video Call"}
                  </span>{" "}
                  with {item.name}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                    {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>

            </div>
          </div>
        ))
      )}

    </div>
  );
};

export default Timeline;