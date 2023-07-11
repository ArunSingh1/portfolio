import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 10,
    label: '10',
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderLabel() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Disabled slider"
        defaultValue={8}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}