import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { GiWallet } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBowlRice } from "react-icons/fa6";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,PieChart, Pie, ResponsiveContainer,Legend } from "recharts";


const AdminHome = () => {
    const {user}=useAuth();
    const [axiosSecuer]=useAxiosSecure();

    const {data:stats={}}=useQuery({
        queryKey:['admin-stats'],
        queryFn:async()=>{
            const res = await axiosSecuer('admin-stats');
            return res.data;
        }
    })

    /* const revenue = stats.revenue;
    const totalReveneue = revenue.toFixed(2);
     */

    const {data:chartData=[]}=useQuery({
      queryKey:['chart-data'],
      queryFn:async()=>{
        const res =await axiosSecuer('/order-stats');
        return res.data;
      }
    })
    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${
            x + width / 2
          },${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
            x + width
          }, ${y + height}
      Z`;
        };

        const TriangleBar = (props) => {
          const { fill, x, y, width, height } = props;

          return (
            <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
          );
        };

       const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return (
      <div>
        <h1 className="text-2xl font-second_font text-gray-800 my-8">
          Welcome Back, {user.displayName}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex justify-center items-center gap-4 p-4 rounded text-white bg-gradient-to-r from-purple-500 to-pink-200">
            <div>
              <GiWallet className="text-5xl"></GiWallet>
            </div>
            <div>
              <div className="font-semibold text-xl">Revenue</div>
              <div className="stat-value">
                {stats.revenue ? stats.revenue.toFixed(2) : "N/A"}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 p-7 rounded text-white bg-gradient-to-r from-yellow-600 to-yellow-200">
            <div>
              <HiUserGroup className="text-5xl"></HiUserGroup>
            </div>
            <div>
              <div className="font-semibold text-xl">New Users</div>
              <div className="stat-value">{stats.users}</div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 p-7 rounded text-white bg-gradient-to-r from-pink-500 to-pink-200">
            <div>
              <FaBowlRice className="text-5xl"></FaBowlRice>
            </div>
            <div>
              <div className="font-semibold text-xl">Menu Items</div>
              <div className="stat-value">{stats.products}</div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 p-7 rounded text-white bg-gradient-to-r from-blue-500 to-blue-200">
            <div>
              <TbTruckDelivery className="text-5xl"></TbTruckDelivery>
            </div>
            <div>
              <div className="font-semibold text-xl">Orders</div>
              <div className="stat-value">{stats.orders}</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="total"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="w-1/2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Legend></Legend>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                    name={entry.category}
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
};

export default AdminHome;