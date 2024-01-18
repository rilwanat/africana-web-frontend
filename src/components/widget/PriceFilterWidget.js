import React, { Fragment, useState } from 'react';
import Slider from "@mui/material/Slider";

/**
 * Price Filter Widget
 * @returns {*}
 * @constructor
 */
function PriceFilterWidget() {
  const rangeMaxVal = 500;
  const [range, setRange] = useState([205, 420]);

  function handleChanges(_, newValue) {
    setRange(newValue);
  }

  return (
    <Fragment>
      <div className="flex flex-col widget widget_price_filter">
        <h3>Filter By Price</h3>
        <div className="filter-price" style={{ backgroundColor: '' }}>
          <div style={{ width: "100%", padding: "0px" }} className=' mx-1'>
            <Slider
            max={rangeMaxVal}
              value={range}
              onChange={handleChanges}
              valueLabelDisplay="auto"
              sx={{
                color: 'black',
                '& .MuiSlider-thumb': {
                  backgroundColor: 'black',
                  width: 12,
      height: 12,
                },
                '& .MuiSlider-track': {
                  backgroundColor: 'black',
                },
              }}
            />
           
          </div>
          <div style={{ marginTop: '8px', marginBottom: '10px' }}>Price: {'N' + range[0] + ' - N' + range[1]}</div>
          {/* <p style={{ marginBottom: '10px' }}>Price: {'N' + range[0] + ' - N' + range[1]}</p> */}
          <button style={{ marginTop: '30px' }} >Filter</button>
        </div>
      </div>
    </Fragment>
  );
}

export default PriceFilterWidget;
