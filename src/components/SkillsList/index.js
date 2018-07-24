import React from 'react';
import PropTypes from 'prop-types';

import s from './SkillsList.module.scss';
import Row from '../Row';
import Column from '../Column';

const SkillsList = ({ list }) => (
  <Row>
    <Column xsmall={12} large={10} xlarge={8} xsmallCentered>
      {
        list.map(skill => (
          <div key={skill.name} className={s.skill}>
            <img src={`/icons/${skill.icon}`} alt={skill.name} className={s.icon} />
            <span className={s.name}>{ skill.name }</span>
            {
              skill.subtext ?
                <span className={s.subtext}>{ skill.subtext }</span>
                :
                null
            }
            <span className={s.highlight} style={{ backgroundColor: skill.color }} />
          </div>
        ))
      }
    </Column>
  </Row>
);

SkillsList.propTypes = {
  list: PropTypes.array,
};

SkillsList.defaultProps = {
  list: [],
};

export default SkillsList;
