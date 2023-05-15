import React, {useState, useEffect, useRef} from 'react'
import { ChevronRightRounded, ArrowBackRounded } from '@mui/icons-material';

function useOutsideAlerter(ref, func) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        func(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, func]);
}

export default function NestedFilterDropDown({categories}) {
  const [value, setValue] = useState("");
  const [dropShowing, setDropShowing] = useState(false);
  const [dropActive, setDropActive] = useState(false);
  const [selectedPath, setSelectedPath] = useState([]);
  const [currentCategories, setCurrentCategories] = useState(categories);
  const [pastCategories, setPastCategories] = useState([])

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setDropActive);

  const handleItemClick = (item) => {
    setSelectedPath([...selectedPath, item.name])
    let s = "";
    for (let i=0; i<selectedPath.length; i++) {
      s=s+selectedPath[i];
      s=s+" > ";
    }
    s=s+item.name
    // let s = selectedPath.join(" > ")
    if (!item.subcategories) {
      setCurrentCategories([])
    } else {
      setCurrentCategories(item.subcategories)
    }
    setPastCategories([...pastCategories, currentCategories])
    setValue(s)
  }

  const handleBack = () => {
    setCurrentCategories(pastCategories[pastCategories.length-1])
    setPastCategories(pastCategories.slice(0, pastCategories.length-1))
    setSelectedPath(selectedPath.slice(0, selectedPath.length-1))
    let s = "";
    for (let i=0; i<selectedPath.length-1; i++) {
      s=s+selectedPath[i];
      if (i!==selectedPath.length-2)
      s=s+" > ";
    }
    setValue(s)
  }

  return (
    <div className="mt-1">
      <div ref={wrapperRef} className="relative">
        <div className='relative w-full mt-1 xl:mt-1.5'>
          <input
            readOnly
            type="text"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            className={`w-full border-[1px] border-black py-1.5 pr-6 px-3 ${(dropActive || dropShowing) ? "rounded rounded-b-none" : "rounded"}`}
            placeholder='Type to search'
            onFocus={() => {setDropShowing(true);setDropActive(true)}}
            onBlur={() => {if (!dropActive) {setDropShowing(false)}}}
          />
          <span className={`transition-all mr-1 duration-300 absolute right-0 top-1/2 -translate-y-1/2 ${(dropActive || dropShowing) ? "-rotate-90" : "rotate-0"}`}>
            <ChevronRightRounded />
          </span>
        </div>
        <div className={`flex-col absolute w-full border-[1px] rounded rounded-t-none border-black bg-white ${(dropActive) ? "flex" : "hidden"}`}>
          {(currentCategories && selectedPath.length) ? (
            <div className='relative py-1.5 font-medium border-b-[1px] last:border-b-[0px] border-black px-3 flex'>
              <ArrowBackRounded onClick={handleBack} className='mr-3 cursor-pointer' />
              <div>
                <p className='font-bold'>{selectedPath[selectedPath.length-1]}</p>
                <p className='text-sm'>{selectedPath.join(" > ")}</p>
              </div>
              <span className={`transition-all mr-1 duration-300 absolute rotate-90 right-0 top-1/2 -translate-y-1/2 ${currentCategories.length ? "block" : "hidden"}`}>
                <ChevronRightRounded />
              </span>
            </div>
          ):null}
          {currentCategories?.map((e, i) => {
            return (
              <div key={`cat${i}`} onClick={() => handleItemClick(e)} className='relative cursor-pointer py-1.5 font-medium border-b-[1px] last:border-b-[0px] border-black px-3'>
                <p>{e.name}</p>
                <span className={`transition-all mr-1 duration-300 absolute right-0 top-1/2 -translate-y-1/2 ${(e.subcategories && e.subcategories.length) ? "block" : "hidden"}`}>
                  <ChevronRightRounded />
                </span>
              </div>
            )
          })}
        </div>
      </div>
      {/* {dropShowing ? "hello" : "bye"} */}
    </div>
  );
}
