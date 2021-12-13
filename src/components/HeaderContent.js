import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import ExpandedDiv from "./ExpandedDiv";

const HeaderContent = () => {
  const [anchorHovered, setAnchorHovered] = useState("");

  const handleHover = (e, value) => {
    e.preventDefault();
    setAnchorHovered(value);
  };

  return (
    <div className={"headerContentWrapper"}>
      <a
        href="https://reactjs.org/docs/getting-started.html"
        className={"navItem"}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={(e) => handleHover(e, "explore")}
      >
        Explore
      </a>
      <a
        href="https://reactjs.org/docs/getting-started.html"
        className={"navItem"}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={(e) => handleHover(e, "myItems")}
      >
        My Items
      </a>
      <a
        href="https://reactjs.org/docs/getting-started.html"
        className={"navItem"}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={(e) => handleHover(e, "network")}
      >
        <ShareIcon />
        <Box sx={{ margin: 1 }}>Network</Box>
        <ExpandMoreIcon className={"expandIcon"} />
      </a>
      <Button variant="contained" className={"createButton"}>
        Create
      </Button>
      <a
        href="https://reactjs.org/docs/getting-started.html"
        className={"navItem"}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={(e) => handleHover(e, "lucy")}
      >
        <AllInclusiveOutlinedIcon />
        <Box sx={{ margin: 1 }}>@Lusky</Box>
        <ExpandMoreIcon className={"expandIcon"} />
      </a>

      {anchorHovered === "network" && <ExpandedDiv />}
    </div>
  );
};

export default HeaderContent;
