"use client";
import Hidden from "@/Components/Hidden";
import { Loads } from "@/Components/Loads";
import {
  ALGORITHMS,
  BACKEND_TECHS,
  DATABASES,
  FRONTEND_TECHS,
  WEEK_OPTIONS,
} from "@/utils/Data";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

const HOURLY_RATE = 100;

interface Tech {
  name: string;
  time: number;
}

  const Page = () => {
  const [loading, setLoading] = useState(true);
  const [frontendTech, setFrontendTech] = useState<string>("");
  const [backendTech, setBackendTech] = useState<string>("");
  const [database, setDatabase] = useState<string>("");
  const [algorithm, setAlgorithm] = useState<string>("");
  const [week, setWeek] = useState<string>("");
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const frontendTime =FRONTEND_TECHS.find((tech) => tech.name === frontendTech)?.time || 0;
    const backendTime =BACKEND_TECHS.find((tech) => tech.name === backendTech)?.time || 0;
    const databaseTime =DATABASES.find((db) => db.name === database)?.time || 0;
    const algorithmTime =ALGORITHMS.find((algo) => algo.name === algorithm)?.time || 0;
    const WeekTime = WEEK_OPTIONS.find((weeks) => weeks.name === week)?.time || 0;
    const totalTime =frontendTime + backendTime + databaseTime + algorithmTime + WeekTime;

    const cost = totalTime * HOURLY_RATE;
    setEstimatedCost(cost);
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loads />
        </div>
      ) : (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-2 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
              Project Cost Estimator
            </h1>
            <form className="space-y-4" method="post" onSubmit={handleSubmit}>
              <div className="">
                <input type="hidden" name="access_key" />
              </div>
              {/* Frontend Technology */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Frontend Technology
                </label>
                <select
                  value={frontendTech}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setFrontendTech(e.target.value)
                  }
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Frontend</option>
                  {FRONTEND_TECHS.map((tech: Tech) => (
                    <option key={tech.name} value={tech.name}>
                      {tech.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Backend Technology */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Backend Technology
                </label>
                <select
                  value={backendTech}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setBackendTech(e.target.value)
                  }
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Backend</option>
                  {BACKEND_TECHS.map((tech: Tech) => (
                    <option key={tech.name} value={tech.name}>
                      {tech.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Database */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Database
                </label>
                <select
                  value={database}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setDatabase(e.target.value)
                  }
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Database</option>
                  {DATABASES.map((db: Tech) => (
                    <option key={db.name} value={db.name}>
                      {db.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Algorithm Complexity */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Algorithm Complexity
                </label>
                <select
                  value={algorithm}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setAlgorithm(e.target.value)
                  }
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Algorithm Complexity</option>
                  {ALGORITHMS.map((algo: Tech) => (
                    <option key={algo.name} value={algo.name}>
                      {algo.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Timeline */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Deadline
                </label>
                <select
                  value={week}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setWeek(e.target.value)
                  }
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Deadline</option>
                  {WEEK_OPTIONS.map((week: Tech) => (
                    <option key={week.name} value={week.name}>
                      {week.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                <input
                  type="hidden"
                  name="redirect"
                  value="https://alexbhusal.vercel.app"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Calculate Estimate
                </button>
              </div>
            </form>

            {/* Display the estimated cost */}
            {estimatedCost !== null && <Hidden estimatedCost={estimatedCost} />}
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
