import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function Collapse({
  collapsedLabel, expandedLabel, isExpanded, onExpandedChange, children,
}) {
  const iconClass = isExpanded ? 'Collapse-link__icon icon_close' : 'Collapse-link__icon icon_open';
  const parentRef = useRef();

  return (
    <div className="Collapse">
      <div className="Collapse__container">
        <div className="Collapse__body">
          <div
            className="Collapse__content"
            ref={parentRef}
            style={isExpanded ? { height: `${parentRef.current.scrollHeight}px` } : { height: 0 }}
          >
            {children}
          </div>

          <a
            className="Collapse__link"
            href="#0"
            onClick={onExpandedChange}
          >
            <span className="Collapse-link__text-container">
              <span className="Collapse-link__text">
                {isExpanded ? expandedLabel : collapsedLabel}
              </span>
            </span>
            <span className={iconClass} />
          </a>
        </div>
      </div>
    </div>
  );
}

Collapse.defaultProps = {
  collapsedLabel: 'Развернуть',
  expandedLabel: 'Свернуть',
};

Collapse.propTypes = {
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
  isExpanded: PropTypes.bool.isRequired,
  onExpandedChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
