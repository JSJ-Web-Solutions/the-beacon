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

export default function QuestModal({ size, icon, title, text, video }) {
  const [open, setOpen] = useState(false);
  //   const [loading, setLoading] = useState(false); //

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
  }));
  return (
    <>
      <CustomTooltip title={title} className="index-1000">
        <IconButton aria-label="edit" size="small" onClick={handleOpen}>
          <img
            src={icon}
            alt="icon"
            style={{ width: { size }, height: { size } }}
          />
        </IconButton>
      </CustomTooltip>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle id="alert-dialog-title" className="shadow-lg mb-24">
          {text}
        </DialogTitle>
        <DialogContent>
          <div>{video}</div>

          <div className="mt-4">
            <DialogActions>
              {/* <Button
                className="px-24 py-6 rounded intro__btn-event"
                onClick={handleClose}
                color="primary"
              >
                Cancelar
              </Button> */}
              <div class="intro__btn-event btn-sm" onClick={handleClose}>
                {/* <Link onClick={handleClose}>Cancelar</Link> */}
                <span>Cancelar</span>
              </div>
              <div class="intro__btn-play btn-sm" onClick={handleClose}>
                <span>Guardar</span>
              </div>
              {/* <div>
                <div
                  style={{
                    width: "55px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {loading ? (
                    <CircularProgress className="text-white" size={20} />
                  ) : (
                    <div class="intro__btn-play" onClick={handleClose}>
                      <span>Guardar</span>
                    </div>
                  )}
                </div> */}
              {/* </div> */}
            </DialogActions>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
