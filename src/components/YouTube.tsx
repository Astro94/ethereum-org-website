import React from "react"
import styled from "styled-components"

const Figure = styled.figure`
  display: block;
  margin: 1rem 0;
`

const getYouTubeUrl = (id: string, start: string, end: string): string => {
  const baseUrl: string = "https://www.youtube.com/embed/"

  if (start === "0" && end === "0") {
    return `${baseUrl}${id}`
  } else if (end === "0") {
    return `${baseUrl}${id}?start=${start}}`
  } else {
    return `${baseUrl}${id}?start=${start}&end=${end}`
  }
}

export interface IProps {
  id: string
  start?: string
  end?: string
  title?: string
}

/**
 * @param {id} ID of the YouTube video
 * URLs come in format: https://www.youtube.com/watch?v=<id> or https://www.youtube.com/embed/<id>
 * e.g. For https://www.youtube.com/watch?v=H-O3r2YMWJ4 the `id` is H-O3r2YMWJ4
 * @param {start} Start time of the video in seconds
 * URLs come in format: https://www.youtube.com/watch?v=<id>&t=<start> or: https://www.youtube.com/embed/<id>?start=<start>
 * e.g. For https://www.youtube.com/watch?v=H-O3r2YMWJ4&t=123 the `start` is 123 (which means 123 seconds)
 * @returns Embedded YouTube video component
 */
const YouTube: React.FC<IProps> = ({ id, start = "0", end = "0", title }) => {
  const src: string = getYouTubeUrl(id, start, end)

  return (
    <Figure>
      <iframe
        width="100%"
        height="315"
        src={src}
        frameBorder="0"
        title={title || "YouTube"}
        allow="
      accelerometer;
      autoplay;
      clipboard-write;
      encrypted-media;
      gyroscope;
      picture-in-picture"
        allowFullScreen
      ></iframe>
    </Figure>
  )
}

export default YouTube
