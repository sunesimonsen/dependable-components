export const findSelectables = (element) => {
  if (!element || typeof element !== "object") return [];

  if (Array.isArray(element)) {
    return element.flatMap((child) => findSelectables(child));
  }

  if (element.type?.isSelectable && "key" in element.props) {
    return { key: element.props.key, value: element.props.value };
  }

  return findSelectables(element.children);
};
