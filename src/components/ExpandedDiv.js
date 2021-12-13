import React from "react";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import GavelIcon from "@mui/icons-material/Gavel";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import { Box } from "@mui/system";

const ExpandedDiv = () => {
  return (
    <div className={"expandedArea"}>
      <a
        href="https://reactjs.org/docs/getting-started.html"
        className={"expandedNavItem"}
        target="_blank"
        rel="noreferrer"
      >
        <GavelIcon fontSize="small" />
        <Box sx={{ margin: 1 }}>ETH</Box>
      </a>
      <a
        href="https://reactjs.org/docs/getting-started.html"
        className={"expandedNavItem"}
        target="_blank"
        rel="noreferrer"
      >
        <HowToVoteIcon fontSize="small" />
        <Box sx={{ margin: 1 }}>Poligon</Box>
      </a>
      <a
        href="https://reactjs.org/docs/getting-started.html"
        className={"expandedNavItem"}
        target="_blank"
        rel="noreferrer"
      >
        <WhereToVoteIcon fontSize="small" />
        <Box sx={{ margin: 1 }}>Binace Smartchain</Box>
      </a>
    </div>
  );
};

export default ExpandedDiv;
