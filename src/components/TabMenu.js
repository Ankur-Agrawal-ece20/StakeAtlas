export default function TabMenu({ state, setState, items }) {
  return (
    <div className="flex flex-col w-full">
      {/* NavBar */}
      <div className="flex flex-row">
        {Object.keys(items).map((key, index) => {
          return (
            <div id={index} onClick={() => {
              setState(index)
            }} className={index === state ? "border-t border-l border-r border-black px-3 py-2 cursor-pointer relative" : `border-t border-r border-l border-gray-300 px-3 py-2 cursor-pointer ${index === state - 1 && "border-r-transparent"} ${index === state + 1 && "border-l-transparent"}`}>
              {key}
              <div className="absolute -bottom-2 bg-white w-full h-2 left-0" />
            </div>
          )
        }
        )}
      </div>
      {/* Tab Content */}
      <div className="flex flex-col border-r border-l border-b border-black px-4 py-3 border-t">
        {Object.values(items)[state]}
      </div>
    </div>
  )
}
