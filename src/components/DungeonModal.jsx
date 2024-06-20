import { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function DungeonModal({ title, video }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="dungeon__link-container" onClick={handleOpen}>
        <p className="dungeon__link">{title}</p>
      </div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle
          id="alert-dialog-title"
          className="shadow-lg mb-24 quest__title"
          style={{
            textAlign: "center",
            fontSize: "3rem",
            color: "#4dabf7",
            fontWeight: "600",
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent>
          <p className="quest__video-title">Tutorial</p>
          <div className="quest__video-container">
            <video
              src={`/videos/${video}`}
              controls
              className="quest__video"
            ></video>
            <p className="quest__video-credits">
              Video from:{" "}
              <Link to="https://x.com/karelvuong" target="_blank">
                @karelvuong
              </Link>
            </p>
          </div>

          <div className="quest__xmark-container" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} className="quest__xmark" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
