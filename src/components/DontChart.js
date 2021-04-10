import '../../node_modules/react-vis/dist/style.css';
import { MobileContext } from '../contexts/MobileContext';
import React, { useContext} from 'react';
import {RadialChart} from 'react-vis';

   export default function DontChart(props) {
    const { mobiles } = useContext(MobileContext);
    const brand = mobiles.map(mobile =>mobile.brand)
    const myData = [{angle: 3,label:brand[0]}, {angle: 2,label:brand[1]}, {angle: 1,label:brand[2]}]
    const noData =[{angle: 1, angle:2},]
    return (
      <main>
      {mobiles.length > 0 ? <RadialChart
        data={myData}
        width={400}
        height={400} />:<RadialChart
        data={noData}
        width={400}
        height={400} />
        }
      
      </main>
    );
  }
