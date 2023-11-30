export const findChildrenWithType = (type, element) => {
  if (!element || typeof element !== "object") return [];

  if (Array.isArray(element)) {
    return element.flatMap((child) => findChildrenWithType(type, child));
  }

  if (element.type === type && "key" in element.props) {
    return { key: element.props.key, value: element.props.value };
  }

  return findChildrenWithType(type, element.children);
};
