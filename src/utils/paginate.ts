export function paginate<T>(
  array: T[],
  page: number,
  itemsPerPage: number
): T[] {
  return array.slice(--page * itemsPerPage, (page + 1) * itemsPerPage);
}
