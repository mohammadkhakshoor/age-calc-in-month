import { useState } from "react";
import { Check, CircleDashed } from "@phosphor-icons/react";
function App() {
  const [expectedYear, setExpectedYear] = useState(80);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);

  const evaluateExpectedAge = expectedYear * 12;
  const ageInMonth = year * 12 + month;

  const handleExpectedAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[0-9]+$/.test(value)) {
      setExpectedYear(value === "" ? "" : +value);
    }
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[0-9]+$/.test(value)) {
      setYear(value === "" ? "" : +value);
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(+e.target.value);
  };

  return (
    <div dir="rtl" className="p-5 md:p-20 bg-svg min-h-screen text-white custom-font">
      <div className="flex flex-col gap-5 items-center justify-between">
        <div className="flex flex-col ">
          <h1 className="text-2xl md:text-5xl">
            تعداد ماه های عمر یک فرد <span className="font-bold text-green-600 underline">{expectedYear}</span> ساله
          </h1>
          <h1 className="md:py-4 text-2xl md:text-5xl">
            از سن شما <span className="underline font-bold"> {ageInMonth}</span> ماه گذشته و{" "}
            <span className="underline font-bold"> {evaluateExpectedAge - ageInMonth}</span> باقی مانده
          </h1>
        </div>

        <div>
          <div className="flex flex-col gap-10 bg-gray-800 rounded-xl p-4">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-xl">سن مورد انتظار</h2>
              <div className="">
                <label className="font-bold text-md" htmlFor="age">
                  سال:
                </label>
                <input
                  value={expectedYear}
                  onChange={handleExpectedAgeChange}
                  className="p-2 rounded-lg w-full bg-gray-700 text-white"
                  id="age"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-xl">سن فعلی شما</h2>
              <div className="flex gap-3">
                <div className="">
                  <label className="font-bold text-md" htmlFor="age">
                    سال:
                  </label>
                  <input
                    value={year}
                    onChange={handleAgeChange}
                    className="p-2 rounded-lg w-full bg-gray-700 text-white"
                    id="age"
                    type="text"
                    min={0}
                    max={80}
                  />
                </div>
                <div className="">
                  <label className="font-bold text-md" htmlFor="month">
                    ماه:
                  </label>
                  <select
                    onChange={handleMonthChange}
                    className="p-2 rounded-lg w-full bg-gray-700 text-white font-sans"
                    name=""
                    id=""
                  >
                    {Array.from({ length: 13 }).map((e, i) => {
                      return (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 gap-2 flex flex-wrap justify-center">
        {Array.from({ length: evaluateExpectedAge }).map((e, i) => {
          return (
            <div
              key={i}
              className={`${i + 1 > ageInMonth ? "text-gray-900 bg-gray-100" : "bg-green-200 text-black"} box`}
            >
              {i + 1 > ageInMonth ? (
                <CircleDashed  size={20} weight="light" />
              ) : (
                <Check size={20} weight="light" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
