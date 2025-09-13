import React from "react";

// Define props for the generic List component
// - items: an array of any type T
// - renderItem: a function that decides how each item should be displayed
// - className: optional CSS class for styling
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
};

/** 
 * Generic List component
 * This component is reusable for any type of data (T).
 * Instead of hardcoding how items are displayed,
 * it uses a renderItem function provided by the parent.
 */
export function List<T>({ items, renderItem, className }: ListProps<T>) {
  // Render an unordered list (<ul>) where each item is rendered
  // according to the renderItem function passed as a prop.
  return <ul className={className}>{items.map(renderItem)}</ul>;
}
