import React from 'react'
import Items from './Items';

class List extends React.Component {
  render() {
    const { todo, onDelete, onEdit } = this.props;
    return (
      <ul>
        {
          todo.map((item, index) => {
            return <Items item={item.todo}
              key={index}
              id={index}
              handleDelete={() => {onDelete(index)}}
              handleEdit={onEdit}
            />
          })
        }
      </ul>
    );
  };
}

export default List;