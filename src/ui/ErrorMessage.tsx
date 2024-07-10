interface ErrorMessageProps {
    message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <p className='text-xs text-red-300 rounded-full ml-2 my-2'>{message}</p>
    );
}
