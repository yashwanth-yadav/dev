import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FaqList } from '.';

export default {
  title: 'Molecules/FaqList',
  component: FaqList
} as ComponentMeta<typeof FaqList>;

export const FaqList_: ComponentStory<typeof FaqList> = () => <FaqList />;
