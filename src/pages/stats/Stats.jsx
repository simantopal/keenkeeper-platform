import React, { useContext, useEffect, useState } from 'react';
import { FriendContext } from '../../context/FriendProvider';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const COLORS = {
  call: '#2D5A43',
  video: '#4CAF50',
  text: '#8A4FFF',
};

const Stats = () => {
  const { calls, texts, videos } = useContext(FriendContext);

  const [data, setData] = useState([]);

  // 🔥 realtime update from context
  useEffect(() => {
    setData([
      {name: 'Call', value: calls?.length || 0, color: COLORS.call},
      {name: 'Video', value: videos?.length || 0, color: COLORS.video},
      {name: 'Text', value: texts?.length || 0, color: COLORS.text},
    ]);
  }, [calls, texts, videos]);

  return (
    <div className='container mx-auto my-20'>
      <h2 className="text-5xl font-bold text-slate-800 mb-4">
        Friendship Analytics
      </h2>

      <div className="p-6 bg-slate-50 rounded-xl shadow-sm border border-gray-100">
        <p className="text-xl font-medium text-green-950 mb-8">
          By Interaction Type
        </p>

        {/* Pie Chart */}
        <div className="h-80 w-full">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={100}
                paddingAngle={6}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="none"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4">
          {data.map((entry) => (
            <div key={entry.name} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-xs text-gray-600 font-medium">
                {entry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;