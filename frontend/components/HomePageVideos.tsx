"use client"
import { useRouter } from "next/navigation";
import VideoBox from "./VideoBox";

const HomePageVideos = () => {
    const router = useRouter()
    const videos = [
        {
          title: "A mountain",
          thumbnailUrl: "https://picsum.photos/seed/mountain/200",
          duration: "01:00",
          daysAfterPublishing: 2,
        },
        {
          title: "A beach",
          thumbnailUrl: "https://picsum.photos/seed/beach/200",
          duration: "02:30",
          daysAfterPublishing: 5,
        },
        {
          title: "A forest",
          thumbnailUrl: "https://picsum.photos/seed/forest/200",
          duration: "03:45",
          daysAfterPublishing: 10,
        },
        {
          title: "A cityscape",
          thumbnailUrl: "https://picsum.photos/seed/city/200",
          duration: "04:20",
          daysAfterPublishing: 1,
        },
        {
          title: "A desert",
          thumbnailUrl: "https://picsum.photos/seed/desert/200",
          duration: "05:15",
          daysAfterPublishing: 7,
        },
        {
          title: "A mountainadsssssssssssssssss",
          thumbnailUrl: "https://picsum.photos/seed/mountain/200",
          duration: "01:00",
          daysAfterPublishing: 2,
        },
        {
          title: "A beach",
          thumbnailUrl: "https://picsum.photos/seed/beach/200",
          duration: "02:30",
          daysAfterPublishing: 5,
        },
        {
          title: "A forest",
          thumbnailUrl: "https://picsum.photos/seed/forest/200",
          duration: "03:45",
          daysAfterPublishing: 10,
        },
        {
          title: "A cityscape",
          thumbnailUrl: "https://picsum.photos/seed/city/200",
          duration: "04:20",
          daysAfterPublishing: 1,
        },
        {
          title: "A desert",
          thumbnailUrl: "https://picsum.photos/seed/desert/200",
          duration: "05:15",
          daysAfterPublishing: 7,
        },
        {
          title: "A mountain",
          thumbnailUrl: "https://picsum.photos/seed/mountain/200",
          duration: "01:00",
          daysAfterPublishing: 2,
        },
        {
          title: "A beach",
          thumbnailUrl: "https://picsum.photos/seed/beach/200",
          duration: "02:30",
          daysAfterPublishing: 5,
        },
        {
          title: "A forest",
          thumbnailUrl: "https://picsum.photos/seed/forest/200",
          duration: "03:45",
          daysAfterPublishing: 10,
        },
        {
          title: "A cityscape",
          thumbnailUrl: "https://picsum.photos/seed/city/200",
          duration: "04:20",
          daysAfterPublishing: 1,
        },
        {
          title: "A desert",
          thumbnailUrl: "https://picsum.photos/seed/desert/200",
          duration: "05:15",
          daysAfterPublishing: 7,
        },
      ];
    return ( 
        <div className="w-full flex flex-wrap bg-black" onClick={() => router.push("/video/22")}>
      {videos.map((video, index) => (
        <VideoBox
          key={index}
          title={video.title}
          thumbnailUrl={video.thumbnailUrl}
          duration={video.duration}
          daysAfterPublishing={video.daysAfterPublishing}
        />
      ))}
    </div>
     );
}
 
export default HomePageVideos;