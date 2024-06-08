// How to use:
// <ButtonCard icon={IconlyIcons.Calendar} text={"Manage Healthcare Workers"} image={'https://www.shutterstock.com/image-photo/successful-team-medical-doctors-looking-260nw-582888679.jpg'} bgColor={"blue"} link={"https://example.com"} />

import { useContext } from 'react';

export interface ButtonCardProps {
  bgColor: 'blue' | 'orange' | 'green';
  icon: string;
  image: string;
  text: string;
  link: string;
}

export interface ButtonCardStylesProps {
  bgColor: 'blue' | 'orange' | 'green';
  image: string;
}
