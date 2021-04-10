import '../../node_modules/react-vis/dist/style.css';
import { MobileContext } from '../contexts/MobileContext';
import React, { useContext} from 'react';
import {  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
   } from 'react-vis';

   const BarChart = () => {
    const { mobiles } = useContext(MobileContext);
    const years = mobiles.map(mobile =>mobile.year)
    
    const data = [
      {x: years[0], y: 12},
      {x: years[1], y: 5},
      {x: years[2], y: 8},
      {x: years[3], y: 4},
      {x: years[4], y: 6},
    ]
    const noData =[
      {x: 0, y: 0},
    ]
    return (
      <XYPlot margin={{bottom: 70}} xType="ordinal" width={400} height={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45} />
        <YAxis />
        {mobiles.length > 0 ? <VerticalBarSeries
          data={data}
        />:<VerticalBarSeries
          data={noData}
        />}
      </XYPlot>
    );
  }

  export default BarChart;
