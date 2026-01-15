  import React, { Component } from "react";

  class PaginationComponent extends Component {
    constructor(props) {
      super(props);

      // create 30 objects
      const items = Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: `Item ${index + 1}`,
      }));

      this.state = {
        items,
        currentPage: 1,
        itemsPerPage: 5,
      };
    }

    handleNext = () => {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage + 1,
      }));
    };

    handlePrevious = () => {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage - 1,
      }));
    };

    render() {
      const { items, currentPage, itemsPerPage } = this.state;

      const lastIndex = currentPage * itemsPerPage;
      const firstIndex = lastIndex - itemsPerPage;
      const currentItems = items.slice(firstIndex, lastIndex);

      const totalPages = Math.ceil(items.length / itemsPerPage);

      return (
        <div style={styles.container}>
          <h2>Pagination Example</h2>

          {/* List */}
          <ul>
            {currentItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>

          {/* Pagination Controls */}
          <div style={styles.controls}>
            <button
              onClick={this.handlePrevious}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={this.handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      );
    }
  }

  const styles = {
    container: {
      width: "300px",
      margin: "20px auto",
      textAlign: "center",
      fontFamily: "Arial",
    },
    controls: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "15px",
    },
  };

  export default PaginationComponent;
