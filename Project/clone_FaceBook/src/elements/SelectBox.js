import React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const gender = [
  '여성:"생일을 축하해주세요!"',
  '남성:"생일을 축하해주세요!"',
  '여러 명:"생일을 축하해주세요!"',
];

export default function MultipleSelectPlaceholder({option}) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{...option}}>
        <Select
          sx={{ width: '100%' }}
          size='small'
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p>회원님을 어떻게 지칭할지 선택하세요</p>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <div style={{width:'100%', backgroundColor:'gray'}}>
            <p>회원님을 어떻게 지칭할지 선택하세요</p>
            </div>
          </MenuItem>
          {gender.map((gender) => (
            <MenuItem
              key={gender}
              value={gender}
            >
              {gender}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}