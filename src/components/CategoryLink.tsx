import { MdArrowForward } from "react-icons/md";

const CategoryLink = ({MenuCategories, handleClick}) => {
  return (
      <>
        {MenuCategories.map((el) => {
            return (
            <li key={el.title} className="w-full">
                <button
                className="btn-ghost"
                onClick={() => handleClick(el.to)}
                >
                <div className="flex items-center space-x-2">
                    <p className="text-rose-700 font-medium tracking-wide min-w-[140px] text-justify">
                    {el.title.split(" ")[0]}
                    </p>
                    <MdArrowForward className="text-xl text-rose-700" />
                </div>
                </button>
            </li>
            );
        })}
      </>
  )
}

export default CategoryLink