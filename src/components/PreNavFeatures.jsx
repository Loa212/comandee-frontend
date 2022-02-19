import {
  MdOutlineInsertChartOutlined,
  MdOutlineSmartphone,
  MdPlaylistAddCheck,
} from "react-icons/md";

const PreNavFeatures = () => {
  return (
    <div className="static hidden h-9 w-full bg-[#F4F5F7] py-5 text-[#454545] text-opacity-60 lg:block">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6">
        <div className="flex items-center space-x-1">
          <MdOutlineSmartphone className="" />
          <p>Setup facile e veloce</p>
        </div>
        <div className="flex items-center space-x-1">
          <MdPlaylistAddCheck className="text-2xl" />
          <p>Menu personalizzabile</p>
        </div>

        <div className="flex items-center space-x-1">
          <MdOutlineInsertChartOutlined className="text-xl" />
          <p>Analisi vendite in tempo reale</p>
        </div>
      </div>
    </div>
  );
};

export default PreNavFeatures;
