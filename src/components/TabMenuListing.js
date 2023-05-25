export default function TabMenu({ state, setState, items }) {
    return (
      <div className="flex flex-col border-1-px border-black w-full">
        {/* NavBar */}
        <div className="flex flex-row">
          {Object.keys(items).map((key, index) => {
            return (
              <div id={index} onClick={() => {
                setState(index)
              }} className={index === state ? "border-t border-l border-r border-black px-3 cursor-pointer min-[1560px]:py-3 relative text-[8px]" : `height-auto border-t border-r border-l border-b-[1px] border-b-black min-[1560px]:py-3 border-gray-300 px-3 py cursor-pointer text-[8px] ${index === state - 1 && "border-r-transparent"} ${index === state + 1 && "height-auto border-l-transparent text-[8px]"}`}>
                {key}
              </div>
            )
          }
          )}
        </div>
        {/* Tab Content */}
        <div className="flex flex-col border-r border-l border-black px-4 py-3 border-b h-[25vh]">
          {Object.values(items)[state]}
        </div>
      </div>
    )
  }
  