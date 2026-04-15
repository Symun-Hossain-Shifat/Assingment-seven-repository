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


    <div className='w-10/12 mx-auto my-10'>
      <h2 className='text-3xl font-bold'>Friendship Analytics </h2>
      <p className='font-semibold text-green-900 my-4 text-left'>By Interaction Type</p>
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

    </div>
   
  );
}
export default  StatsPage  