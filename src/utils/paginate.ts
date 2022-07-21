export function paginate<T>(
  array: T[],
  numPag: number,
  cantPorPaginas: number
): T[] {
  return array.slice(--numPag * cantPorPaginas, (numPag + 1) * cantPorPaginas);
}
