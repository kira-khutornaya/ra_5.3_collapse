/* eslint max-len: ["error", { "code": 400 }] */

import React, { useState } from 'react';
import Collapse from './Collapse';

function CollapseManager() {
  const [state, setState] = useState(false);
  const handleExpandedChange = () => setState(!state);

  return (
    <Collapse
      collapsedLabel="Подробнее"
      expandedLabel="Скрыть"
      isExpanded={state}
      onExpandedChange={handleExpandedChange}
    >
      <p>
        Альфа-Банк, основанный в&nbsp;1990 году, является универсальным банком, осуществляющим все основные виды банковских операций, представленных на рынке финансовых услуг, включая обслуживание частных и&nbsp;корпоративных клиентов, инвестиционный банковский бизнес, торговое финансирование и&nbsp;т.д.
      </p>
    </Collapse>
  );
}

export default CollapseManager;
