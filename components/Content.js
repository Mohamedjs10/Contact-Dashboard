import * as React from "react";
import OurTeam from "./contents/OurTeam";
import OurDirectors from "./contents/OurDirectors";
import MediaEvents from "./contents/MediaEvents";
import MediaNews from "./contents/MediaNews";
import { useSelector } from "react-redux";
export default function Content() {
  const tab = useSelector((state) => state.tab.tab);
  return tab == "Our Team" ? (
    <OurTeam></OurTeam>
  ) : tab == "Our Directors" ? (
    <OurDirectors></OurDirectors>
  ) : tab == "Media News" ? (
    <MediaNews></MediaNews>
  ) : (
    <MediaEvents></MediaEvents>
  );
}
