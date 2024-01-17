// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

interface Request {
  params: {
    num: string;
  };
}

interface Response {
  send: (message: string) => void;
}

export default (req: Request, res: Response) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
