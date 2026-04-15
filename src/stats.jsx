import { useContext } from 'react';
import { Pie, PieChart } from 'recharts';
import { UserContext } from './UserContext';


// #region Sample data


// #endregion
function StatsPage ({ isAnimationActive = true }) {

const {Call , Text , Vedio } = useContext(UserContext)


  const data = [
  { name: 'Call', value: Call.length , fill: '#0088FE' },
  { name: 'Text', value: Text.length , fill: '#00C49F' },
  { name: 'Vedio', value: Vedio.length , fill: '#FFBB28' },
 
];  



  return (
    <PieChart className='mx-auto py-10' style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
     
    </PieChart>
  );
}
export default  StatsPage  