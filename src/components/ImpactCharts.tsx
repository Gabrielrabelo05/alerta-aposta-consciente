import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const incomeData = [
  { range: "0-20%", value: 15 },
  { range: "20-40%", value: 28 },
  { range: "40-60%", value: 35 },
  { range: "60-80%", value: 18 },
  { range: "80-100%", value: 4 },
];

const affectedAreasData = [
  { name: "Finanças", value: 35, color: "hsl(6, 63%, 46%)" },
  { name: "Família", value: 28, color: "hsl(11, 100%, 60%)" },
  { name: "Saúde Mental", value: 22, color: "hsl(210, 100%, 20%)" },
  { name: "Trabalho", value: 15, color: "hsl(184, 6%, 53%)" },
];

const growthData = [
  { year: "2019", users: 2.5 },
  { year: "2020", users: 4.2 },
  { year: "2021", users: 7.8 },
  { year: "2022", users: 12.5 },
  { year: "2023", users: 18.9 },
  { year: "2024", users: 25.3 },
];

export function ImpactCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-8 lg:px-16">
      <Card className="shadow-card border-2">
        <CardHeader>
          <CardTitle className="text-primary">
            Percentual da Renda Comprometida
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Entre jogadores problemáticos
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={incomeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 15%, 88%)" />
              <XAxis 
                dataKey="range" 
                tick={{ fill: "hsl(210, 100%, 20%)" }}
                style={{ fontSize: "0.75rem" }}
              />
              <YAxis 
                tick={{ fill: "hsl(210, 100%, 20%)" }}
                style={{ fontSize: "0.75rem" }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(200, 15%, 88%)",
                  borderRadius: "0.5rem",
                }}
              />
              <Bar dataKey="value" fill="hsl(11, 100%, 60%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card border-2">
        <CardHeader>
          <CardTitle className="text-primary">Áreas Mais Afetadas</CardTitle>
          <p className="text-sm text-muted-foreground">
            Distribuição do impacto na vida do apostador
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={affectedAreasData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {affectedAreasData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(200, 15%, 88%)",
                  borderRadius: "0.5rem",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card border-2 lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-primary">
            Crescimento de Apostadores Online
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Milhões de usuários ativos nos últimos anos
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 15%, 88%)" />
              <XAxis 
                dataKey="year" 
                tick={{ fill: "hsl(210, 100%, 20%)" }}
              />
              <YAxis 
                tick={{ fill: "hsl(210, 100%, 20%)" }}
                label={{ value: "Milhões", angle: -90, position: "insideLeft" }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(200, 15%, 88%)",
                  borderRadius: "0.5rem",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="users"
                stroke="hsl(6, 63%, 46%)"
                strokeWidth={3}
                name="Usuários"
                dot={{ fill: "hsl(6, 63%, 46%)", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
