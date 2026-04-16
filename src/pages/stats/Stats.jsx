import React, { useContext, useMemo } from 'react';
import { FriendContext } from '../../context/FriendProvider';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const COLORS = {
  call: '#2D5A43',
  video: '#4CAF50',
  text: '#8A4FFF',
};

const Stats = () => {

  const { timeline } = useContext(FriendContext);

  // derive data from ONE source
  const data = useMemo(() => {

    const callCount = timeline.filter(i => i.type === "call").length;
    const textCount = timeline.filter(i => i.type === "text").length;
    const videoCount = timeline.filter(i => i.type === "video").length;

    return [
      { name: 'Call', value: callCount, color: COLORS.call },
      { name: 'Video', value: videoCount, color: COLORS.video },
      { name: 'Text', value: textCount, color: COLORS.text },
    ];
  }, [timeline]);

  const hasData = data.some(item => item.value > 0);

  return (
    <div className='container mx-auto my-20'>

      <h2 className="text-5xl font-bold text-slate-800 mb-4">
        Friendship Analytics
      </h2>

      <div className="p-6 bg-slate-50 rounded-xl shadow-sm border border-gray-100">

        <p className="text-xl font-medium text-green-950 mb-8">
          By Interaction Type
        </p>

        {!hasData ? (
          <div className="h-60 flex items-center justify-center text-gray-400 font-medium text-2xl">
            No interaction data yet
          </div>
        ) : (
          <>
            <div className="h-80 w-full">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={100}
                    outerRadius={130}
                    paddingAngle={6}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={entry.color}
                        stroke="none"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-6 mt-4">
              {data.map((entry) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm text-gray-600 font-medium">
                    {entry.name} ({entry.value})
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Stats;