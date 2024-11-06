"use client";

import Video from "@/components/Video";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
        <h1 className="text-4xl font-bold text-center">Marta Kokotko</h1>
      </main>

      <Separator className="my-10" />

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

      <Separator className="my-10" />

      <div className="text-xl text-center">Made with love {"<3"}</div>
    </div>
  );
}
