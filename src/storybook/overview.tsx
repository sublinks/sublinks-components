import React from "react";
import { Chip, Button } from "../components";

export interface OverviewProps {

}

const Overview = ({}: OverviewProps) => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  }}>
    <Button>Button</Button>
    <Chip>Chip</Chip>
  </div>
);

export default Overview;