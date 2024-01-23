import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import usaJson from '@/data/America.json';
import stateInfo from '@/constants/info.js';

stateInfo.sort(function (a, b) {
  return a.value - b.value;
});

echarts.registerMap('USA', usaJson, {
  Alaska: {
    // 把阿拉斯加移到美国主大陆左下方
    left: -131,
    top: 25,
    width: 15
  },
  Hawaii: {
    left: -110,
    top: 28,
    width: 5
  },
  'Puerto Rico': {
    // 波多黎各
    left: -76,
    top: 26,
    width: 2
  }
});

const RMSPortal = () => {
  const [geoType, setGeoType] = useState('map');

  useEffect(() => {
    setTimeout(() => {
      if (geoType === 'map') setGeoType('bar');
      else setGeoType('map');
    }, 3000);
  }, [geoType]);

  const getTrendOption = param => {
    return {
      grid: { top: 20, right: 40, bottom: 20, left: 40 },
      xAxis: {
        type: 'category',
        data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
      },
      yAxis: {
        type: 'value',
        scale: true
      },
      series: [
        {
          smooth: true,
          type: param,
          name: '2015',
          data: [89.3, 92.1, 94.4, 85.4]
        },
        {
          smooth: true,
          type: param,
          name: '2016',
          data: [95.8, 89.4, 91.2, 76.9]
        },
        {
          smooth: true,
          type: param,
          name: '2017',
          data: [97.7, 83.1, 92.5, 78.1]
        }
      ],
      tooltip: {
        trigger: 'axis'
      }
    };
  };

  const getPieOption = param => {
    return {
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['A', 'B', 'C', 'D', 'E', 'F']
      },
      series: [
        {
          type: param,
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          data: [
            { value: 335, name: 'A' },
            { value: 610, name: 'B' },
            { value: 234, name: 'C' },
            { value: 165, name: 'D' },
            { value: 1048, name: 'E' },
            { value: 816, name: 'F' }
          ]
        }
      ]
    };
  };

  const getRoseOption = param => {
    return {
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['A', 'B', 'C', 'D', 'E', 'F']
      },
      series: [
        {
          type: 'pie',
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          data: [
            {
              value: 360,
              name: 'A'
            },
            {
              value: 280,
              name: 'B'
            },
            {
              value: 350,
              name: 'C'
            },
            {
              value: 420,
              name: 'D'
            },
            {
              value: 500,
              name: 'E'
            }
          ],
          roseType: param
        }
      ]
    };
  };

  const getGeoMapOption = param => {
    return {
      visualMap: {
        left: 'right',
        min: 500000,
        max: 38500000,
        inRange: {
          // prettier-ignore
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        text: ['High', 'Low'],
        calculable: true
      },
      series: [
        {
          id: 'population',
          type: 'map',
          roam: true,
          map: 'USA',
          animationDurationUpdate: 1000,
          universalTransition: true,
          data: param
        }
      ]
    };
  };

  const getGeoBarOption = param => {
    return {
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          rotate: 30
        },
        data: param.map(function (item) {
          return item.name;
        })
      },
      animationDurationUpdate: 1000,
      series: {
        type: 'bar',
        id: 'population',
        data: param.map(function (item) {
          return item.value;
        }),
        universalTransition: true
      }
    };
  };

  const getGeoOption = (data, type) => {
    if (type === 'map') return getGeoMapOption(data);
    else return getGeoBarOption(data);
  };

  return (
    <div>
      <ReactECharts
        option={getTrendOption('bar')}
        notMerge={true}
        lazyUpdate={true}
        theme={'theme_name'}
        onChartReady={() => {}}
        // onEvents={EventsDict}
        // opts={}
      />
      <ReactECharts
        option={getTrendOption('line')}
        notMerge={true}
        lazyUpdate={true}
        theme={'theme_name'}
        onChartReady={() => {}}
        // onEvents={EventsDict}
        // opts={}
      />
      <ReactECharts
        option={getPieOption('pie')}
        notMerge={true}
        lazyUpdate={true}
        theme={'theme_name'}
        onChartReady={() => {}}
        // onEvents={EventsDict}
        // opts={}
      />
      <ReactECharts
        option={getRoseOption('area')}
        notMerge={true}
        lazyUpdate={true}
        theme={'theme_name'}
        onChartReady={() => {}}
        // onEvents={EventsDict}
        // opts={}
      />
      <ReactECharts
        option={getGeoOption(stateInfo, geoType)}
        notMerge={true}
        lazyUpdate={true}
        theme={'theme_name'}
        onChartReady={() => {}}
        style={{ height: '800px', width: '100%' }}
        // onEvents={EventsDict}
        // opts={}
      />
    </div>
  );
};

export default RMSPortal;
