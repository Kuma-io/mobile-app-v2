import { TimeFrame, timeFrames } from '~/lib/timeframes';
import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { LineChart } from 'react-native-wagmi-charts';
import { triggerHaptic } from '~/lib/haptics';
import { Text } from '~/components/ui';

export function Chart() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFrame>('1D');
  return (
    <View className="w-full">
      <TimeFrames timeFrame={selectedTimeFrame} onTimeFrameChange={setSelectedTimeFrame} />
      <Graph timeFrame={selectedTimeFrame} />
    </View>
  );
}

function TimeFrames({
  timeFrame,
  onTimeFrameChange,
}: {
  timeFrame: TimeFrame;
  onTimeFrameChange: (timeFrame: TimeFrame) => void;
}) {
  return (
    <View className="flex-row gap-6 pl-8">
      {timeFrames.map((frame) => (
        <TouchableOpacity key={frame} onPress={() => onTimeFrameChange(frame)}>
          <Text variant="subheading" className={`${timeFrame === frame ? 'text-fg' : ''}`}>
            {frame}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export function Graph({ timeFrame }: { timeFrame: TimeFrame }) {
  const chartData = [
    { timestamp: 1696000000000, value: 10000 },
    { timestamp: 1696086400000, value: 10200 },
    { timestamp: 1696172800000, value: 10150 },
    { timestamp: 1696259200000, value: 10300 },
    { timestamp: 1696345600000, value: 10450 },
    { timestamp: 1696432000000, value: 10600 },
    { timestamp: 1696518400000, value: 10500 },
    { timestamp: 1696604800000, value: 10700 },
    { timestamp: 1696691200000, value: 10850 },
    { timestamp: 1696777600000, value: 11000 },
  ];

  return (
    <></>
    // <LineChart.Provider
    //   data={chartData}
    //   onCurrentIndexChange={(index) => {
    //     triggerHaptic('light');
    //     // updateBalance(chartDataRef.current[index].value);
    //   }}>
    //   <LineChart width={375} height={200}>
    //     <LineChart.Path color="black">
    //       <LineChart.Dot color="black" at={chartData.length - 1} hasPulse />
    //     </LineChart.Path>
    //     <LineChart.CursorCrosshair
    //       color="black"
    //       onActivated={() => {
    //         triggerHaptic('light');
    //       }}
    //       onEnded={() => {
    //         triggerHaptic('light');
    //         // updateBalance(chartDataRef.current[chartData.length - 1].value);
    //       }}>
    //       {/* <LineChart.Tooltip cursorGutter={60} xGutter={16} yGutter={0} /> */}
    //       <LineChart.Tooltip cursorGutter={50} xGutter={30} yGutter={30}>
    //         <LineChart.DatetimeText
    //           format={({ value }) => {
    //             'worklet';
    //             const date = new Date(value);
    //             if (timeFrame === '1H' || timeFrame === '1D') {
    //               return date.toLocaleTimeString([], {
    //                 hour: '2-digit',
    //                 minute: '2-digit',
    //               });
    //             }
    //             return date.toLocaleDateString([], {
    //               month: 'short',
    //               day: 'numeric',
    //             });
    //           }}
    //         />
    //       </LineChart.Tooltip>
    //     </LineChart.CursorCrosshair>
    //   </LineChart>
    // </LineChart.Provider>
  );
}
