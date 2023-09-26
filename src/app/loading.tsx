export default function Loading() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center min-h-full">
        <div
          className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <p className="text-base mt-2 text-gray-900">Loading...</p>
      </div>
    </>
  )
}
