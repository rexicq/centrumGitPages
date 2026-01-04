import React from 'react';
import { Container } from './satisfaction.css';
import rgba from 'rgba-convert';
import { Colors } from '../../../constants/theme';
import { Heading1 } from '../../utils/style';
import { BackgroundSection } from '../../utils';

export default ({ bg: { image } }) => {
  return (
    <BackgroundSection
      styleName={'satisfactionsbg'}
      img={image}
      overlayColor={`rgba(${rgba(Colors.primaryColorDarken)
        .splice(1, 3)
        .toString()}, 0.65)`}
    >
      <div>
        <Heading1>ВСЕ ДЛЯ ВАШЕГО УДОБСТВА</Heading1>
      </div>
    </BackgroundSection>
  );
};
