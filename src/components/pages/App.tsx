import './App.css'

export const App = () => {
  return (
    <div>
      {/* Titelzeile */}
      <div className="bg-teal-600 py-4 px-20 text-5xl font font-semibold text-white">
        Todo App
      </div>
      <div className="py-4 px-10 bg-teal-100 min-h-screen">
        {/* DAS IST DAS FORM FIELD mit Checkbox darunter */}
        <div className="flex flex-col items-center">
          <div className="Flex flex-col">
            <div className="mt-10 text-2xl w-fit">
              <input
                className="p-2 border-4 border-teal-600"
                type="text"
                placeholder="Aufgabe..."
              />
              <button
                className="p-2 border-4 border-teal-400 bg-teal-400 text-white"
                type="button"
              >
                Hinzufügen
              </button>
            </div>

            {/* Alle anzeigen Checkbox und Text */}
            <div className="flex mt-2 mb-10">
              <div className="flex justify-items-start">
                <div className="pt-2 flex h-5 items-center">
                  <input
                    id="add"
                    name="add_task"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-2 text-xl">
                  <label
                    htmlFor="add_task"
                    className="font-medium text-gray-500"
                  >
                    Alle anzeigen
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Das ist ein Todo*/}
          <div className="flex justify-between items-center mb-4 w-3/5">
            <div className="flex">
              <div className="flex h-5 items-center">
                <input
                  id="add"
                  name="completed"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="pl-4 text-xl">⚡⚡⚡</div>
              <div className=" text-2xl">
                <label
                  htmlFor="completed"
                  className="pl-4 font-medium text-gray-700"
                >
                  Wohnung putzen
                </label>
              </div>
            </div>
            <button
              className="w-fit ml-4 p-2 border-4 border-teal-400 bg-teal-400 text-2xl text-white"
              type="button"
            >
              Löschen
            </button>
          </div>

          {/* Ein gelöschtes Todo mit durchgestrichenem Text */}
          <div className="flex justify-between items-center mb-4 w-3/5">
            <div className="flex">
              <div className="flex h-5 items-center">
                <input
                  id="add"
                  name="completed"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="pl-4 text-xl">⚡⚡⚡</div>
              <div className=" text-2xl">
                <label
                  htmlFor="completed"
                  className="pl-4 font-medium line-through text-gray-400"
                >
                  Web Engineering Assigment abgeben
                </label>
              </div>
            </div>
            <button
              className="w-fit ml-4 p-2 border-4 border-teal-400 bg-teal-400 text-2xl text-white"
              type="button"
            >
              Löschen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
