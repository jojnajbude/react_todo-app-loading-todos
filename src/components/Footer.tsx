import React from 'react';
import classNames from 'classnames';
import { FilterBy } from '../types/FilterBy';

type Props = {
  leftTodos: number,
  filterBy: FilterBy,
  setFilterBy: React.Dispatch<React.SetStateAction<FilterBy>>,
};

export const Footer: React.FC<Props> = ({
  leftTodos,
  filterBy,
  setFilterBy,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="todosCounter">
        {`${leftTodos} items left`}
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          data-cy="FilterLinkAll"
          href="#/"
          className={classNames(
            'filter__link',
            {
              selected: filterBy === FilterBy.All,
            },
          )}
          onClick={() => setFilterBy(FilterBy.All)}
        >
          All
        </a>

        <a
          data-cy="FilterLinkActive"
          href="#/active"
          className={classNames(
            'filter__link',
            {
              selected: filterBy === FilterBy.Active,
            },
          )}
          onClick={() => setFilterBy(FilterBy.Active)}
        >
          Active
        </a>
        <a
          data-cy="FilterLinkCompleted"
          href="#/completed"
          className={classNames(
            'filter__link',
            {
              selected: filterBy === FilterBy.Completed,
            },
          )}
          onClick={() => setFilterBy(FilterBy.Completed)}
        >
          Completed
        </a>
      </nav>

      <button
        data-cy="ClearCompletedButton"
        type="button"
        className="todoapp__clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
};
