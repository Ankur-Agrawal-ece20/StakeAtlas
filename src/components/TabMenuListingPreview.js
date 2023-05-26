export default function TabMenu({ state, setState, items }) {
    return (
      <div className="flex flex-col border-1-px border-black w-full">
        {/* NavBar */}
        <div className="flex flex-row">
          {Object.keys(items).map((key, index) => {
            return (
              <div id={index} onClick={() => {
                setState(index)
              }} className={index === state ? "flex justify-center items-center w-1/4 border-t border-l border-r border-black cursor-pointer relative text-[14px] 5md:text-base " : `flex justify-center items-center w-1/4 height-auto border-t border-r border-l border-b-[1px] border-b-black border-gray-300 px-1 py cursor-pointer text-[14px] 5md:text-base ${index === state - 1 && "border-r-transparent"} ${index === state + 1 && "flex justify-center items-center w-1/4 height-auto border-l-transparent text-[14px] 5md:text-base"}`}>
                {key}
              </div>
            )
          }
          )}
        </div>
        {/* Tab Content */}
        <div className="w-full flex flex-col border-r border-l border-black px-4 py-3 border-b h-[200px]">
          {Object.values(items)[state]}
        </div>
      </div>
    )
  }
  