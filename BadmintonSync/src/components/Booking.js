import { TextField, MenuItem, Select, Button, Autocomplete } from "@mui/material";
import PropTypes from "prop-types";
import "./Booking.css";

const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]; // Example locations

const Booking = ({ className = "" }) => {
  return (
    <div className={`booking ${className}`}>

      <div className="booking-inputs">
        <div className="input-group">
          <Autocomplete
            className="input-field"
            options={locations}
            renderInput={(params) => (
              <TextField {...params} label="Enter or select location" variant="outlined" fullWidth />
            )}
            freeSolo
          />
        </div>

        <div className="input-group">
          <TextField
            className="input-field"
            name="Date"
            label="Any day"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </div>

        <div className="input-group">
          <TextField
            className="input-field"
            name="Time"
            label="Any time"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </div>

        <div className="input-group">
          <Select
            className="input-field"
            name="Duration"
            label="Any duration"
            fullWidth
            defaultValue=""
          >
            <MenuItem value="">
              <em>Any duration</em>
            </MenuItem>
            <MenuItem value={30}>30 minutes</MenuItem>
            <MenuItem value={60}>1 hour</MenuItem>
            <MenuItem value={90}>1.5 hours</MenuItem>
          </Select>
        </div>
      </div>

      <Button 
        className="search-button" 
        variant="contained" 
        style={{ backgroundColor: 'black' }}
      >
        Search
      </Button>
    </div>
  );
};

Booking.propTypes = {
  className: PropTypes.string,
};

export default Booking;
