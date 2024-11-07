"use client";

import SocialLinks from "@/components/social-links";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Video from "@/components/video";
import { pacificoFont } from "./fonts";

const videos = [
  {
    id: "1",
    title: "Negev",
    description: "Cool animation of big gun.",
    fileName: "Negev_Reload",
  },
  {
    id: "2",
    title: "Negev",
    description: "Cool animation of big gun.",
    fileName: "Negev_Reload",
  },
  {
    id: "3",
    title: "Negev",
    description: "Cool animation of big gun.",
    fileName: "Negev_Reload",
  },
  {
    id: "4",
    title: "Negev",
    description: "Cool animation of big gun.",
    fileName: "Negev_Reload",
  },
];

export default function VideoPortfolio() {
  return (
    <div className="container mx-auto py-12">
      <main>
        <h1
          className={`${pacificoFont.className} bg-[url('/gradient.jpg')] bg-center bg-clip-text text-transparent -rotate-3 text-6xl font-bold text-center`}
        >
          Marta Kokotko
        </h1>

        <div className="text-xl text-center my-5">Proffesional animator and 3d artist</div>
      </main>

      <SocialLinks />

      <h2 className="text-3xl text-center my-5"> Portfolio </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <CardContent className="p-0">
              <Video url={`videos/${video.fileName}.mp4`} />
            </CardContent>
            <CardHeader>
              <CardTitle>{video.title}</CardTitle>
              <CardDescription>{video.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <SocialLinks />

      <div className={`${pacificoFont.className} text-xl  text-center`}>Made with love {"<3"} </div>
    </div>
  );
}
