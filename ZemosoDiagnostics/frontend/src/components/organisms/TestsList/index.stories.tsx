import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TestsList } from '.';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Organisms/TestsList',
  component: TestsList
} as ComponentMeta<typeof TestsList>;

export const testsList: ComponentStory<typeof TestsList> = () => <TestsList />;
