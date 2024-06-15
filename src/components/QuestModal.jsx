import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Tooltip,
  IconButton,
} from "@mui/material";

export default function QuestModal({ icon, title, text, video }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    console.log("Opening dialog");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Closing dialog");
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={title} className="index-1000">
        <IconButton aria-label="edit" size="small" onClick={handleOpen}>
          <img src={icon} alt="icon" style={{ width: 60, height: 60 }} />
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle id="alert-dialog-title" className="shadow-lg mb-24">
          {text}
        </DialogTitle>
        <DialogContent>
          <div>{video}</div>

          <div className="mt-4">
            <DialogActions>
              <Button
                className="px-24 py-6 rounded"
                onClick={handleClose}
                color="primary"
              >
                Cancelar
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="px-24 py-6 rounded"
                disabled={loading}
              >
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
                    "Guardar"
                  )}
                </div>
              </Button>
            </DialogActions>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
