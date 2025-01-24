import HomePageVideos from "@/components/HomePageVideos"

export default async function VideoPage({
    params,
  }: {
    params: Promise<{ id: number }>
  }) {
    return (
        <div className="w-full h-screen text-white flex">
          <div className="flex flex-col w-3/4">
            <div className="outline flex justify-center h-2/3">
              <img src="https://picsum.photos/id/237/450" alt="img" />
            </div>
            <div className="w-full py-4 px-4 border-b flex justify-between items-center">
              Youtube
              <span className="bg-white text-black p-2 rounded-md">subscribe</span>
              
            </div>
            <h4>Description</h4>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestias iste perferendis in, rem mollitia repudiandae id soluta quos dicta et cum praesentium delectus unde voluptatibus quo fuga animi assumenda.</p>
          </div>
          
          <div className="bg-yellow-50 w-1/4">
            <HomePageVideos />
          </div>
        </div>
    )
  }