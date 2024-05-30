
const ErrorComponent = ({ error }) => {
  return (
    <div className="border border-red-200 p-4">
      There is something wrong here
      {JSON.stringify(error)}
    </div>
  )
}

export default ErrorComponent;
