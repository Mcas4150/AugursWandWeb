import React from "react";
import { ColorLink, Subtext, Subhead, HeaderTitle, DiagramImage, TourDate } from "./shared/shared";
import tourDates from "./data/dates.json";

const Augurs = "/imgs/AugursWand4.jpg";

export default function AugursWand() {
  return (
    <div className="augurs-container">
      <Subhead>
        <HeaderTitle>Augurs Wand</HeaderTitle>
      </Subhead>
      <Subtext>
        <p>
          Augurs Wand is the visual music duo of <ColorLink href="https://mikecassidy.io">Mike Cassidy</ColorLink> and composer{" "}
          <ColorLink href="https://kristiannorth.com">Kristian North</ColorLink>
          . Powered by the three-laser Cerberus system and the{" "}
          <ColorLink href="https://www.mikecassidy.io/software/phosphene">
            Phosphene
          </ColorLink>{" "}
          synthesis environment, the project unifies sound, form, and color into
          a synesthetic language of audiovisual ritual.
        </p>

        <DiagramImage src={Augurs} alt="Augurs Wand Performing" />{" "}

        <div className="tour-dates-list">
          {tourDates.map((date, index) => (
            <TourDate key={index} {...date} />
          ))}
        </div>
      </Subtext>
    </div>
  );
}
