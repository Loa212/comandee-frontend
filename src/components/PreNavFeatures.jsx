import { MdOutlineInsertChartOutlined, MdOutlineSmartphone, MdPlaylistAddCheck } from "react-icons/md"

const PreNavFeatures = () => {
  return (
    <div className="hidden static lg:block bg-[#F4F5F7] text-[#454545] text-opacity-60 h-9 py-5 w-full">
    <div className="mx-auto max-w-5xl px-6 h-full flex justify-between items-center">
      <div className="flex space-x-1 items-center">
        <MdOutlineSmartphone className=""/>
        <p>Setup facile e veloce</p>
      </div>
      <div className="flex space-x-1 items-center">
        <MdPlaylistAddCheck className="text-2xl"/>
        <p>Menu personalizzabile</p>
      </div>

      <div className="flex space-x-1 items-center">
        <MdOutlineInsertChartOutlined className="text-xl"/>
        <p>Analisi vendite in tempo reale</p>
      </div>
    </div>

  </div>
  )
}

export default PreNavFeatures