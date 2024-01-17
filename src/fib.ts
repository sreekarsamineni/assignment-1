// util function that computes the fibonacci numbers
export default function fibonacci(n: number): number {
  if (n < 0) {
    return -1; // or throw an error, depending on your requirements
  } else if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  return Number(fibonacci(n - 1)) + Number(fibonacci(n - 2));
}
