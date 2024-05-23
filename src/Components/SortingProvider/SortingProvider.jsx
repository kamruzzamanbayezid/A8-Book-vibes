import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const SortingContext = createContext();

export const SortingProvider = ({ children }) => {
      const [sortingCriteria, setSortingCriteria] = useState('all');

      return (
            <SortingContext.Provider value={{ sortingCriteria, setSortingCriteria }}>
                  {children}
            </SortingContext.Provider>
      );
};

SortingProvider.propTypes = {
      children: PropTypes.node
}
