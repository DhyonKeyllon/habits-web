import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";
import copyIcon from "./assets/copy-icon.svg";
// import { Habit } from "./components/Habit";

import "./styles/global.css";
import { AlertComponent } from "./components/Alert";

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <AlertComponent
          alertType="INFORMATION"
          title="Alerta"
          content="Isso é um alerta"
        />
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}
