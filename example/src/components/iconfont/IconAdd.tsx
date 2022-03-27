/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconAdd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M914.00871781 344.7326075c-21.92977125-54.07949437-54.14281125-102.59188312-95.74404562-144.1931175-41.60123438-41.60123438-90.11650125-73.81523344-144.19503563-95.74500469C621.844565 83.61588406 566.66373781 72.87788469 510.06307344 72.87788469c-56.60162438 0-111.7805325 10.73799937-164.00560406 31.91660062-54.07853438 21.92977125-102.59188312 54.14377031-144.19311751 95.74500469-41.60123438 41.60123438-73.81331437 90.11458219-95.74308656 144.1931175C84.94362406 396.95767906 74.20562469 452.13658719 74.20562469 508.7372525c0 56.60162438 10.73799937 111.77957344 31.91660062 164.00560406 21.92977125 54.07853438 54.14185219 102.59188312 95.74308657 144.1931175 41.60123438 41.60123438 90.11458219 73.81331437 144.1931175 95.74404563 52.22507156 21.17764125 107.40493969 31.91660062 164.00560406 31.91660062 56.60066438 0 111.7805325-10.73799937 164.00560406-31.91660062 54.07949437-21.92977125 102.59380125-54.14281125 144.19695469-95.74404563 41.60027531-41.60027531 73.81235531-90.11458219 95.74308656-144.1931175 21.17764125-52.22507156 31.91660062-107.40397969 31.91660062-164.00560406C945.92435937 452.13658719 935.18636 396.95767906 914.00871781 344.7326075zM881.36397125 659.50479219c-20.14825969 49.68663281-49.75858406 94.27432219-88.00689094 132.52263-38.25022594 38.24926688-82.83887531 67.85959125-132.52550812 88.00785094-48.00105562 19.46424281-98.72666344 29.33403188-150.76849875 29.33403187-52.04279531 0-102.76840313-9.86978813-150.76753969-29.33403187-49.68663281-20.14825969-94.27336313-49.75858406-132.52263-88.00689094-38.24926688-38.24926688-67.85863219-82.83695625-88.00785094-132.52358906-19.46520281-48.00009563-29.33403188-98.72570437-29.33403187-150.76753969 0-52.04183531 9.86978813-102.76744406 29.33403187-150.76753969 20.14825969-49.68663281 49.75858406-94.27336313 88.00785094-132.52263 38.24926688-38.25022594 82.83599719-67.86055031 132.52263-88.00976906 48.00009563-19.46520281 98.72570437-29.33499094 150.76753969-29.33499094 52.04183531 0 102.76744406 9.86978813 150.76849875 29.33499094 49.68663281 20.14825969 94.27528125 49.75954313 132.52454812 88.00976906 38.24926688 38.24926688 67.85959125 82.83599719 88.00785094 132.52263 19.46424281 48.00009563 29.33403188 98.72570437 29.33403187 150.76753969C910.69896219 560.77908781 900.82821406 611.50469562 881.36397125 659.50479219z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M791.72138844 490.48658656c-0.01343062 0-0.02782125 0-0.04029281 0l-263.96790938 0.59575594 0.553545-264.51378c0.02014594-9.72780469-7.84939781-17.62900781-17.57624344-17.65011281-0.01343062 0-0.02398406 0-0.03741468 0-9.70957687 0-17.59159312 7.86186938-17.61173907 17.57624344l-0.55450406 264.66727593-264.11756812 0.596715c-9.72780469 0.022065-17.59447125 7.92518719-17.57336532 17.65299094 0.022065 9.71437406 7.90312125 17.57336531 17.61173906 17.57336531 0.01343062 0 0.02782125 0 0.04029282 0l263.96407218-0.59575594-0.553545 264.51761719c-0.02014594 9.72684562 7.84939781 17.62900781 17.57624344 17.64915375 0.01343062 0 0.02398406 0 0.03741469 0 9.70861781 0 17.59159312-7.86186938 17.61173906-17.57624343l0.553545-264.67015407 264.12044625-0.596715c9.72780469-0.022065 17.59543031-7.92518719 17.57336531-17.65299093C809.31106344 498.34557781 801.43096625 490.48658656 791.72138844 490.48658656z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconAdd.defaultProps = {
  size: 18,
};

IconAdd = React.memo ? React.memo(IconAdd) : IconAdd;

export default IconAdd;