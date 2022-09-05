export interface ErrorWithStatus extends Error {
  status: number;
}

export default function ErrorBase(status: number, message: string) {
  const error = new Error(message) as ErrorWithStatus;
  error.status = status;
  throw error;
}