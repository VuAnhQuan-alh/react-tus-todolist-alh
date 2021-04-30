import React from 'react';

class Items extends React.Component {
  state = {
    onEdit: false,
    editVal: this.props.item
  };
  myRef = React.createRef();
  onRemove = () => {
    this.myRef.current.className = "active";
    setTimeout(() => {
      this.props.handleDelete();
    }, 200);
  };
  handleEditVal = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  onEdit = () => {
    this.setState({ onEdit: true });
  };
  handleCancel = () => {
    const { editVal } = this.state;
    if (editVal === "") {
      this.setState({ editVal: this.props.item });
    }
    this.setState({ onEdit: false });
  };
  handleSave = () => {
    const { handleEdit, id } = this.props;
    const { editVal } = this.state;
    if (editVal === "") {
      this.setState({ editVal: this.props.item });
    } else {
      handleEdit(editVal, id);
    }
    this.setState({ onEdit: false });
  }

  render() {
    const { item } = this.props;
    if (this.state.onEdit) {
      return (
        <li>
          <input type="text"
            value={this.state.editVal}
            name="editVal"
            id="editVal"
            onChange={this.handleEditVal}
          />
          <div>
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={this.handleSave}
            >
              <path d="M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z" />
              <path d="M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={this.handleCancel}
            >
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </li>
      );
    } else {
      return (
        <li ref={this.myRef}>{item}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={this.onEdit}
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={this.onRemove}
            >
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </li>
      );
    }
  }
}

export default Items;