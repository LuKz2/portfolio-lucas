// Junta classes de forma condicional (equivalente enxuto ao clsx).
export function cx(...args) {
  return args.filter(Boolean).join(" ");
}
