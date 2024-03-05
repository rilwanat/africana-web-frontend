import React, { Fragment, useState, useEffect } from 'react';
import Slider from "@mui/material/Slider";

/**
 * Price Filter Widget
 * @returns {*}
 * @constructor
 */
function PriceFilterWidget({handleDataPriceFilter, maxMin, maxMax, updateRange, useFilter}) {
  // const rangeMaxVal = 500;
  const [pageMaxMax, setPageMaxMax] = useState(maxMax);
  const [range, setRange] = useState([0, pageMaxMax]);

  function handleChanges(_, newValue) {
    setRange(newValue);
    updateRange(newValue, false);
  }

  const applyFilter = async () => {

    updateRange(range, true);
    //alert(range[0] + " " + range[1]);
    handleDataPriceFilter("price-filter", 1, range[0], range[1])
  }
  
  useEffect(() => {
    setPageMaxMax(maxMax);
    setRange([0, maxMax]); // Set the initial range to start from 0 and go up to maxMax
  }, [maxMax]);


  return (
    <Fragment>
      <div className="flex flex-col widget widget_price_filter">
        <h3>Filter By Price</h3>
        <div className="filter-price" style={{ backgroundColor: '' }}>
          <div style={{ width: "100%", padding: "0px" }} className=' mx-1'>
            <Slider
            max={maxMax}
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
          <div className='flex flex-col'>
          <div style={{ marginTop: '8px', marginBottom: '10px' }}>Price: {'₦' + 
          range[0].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' - N' + 
          range[1].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
          }
          </div>

          <span className='text-xs h-4' style={{ }}>{useFilter ? 'Price filter applied' : ""}</span>
          

          </div>
          
          <button style={{ marginTop: '30px' }} onClick={()=> applyFilter()}>Filter</button>
        </div>
      </div>
    </Fragment>
  );
}

export default PriceFilterWidget;
