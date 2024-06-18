import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  IconButton,
  styled,
  tooltipClasses,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function QuestModal({ size, icon, title, text, video, active }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log("Opening dialog");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Closing dialog");
    setOpen(false);
  };

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: "2em",
    },
    [`& .${tooltipClasses.popper}`]: {
      transform: "translateY(-8px)",
    },
  }));

  const CustomIconButton = styled(IconButton)(({ theme }) => ({
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
  }));

  return (
    <>
      <CustomTooltip title={title} className="index-1000">
        <CustomIconButton aria-label="edit" size="small" onClick={handleOpen}>
          <img src={icon} alt="icon" style={{ width: size, height: size }} />
        </CustomIconButton>
      </CustomTooltip>

      {active && (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
          <DialogTitle
            id="alert-dialog-title"
            className="shadow-lg mb-24"
            style={{
              textAlign: "center",
              fontSize: "3rem",
              color: "#77b7e2",
              fontWeight: "600",
            }}
          >
            {title}
          </DialogTitle>
          <DialogTitle
            id="alert-dialog-title"
            className="shadow-lg mb-24"
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            {text}
          </DialogTitle>
          <DialogContent>
            {video && (
              <div className="quest__video-container">
                <video
                  src={`/videos/${video}`}
                  controls
                  className="quest__video"
                ></video>
                <p>
                  Video from:{" "}
                  <Link to="https://x.com/karelvuong" target="_blank">
                    @karelvuong
                  </Link>
                </p>
              </div>
            )}

            <div className="mt-4">
              <DialogActions>
                <div className="intro__btn-event btn-sm" onClick={handleClose}>
                  <span>Close</span>
                </div>
              </DialogActions>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
