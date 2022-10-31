/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormTemplate } from '.';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Templates/FormTemplate',
  component: FormTemplate
} as ComponentMeta<typeof FormTemplate>;

export const formTemplate: ComponentStory<typeof FormTemplate> = () => (
  <FormTemplate  footer={<></>}>{<></>}</FormTemplate>
);
