import React from "react";
import { SortContainer, SortLabel, SortSelect } from "./SortOptions.styled";

function SortOptions({ sortBy, setSortBy, order, setOrder }) {
  return (
    <SortContainer>
      <SortLabel htmlFor="sort-by">Sort by: </SortLabel>
      <SortSelect
        id="sort-by"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </SortSelect>

      <SortLabel htmlFor="order">Order: </SortLabel>
      <SortSelect
        id="order"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </SortSelect>
    </SortContainer>
  );
}

export default SortOptions;
