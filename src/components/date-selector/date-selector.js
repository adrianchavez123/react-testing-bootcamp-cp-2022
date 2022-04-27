import React from 'react';
import Button from '../button';
import { DateSelectorContainer, InputDateContainer } from './date-selector-container.styles';

const DateSelector = ({ date, handleRefeshimage, handleDateChange }) => {
	return (
		<DateSelectorContainer>
			<InputDateContainer>
				<label htmlFor='date-selector'>Select a date</label>
				<input id='date-selector' type='date' value={date} onChange={handleDateChange} />
			</InputDateContainer>
			<Button handleOnClick={handleRefeshimage}>Today&apos;s picture</Button>
		</DateSelectorContainer>
	);
};

export default DateSelector;
