import { ComponentStory } from '@storybook/react';
import React from 'react';
import { filterConstants, filterItem } from '../../../messages';
import Filter from './Filter';

export default {
  title: 'Organisms/Filter'
};
const Template: ComponentStory<typeof Filter> = () => (
  <Filter
    handleFilterButton={function (): void {
      throw new Error('Function not implemented.');
    }}
    filterConstants={filterConstants}
    openModal={false}
    handleCloseModal={function (): void {
      throw new Error('Function not implemented.');
    }}
    handleFilteredValues={function (list: string[]): void {
      throw new Error('Function not implemented.');
    }}
    handleClearFilters={function (): void {
      throw new Error('Function not implemented.');
    }}
    handleChecked={function (
      position: number,
      array: filterItem[],
      arrayName: string
    ): void {
      throw new Error('Function not implemented.');
    }}
    handleSaveFilters={function (): void {
      throw new Error('Function not implemented.');
    }}
  />
);

export const filter = Template.bind({});
