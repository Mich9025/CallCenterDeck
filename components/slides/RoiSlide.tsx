import React from 'react';
import { SlideProps } from '../../types';
import { APP_DATA } from '../../data';
import { ArrowUpRight, DollarSign, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const RoiSlide: React.FC<SlideProps> = ({ client }) => {
  const { roi } = APP_DATA.slides;
  const metrics = roi.metrics;

  const data = [
    { name: roi.chart.manualLabel, leads: roi.chart.manualLeads, cost: roi.chart.manualCost },
    { name: roi.chart.aiLabel, leads: roi.chart.aiLeads, cost: roi.chart.aiCost },
  ];

  const savings = ((metrics.costPerCallHuman - metrics.costPerCallAI) * metrics.dailyVolume * 30).toLocaleString();

  return (
    <div className="flex flex-col h-full justify-center">
      <h2 className="text-4xl font-bold mb-8">{roi.title} <span className="text-gobig-primary">{roi.highlight}</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Stats Cards */}
        <div className="space-y-6">
          <div className="bg-gobig-panel p-6 rounded-xl border-l-4 border-gobig-primary">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm mb-1">{roi.cards.savings.label}</p>
                <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                  ${savings} USD <ArrowUpRight className="text-gobig-primary w-6 h-6" />
                </h3>
              </div>
              <DollarSign className="text-gray-600" />
            </div>
            <p className="text-xs text-gray-500 mt-2">{roi.cards.savings.sub(client.volume)}</p>
          </div>

          <div className="bg-gobig-panel p-6 rounded-xl border-l-4 border-gobig-secondary">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm mb-1">{roi.cards.leads.label}</p>
                <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                  {roi.cards.leads.value} <ArrowUpRight className="text-gobig-secondary w-6 h-6" />
                </h3>
              </div>
              <Clock className="text-gray-600" />
            </div>
            <p className="text-xs text-gray-500 mt-2">{roi.cards.leads.sub}</p>
          </div>
        </div>

        {/* Right: Chart */}
        <div className="h-64 md:h-80 bg-gobig-panel/50 p-6 rounded-xl border border-white/5">
          <h4 className="text-sm font-bold text-gray-400 mb-4 text-center">{roi.chart.title}</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#555" fontSize={12} />
              <YAxis stroke="#555" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }}
                itemStyle={{ color: '#fff' }}
              />
              <Bar dataKey="leads" name="Leads Generados" fill="#00ff9d" radius={[4, 4, 0, 0]} />
              <Bar dataKey="cost" name="Costo Operativo (%)" fill="#7000ff" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RoiSlide;