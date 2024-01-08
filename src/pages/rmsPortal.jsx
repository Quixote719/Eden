import React from 'react';
import ReactECharts from 'echarts-for-react';

const RMSPortal = () => {
    const getTrendOption = (param) => {
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
        }
    }

  const getPieOption = (param) => {
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
  }

  const getRoseOption = () => {
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
          roseType: 'area'
        }
      ]
    };
  }

  return (
    <div>
      <ReactECharts
        option={getTrendOption('bar')}
        notMerge={true}
        lazyUpdate={true}
        theme={'theme_name'}
        onChartReady={()=>{}}
        // onEvents={EventsDict}
        // opts={}
      />
      <ReactECharts
        option={getTrendOption('line')}
        notMerge={true}
        lazyUpdate={true}
        theme={'theme_name'}
        onChartReady={()=>{}}
        // onEvents={EventsDict}
        // opts={}
      />
      <ReactECharts
        option={getPieOption('pie')}
        notMerge={true}
        lazyUpdate={true}
        theme={'theme_name'}
        onChartReady={()=>{}}
        // onEvents={EventsDict}
        // opts={}
      />
      <ReactECharts
        option={getRoseOption('area')}
        notMerge={true}
        lazyUpdate={true}
        theme={'theme_name'}
        onChartReady={()=>{}}
        // onEvents={EventsDict}
        // opts={}
      />
    </div>
  );
};

export default RMSPortal;