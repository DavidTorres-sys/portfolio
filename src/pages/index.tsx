import Section from "@/components/templates/section/index";
import SideBar from "@/components/organisms/sidebar/index"

export default function Home() {
  return (
    <div className="flex justify-center items-start h-screen overflow-y-scroll">
      <div className="m-1 sticky top-0 h-screen">
        <SideBar />
      </div>
      <div className="w-screen bg-gray1 flex flex-col items-center gap-10">
        <Section />
      </div>
    </div>
  );
}
