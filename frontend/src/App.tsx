import { useState } from "react";
import axios from "axios";
import api from "./lib/axios";

function App() {
  const [healthStatus, setHealthStatus] = useState<string>("");

  const checkHealth = async () => {
    try {
      const response = await api.get("/api/todo/health");
      setHealthStatus(response.data.status);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setHealthStatus(`Error: ${error.message}`);
      } else {
        setHealthStatus("An unexpected error occured");
      }
      setHealthStatus("error");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold underline">Hello!</h1>
      <button className="btn btn-primary mt-4" onClick={checkHealth}>
        Check Health
      </button>
      {healthStatus && (
        <div className="mt-4 p-4 bg-base-200 rounded-lg">
          Health Status: <span data-testid="health-result">{healthStatus}</span>
        </div>
      )}
    </div>
  );
}

export default App;
