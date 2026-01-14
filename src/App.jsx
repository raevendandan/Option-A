import { Ytnav } from "./components/Ytnav";
import { Video } from "./components/Video";
import { Info } from "./components/Info";
import { Recommend } from "./components/Recommend";


export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Ytnav />

      <div className="flex pt-16">
  
        <main className="flex-1 px-6">
          <Video />
          <Info />
    </main>
        <aside className="w-[380px] hidden lg:block pr-6">
          <Recommend />
        </aside>
      </div>
    </div>
  );
}
